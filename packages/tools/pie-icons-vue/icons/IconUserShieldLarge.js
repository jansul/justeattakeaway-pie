import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUserShieldLarge',
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
            class: 'c-pieIcon c-pieIcon--userShieldLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.8162 21.25C22.0987 18.9225 20.0775 17.3563 17.785 17.3563H17.19C17.715 17.1725 18.205 16.8925 18.6075 16.49C20.0513 15.0463 20.0513 12.7013 18.6075 11.2663C17.1637 9.83127 14.8188 9.82252 13.3837 11.2663C12.6838 11.9663 12.2988 12.8938 12.2988 13.8825C12.2988 14.8713 12.6838 15.7988 13.3837 16.4988C13.7863 16.9013 14.2763 17.19 14.8013 17.365H14.2063C11.9138 17.365 9.8925 18.9313 9.175 21.2588L9 21.8363H10.8288L10.8462 21.775C11.3362 20.1913 12.6837 19.1238 14.1975 19.1238H17.7675C19.2812 19.1238 20.6375 20.1913 21.1187 21.775L21.1363 21.8363H22.965L22.79 21.2588L22.8162 21.25ZM14.6263 15.2563C14.2587 14.8888 14.0575 14.3988 14.0575 13.8825C14.0575 13.3663 14.2587 12.8763 14.6263 12.5088C15.0025 12.1325 15.5013 11.94 16 11.94C16.4987 11.94 16.9975 12.1325 17.3737 12.5088C18.135 13.27 18.135 14.5038 17.3737 15.265C16.6125 16.0263 15.3525 16 14.6175 15.265L14.6263 15.2563Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25.9575 7.93252L16 2.77002L6.0425 7.93252C5.1675 8.38752 4.625 9.28002 4.625 10.26V17.3738C4.625 17.4613 4.835 26.2463 15.7812 29.0988L16 29.16L16.2188 29.0988C27.165 26.2375 27.375 17.4613 27.375 17.365V10.26C27.375 9.28002 26.8325 8.37877 25.9575 7.93252ZM25.625 17.3563C25.625 17.6625 25.3975 24.785 16 27.3488C6.6025 24.785 6.38375 17.6625 6.375 17.365V10.26C6.375 9.92752 6.55875 9.63877 6.8475 9.48127L16 4.73877L25.1525 9.48127C25.4412 9.63002 25.625 9.92752 25.625 10.26V17.3563Z',
                fill: '#242E30'
            }
        })]);
    }
};
