import { Fill, Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { addFilter } from '@wordpress/hooks';

import BlockVisibilityDateTimePanelBodyControl from './block-visibility-date-time-panel-body';

export function BlockVisibilityDateTimeControl( data ) {

    let { props } = { ...data };

    let rulesEnabled    = props.attributes.blockVisibilityRules.blockVisibilityRulesEnabled;
    let blockVisibility = props.attributes.hasOwnProperty( 'blockVisibility' );

    if ( ! rulesEnabled || ! blockVisibility ) {
        return (
            <Disabled><BlockVisibilityDateTimePanelBodyControl props={ props } /></Disabled>
        );
    }

    return (
        <BlockVisibilityDateTimePanelBodyControl props={ props } />
    );

}

/**
 * Render the <BlockVisibilityDateTimeControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the BlockVisibilityDateTimeControl component.
 */
function BlockVisibilityDateTimeFill() {
    return (
        <Fill name="block-visibility-extra-controls">
            {
                ( fillProps ) => {
                    return (
                        <BlockVisibilityDateTimeControl props={ fillProps } />
                    )
                }
            }
        </Fill>
    );

}

// Add our component to the Slot provided by BlockVisibilityControls
registerPlugin( 'block-visibility-03-date-time-fill', { render: BlockVisibilityDateTimeFill } );


// Register our visibility rule with the main plugin
addFilter( 'blockVisibility.defaultBlockVisibilityRules', 'block-visibility-date-time/block-visibility-rules', registerDateTimeBlockVisibilityRule );

function registerDateTimeBlockVisibilityRule( defaultRules ) {

    defaultRules.dateTime = {
        start: {},
        end: {}
    };

    return defaultRules;

}
