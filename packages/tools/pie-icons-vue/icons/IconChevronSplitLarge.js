import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChevronSplitLarge',
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
            class: 'c-pieIcon c-pieIcon--chevronSplitLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.0525 12.0362L16.0437 4.62499H15.9475L8.94749 12.0275L7.67874 10.8287L14.6787 3.41749C15.0341 3.08342 15.5035 2.89743 15.9912 2.89743C16.479 2.89743 16.9484 3.08342 17.3037 3.41749L24.3037 10.8287L23.0525 12.0362Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.94749 19.9725L16 27.375H16.0962L23.0962 19.9725L24.3737 21.1712L17.3737 28.5737C17.0194 28.9098 16.5496 29.0971 16.0612 29.0971C15.5729 29.0971 15.1031 28.9098 14.7487 28.5737L7.74874 21.1625L8.94749 19.9725Z',
                fill: '#242E30'
            }
        })]);
    }
};
