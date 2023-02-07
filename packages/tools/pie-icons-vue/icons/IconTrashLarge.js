import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTrashLarge',
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
            class: 'c-pieIcon c-pieIcon--trashLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.03 14.25L17.4088 22.125H19.1588L19.7888 14.25H18.03Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.9375 4.625H12.0625L11.1875 6.375H20.8125L19.9375 4.625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.5913 22.125L13.97 14.25H12.2113L12.8413 22.125H14.5913Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M3.75 8.125V9.875H6.06875L7.67 26.745C7.7312 27.3979 8.03455 28.0042 8.52036 28.4447C9.00617 28.8852 9.63925 29.1279 10.295 29.125H21.7225C22.3783 29.1279 23.0113 28.8852 23.4971 28.4447C23.9829 28.0042 24.2863 27.3979 24.3475 26.745L25.9312 9.875H28.25V8.125H3.75ZM22.5888 26.5788C22.569 26.7969 22.4682 26.9997 22.3062 27.1472C22.1442 27.2946 21.9328 27.3759 21.7138 27.375H10.2775C10.0585 27.3759 9.84705 27.2946 9.68504 27.1472C9.52303 26.9997 9.42221 26.7969 9.4025 26.5788L7.8275 9.875H24.1725L22.5888 26.5788Z',
                fill: '#242E30'
            }
        })]);
    }
};