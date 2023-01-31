import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationLarge',
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
            class: 'c-pieIcon c-pieIcon--geolocationLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.15625 12.9725V15.02L9.56 15.895C11.1489 16.2901 12.6002 17.1106 13.7579 18.2684C14.9157 19.4261 15.7361 20.8774 16.1312 22.4663L17.0062 25.87H19.0538L25.4587 6.54126L6.15625 12.9725ZM18.1788 22.7463L17.54 20.9963C17.0028 19.4988 16.1404 18.1391 15.0147 17.0149C13.889 15.8908 12.5282 15.0302 11.03 14.495L9.28 13.8563L22.65 9.35001L18.1788 22.7463Z',
                fill: '#242E30'
            }
        })]);
    }
};
