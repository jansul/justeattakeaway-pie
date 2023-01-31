import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMegaphone',
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
            class: 'c-pieIcon c-pieIcon--megaphone'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.7812 7.125C14.7788 6.41114 14.5071 5.72448 14.0205 5.20218C13.5339 4.67987 12.8682 4.36037 12.1562 4.3075V1.21875H10.6775L10.5025 1.3675C9.8725 1.875 9.19875 2.37375 8.51625 2.82875C7.83375 3.28375 7.37875 3.52 6.76625 3.84375H2.75C2.3446 3.84605 1.95645 4.00811 1.66978 4.29478C1.38311 4.58145 1.22105 4.9696 1.21875 5.375V8.875C1.22008 9.2037 1.32714 9.52325 1.52411 9.7864C1.72108 10.0496 1.9975 10.2423 2.3125 10.3363L3.07375 14.7812H5.92625L6.67 10.4062H6.7925C7.37875 10.73 7.95625 11.0625 8.5425 11.4212C9.12875 11.78 9.89875 12.3663 10.5288 12.8825L10.7038 13.0312H12.1825V9.9425C12.8897 9.88336 13.549 9.56114 14.0302 9.03948C14.5113 8.51782 14.7793 7.83467 14.7812 7.125ZM2.53125 5.375C2.53125 5.31698 2.5543 5.26134 2.59532 5.22032C2.63634 5.1793 2.69198 5.15625 2.75 5.15625H5.59375V9.09375H2.75C2.69198 9.09375 2.63634 9.0707 2.59532 9.02968C2.5543 8.98866 2.53125 8.93302 2.53125 8.875V5.375ZM4.82375 13.4688H4.17625L3.625 10.4062H5.375L4.82375 13.4688ZM10.8438 11.5C10.3275 11.0975 9.785 10.7125 9.23375 10.3537C8.48399 9.85037 7.70697 9.38883 6.90625 8.97125V5.27875C7.70637 4.86969 8.48338 4.41693 9.23375 3.9225C9.75 3.56375 10.3275 3.17875 10.8438 2.75V11.5ZM12.1562 8.65625V5.62C12.516 5.67502 12.8441 5.85706 13.0812 6.13314C13.3182 6.40923 13.4486 6.7611 13.4486 7.125C13.4486 7.4889 13.3182 7.84077 13.0812 8.11686C12.8441 8.39294 12.516 8.57498 12.1562 8.63V8.65625Z',
                fill: '#242E30'
            }
        })]);
    }
};
