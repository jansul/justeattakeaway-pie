import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPound',
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
            class: 'c-pieIcon c-pieIcon--pound'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.585 11.885C12.27 13.1625 11.255 13.6875 9.89 13.6875H3.625V12.2175H4.745V8.71754H3.625V7.35254H4.745V5.83004C4.745 3.50254 6.04 2.10254 8.4375 2.10254C9.00638 2.07136 9.57521 2.16483 10.1042 2.37643C10.6332 2.58802 11.1096 2.91263 11.5 3.32754L10.45 4.39504C10.1928 4.12214 9.88005 3.90753 9.5329 3.76565C9.18576 3.62377 8.81224 3.55793 8.4375 3.57254C7.16 3.57254 6.39 4.22004 6.39 5.76004V7.35254H9.9775V8.71754H6.39V12.2175H9.89C10.1657 12.2526 10.4449 12.1894 10.6785 12.0389C10.9122 11.8885 11.0853 11.6605 11.1675 11.395L12.585 11.885Z',
                fill: '#242E30'
            }
        })]);
    }
};