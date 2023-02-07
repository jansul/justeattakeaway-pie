import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPresentationChartLarge',
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
            class: 'c-pieIcon c-pieIcon--presentationChartLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M29.125 5.5H2.875V7.25H4.625V19.5C4.625 20.1962 4.90156 20.8639 5.39384 21.3562C5.88613 21.8484 6.55381 22.125 7.25 22.125H15.125V24.4L11.3013 28.25H13.7688L16 25.9925L18.2312 28.25H20.69L16.875 24.3825V22.125H24.75C25.4462 22.125 26.1139 21.8484 26.6062 21.3562C27.0984 20.8639 27.375 20.1962 27.375 19.5V7.25H29.125V5.5ZM25.625 19.5C25.625 19.7321 25.5328 19.9546 25.3687 20.1187C25.2046 20.2828 24.9821 20.375 24.75 20.375H7.25C7.01794 20.375 6.79538 20.2828 6.63128 20.1187C6.46719 19.9546 6.375 19.7321 6.375 19.5V7.25H25.625V19.5ZM12.5 16.875H10.75V13.375H12.5V16.875ZM16.875 16.875H15.125V9.875H16.875V16.875ZM21.25 16.875H19.5V11.625H21.25V16.875Z',
                fill: '#242E30'
            }
        })]);
    }
};