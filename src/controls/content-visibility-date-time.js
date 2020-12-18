import { Fill, Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { addFilter } from '@wordpress/hooks';

import ContentVisibilityDateTimePanelBodyControl from './content-visibility-date-time-panel-body';

export function ContentVisibilityDateTimeControl( data ) {

    let rulesEnabled    = data.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
    let contentVisibility = data.attributes.hasOwnProperty( 'contentVisibility' );

    if ( ! rulesEnabled || ! contentVisibility ) {
        return (
            <Disabled><ContentVisibilityDateTimePanelBodyControl setAttributes={ data.setAttributes } attributes={ data.attributes } /></Disabled>
        );
    }

    return (
        <ContentVisibilityDateTimePanelBodyControl setAttributes={ data.setAttributes } attributes={ data.attributes } />
    );

}

/**
 * Render the <ContentVisibilityDateTimeControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilityDateTimeControl component.
 */
function ContentVisibilityDateTimeFill() {
    return (
        <Fill name="content-visibility-extra-controls">
            {
                ( fillProps ) => {
                    return (
                        <ContentVisibilityDateTimeControl setAttributes={ fillProps.setAttributes } attributes={ fillProps.attributes } />
                    )
                }
            }
        </Fill>
    );

}

// Add our component to the Slot provided by BlockVisibilityControls
registerPlugin( 'content-visibility-03-date-time-fill', { render: ContentVisibilityDateTimeFill } );


// Register our visibility rule with the main plugin
addFilter( 'contentVisibility.defaultContentVisibilityRules', 'content-visibility-date-time/block-visibility-rules', registerDateTimeContentVisibilityRule );

function registerDateTimeContentVisibilityRule( defaultRules ) {

    defaultRules.dateTime = {
        start: {},
        end: {}
    };

    return defaultRules;

}
