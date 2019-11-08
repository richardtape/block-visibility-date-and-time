import { PanelBody, PanelRow } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { BlockVisibilityDateTimeControls }  from './block-visibility-date-time-controls';

function BlockVisibilityDateTimePanelBodyControl( { instanceId, props } ) {

    const id = `bv-date-time-${ instanceId }`;

    return (
        <PanelBody
            title={ __( 'Date and Time', 'block-visibility-date-time' ) }
            initialOpen={ false }
            className="block-visibility-control-panel block-visibility-date-time-controls"
        >
            <PanelRow>
                <BlockVisibilityDateTimeControls props={ props } />
            </PanelRow>
        </PanelBody>
    );

}

export default withInstanceId( BlockVisibilityDateTimePanelBodyControl );