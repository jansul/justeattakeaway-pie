import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCaretDownFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--caretDownFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.82 8.16874H7.18C6.87169 8.16197 6.56751 8.24065 6.30114 8.39607C6.03477 8.55148 5.8166 8.77756 5.67077 9.0493C5.52494 9.32103 5.45714 9.62781 5.47487 9.93569C5.49261 10.2436 5.59519 10.5405 5.77125 10.7937L14.7313 24.75C14.8825 24.9904 15.0923 25.1885 15.341 25.3258C15.5897 25.4632 15.8691 25.5352 16.1531 25.5352C16.4372 25.5352 16.7166 25.4632 16.9653 25.3258C17.2139 25.1885 17.4237 24.9904 17.575 24.75L26.2463 10.75C26.4112 10.496 26.504 10.2019 26.5148 9.89923C26.5256 9.59655 26.4539 9.29664 26.3074 9.03155C26.1609 8.76645 25.9452 8.54614 25.6832 8.39417C25.4212 8.2422 25.1228 8.16428 24.82 8.16874Z',
                fill: '#242E30'
            }
        })]);
    }
};
