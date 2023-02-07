import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCloseCircle',
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
            class: 'c-pieIcon c-pieIcon--closeCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.87 6.0575L8.9275 8L10.87 9.9425L9.9425 10.87L8 8.9275L6.0575 10.87L5.13 9.9425L7.0725 8L5.13 6.0575L6.0575 5.13L8 7.0725L9.9425 5.13L10.87 6.0575ZM14.7813 8C14.7813 9.3412 14.3835 10.6523 13.6384 11.7675C12.8933 12.8826 11.8342 13.7518 10.5951 14.2651C9.35596 14.7783 7.99248 14.9126 6.67705 14.651C5.36161 14.3893 4.15331 13.7434 3.20494 12.7951C2.25656 11.8467 1.61071 10.6384 1.34905 9.32296C1.0874 8.00752 1.22169 6.64404 1.73494 5.40493C2.2482 4.16582 3.11737 3.10673 4.23254 2.3616C5.34771 1.61646 6.6588 1.21875 8 1.21875C9.79779 1.22107 11.5213 1.93626 12.7925 3.20749C14.0637 4.47872 14.7789 6.20221 14.7813 8ZM13.4688 8C13.4688 6.91838 13.148 5.86106 12.5471 4.96173C11.9462 4.06239 11.0921 3.36145 10.0928 2.94753C9.09352 2.53362 7.99394 2.42532 6.9331 2.63633C5.87227 2.84734 4.89783 3.36819 4.13301 4.13301C3.36819 4.89783 2.84735 5.87227 2.63633 6.9331C2.42532 7.99393 2.53362 9.09352 2.94754 10.0928C3.36145 11.0921 4.0624 11.9462 4.96173 12.5471C5.86106 13.148 6.91839 13.4688 8 13.4688C8.71817 13.4688 9.4293 13.3273 10.0928 13.0525C10.7563 12.7776 11.3592 12.3748 11.867 11.867C12.3748 11.3592 12.7776 10.7563 13.0525 10.0928C13.3273 9.4293 13.4688 8.71817 13.4688 8Z',
                fill: '#242E30'
            }
        })]);
    }
};