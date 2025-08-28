<?php
/**
 * Title: footer
 * Slug: unstruction/footer
 */
?>
<!-- wp:group {"className":"copyright","layout":{"type":"constrained"}} -->
<div class="wp-block-group copyright"><!-- wp:html -->
<small><sl-icon-button href=https://github.com/DigitalMalayaliStudio/unstruction-wordpress-theme label=Settings name=github style=font-size:1.2rem target=_blank></sl-icon-button></small>
<!-- /wp:html -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"top":"0","bottom":"0"}}}} -->
<p style="margin-top:0;margin-bottom:0"><small>Unstruction <?php echo wp_get_theme()->get( 'Version' ); ?> by <a href="http://studio.digitalmalayali.in/">Digital Malayali Studio</a><br>
&copy; <?php echo date('Y') . ' ' . get_bloginfo('name'); ?></small>
</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->