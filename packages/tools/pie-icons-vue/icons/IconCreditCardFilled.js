import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCreditCardFilled',
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
            class: 'c-pieIcon c-pieIcon--creditCardFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.21875 6.90625V11.5C1.22105 11.9054 1.38311 12.2936 1.66978 12.5802C1.95645 12.8669 2.3446 13.029 2.75 13.0312H13.25C13.6554 13.029 14.0436 12.8669 14.3302 12.5802C14.6169 12.2936 14.779 11.9054 14.7812 11.5V6.90625H1.21875ZM6.25 10.4062H3.625V9.09375H6.25V10.4062Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.7812 5.59375V4.5C14.779 4.0946 14.6169 3.70645 14.3302 3.41978C14.0436 3.13311 13.6554 2.97105 13.25 2.96875H2.75C2.3446 2.97105 1.95645 3.13311 1.66978 3.41978C1.38311 3.70645 1.22105 4.0946 1.21875 4.5V5.59375H14.7812Z',
                fill: '#242E30'
            }
        })]);
    }
};
