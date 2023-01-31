import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBagFilled',
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
            class: 'c-pieIcon c-pieIcon--bagFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.9963 4.71875H10.625V2.53125L9.31253 1.21875H6.68753L5.37503 2.53125V4.71875H3.00378L2.57503 13.1712C2.56305 13.3792 2.59386 13.5873 2.66555 13.7829C2.73723 13.9784 2.84827 14.1571 2.9918 14.308C3.13532 14.4589 3.30828 14.5788 3.49997 14.6602C3.69167 14.7416 3.89803 14.7828 4.10628 14.7812H11.8938C12.102 14.7828 12.3084 14.7416 12.5001 14.6602C12.6918 14.5788 12.8647 14.4589 13.0083 14.308C13.1518 14.1571 13.2628 13.9784 13.3345 13.7829C13.4062 13.5873 13.437 13.3792 13.425 13.1712L12.9963 4.71875ZM6.68753 2.53125H9.31253V4.71875H6.68753V2.53125Z',
                fill: '#242E30'
            }
        })]);
    }
};
