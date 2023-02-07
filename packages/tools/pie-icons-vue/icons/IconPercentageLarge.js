import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPercentageLarge',
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
            class: 'c-pieIcon c-pieIcon--percentageLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23 16C19.9988 16 18.625 18.4937 18.625 20.8125C18.625 23.1313 19.9988 25.625 23 25.625C26.0013 25.625 27.375 23.1313 27.375 20.8125C27.375 18.4937 26.01 16 23 16ZM23 23.875C20.445 23.875 20.375 21.1275 20.375 20.8125C20.375 20.4975 20.445 17.75 23 17.75C25.555 17.75 25.625 20.4975 25.625 20.8125C25.625 21.1275 25.555 23.875 23 23.875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.16 6.375L7.76626 25.625H9.95376L24.3475 6.375H22.16Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9 16C12.01 16 13.375 13.5062 13.375 11.1875C13.375 8.86875 12.01 6.375 9 6.375C5.99 6.375 4.625 8.86875 4.625 11.1875C4.625 13.5062 5.99875 16 9 16ZM9 8.125C11.555 8.125 11.625 10.8725 11.625 11.1875C11.625 11.5025 11.555 14.25 9 14.25C6.445 14.25 6.375 11.5025 6.375 11.1875C6.375 10.8725 6.445 8.125 9 8.125Z',
                fill: '#242E30'
            }
        })]);
    }
};