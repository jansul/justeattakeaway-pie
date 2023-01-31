import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconInstagram',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--instagram'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_889_607)'
            }
        }, [h('path', {
            attrs: {
                d: 'M3.62764 1.63435C3.18467 1.80662 2.81006 2.0363 2.43545 2.41091C2.06084 2.78279 1.83115 3.16013 1.65889 3.60037C1.49209 4.02693 1.37998 4.51638 1.34717 5.23279C1.31436 5.94919 1.30615 6.17888 1.30615 8.00545C1.30615 9.83201 1.31436 10.0617 1.34717 10.7781C1.37998 11.4945 1.49482 11.984 1.65889 12.4105C1.83115 12.8535 2.06084 13.2281 2.43545 13.6027C2.81006 13.9773 3.18467 14.207 3.62764 14.3793C4.0542 14.5461 4.54365 14.6582 5.26006 14.691C5.97647 14.7238 6.20615 14.732 8.03272 14.732C9.85928 14.732 10.089 14.7238 10.8054 14.691C11.5218 14.6582 12.0112 14.5433 12.4378 14.3793C12.8808 14.207 13.2554 13.9773 13.63 13.6027C14.0046 13.2281 14.2343 12.8535 14.4065 12.4105C14.5733 11.984 14.6854 11.4945 14.7183 10.7781C14.7511 10.0617 14.7593 9.83201 14.7593 8.00545C14.7593 6.17888 14.7511 5.94919 14.7183 5.23279C14.6854 4.51638 14.5706 4.02693 14.4065 3.60037C14.2343 3.16013 14.0046 2.78279 13.6327 2.41091C13.2581 2.0363 12.8835 1.80662 12.4405 1.63435C12.014 1.46755 11.5245 1.35544 10.8081 1.32263C10.0917 1.28982 9.86201 1.28162 8.03545 1.28162C6.20889 1.28162 5.9792 1.28982 5.26279 1.32263C4.54365 1.35271 4.0542 1.46755 3.62764 1.63435ZM10.7507 2.53123C11.4069 2.5613 11.7624 2.67068 12.0003 2.76365C12.3147 2.88669 12.539 3.03162 12.7741 3.26677C13.0093 3.50193 13.1542 3.72615 13.2772 4.0406C13.3702 4.27849 13.4796 4.63396 13.5097 5.29021C13.5425 5.99841 13.5479 6.21169 13.5479 8.00818C13.5479 9.80466 13.5397 10.0179 13.5097 10.7261C13.4796 11.3824 13.3702 11.7379 13.2772 11.9758C13.1542 12.2902 13.0093 12.5144 12.7741 12.7496C12.539 12.9847 12.3147 13.1297 12.0003 13.2527C11.7624 13.3457 11.4069 13.4551 10.7507 13.4851C10.0425 13.5179 9.8292 13.5234 8.03272 13.5234C6.23623 13.5234 6.02295 13.5152 5.31475 13.4851C4.6585 13.4551 4.30303 13.3457 4.06514 13.2527C3.75068 13.1297 3.52646 12.9847 3.29131 12.7496C3.05615 12.5144 2.91123 12.2902 2.78818 11.9758C2.69521 11.7379 2.58584 11.3824 2.55576 10.7261C2.52295 10.0179 2.51748 9.80466 2.51748 8.00818C2.51748 6.21169 2.52568 5.99841 2.55576 5.29021C2.58584 4.63396 2.69521 4.27849 2.78818 4.0406C2.91123 3.72615 3.05615 3.50193 3.29131 3.26677C3.52646 3.03162 3.75068 2.88669 4.06514 2.76365C4.30303 2.67068 4.6585 2.5613 5.31475 2.53123C6.02295 2.49841 6.23623 2.49294 8.03272 2.49294C9.8292 2.49294 10.0425 2.49841 10.7507 2.53123Z',
                fill: 'url(#paint0_radial_889_607)'
            }
        }), h('path', {
            attrs: {
                d: 'M4.5792 8.00818C4.5792 9.91677 6.12686 11.4617 8.03272 11.4617C9.93857 11.4617 11.4862 9.91404 11.4862 8.00818C11.4862 6.10232 9.94131 4.55466 8.03272 4.55466C6.12412 4.55466 4.5792 6.09959 4.5792 8.00818ZM10.2749 8.00818C10.2749 9.24685 9.27139 10.2504 8.03272 10.2504C6.79404 10.2504 5.79053 9.24685 5.79053 8.00818C5.79053 6.76951 6.79404 5.76599 8.03272 5.76599C9.27139 5.76599 10.2749 6.76951 10.2749 8.00818Z',
                fill: 'url(#paint1_radial_889_607)'
            }
        }), h('path', {
            attrs: {
                d: 'M11.6257 5.22458C12.0712 5.22458 12.4323 4.86344 12.4323 4.41794C12.4323 3.97245 12.0712 3.6113 11.6257 3.6113C11.1802 3.6113 10.819 3.97245 10.819 4.41794C10.819 4.86344 11.1802 5.22458 11.6257 5.22458Z',
                fill: '#654C9F'
            }
        })]), h('defs', [h('radialGradient', {
            attrs: {
                id: 'paint0_radial_889_607',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(1.55093 13.5006) rotate(-3.00009) scale(19.45 16.5323)'
            }
        }, [h('stop', {
            attrs: {
                'stop-color': '#FED576'
            }
        }), h('stop', {
            attrs: {
                offset: '0.2634',
                'stop-color': '#F47133'
            }
        }), h('stop', {
            attrs: {
                offset: '0.6091',
                'stop-color': '#BC3081'
            }
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#4C63D2'
            }
        })]), h('radialGradient', {
            attrs: {
                id: 'paint1_radial_889_607',
                cx: '0',
                cy: '0',
                r: '1',
                gradientUnits: 'userSpaceOnUse',
                gradientTransform: 'translate(1.55015 13.4986) rotate(-2.99948) scale(19.4537 16.5321)'
            }
        }, [h('stop', {
            attrs: {
                'stop-color': '#FED576'
            }
        }), h('stop', {
            attrs: {
                offset: '0.2634',
                'stop-color': '#F47133'
            }
        }), h('stop', {
            attrs: {
                offset: '0.6091',
                'stop-color': '#BC3081'
            }
        }), h('stop', {
            attrs: {
                offset: '1',
                'stop-color': '#4C63D2'
            }
        })]), h('clipPath', {
            attrs: {
                id: 'clip0_889_607'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: 'white',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
