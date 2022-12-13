<?php
/**
 * Content Visibility Date and Time
 *
 * @package     ContentVisibilityDateAndTime
 * @author      Richard Tape
 * @copyright   2021 Richard Tape
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Content Visibility Date and Time
 * Plugin URI:  https://richardtape.com/content-visibility/
 * Description: [Content Visibility Add-On] Schedule showing or hiding specific content blocks.
 * Version:     0.1.3
 * Author:      Richard Tape
 * Author URI:  https://richardtape.com
 * Text Domain: content-visibility-date-and-time
 * License:     GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/content-visibility-date-and-time.php';
