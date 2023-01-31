import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSoundOff',
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
            class: 'c-pieIcon c-pieIcon--soundOff'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M11.2812 4.73627V1.23627H9.75L9.58375 1.40252C8.95649 2.00787 8.2932 2.57474 7.5975 3.10002C6.82932 3.68837 6.02573 4.22897 5.19125 4.71877H2.75C2.3446 4.72106 1.95645 4.88313 1.66978 5.1698C1.38311 5.45647 1.22105 5.84461 1.21875 6.25002V9.75002C1.22105 10.1554 1.38311 10.5436 1.66978 10.8302C1.95645 11.1169 2.3446 11.279 2.75 11.2813H5.19125C6.02769 11.7679 6.83148 12.3087 7.5975 12.9C8.29141 13.4275 8.95458 13.9943 9.58375 14.5975L9.77625 14.7813H11.2812V11.2813L9.96875 12.5938V13.18C9.46125 12.7163 8.93625 12.305 8.4025 11.8675C7.64116 11.2919 6.84961 10.7574 6.03125 10.2663V5.75127C6.8503 5.2612 7.6419 4.72665 8.4025 4.15002C8.93625 3.73877 9.46125 3.27502 9.96875 2.83752V3.42377L11.2812 4.73627ZM4.71875 9.96877H2.75C2.69198 9.96877 2.63634 9.94572 2.59532 9.9047C2.5543 9.86367 2.53125 9.80803 2.53125 9.75002V6.25002C2.53125 6.192 2.5543 6.13636 2.59532 6.09534C2.63634 6.05431 2.69198 6.03127 2.75 6.03127H4.71875V9.96877Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.6325 6.05752L12.69 8.00002L14.6325 9.94252L13.705 10.87L11.7625 8.92752L9.82 10.87L8.8925 9.94252L10.835 8.00002L8.8925 6.05752L9.82 5.13002L11.7625 7.07252L13.705 5.13002L14.6325 6.05752Z',
                fill: '#242E30'
            }
        })]);
    }
};
