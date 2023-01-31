import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEdit',
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
            class: 'c-pieIcon c-pieIcon--edit'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.4401 3.50248L12.4976 1.55998C12.2091 1.27358 11.8191 1.11285 11.4126 1.11285C11.0061 1.11285 10.6161 1.27358 10.3276 1.55998L2.0326 9.85498C1.7797 10.1104 1.61953 10.443 1.5776 10.8L1.13135 14.8687L5.2001 14.4225C5.55668 14.3792 5.88894 14.2193 6.1451 13.9675L14.4401 5.67248C14.7265 5.384 14.8872 4.99398 14.8872 4.58748C14.8872 4.18097 14.7265 3.79096 14.4401 3.50248ZM5.2176 13.04C5.17362 13.0844 5.11384 13.1096 5.05135 13.11L2.61885 13.3812L2.88135 10.9487C2.88937 10.8864 2.91694 10.8282 2.9601 10.7825L9.0851 4.65748L11.3338 6.90623L5.2176 13.04ZM13.5126 4.74498L12.2963 5.95248L10.0476 3.70373L11.2551 2.48748C11.2978 2.4476 11.3542 2.42567 11.4126 2.42623C11.4417 2.42497 11.4707 2.42977 11.4978 2.44031C11.5249 2.45086 11.5495 2.46692 11.5701 2.48748L13.5126 4.42998C13.5513 4.47329 13.5728 4.52937 13.5728 4.58748C13.5728 4.64559 13.5513 4.70167 13.5126 4.74498Z',
                fill: '#242E30'
            }
        })]);
    }
};
