<?php

/**
 * Main loader file for Block Visibility Date and Time Add-on.
 *
 * @package BlockVisibilityDateAndTime
 */

namespace RichardTape\BlockVisibilityDateAndTime;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_editor_assets', 50 );

/**
 * Enqueue script and style assets used in the editor.
 *
 * @since 1.0.0
 */
function enqueue_editor_assets() { // phpcs:ignore

	if ( ! is_admin() ) {
		return;
	}

	$screens = array(
		'post',
		'page',
	);

	if ( ! in_array( get_current_screen()->id, array_values( $screens ), true ) ) {
		return;
	}

	wp_register_script(
		'block-visibility-date-and-time',
		plugins_url( '/build/index.js', dirname( __FILE__ ) ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-editor',
			'wp-plugins',
			'wp-edit-post',
		),
		filemtime( plugin_dir_path( __DIR__ ) . 'build/index.js' ),
		true
	);

	$block_visibility_date_and_time_args = array();

	wp_localize_script( 'block-visibility-date-and-time', 'BlockVisibilityDateAndTime', $block_visibility_date_and_time_args );

	wp_enqueue_script( 'block-visibility-date-and-time' );

	wp_enqueue_style( 'block-visibility-date-and-time-panel', plugins_url( 'build/editor.css', dirname( __FILE__ ) ) );

}//end enqueue_editor_assets()
