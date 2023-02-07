import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEditFilled',
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
            class: 'c-pieIcon c-pieIcon--editFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.4401 3.50251L12.4976 1.56001C12.2106 1.27415 11.8221 1.11365 11.417 1.11365C11.0119 1.11365 10.6234 1.27415 10.3364 1.56001L9.12012 2.75001L10.0476 3.67751L12.3051 5.92626L12.7689 6.39876L13.2326 6.86251L14.4401 5.64626C14.7228 5.36113 14.8814 4.97588 14.8814 4.57439C14.8814 4.17289 14.7228 3.78765 14.4401 3.50251Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.3776 6.88874L8.1926 3.70374L2.0676 9.82874C1.80092 10.088 1.63107 10.4308 1.58635 10.8L1.13135 14.8775L5.2001 14.4225C5.55763 14.3826 5.89092 14.2221 6.1451 13.9675L12.2701 7.84249L11.8063 7.37874L11.3776 6.88874Z',
                fill: '#242E30'
            }
        })]);
    }
};