import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconComponents',
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
            class: 'c-pieIcon c-pieIcon--components'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_7066_3730)'
            }
        }, [h('path', {
            attrs: {
                d: 'M11.9026 5.02506L8.92756 8.00006L11.9026 10.9751L14.8776 8.00006L11.9026 5.02506ZM10.7826 8.00006L11.9026 6.88006L13.0226 8.00006L11.9026 9.12006L10.7826 8.00006Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.9751 4.09756L8.00006 1.12256L5.02506 4.09756L8.00006 7.07256L10.9751 4.09756ZM8.00006 2.97756L9.12006 4.09756L8.00006 5.21756L6.88006 4.09756L8.00006 2.97756Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.02506 11.9026L8.00006 14.8776L10.9751 11.9026L8.00006 8.92756L5.02506 11.9026ZM8.00006 13.0226L6.88006 11.9026L8.00006 10.7826L9.12006 11.9026L8.00006 13.0226Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M4.09756 5.02506L1.12256 8.00006L4.09756 10.9751L7.07256 8.00006L4.09756 5.02506ZM2.97756 8.00006L4.09756 6.88006L5.21756 8.00006L4.09756 9.12006L2.97756 8.00006Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_7066_3730'
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
