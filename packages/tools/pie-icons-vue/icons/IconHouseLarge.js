import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHouseLarge',
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
            class: 'c-pieIcon c-pieIcon--houseLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.4875 5.02755C17.0332 4.76318 16.5169 4.6239 15.9913 4.6239C15.4656 4.6239 14.9493 4.76318 14.495 5.02755C10.12 7.82755 3.18125 15.125 2.875 15.3963L4.14375 16.6038C4.14375 16.6038 5.01875 15.65 6.36625 14.355V27.375H25.625V14.355C26.9375 15.65 27.8213 16.5775 27.8475 16.6038L29.125 15.3963C28.8188 15.125 21.88 7.82755 17.4875 5.02755ZM14.4338 25.625V21.9413C14.4338 21.5259 14.5988 21.1275 14.8925 20.8338C15.1862 20.5401 15.5846 20.375 16 20.375C16.4154 20.375 16.8138 20.5401 17.1075 20.8338C17.4012 21.1275 17.5663 21.5259 17.5663 21.9413V25.625H14.4338ZM23.875 25.625H19.3162V21.9413C19.3162 21.0618 18.9669 20.2183 18.3449 19.5964C17.723 18.9744 16.8795 18.625 16 18.625C15.1205 18.625 14.277 18.9744 13.6551 19.5964C13.0331 20.2183 12.6838 21.0618 12.6838 21.9413V25.625H8.125V12.6488C10.3759 10.4069 12.8111 8.35804 15.405 6.5238C15.5849 6.43095 15.7844 6.3825 15.9869 6.3825C16.1893 6.3825 16.3888 6.43095 16.5687 6.5238C19.1727 8.3555 21.6169 10.4045 23.875 12.6488V25.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
