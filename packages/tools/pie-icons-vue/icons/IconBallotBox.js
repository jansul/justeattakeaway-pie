import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBallotBox',
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
            class: 'c-pieIcon c-pieIcon--ballotBox'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M3.625 6.46875V7.78125H12.375V6.46875H11.2812V3.625C11.2812 2.98682 11.0277 2.37478 10.5765 1.92352C10.1252 1.47226 9.51318 1.21875 8.875 1.21875H4.71875V6.46875H3.625ZM6.03125 2.53125H8.875C9.01863 2.53125 9.16086 2.55954 9.29356 2.61451C9.42626 2.66947 9.54683 2.75004 9.6484 2.8516C9.74996 2.95317 9.83053 3.07374 9.88549 3.20644C9.94046 3.33914 9.96875 3.48137 9.96875 3.625V6.46875H6.03125V2.53125ZM14.7812 3.84375V12.1562H1.21875V3.84375H3.625V5.15625H2.53125V10.8438H13.4688V5.15625H12.375V3.84375H14.7812Z',
                fill: '#242E30'
            }
        })]);
    }
};
