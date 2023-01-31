import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPrinterFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--printerFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23 9V3.75H9V9H23Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M21.25 20.41H10.75V28.25H21.25V20.41Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.5 10.75H5.5C4.80381 10.75 4.13613 11.0266 3.64384 11.5188C3.15156 12.0111 2.875 12.6788 2.875 13.375V24.75H9V20.375H7.25V18.625H24.75V20.375H23V24.75H29.125V13.375C29.125 12.6788 28.8484 12.0111 28.3562 11.5188C27.8639 11.0266 27.1962 10.75 26.5 10.75ZM21.25 16.875V15.125H24.75V16.875H21.25Z',
                fill: '#242E30'
            }
        })]);
    }
};
