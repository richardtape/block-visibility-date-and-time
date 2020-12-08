<?php

/**
 * Block Visibility Date and Time Add-On
 *
 * @package     BlockVisibilityUserRole
 * @author      Richard Tape
 * @copyright   2019 Richard Tape
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Block Visibility Date and Time Add-On
 * Plugin URI:  https://richardtape.com
 * Description: Schedule showing or hiding specific blocks.
 * Version:     1.0.0
 * Author:      Richard Tape
 * Author URI:  https://richardtape.com
 * Text Domain: block-visibility-date-and-time
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/block-visibility-date-and-time.php';
