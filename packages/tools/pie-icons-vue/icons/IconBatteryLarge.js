import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBatteryLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--batteryLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.375 12.5V9.875C27.375 9.17881 27.0984 8.51113 26.6062 8.01884C26.1139 7.52656 25.4462 7.25 24.75 7.25H5.5C4.80381 7.25 4.13613 7.52656 3.64384 8.01884C3.15156 8.51113 2.875 9.17881 2.875 9.875V22.125C2.875 22.8212 3.15156 23.4889 3.64384 23.9812C4.13613 24.4734 4.80381 24.75 5.5 24.75H24.75C25.4462 24.75 26.1139 24.4734 26.6062 23.9812C27.0984 23.4889 27.375 22.8212 27.375 22.125V19.5H29.125V12.5H27.375ZM25.625 22.125C25.625 22.3571 25.5328 22.5796 25.3687 22.7437C25.2046 22.9078 24.9821 23 24.75 23H5.5C5.26794 23 5.04538 22.9078 4.88128 22.7437C4.71719 22.5796 4.625 22.3571 4.625 22.125V9.875C4.625 9.64294 4.71719 9.42038 4.88128 9.25628C5.04538 9.09219 5.26794 9 5.5 9H24.75C24.9821 9 25.2046 9.09219 25.3687 9.25628C25.5328 9.42038 25.625 9.64294 25.625 9.875V22.125ZM8.125 12.5H9.875V19.5H8.125V12.5ZM12.5 12.5H14.25V19.5H12.5V12.5ZM16.875 12.5H18.625V19.5H16.875V12.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
