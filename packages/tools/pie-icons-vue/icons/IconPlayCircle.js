import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPlayCircle',
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
            class: 'c-pieIcon c-pieIcon--playCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 1.21875C6.6588 1.21875 5.34771 1.61646 4.23254 2.3616C3.11737 3.10673 2.2482 4.16582 1.73494 5.40493C1.22169 6.64404 1.0874 8.00752 1.34905 9.32296C1.61071 10.6384 2.25656 11.8467 3.20494 12.7951C4.15331 13.7434 5.36161 14.3893 6.67705 14.651C7.99248 14.9126 9.35596 14.7783 10.5951 14.2651C11.8342 13.7518 12.8933 12.8826 13.6384 11.7675C14.3835 10.6523 14.7813 9.34121 14.7813 8C14.7789 6.20221 14.0637 4.47872 12.7925 3.20749C11.5213 1.93626 9.79779 1.22107 8 1.21875ZM8 13.4688C6.91839 13.4688 5.86106 13.148 4.96173 12.5471C4.0624 11.9462 3.36145 11.0921 2.94754 10.0928C2.53362 9.09352 2.42532 7.99393 2.63633 6.9331C2.84735 5.87227 3.36819 4.89783 4.13301 4.13301C4.89783 3.36819 5.87227 2.84734 6.9331 2.63633C7.99394 2.42532 9.09352 2.53362 10.0928 2.94753C11.0921 3.36145 11.9462 4.06239 12.5471 4.96173C13.148 5.86106 13.4688 6.91838 13.4688 8C13.4688 8.71817 13.3273 9.4293 13.0525 10.0928C12.7776 10.7563 12.3748 11.3592 11.867 11.867C11.3592 12.3748 10.7563 12.7776 10.0928 13.0525C9.4293 13.3273 8.71817 13.4688 8 13.4688Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.1413 7.28249L6.81875 5.30499C6.69789 5.25099 6.56514 5.22906 6.43333 5.24132C6.30151 5.25358 6.17509 5.29962 6.06625 5.37499C5.95457 5.44445 5.86229 5.54105 5.79802 5.65581C5.73376 5.77056 5.69961 5.89972 5.69875 6.03124V10.0037C5.69961 10.1353 5.73376 10.2644 5.79802 10.3792C5.86229 10.4939 5.95457 10.5905 6.06625 10.66C6.18931 10.7461 6.33605 10.792 6.48625 10.7912C6.6017 10.7912 6.71553 10.7642 6.81875 10.7125L11.1413 8.73499C11.2792 8.67257 11.3963 8.57169 11.4784 8.44443C11.5605 8.31717 11.6042 8.16894 11.6042 8.01749C11.6042 7.86605 11.5605 7.71781 11.4784 7.59056C11.3963 7.4633 11.2792 7.36241 11.1413 7.29999V7.28249ZM7.01125 9.16374V6.83624L9.5575 7.99999L7.01125 9.16374Z',
                fill: '#242E30'
            }
        })]);
    }
};
