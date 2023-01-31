import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCash',
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
            class: 'c-pieIcon c-pieIcon--cash'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.7812 2.96875H3.84375V5.59375H1.21875V12.1562H12.1562V9.53125H14.7812V2.96875ZM10.8438 10.8438H2.53125V6.90625H3.84375V9.53125H10.8438V10.8438ZM13.4688 8.21875H5.15625V4.28125H13.4688V8.21875ZM8.21875 6.25C8.21875 6.03368 8.2829 5.82221 8.40308 5.64234C8.52326 5.46248 8.69408 5.32229 8.89394 5.23951C9.0938 5.15672 9.31371 5.13506 9.52588 5.17727C9.73805 5.21947 9.93293 5.32364 10.0859 5.4766C10.2389 5.62957 10.343 5.82445 10.3852 6.03662C10.4274 6.24879 10.4058 6.4687 10.323 6.66856C10.2402 6.86842 10.1 7.03924 9.92015 7.15942C9.74029 7.2796 9.52882 7.34375 9.3125 7.34375C9.02242 7.34375 8.74422 7.22852 8.5391 7.0234C8.33398 6.81828 8.21875 6.54008 8.21875 6.25Z',
                fill: '#242E30'
            }
        })]);
    }
};
