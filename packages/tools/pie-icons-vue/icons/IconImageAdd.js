import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconImageAdd',
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
            class: 'c-pieIcon c-pieIcon--imageAdd'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.4688 7.46875V7.81875C13.2863 8.49206 12.8547 9.07077 12.2612 9.4375L12.2 9.48125C10.45 10.5837 9.2775 10.0062 7.825 9.28875C6.3725 8.57125 4.7625 7.775 2.575 8.76375V3.51375H9.575V2.21875H1.21875V14.0312H14.7812V7.46875H13.4688ZM13.4688 12.7188H2.53125V10.2513C4.5 9.13125 5.76 9.74375 7.23 10.4613C8.16804 11.0141 9.22329 11.3379 10.31 11.4062C11.2293 11.3877 12.1244 11.1085 12.8913 10.6012C13.0933 10.4717 13.2863 10.3285 13.4688 10.1725V12.7188Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.125 4.84375H12.1562V2.875H10.8438V4.84375H8.875V6.15625H10.8438V8.125H12.1562V6.15625H14.125V4.84375Z',
                fill: '#242E30'
            }
        })]);
    }
};
