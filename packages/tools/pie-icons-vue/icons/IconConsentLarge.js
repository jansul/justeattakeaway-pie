import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconConsentLarge',
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
            class: 'c-pieIcon c-pieIcon--consentLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.04 18.6163L11.5462 15.8075L10.2337 16.9713L12.8937 19.9725C13.1825 20.2875 13.5937 20.4625 14.0225 20.4625C14.4512 20.4625 14.8625 20.2788 15.1512 19.9638L21.8712 12.7188L20.585 11.5288L14.0137 18.6075L14.04 18.6163Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M27.375 23.5425V9.33252C27.375 7.88877 26.1938 6.70752 24.75 6.70752H7.25C5.80625 6.70752 4.625 7.88877 4.625 9.33252V23.5425H2.875V25.2925H29.125V23.5425H27.375ZM25.625 23.5425H6.375V9.33252C6.375 8.85127 6.76875 8.45752 7.25 8.45752H24.75C25.2313 8.45752 25.625 8.85127 25.625 9.33252V23.5425Z',
                fill: '#242E30'
            }
        })]);
    }
};
