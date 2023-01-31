import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRestrictedLarge',
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
            class: 'c-pieIcon c-pieIcon--restrictedLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C13.5772 3.75 11.2088 4.46845 9.19427 5.8145C7.17977 7.16054 5.60965 9.07373 4.68248 11.3121C3.75531 13.5505 3.51272 16.0136 3.98539 18.3899C4.45805 20.7661 5.62475 22.9489 7.33795 24.6621C9.05114 26.3752 11.2339 27.542 13.6101 28.0146C15.9864 28.4873 18.4495 28.2447 20.6879 27.3175C22.9263 26.3904 24.8395 24.8202 26.1855 22.8057C27.5316 20.7912 28.25 18.4228 28.25 16C28.25 12.7511 26.9594 9.63526 24.6621 7.33794C22.3647 5.04062 19.2489 3.75 16 3.75ZM5.50001 16C5.5041 13.9749 6.09374 11.9941 7.19788 10.2964C8.30202 8.59878 9.87355 7.25663 11.7231 6.43174C13.5726 5.60685 15.6212 5.33442 17.6221 5.64727C19.6229 5.96012 21.4906 6.8449 23 8.195L8.19501 23C6.45898 21.082 5.49837 18.587 5.50001 16ZM16 26.5C13.6277 26.4952 11.3269 25.6871 9.47251 24.2075L24.2075 9.4725C25.434 11.0179 26.2003 12.8776 26.4186 14.8384C26.6369 16.7992 26.2983 18.7819 25.4416 20.5592C24.5849 22.3364 23.2449 23.8364 21.575 24.8871C19.9051 25.9378 17.973 26.4968 16 26.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
