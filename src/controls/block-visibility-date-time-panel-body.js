import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { BlockVisibilityDateTimeControls }  from './block-visibility-date-time-controls';


function BlockVisibilityDateTimePanelBodyControl( { setAttributes, attributes } ) {

    let rules = attributes.blockVisibilityRules;

    return (
        <PanelBody
            title={ __( 'Date and Time', 'block-visibility-date-time' ) }
            initialOpen={ false }
            className="block-visibility-control-panel block-visibility-date-time-controls"
        >
            <PanelRow>
                <BlockVisibilityDateTimeControls rules={ rules } setAttributes={ setAttributes }  attributes={ attributes } />
            </PanelRow>
        </PanelBody>
    );

}

export default BlockVisibilityDateTimePanelBodyControl;