<?php

/**
 * Main loader file for Content Visibility Date and Time Add-on.
 *
 * @package ContentVisibilityDateAndTime
 */

namespace RichardTape\ContentVisibilityDateAndTime;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Use the content_visibility_enqueue_editor_assets action to load our assets so we know we're loading when and where we should be.
add_action( 'content_visibility_enqueue_editor_assets', __NAMESPACE__ . '\\enqueue_editor_assets', 50 );

/**
 * Enqueue script and style assets used in the editor.
 *
 * @since 1.0.0
 */
function enqueue_editor_assets() { // phpcs:ignore
	
	$prereqs = array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-plugins',
		'wp-dom-ready',
	);

	// The 5.8 widgets screen requires a special editor?! Feelsbadman.
	$CVEditor = new \RichardTape\ContentVisibility\Editor();
	if ( $CVEditor->on_widgets_screen() ) {
		$prereqs[] = 'wp-edit-widgets';
	} else {
		$prereqs[] = 'wp-editor';
	}

	wp_register_script(
		'content-visibility-date-and-time',
		plugins_url( '/build/index.js', dirname( __FILE__ ) ),
		$prereqs,
		filemtime( plugin_dir_path( __DIR__ ) . 'build/index.js' ),
		true
	);

	$block_visibility_date_and_time_args = array();

	wp_localize_script( 'content-visibility-date-and-time', 'BlockVisibilityDateAndTime', $block_visibility_date_and_time_args );

	wp_enqueue_script( 'content-visibility-date-and-time' );

	wp_enqueue_style( 'content-visibility-date-and-time-panel', plugins_url( 'build/index.css', dirname( __FILE__ ) ) );

}//end enqueue_editor_assets()

add_filter( 'content_visibility_rule_types_and_callbacks', __NAMESPACE__ . '\\add_rule_type_callback' );

/**
 * Register our rule type to enable us to provide the logic callback.
 *
 * @param array $default_rule_types_and_callbacks Existing rules and callbacks.
 * @return array modified rule types and callbacks with ours added.
 */
function add_rule_type_callback( $default_rule_types_and_callbacks ) {

	$default_rule_types_and_callbacks['dateTime'] = __NAMESPACE__ . '\rule_logic_date_time';

	return $default_rule_types_and_callbacks;

}//end add_rule_type_callback()

/**
 * Rule logic for the Date and Time component.
 *
 * @param array  $rule_value Which roles are selected for this block.
 * @param string $block_visibility Whether the block should be shown or hidden if the rule is true.
 * @param array  $block The full block.
 * @return bool  false if the block is to be removed. true if the block is to be potentially kept.
 */
function rule_logic_date_time( $rule_value, $block_visibility, $block ) {

	// Get the start and end dates. Format: 2020-06-23T11:34:00 .
	$start_date = ( isset( $rule_value['start'] ) && ! empty( $rule_value['start'] ) ) ? $rule_value['start'] : false;
	$end_date   = ( isset( $rule_value['end'] ) && ! empty( $rule_value['end'] ) ) ? $rule_value['end'] : false;

	// If both are false, return true to allow other blocks to determine the visibility. This is an edge case.
	if ( false === $start_date && false === $end_date ) {
		return true;
	}

	// The datetimes are server time. So we need to ensure that we are only deciding rules based on server time.
	// The date format.
	$date_format = get_date_format();

	// Server time right now. Uses wp_date() to allow folks to set a different time zone in their settings.
	$now = apply_filters( 'block_visibility_rule_logic_date_time_now', wp_date( $date_format ), $date_format, $rule_value, $block_visibility, $block );

	// Now logic tests to see if the shown/hidden logic should be applied to the current block.
	// Test If the time RIGHT NOW is between this block's start date and end date.
	$now_is_between_block_start_and_end_dates = date_is_between_start_and_end_dates( $now, $start_date, $end_date );

	switch ( $block_visibility ) {
		case 'shown':
			return (bool) $now_is_between_block_start_and_end_dates;
		case 'hidden':
			return (bool) ! $now_is_between_block_start_and_end_dates;
	}

}//end rule_logic_date_time()

/**
 * Determine whether the passed $date is between the $start date and the $end date.
 *
 * @param string $date The date() to test if it is between $start and $end. (i.e. this is "now").
 * @param string $start The start date() of the testing period.
 * @param string $end The end date() of the testing period.
 * @return bool true if $date is between $start and $end dates. False otherwise.
 */
function date_is_between_start_and_end_dates( $date, $start, $end ) {

	$date_format = get_date_format();

	/*
		$start or $end can be false. This means they haven't been set, which is fine.
		i.e.
		you may want to display a block from whenever the post is published UNTIL
		a certain time. Which means you wouldn't set a start time.
		OR
		you may want to display a block only AFTER a given time, forever. Which means
		you wouldn't set an end time.

		if there is no start time, we have to test if the current time is less than the
		end time.

		if there is no end time, we have to test if the start time is before the current time.
	*/

	if ( false === $start ) {
		$end = date( $date_format, strtotime( $end ) );
		return (bool) ( $date < $end );
	}

	if ( false === $end ) {
		$start = date( $date_format, strtotime( $start ) );
		return (bool) ( $start < $date );
	}

	// We have both set, so test if the current time is between the start and end time.
	$start = date( $date_format, strtotime( $start ) );
	$end   = date( $date_format, strtotime( $end ) );

	return (bool) ( $start < $date && $end > $date );

}//end date_is_between_start_and_end_dates()

/**
 * Return the filtered date format.
 *
 * @return string
 */
function get_date_format() {

	return esc_html( apply_filters( 'block_visibility_rule_logic_date_time_date_format', 'Y-m-d\TH:i:s' ) );

}//end get_date_format()
