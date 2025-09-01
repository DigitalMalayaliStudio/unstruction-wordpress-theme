<?php

// Shoelace and theme scripts and styles

function unstruction_enqueue_styles_scripts()
{
	wp_enqueue_style(
		'shoelace-style',
		get_parent_theme_file_uri('assets/shoelace/shoelace.min.css'),
		array(),
		wp_get_theme()->get('Version')
	);

	wp_enqueue_script(
		'shoelace-script',
		get_theme_file_uri('assets/shoelace/shoelace.js'),
		[],
		wp_get_theme()->get('Version')
	);

	wp_enqueue_script(
		'unstruction-script',
		get_theme_file_uri('assets/js/script.js'),
		[],
		wp_get_theme()->get('Version'),
		true
	);

}

add_action('wp_enqueue_scripts', 'unstruction_enqueue_styles_scripts');

// Block variations

function unstruction_enqueue_block_variations()
{
	wp_enqueue_script(
		'unstruction-block-variations',
		get_theme_file_uri('assets/js/block-variations.js'),
		array(
			'wp-blocks',
			'wp-dom-ready',
			'wp-i18n',
			'wp-element',
			'wp-primitives'
		),
		wp_get_theme()->get('Version'),
		true
	);
}

add_action('enqueue_block_editor_assets', 'unstruction_enqueue_block_variations');

// Custom block category

function unstruction_block_category($categories)
{

	array_unshift($categories, array(
		'slug'	=> 'unstruction-blocks',
		'title' => 'Unstruction',
		'icon'  => null,
	));

	return $categories;
}

add_filter('block_categories_all', 'unstruction_block_category', 10, 2);
