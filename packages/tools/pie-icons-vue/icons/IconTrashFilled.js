import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTrashFilled',
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
            class: 'c-pieIcon c-pieIcon--trashFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.86375 1.21875H6.13625L5.48875 2.53125H10.5112L9.86375 1.21875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M1.875 3.84375V5.15625H2.8375L3.625 13.3988C3.66192 13.7771 3.83823 14.1281 4.11963 14.3836C4.40102 14.6391 4.7674 14.7809 5.1475 14.7812H10.87C11.2471 14.7766 11.6092 14.6329 11.8869 14.3778C12.1646 14.1227 12.3384 13.7741 12.375 13.3988L13.1538 5.15625H14.125V3.84375H1.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
