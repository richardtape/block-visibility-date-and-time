import { addFilter } from '@wordpress/hooks';

/**
 * Handle block attributes deprecation.
 * Changing the default value of start and end dateTime from {} to null.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
function dateTimeAttributesDeprecation(settings) {

    // return early if block does not have dateTime within contentVisibilityRules attribute.
    if(! settings.attributes.contentVisibilityRules.default.dateTime) {
        return settings;
    }

    const deprecatedObj = {
        attributes: {
            ...settings.attributes,
            contentVisibilityRules: {
                ...settings.attributes.contentVisibilityRules,
                default: {
                    ...settings.attributes.contentVisibilityRules.default,
                    dateTime: {
                        end: {},
                        start: {}
                    }
                }
            }
        },
        supports: settings.supports,
        save: settings.save,
        migrate: ( attributes ) => {
            return {
                ...attributes,
                contentVisibilityRules: {
                    ...attributes.contentVisibilityRules,
                    dateTime: {
                        end: null,
                        start: null
                    }
                }
            };
        },
        isEligible: ( attributes ) => {
            return attributes
            && attributes.contentVisibilityRules
            && attributes.contentVisibilityRules.dateTime
            && attributes.contentVisibilityRules.dateTime.start
            && Object.getPrototypeOf(attributes.contentVisibilityRules.dateTime.start) === Object.prototype
            && Object.keys(attributes.contentVisibilityRules.dateTime.start).length === 0;
        }

    };

    settings.deprecated = settings.deprecated && Array.isArray(settings.deprecated) ? [
        ...settings.deprecated,
        deprecatedObj
    ] : [
        deprecatedObj
    ];

    return settings;

}// end dateTimeAttributesDeprecation()

addFilter( 'blocks.registerBlockType', 'content-visibility/dateTimeAttributesDeprecation', dateTimeAttributesDeprecation, 99 );