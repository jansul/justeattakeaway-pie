import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconArrowDownLarge',
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
            class: 'c-pieIcon c-pieIcon--arrowDownLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M15.125 3.75V25.625L8.12501 18.625L6.88251 19.8325L14.7575 27.7075C14.92 27.8702 15.113 27.9993 15.3255 28.0874C15.5379 28.1754 15.7657 28.2208 15.9956 28.2208C16.2256 28.2208 16.4533 28.1754 16.6658 28.0874C16.8782 27.9993 17.0712 27.8702 17.2338 27.7075L25.1088 19.8325L23.875 18.625L16.875 25.625V3.75H15.125Z',
                fill: '#242E30'
            }
        })]);
    }
};
