const { registerBlockVariation } = wp.blocks;
const { __ } = wp.i18n;
const construction = wp.element.createElement(
	wp.primitives.SVG,
	{ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
	wp.element.createElement(
		wp.primitives.Path,
		{
			d: "M20.919 13.176c.048-.384.084-.768.084-1.176 0-.408-.036-.792-.084-1.176l2.532-1.98a.605.605 0 0 0 .144-.768l-2.4-4.152a.603.603 0 0 0-.732-.264l-2.988 1.2a8.767 8.767 0 0 0-2.028-1.176L14.99.504A.585.585 0 0 0 14.403 0h-4.8c-.3 0-.552.216-.588.504l-.456 3.18A9.22 9.22 0 0 0 6.53 4.86l-2.988-1.2a.585.585 0 0 0-.732.264L.41 8.076a.592.592 0 0 0 .144.768l2.532 1.98c-.048.384-.084.78-.084 1.176 0 .396.036.792.084 1.176l-2.532 1.98a.605.605 0 0 0-.144.768l2.4 4.152c.144.264.468.36.732.264l2.988-1.2c.624.48 1.296.876 2.028 1.176l.456 3.18a.585.585 0 0 0 .588.504h4.8c.3 0 .552-.216.588-.504l.456-3.18a9.22 9.22 0 0 0 2.028-1.176l2.988 1.2c.276.108.588 0 .732-.264l2.4-4.152a.605.605 0 0 0-.144-.768l-2.532-1.98ZM12.003 6.27a5.733 5.733 0 0 1 5.73 5.73 5.733 5.733 0 0 1-5.73 5.73A5.733 5.733 0 0 1 6.273 12a5.733 5.733 0 0 1 5.73-5.73Zm0 9.93a4.205 4.205 0 0 1-4.2-4.2c0-2.316 1.884-4.2 4.2-4.2 2.316 0 4.2 1.884 4.2 4.2 0 2.316-1.884 4.2-4.2 4.2Z",
		}
	)
);
const maintenance = wp.element.createElement(
	wp.primitives.SVG,
	{ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
	wp.element.createElement(
		wp.primitives.Path,
		{
			d: "M7.648 0a7.648 7.648 0 0 1 7.32 9.87l7.976 7.975a3.605 3.605 0 0 1-5.099 5.099L9.87 14.968A7.648 7.648 0 0 1 .364 5.311L3.98 8.923l3.586-1.195.16-.16 1.196-3.582L5.3.367A7.642 7.642 0 0 1 7.648 0",
		}
	)
);

// Under construction card block Variation

registerBlockVariation('core/group', {
	name: 'unstruction/construction',
	title: __('Construction', 'unstruction'),
	category: 'unstruction-blocks',
	description: 'Unstruction card to show an under-construction page.',
	icon: construction,
	keywords: ['construction', 'under construction', 'card'],
	attributes: {
		layout: {
			type: 'flex',
			orientation: 'vertical',
		},
		className: 'card-overview',
		tagName: 'sl-card',
		metadata: {
			name: 'card',
		}
	},
	example: {
		attributes: {
			className: 'card-overview',
		},
		innerBlocks: [
			{
				name: 'core/image',
				attributes: {
					url: 'https://digitalmalayalistudio.github.io/unstruction-jekyll-theme/assets/preview.webp',
					sizeSlug: 'medium',
				},
			},
			{
				name: 'core/site-title',
				attributes: {
					textAlign: 'left',
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: 'This website is under construction.',
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: 'Please check back later in <sl-badge class="days" pill pulse>0</sl-badge> days, <sl-badge class="hr" pill pulse>0</sl-badge> hours, <sl-badge class="min" pill pulse>0</sl-badge> minutes and <sl-badge class="sec" pill pulse>0</sl-badge> seconds!',
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: '<small>Feel free to reach out to us.</small>',
				},
			},
			{
				name: 'core/html',
				attributes: {
					content: '☎ 📧 📞 📍',
				},
			},
		],
	},
	innerBlocks: [
		[
			'core/image',
			{
				width: '350px',
				className: 'card-img',
			}
		],
		[
			'core/site-title',
			{
				isLink: false,
				level: 0,
				style: {
					typography: {
						fontWeight: 700
					},
				},
			}
		],
		[
			'core/paragraph',
			{
				content: 'This website is under construction.'
			}
		],
		[
			'core/paragraph',
			{
				content: 'Please check back later in <sl-badge class="days" pill pulse>0</sl-badge> days, <sl-badge class="hr" pill pulse>0</sl-badge> hours, <sl-badge class="min" pill pulse>0</sl-badge> minutes and <sl-badge class="sec" pill pulse>0</sl-badge> seconds!'
			}
		],
		[
			'core/paragraph',
			{
				content: '<small>Feel free to reach out to us.</small>'
			}
		],
		[
			'core/group',
			{
				className: 'footer',
				layout: {
					type: 'constrained',
					justifyContent: 'left'
				},
				metadata: {
					name: 'contact',
				}
			},
			[
				[
					'core/html',
					{
						content: '<sl-button-group label=Alignment><sl-button circle href=tel:123456789 size=medium><sl-icon label=Phone name=telephone></sl-icon></sl-button><sl-button circle href=mailto:mail@example.com size=medium><sl-icon label=Mail name=envelope></sl-icon></sl-button><sl-button circle href=https://wa.me/91123456789 size=medium><sl-icon label=WhatsApp name=whatsapp></sl-icon></sl-button><sl-button circle href=https://maps.google.com size=medium target=_blank><sl-icon label=Map name=geo-alt></sl-icon></sl-button></sl-button-group>'
					}
				]
			],
		],
	],
	scope: ['inserter'],
	isActive: (blockAttributes) =>
		blockAttributes.layout?.type === 'flex' &&
		blockAttributes.layout?.orientation === 'vertical',
});

// Under maintenance card block Variation

registerBlockVariation('core/group', {
	name: 'unstruction/maintenance',
	title: __('Maintenance', 'unstruction'),
	category: 'unstruction-blocks',
	description: 'Unstruction card to show an under-maintenance page.',
	icon: maintenance,
	keywords: ['maintenance', 'under maintenance', 'card'],
	attributes: {
		layout: {
			type: 'flex',
			orientation: 'vertical',
		},
		className: 'card-overview',
		tagName: 'sl-card',
		metadata: {
			name: 'card',
		}
	},
	example: {
		attributes: {
			className: 'card-overview',
		},
		innerBlocks: [
			{
				name: 'core/image',
				attributes: {
					url: 'https://digitalmalayalistudio.github.io/unstruction-jekyll-theme/assets/preview.webp',
					sizeSlug: 'medium',
				},
			},
			{
				name: 'core/site-title',
				attributes: {
					textAlign: 'left',
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: 'This website is undergoing maintenance.',
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: 'Kindly check back later in <sl-badge class="days" pill pulse>0</sl-badge> days, <sl-badge class="hr" pill pulse>0</sl-badge> hours, <sl-badge class="min" pill pulse>0</sl-badge> minutes and <sl-badge class="sec" pill pulse>0</sl-badge> seconds!',
				},
			},
			{
				name: 'core/paragraph',
				attributes: {
					content: '<small>Feel free to reach out to us.</small>',
				},
			},
			{
				name: 'core/html',
				attributes: {
					content: '☎ 📧 📞 📍',
				},
			},
		],
	},
	innerBlocks: [
		[
			'core/image',
			{
				width: '350px',
				className: 'card-img',
			}
		],
		[
			'core/site-title',
			{
				isLink: false,
				level: 0,
				style: {
					typography: {
						fontWeight: 700
					},
				},
			}
		],
		[
			'core/paragraph',
			{
				content: 'This website is undergoing maintenance.'
			}
		],
		[
			'core/paragraph',
			{
				content: 'Kindly check back later in <sl-badge class="days" pill pulse>0</sl-badge> days, <sl-badge class="hr" pill pulse>0</sl-badge> hours, <sl-badge class="min" pill pulse>0</sl-badge> minutes and <sl-badge class="sec" pill pulse>0</sl-badge> seconds!'
			}
		],
		[
			'core/paragraph',
			{
				content: '<small>Feel free to reach out to us.</small>'
			}
		],
		[
			'core/group',
			{
				className: 'footer',
				layout: {
					type: 'constrained',
					justifyContent: 'left'
				},
				metadata: {
					name: 'contact',
				}
			},
			[
				[
					'core/html',
					{
						content: '<sl-button-group label=Alignment><sl-button circle href=tel:123456789 size=medium><sl-icon label=Phone name=telephone></sl-icon></sl-button><sl-button circle href=mailto:mail@example.com size=medium><sl-icon label=Mail name=envelope></sl-icon></sl-button><sl-button circle href=https://wa.me/91123456789 size=medium><sl-icon label=WhatsApp name=whatsapp></sl-icon></sl-button><sl-button circle href=https://maps.google.com size=medium target=_blank><sl-icon label=Map name=geo-alt></sl-icon></sl-button></sl-button-group>'
					}
				]
			],
		],
	],
	scope: ['inserter'],
	isActive: (blockAttributes) =>
		blockAttributes.layout?.type === 'flex' &&
		blockAttributes.layout?.orientation === 'vertical',
});