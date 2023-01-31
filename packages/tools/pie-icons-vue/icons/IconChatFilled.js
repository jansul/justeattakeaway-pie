import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatFilled',
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
            class: 'c-pieIcon c-pieIcon--chatFilled'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.96875H3.625C3.2196 2.97105 2.83145 3.13311 2.54478 3.41978C2.25811 3.70645 2.09605 4.0946 2.09375 4.5V14.7812H3.5375L6.0925 12.2175C6.13646 12.1797 6.19204 12.1581 6.25 12.1562H12.375C12.7804 12.154 13.1686 11.9919 13.4552 11.7052C13.7419 11.4186 13.904 11.0304 13.9062 10.625V4.5C13.904 4.0946 13.7419 3.70645 13.4552 3.41978C13.1686 3.13311 12.7804 2.97105 12.375 2.96875Z',
                fill: '#242E30'
            }
        })]);
    }
};
