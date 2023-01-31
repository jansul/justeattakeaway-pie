import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPhoneLarge',
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
            class: 'c-pieIcon c-pieIcon--phoneLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M20.3752 19.57C19.8439 19.2682 19.22 19.1728 18.6228 19.3019C18.0256 19.4311 17.4969 19.7757 17.1377 20.27L14.3202 24.1112C11.5839 22.4956 9.32531 20.1827 7.77519 17.4087L11.1089 14.8625C11.594 14.4964 11.9328 13.9693 12.0643 13.3759C12.1958 12.7826 12.1114 12.1618 11.8264 11.625L8.39644 5.19373L6.17394 6.37498C5.35004 6.81349 4.68026 7.49389 4.25475 8.32458C3.82924 9.15527 3.66842 10.0964 3.79394 11.0212C4.11466 13.3097 4.82493 15.5263 5.89394 17.575C7.73007 21.1711 10.6212 24.1203 14.1802 26.0275C16.2617 27.1744 18.5368 27.9278 20.8914 28.25C21.072 28.2633 21.2534 28.2633 21.4339 28.25C22.2395 28.2365 23.0267 28.007 23.7132 27.5852C24.3997 27.1634 24.9603 26.565 25.3364 25.8525L26.8064 23.1137L20.3752 19.57ZM5.50019 10.75C5.43125 10.1825 5.53767 9.60747 5.80515 9.10223C6.07263 8.597 6.48835 8.18574 6.99644 7.92373L7.67019 7.55623L10.2952 12.4737C10.3841 12.6379 10.4118 12.8283 10.3734 13.011C10.3349 13.1937 10.2328 13.3568 10.0852 13.4712L6.99644 15.825C6.25173 14.2158 5.74759 12.5058 5.50019 10.75ZM23.7964 25.03C23.5503 25.5163 23.163 25.917 22.6852 26.1793C22.2073 26.4416 21.6614 26.5534 21.1189 26.5C19.2996 26.2621 17.5285 25.7426 15.8689 24.96L18.4939 21.3287C18.5989 21.1771 18.757 21.0704 18.9369 21.0299C19.1168 20.9893 19.3054 21.0179 19.4652 21.11L24.3652 23.8312L23.7964 25.03ZM16.8752 7.24998V5.49998C19.4279 5.49998 21.8761 6.51404 23.6811 8.31907C25.4861 10.1241 26.5002 12.5723 26.5002 15.125H24.7502C24.7502 13.0364 23.9205 11.0334 22.4437 9.55651C20.9668 8.07966 18.9638 7.24998 16.8752 7.24998ZM16.8752 11.625V9.87498C18.2676 9.87498 19.6029 10.4281 20.5875 11.4127C21.5721 12.3972 22.1252 13.7326 22.1252 15.125H20.3752C20.3752 14.1967 20.0064 13.3065 19.3501 12.6501C18.6937 11.9937 17.8035 11.625 16.8752 11.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
