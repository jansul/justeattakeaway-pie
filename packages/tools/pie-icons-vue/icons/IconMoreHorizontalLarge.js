import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMoreHorizontalLarge',
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
            class: 'c-pieIcon c-pieIcon--moreHorizontalLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M7.6875 14.0312C8.07688 14.0312 8.45752 14.1467 8.78128 14.363C9.10504 14.5794 9.35738 14.8868 9.50639 15.2466C9.6554 15.6063 9.69439 16.0022 9.61842 16.3841C9.54246 16.766 9.35495 17.1168 9.07962 17.3921C8.80428 17.6674 8.45348 17.855 8.07158 17.9309C7.68968 18.0069 7.29383 17.9679 6.93409 17.8189C6.57435 17.6699 6.26687 17.4175 6.05054 17.0938C5.83422 16.77 5.71875 16.3894 5.71875 16C5.71875 15.4779 5.92617 14.9771 6.29538 14.6079C6.6646 14.2387 7.16535 14.0312 7.6875 14.0312ZM14.0312 16C14.0312 16.3894 14.1467 16.77 14.363 17.0938C14.5794 17.4175 14.8869 17.6699 15.2466 17.8189C15.6063 17.9679 16.0022 18.0069 16.3841 17.9309C16.766 17.855 17.1168 17.6674 17.3921 17.3921C17.6675 17.1168 17.855 16.766 17.9309 16.3841C18.0069 16.0022 17.9679 15.6063 17.8189 15.2466C17.6699 14.8868 17.4175 14.5794 17.0938 14.363C16.77 14.1467 16.3894 14.0312 16 14.0312C15.4779 14.0312 14.9771 14.2387 14.6079 14.6079C14.2387 14.9771 14.0312 15.4779 14.0312 16ZM22.3437 16C22.3437 16.3894 22.4592 16.77 22.6755 17.0938C22.8919 17.4175 23.1994 17.6699 23.5591 17.8189C23.9188 17.9679 24.3147 18.0069 24.6966 17.9309C25.0785 17.855 25.4293 17.6674 25.7046 17.3921C25.98 17.1168 26.1675 16.766 26.2434 16.3841C26.3194 16.0022 26.2804 15.6063 26.1314 15.2466C25.9824 14.8868 25.73 14.5794 25.4063 14.363C25.0825 14.1467 24.7019 14.0312 24.3125 14.0312C23.7904 14.0312 23.2896 14.2387 22.9204 14.6079C22.5512 14.9771 22.3437 15.4779 22.3437 16Z',
                fill: '#242E30'
            }
        })]);
    }
};
