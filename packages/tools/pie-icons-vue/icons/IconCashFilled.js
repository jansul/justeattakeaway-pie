import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCashFilled',
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
            class: 'c-pieIcon c-pieIcon--cashFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.75 9.74999H12.375V11.5H1V5.37499H2.75V9.74999ZM14.7812 3.02124V8.60374H3.84375V3.02124H14.7812ZM10.5288 5.81249C10.5288 5.57194 10.4574 5.33679 10.3238 5.13678C10.1901 4.93677 10.0002 4.78088 9.77794 4.68882C9.5557 4.59677 9.31115 4.57268 9.07522 4.61961C8.83929 4.66654 8.62258 4.78238 8.45248 4.95247C8.28239 5.12257 8.16655 5.33928 8.11962 5.57521C8.07269 5.81114 8.09678 6.05569 8.18883 6.27793C8.28089 6.50017 8.43678 6.69012 8.63679 6.82377C8.8368 6.95741 9.07195 7.02874 9.3125 7.02874C9.63507 7.02874 9.94443 6.9006 10.1725 6.67251C10.4006 6.44442 10.5288 6.13506 10.5288 5.81249Z',
                fill: '#242E30'
            }
        })]);
    }
};
