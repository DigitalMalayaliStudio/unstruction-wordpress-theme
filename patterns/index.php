<?php
/**
 * Title: index
 * Slug: unstruction/index
 * Inserter: no
 */
?>
<!-- wp:group {"tagName":"sl-card","metadata":{"name":"card"},"className":"card-overview","layout":{"type":"flex","orientation":"vertical"}} -->
<sl-card class="wp-block-group card-overview"><!-- wp:image {"width":"350px","sizeSlug":"full","linkDestination":"none","className":"card-img"} -->
<figure class="wp-block-image size-full is-resized card-img"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/unstruction.webp" alt="<?php esc_attr_e('Unstruction', 'unstruction');?>" style="width:350px"/></figure>
<!-- /wp:image -->

<!-- wp:site-title {"level":0,"isLink":false,"style":{"typography":{"fontWeight":700}}} /-->

<!-- wp:paragraph -->
<p><?php esc_html_e('This website is under construction.', 'unstruction');?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><?php /* Translators: 1. is the start of a 'sl-badge' HTML element, 2. is the end of a 'sl-badge' HTML element, 3. is the start of a 'sl-badge' HTML element, 4. is the end of a 'sl-badge' HTML element, 5. is the start of a 'sl-badge' HTML element, 6. is the end of a 'sl-badge' HTML element, 7. is the start of a 'sl-badge' HTML element, 8. is the end of a 'sl-badge' HTML element */ 
echo sprintf( esc_html__( 'Please check back later in %1$s0%2$s days, %3$s0%4$s hours, %5$s0%6$s minutes and %7$s0%8$s seconds!', 'unstruction' ), '<sl-badge class="days" pill pulse>', '</sl-badge>', '<sl-badge class="hr" pill pulse>', '</sl-badge>', '<sl-badge class="min" pill pulse>', '</sl-badge>', '<sl-badge class="sec" pill pulse>', '</sl-badge>' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><?php /* Translators: 1. is the start of a 'small' HTML element, 2. is the end of a 'small' HTML element */ 
echo sprintf( esc_html__( '%1$sFeel free to reach out to us.%2$s', 'unstruction' ), '<small>', '</small>' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:group {"metadata":{"name":"contact"},"className":"footer","layout":{"type":"constrained","justifyContent":"left"}} -->
<div class="wp-block-group footer"><!-- wp:html -->
<sl-button-group label=Alignment><sl-button circle href=tel:123456789 size=medium><sl-icon label=Phone name=telephone></sl-icon></sl-button><sl-button circle href=mailto:mail@example.com size=medium><sl-icon label=Mail name=envelope></sl-icon></sl-button><sl-button circle href=https://wa.me/91123456789 size=medium><sl-icon label=WhatsApp name=whatsapp></sl-icon></sl-button><sl-button circle href=https://maps.google.com size=medium target=_blank><sl-icon label=Map name=geo-alt></sl-icon></sl-button></sl-button-group>
<!-- /wp:html --></div>
<!-- /wp:group --></sl-card>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->