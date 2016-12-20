<!DOCTYPE html>

<html lang="en">
<head>
	
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>">

	<meta name="viewport" content="width=device-width">
	
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <title> @TODO TITLE | iQmetrix Developer Portal </title>

	<?php wp_head(); ?>
	
</head>

<body <?php body_class(); ?>>

<header class="header">
	
    <?php get_template_part('partials/top_nav'); ?>

    <?php get_template_part('partials/breadcrumbs'); ?>

    <div class="title"
      <h1>API Documentation</h1>
      <p>In depth reference documentation for iQmetrix API's.</p>
    </div>
    <a href="#" id="nav-button">
      <span>
        NAV
        <img src="http://danw-iq.github.io/slate-old/images/navbar.png" alt="Navbar" /><!-- @TODO replace this with real image-->
      </span>
    </a>

</header><!-- end header -->