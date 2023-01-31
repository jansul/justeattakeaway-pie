import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconVegetarianLarge',
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
            class: 'c-pieIcon c-pieIcon--vegetarianLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.1663 3.14626L22.7375 2.38501L21.9763 2.82251C21.5125 3.08501 10.6012 9.38501 8.85125 15.7463C8.5072 16.9983 8.41358 18.3059 8.57574 19.5942C8.7379 20.8824 9.15266 22.1261 9.79625 23.2538C10.4081 24.3146 11.2088 25.2547 12.1587 26.0275C9.88734 27.1013 7.31166 27.3458 4.87875 26.7188L4.44125 28.4163C5.46804 28.6768 6.52317 28.8091 7.5825 28.81C9.77589 28.8045 11.9297 28.2253 13.83 27.13C14.4511 27.4533 15.1053 27.7085 15.7812 27.8913C16.6364 28.1268 17.5192 28.2475 18.4062 28.25C20.5705 28.2433 22.673 27.5279 24.3922 26.2132C26.1114 24.8985 27.3527 23.0569 27.9262 20.97C29.6325 14.6088 23.4288 3.61001 23.1663 3.14626ZM26.2025 20.5063C25.6298 22.5867 24.2551 24.355 22.38 25.4229C20.505 26.4909 18.2828 26.7713 16.2012 26.2025L15.4663 25.9663C15.8061 25.693 16.1304 25.4009 16.4375 25.0913L16.6913 24.9775L16.7438 24.7938C18.1816 23.2515 19.2051 21.37 19.7187 19.325L20.3575 16.7875L18.625 16.35L17.9863 18.8875C17.8331 19.4875 17.6281 20.073 17.3737 20.6375C16.9627 19.3207 16.1057 18.1882 14.95 17.435L13.9787 18.8963C14.4423 19.1878 14.8413 19.5711 15.1513 20.0225C15.4612 20.4739 15.6756 20.9839 15.7812 21.5213C15.8523 21.9135 15.8424 22.3161 15.7521 22.7043C15.6618 23.0925 15.4931 23.4582 15.2562 23.7788C14.7887 24.2586 14.2759 24.6923 13.725 25.0738C12.3297 24.1157 11.269 22.7452 10.6916 21.1541C10.1141 19.5631 10.0489 17.8312 10.505 16.2013C11.8175 11.4413 19.5788 6.37501 22.0725 4.80001C23.4375 7.39001 27.515 15.7375 26.2025 20.5063Z',
                fill: '#242E30'
            }
        })]);
    }
};
