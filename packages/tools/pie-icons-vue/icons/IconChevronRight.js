import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronRight',
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
            class: 'c-pieIcon c-pieIcon--chevronRight'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M5.04375 13.18L10.3987 8.00004L5 2.82004L5.875 1.85754L11.4137 7.20379C11.6291 7.42164 11.7499 7.7156 11.7499 8.02192C11.7499 8.32823 11.6291 8.6222 11.4137 8.84004L5.945 14.125L5.04375 13.18Z',
                fill: '#242E30'
            }
        })]);
    }
};
