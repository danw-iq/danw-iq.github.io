<?php

    // Theme Scripts & Styles
    function theme_scripts() {
        wp_enqueue_style( 'google-fonts', 'http://fonts.googleapis.com/css?family=Open+Sans:300italic,700italic,400,300,700' );
        wp_enqueue_script( 'style', get_template_directory_uri() . '/js/style.js');
        wp_enqueue_style( 'three_column', get_template_directory_uri() . '/stylesheets/three_column.css' );
        wp_enqueue_style( 'two_column', get_template_directory_uri() . '/stylesheets/two_column.css' );
        wp_enqueue_script( 'all_nosearch', get_template_directory_uri() . '/js/all_nosearch.js');

    }
    add_action( 'wp_enqueue_scripts', 'theme_scripts' );
    
?>