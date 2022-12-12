import { DateTimePicker, Popover, Button, Icon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { dateI18n } from '@wordpress/date';
import { __ } from '@wordpress/i18n';


export const ContentVisibilityDateTimeControls = ({ rules, setAttributes, attributes }) => {

    const [ openDatePopupForStart, setOpenDatePopupForStart ] = useState( false );
    const [ openDatePopupForEnd, setOpenDatePopupForEnd ]     = useState( false );

    /**
     * Clear the date and time - resets to not having a value.
     *
     * @param {*} startOrEnd Are we resetting the start or end date.
     * @param {*} rules The current ruleset for this block.
     */
    const clearDateAndTime = ( startOrEnd, rules ) => {

        setAttributes( {
            contentVisibilityRules: {
                ...rules,
                dateTime: {
                    ...rules.dateTime,
                    [startOrEnd]: null
                }
            },
        } );

    };

    /**
     * DateTimePicker for the Start date/time.
     */
    const ScheduleStartDateTime = () => (
        <DateTimePicker
            currentDate={rules.dateTime.start}
            onChange={(date) => {

                setAttributes( {
                    contentVisibilityRules: {
                        ...rules,
                        dateTime: {
                            ...rules.dateTime,
                            'start': date
                        }
                    },
                });

                setOpenDatePopupForStart( false );

            } }
            is12Hour={false}
        />
    );

    /**
     * DateTimePicker for the End date/time.
     */
    const ScheduleEndDateTime = () => (
        <DateTimePicker
            currentDate={rules.dateTime.end}
            onChange={ (date) => {
                setAttributes({
                    contentVisibilityRules: {
                        ...rules,
                        dateTime: {
                            ...rules.dateTime,
                            'end': date
                        }
                    },
                });

                setOpenDatePopupForEnd( false );

            } }
            is12Hour={false}
        />
    );

    const ClearCurrentDateTimeIcon = () => (
        <Icon
            icon={ () => (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            ) }
        />
    );

    /**
     * Output the Scheduling controls
     */
    const ContentVisibilityScheduleControls = () => (

        <div className="content-visibility-schedule-controls">

            <div className="components-dropdown">
                <Button isLink={true} className="content-visibility-set-date-time" icon="calendar-alt" onClick={ () => setOpenDatePopupForStart( ! openDatePopupForStart ) }>
                    { ( rules.dateTime.start && typeof rules.dateTime.start === 'string' ) ? dateI18n( 'D M j Y, G:i', rules.dateTime.start ) : __( "Set Start Date/Time" ) }
                </Button>
                {openDatePopupForStart && (
                    <Popover position="middle left" className="content-visibility-picker-popover content-visibility-picker-popover-start" onClose={setOpenDatePopupForStart.bind( null, false )}>
                        <ScheduleStartDateTime />
                    </Popover>
                )}

                { ( rules.dateTime.start && typeof rules.dateTime.start === 'string' ) && (
                    <Button isLink={true} label="Clear date and time" className="content-visibility-clear-date-time" onClick={() => { clearDateAndTime('start', rules); }}>
                        <ClearCurrentDateTimeIcon />
                    </Button>
                ) }
                
            </div>

            <div className="components-dropdown">
                <Button isLink={true} className="content-visibility-set-date-time" icon="calendar-alt" onClick={ () => setOpenDatePopupForEnd( ! openDatePopupForEnd ) }>
                    { ( rules.dateTime.end && typeof rules.dateTime.end === 'string' ) ? dateI18n( 'D M j Y, G:i', rules.dateTime.end ) : __( "Set End Date/Time" ) }
                </Button>
                {openDatePopupForEnd && (
                    <Popover position="middle left" className="content-visibility-picker-popover content-visibility-picker-popover-end" onClose={ setOpenDatePopupForEnd.bind( null, false ) }>
                        <ScheduleEndDateTime />
                    </Popover>
                )}

                { ( rules.dateTime.end && typeof rules.dateTime.end === 'string' ) && (
                    <Button isLink={true} label="Clear date and time" className="content-visibility-clear-date-time" onClick={() => { clearDateAndTime('end', rules); }}>
                        <ClearCurrentDateTimeIcon />
                    </Button>
                ) }
            </div>

            <p className="date-time-help-intro content-visibility-help-text">{ __( 'Set start and/or end dates for when this block will be ' + attributes.contentVisibility + '. Not selecting either date will mean this block is ' + attributes.contentVisibility + ' at all times.' ) }</p>

        </div>
    );

    return (
        <ContentVisibilityScheduleControls />
    );

};
