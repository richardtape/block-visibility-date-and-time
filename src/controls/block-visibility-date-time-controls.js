import { DateTimePicker, TabPanel } from '@wordpress/components';

export const BlockVisibilityDateTimeControls = ( data ) => {

    let { props } = { ...data };

    const is12HourTime = true;

    let persistedData = props.attributes.blockVisibilityRules.dateTime;

    let thisStartDate = persistedData.start;
    let thisEndDate = persistedData.end;

    const onSelect = ( tabName ) => {
        console.log( 'Selecting tab', tabName );
    };

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

                // Ensure the 'end' tab is still active as the DateTime picker seems to refresh parent components
                // This doesn't work.
                // let endTab = document.getElementsByClassName('tab-schedule-end')[0];
                // endTab.click();

            } }
            is12Hour={ is12HourTime }
        />
    );

    const BlockVisibilityScheduleTabs = () => (
        <TabPanel className="block-visibility-schedule-tabs"
            activeClass="active-tab"
            onSelect={ onSelect }
            tabs={ [
                {
                    name: 'scheduleStart',
                    title: 'Start',
                    className: 'tab-schedule-start',
                },
                {
                    name: 'scheduleEnd',
                    title: 'Stop',
                    className: 'tab-schedule-end',
                },
            ] }>
            {
                ( tab ) => {

                    switch  ( tab.name ) {
                        case 'scheduleStart':
                            return (
                                <ScheduleStartDateTime />
                            );
                        break;

                        case 'scheduleEnd':
                            return (
                                <ScheduleEndDateTime />
                            );
                        break;
                    }

                }
            }
        </TabPanel>
    );

	return (
        <BlockVisibilityScheduleTabs />
	);

};
