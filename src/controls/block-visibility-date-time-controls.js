import { DateTimePicker, HorizontalRule } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const BlockVisibilityDateTimeControls = ( data ) => {

    let { props } = { ...data };

    const is12HourTime = true;

    let persistedData = props.attributes.blockVisibilityRules.dateTime;

    let thisStartDate = persistedData.start;
    let thisEndDate = persistedData.end;

    const ScheduleStartDateTime = () => (
        <DateTimePicker
            currentDate={ thisStartDate }
            onChange={ ( date ) => {

                props.setAttributes( {
                    blockVisibilityRules: {
                        ...props.attributes.blockVisibilityRules,
                        dateTime: {
                            ...props.attributes.blockVisibilityRules.dateTime,
                            'start': date
                        }
                    },
                } );

            } }
            is12Hour={ is12HourTime }
        />
    );

    const ScheduleEndDateTime = () => (
        <DateTimePicker
            currentDate={ thisEndDate }
            onChange={ ( date ) => {

                props.setAttributes( {
                    blockVisibilityRules: {
                        ...props.attributes.blockVisibilityRules,
                        dateTime: {
                            ...props.attributes.blockVisibilityRules.dateTime,
                            'end': date
                        }
                    },
                } );

            } }
            is12Hour={ is12HourTime }
        />
    );

    const BlockVisibilityScheduleControls = () => (
        <div className="block-visibility-schedule-controls">
            <h2>{ __( 'Start Date and Time', 'block-visibility-date-and-time' ) }</h2>
            <ScheduleStartDateTime />
            <HorizontalRule />
            <h2>{ __( 'End Date and Time', 'block-visibility-date-and-time' ) }</h2>
            <ScheduleEndDateTime />
        </div>
    );

	return (
        <BlockVisibilityScheduleControls />
	);

};
