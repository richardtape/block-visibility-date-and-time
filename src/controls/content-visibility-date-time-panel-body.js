import { PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { ContentVisibilityDateTimeControls }  from './content-visibility-date-time-controls';


function ContentVisibilityDateTimePanelBodyControl( { setAttributes, attributes } ) {

    let rules = attributes.contentVisibilityRules;

    return (
        <PanelBody
            title={ __( 'Date and Time', 'content-visibility-date-time' ) }
            initialOpen={ false }
            className="content-visibility-control-panel block-visibility-date-time-controls"
        >
            <PanelRow>
                <ContentVisibilityDateTimeControls rules={ rules } setAttributes={ setAttributes }  attributes={ attributes } />
            </PanelRow>
        </PanelBody>
    );

}

export default ContentVisibilityDateTimePanelBodyControl;