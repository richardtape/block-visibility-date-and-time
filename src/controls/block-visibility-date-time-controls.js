import { DateTimePicker, Popover, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { dateI18n } from '@wordpress/date';
import { __ } from '@wordpress/i18n';


export const BlockVisibilityDateTimeControls = ({ rules, setAttributes, attributes }) => {

    const [ openDatePopupForStart, setOpenDatePopupForStart ] = useState( false );
    const [ openDatePopupForEnd, setOpenDatePopupForEnd ]     = useState( false );

    const clearDateAndTime = ( startOrEnd, rules ) => {

        setAttributes( {
            blockVisibilityRules: {
                ...rules,
                dateTime: {
                    ...rules.dateTime,
                    [startOrEnd]: {}
                }
            },
        } );

    };

    const ScheduleStartDateTime = () => (
        <DateTimePicker
            currentDate={rules.dateTime.start}
            onChange={(date) => {

                setAttributes( {
                    blockVisibilityRules: {
                        ...rules,
                        dateTime: {
                            ...rules.dateTime,
                            'start': date
                        }
                    },
                });

                setOpenDatePopupForStart( false );

            } }
            is12Hour={true}
        />
    );

    const ScheduleEndDateTime = () => (
        <DateTimePicker
            currentDate={rules.dateTime.end}
            onChange={ (date) => {
                setAttributes({
                    blockVisibilityRules: {
                        ...rules,
                        dateTime: {
                            ...rules.dateTime,
                            'end': date
                        }
                    },
                });

                setOpenDatePopupForEnd( false );

            } }
            is12Hour={true}
        />
    );

    const BlockVisibilityScheduleControls = () => (

        <div className="block-visibility-schedule-controls">

            <div className="components-dropdown">
                <Button isLink={true} className="block-visibility-set-date-time" icon="calendar-alt" onClick={() => setOpenDatePopupForStart(!openDatePopupForStart)}>
                    {(rules.dateTime.start && typeof rules.dateTime.start === 'string') ? dateI18n('D M j Y g:i a', rules.dateTime.start) : __("Set Start Date/Time")}
                </Button>
                {openDatePopupForStart && (
                    <Popover position="bottom" onClose={setOpenDatePopupForStart.bind(null, false)}>
                        <ScheduleStartDateTime />
                    </Popover>
                )}

                { (rules.dateTime.start && typeof rules.dateTime.start === 'string') && (
                    <Button isLink={true} label="Clear date and time" className="block-visibility-clear-date-time" onClick={() => { clearDateAndTime('start', rules); }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></Button>
                ) }
                
            </div>

            <div className="components-dropdown">
                <Button isLink={true} className="block-visibility-set-date-time" icon="calendar-alt" onClick={() => setOpenDatePopupForEnd(!openDatePopupForEnd)}>
                    {(rules.dateTime.end && typeof rules.dateTime.end === 'string') ? dateI18n('D M j Y g:i a', rules.dateTime.end) : __("Set End Date/Time")}
                </Button>
                {openDatePopupForEnd && (
                    <Popover position="bottom" onClose={setOpenDatePopupForEnd.bind(null, false)}>
                        <ScheduleEndDateTime />
                    </Popover>
                )}

                { ( rules.dateTime.end && typeof rules.dateTime.end === 'string' ) && (
                    <Button isLink={true} label="Clear date and time" className="block-visibility-clear-date-time" onClick={() => { clearDateAndTime('end', rules); }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></Button>
                ) }
            </div>

        </div>
    );

    return (
        <BlockVisibilityScheduleControls />
    );

};
