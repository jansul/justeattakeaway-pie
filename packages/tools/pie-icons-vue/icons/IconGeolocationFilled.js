import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationFilled',
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
            class: 'c-pieIcon c-pieIcon--geolocationFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.53467 6.54755V8.00005L3.66967 8.5338C4.59936 8.76292 5.44868 9.24192 6.12574 9.91898C6.8028 10.596 7.2818 11.4454 7.51092 12.3751L8.04467 14.5101H9.45342L13.4172 2.5838L1.53467 6.54755Z',
                fill: '#242E30'
            }
        })]);
    }
};