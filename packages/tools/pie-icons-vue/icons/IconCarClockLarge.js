import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCarClockLarge',
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
            class: 'c-pieIcon c-pieIcon--carClockLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.75 17.75H7.25V19.5H10.75V17.75Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M24.75 17.75H21.25V19.5H24.75V17.75Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.5 22.0025C26.3565 22.1175 26.1838 22.1902 26.0013 22.2125C22.694 22.7427 19.3495 23.0061 16 23C12.6566 22.9995 9.31839 22.7362 6.01625 22.2125C5.82882 22.1886 5.65086 22.1163 5.5 22.0025V16.4112C5.49776 16.2609 5.52759 16.1117 5.5875 15.9738L6.3225 14.2238C9.51465 14.8147 12.7536 15.1163 16 15.125H16.1575C15.6658 14.5948 15.2398 14.0072 14.8888 13.375C12.2479 13.3199 9.61522 13.0625 7.01375 12.605L8.23 7.8275C8.25256 7.69878 8.30789 7.57803 8.39064 7.47689C8.4734 7.37574 8.5808 7.29761 8.7025 7.25C10.5208 6.79872 12.3787 6.52618 14.25 6.43625C14.4334 5.80391 14.6919 5.19583 15.02 4.625C12.7274 4.70678 10.4492 5.02343 8.22125 5.57C7.80424 5.7002 7.42876 5.93765 7.13238 6.2586C6.83601 6.57955 6.62914 6.97272 6.5325 7.39875L5.675 10.75H3.3125L2.4375 12.5H5.17625L3.9775 15.2825C3.82756 15.6399 3.75023 16.0236 3.75 16.4112V26.5H5.5V23.875L5.71 23.9275C9.11344 24.4684 12.5538 24.7434 16 24.75C19.4522 24.7574 22.8993 24.4853 26.3075 23.9362L26.5 23.875V26.5H28.25V16.4112C28.2499 16.232 28.2323 16.0533 28.1975 15.8775C27.6809 16.323 27.1106 16.7022 26.5 17.0062V22.0025Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23.4375 5.33375H21.6875V9.7875L24.925 11.765L25.8263 10.2425L23.4375 8.78125V5.33375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.5625 2.21875C21.178 2.21875 19.8247 2.62929 18.6735 3.39846C17.5224 4.16763 16.6252 5.26088 16.0953 6.53997C15.5655 7.81905 15.4269 9.22651 15.697 10.5844C15.9671 11.9422 16.6338 13.1895 17.6128 14.1685C18.5917 15.1475 19.839 15.8142 21.1969 16.0842C22.5547 16.3543 23.9622 16.2157 25.2413 15.6859C26.5204 15.1561 27.6136 14.2589 28.3828 13.1077C29.152 11.9566 29.5625 10.6032 29.5625 9.21875C29.5625 7.36223 28.825 5.58176 27.5122 4.269C26.1995 2.95625 24.419 2.21875 22.5625 2.21875ZM22.5625 14.4688C21.5241 14.4688 20.5091 14.1608 19.6458 13.584C18.7824 13.0071 18.1095 12.1872 17.7121 11.2278C17.3148 10.2685 17.2108 9.21293 17.4134 8.19453C17.6159 7.17613 18.116 6.24067 18.8502 5.50644C19.5844 4.77221 20.5199 4.2722 21.5383 4.06963C22.5567 3.86705 23.6123 3.97102 24.5716 4.36838C25.5309 4.76574 26.3508 5.43865 26.9277 6.30201C27.5046 7.16536 27.8125 8.1804 27.8125 9.21875C27.8125 10.6111 27.2594 11.9465 26.2748 12.9311C25.2902 13.9156 23.9549 14.4688 22.5625 14.4688Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23.4375 5.5H21.6875V9.8925L24.925 11.835L25.8263 10.33L23.4375 8.895V5.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
