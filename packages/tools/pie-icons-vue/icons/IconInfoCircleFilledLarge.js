import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconInfoCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--infoCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C13.5772 3.75 11.2088 4.46845 9.19427 5.8145C7.17977 7.16054 5.60965 9.07373 4.68248 11.3121C3.75531 13.5505 3.51272 16.0136 3.98539 18.3899C4.45805 20.7661 5.62475 22.9489 7.33795 24.6621C9.05114 26.3752 11.2339 27.5419 13.6101 28.0146C15.9864 28.4873 18.4495 28.2447 20.6879 27.3175C22.9263 26.3903 24.8395 24.8202 26.1855 22.8057C27.5315 20.7912 28.25 18.4228 28.25 16C28.25 12.7511 26.9594 9.63526 24.6621 7.33794C22.3647 5.04062 19.2489 3.75 16 3.75ZM16.875 22.125H15.125V14.25H16.875V22.125ZM16 12.5C15.7404 12.5 15.4867 12.423 15.2708 12.2788C15.055 12.1346 14.8868 11.9296 14.7874 11.6898C14.6881 11.4499 14.6621 11.186 14.7127 10.9314C14.7634 10.6768 14.8884 10.443 15.0719 10.2594C15.2555 10.0759 15.4893 9.95086 15.7439 9.90022C15.9985 9.84958 16.2624 9.87557 16.5023 9.97491C16.7421 10.0742 16.9471 10.2425 17.0913 10.4583C17.2355 10.6742 17.3125 10.9279 17.3125 11.1875C17.3125 11.5356 17.1742 11.8694 16.9281 12.1156C16.6819 12.3617 16.3481 12.5 16 12.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
