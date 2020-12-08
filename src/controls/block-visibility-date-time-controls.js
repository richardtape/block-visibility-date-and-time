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
            <h2>{__('Start Date and Time', 'block-visibility-date-and-time')}</h2>
            <div className="components-dropdown">
                <Button isLink={true} icon="calendar-alt" onClick={() => setOpenDatePopupForStart(!openDatePopupForStart)}>
                    {(rules.dateTime.start && typeof rules.dateTime.start === 'string') ? dateI18n('F j, Y g:i a', rules.dateTime.start) : __("Pick Start Date and Time")}
                </Button>
                {openDatePopupForStart && (
                    <Popover position="bottom" onClose={setOpenDatePopupForStart.bind(null, false)}>
                        <ScheduleStartDateTime />
                    </Popover>
                )}
                <Button isLink={true} onClick={() => { clearDateAndTime('start', rules); }}>x</Button>
            </div>
            <h2>{__('End Date and Time', 'block-visibility-date-and-time')}</h2>
            <div className="components-dropdown">
                <Button isLink={true} icon="calendar-alt" onClick={() => setOpenDatePopupForEnd(!openDatePopupForEnd)}>
                    {(rules.dateTime.end && typeof rules.dateTime.end === 'string') ? dateI18n('F j, Y g:i a', rules.dateTime.end) : __("Pick End Date and Time")}
                </Button>
                {openDatePopupForEnd && (
                    <Popover position="bottom" onClose={setOpenDatePopupForEnd.bind(null, false)}>
                        <ScheduleEndDateTime />
                    </Popover>
                )}
                <Button isLink={true} onClick={() => { clearDateAndTime('end', rules); }}>x</Button>
            </div>
        </div>
    );

    return (
        <BlockVisibilityScheduleControls />
    );

};
