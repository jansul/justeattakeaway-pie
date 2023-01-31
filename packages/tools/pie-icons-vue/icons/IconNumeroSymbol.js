import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNumeroSymbol',
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
            class: 'c-pieIcon c-pieIcon--numeroSymbol'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.1826 9.01496C11.7959 9.02292 11.4118 8.95145 11.0538 8.80496C10.7463 8.67748 10.469 8.48668 10.2401 8.24496C10.0176 8.01069 9.85015 7.72968 9.75008 7.42246C9.63766 7.09898 9.58144 6.75865 9.58383 6.41621C9.57566 6.06191 9.63199 5.70909 9.75008 5.37496C9.8463 5.05047 10.0137 4.75154 10.2401 4.49996C10.469 4.25823 10.7463 4.06743 11.0538 3.93996C11.4118 3.79347 11.7959 3.72199 12.1826 3.72996C12.5722 3.72104 12.9594 3.79252 13.3201 3.93996C13.6251 4.06734 13.8996 4.25824 14.1251 4.49996C14.3429 4.7548 14.5039 5.05307 14.5976 5.37496C14.7116 5.69804 14.7678 6.03864 14.7638 6.38121C14.7662 6.72365 14.71 7.06398 14.5976 7.38746C14.5004 7.6921 14.3393 7.9725 14.1251 8.20996C13.8996 8.45167 13.6251 8.64258 13.3201 8.76996C12.9619 8.92939 12.5746 9.01282 12.1826 9.01496ZM10.9313 6.38996C10.9089 6.80142 11.026 7.20841 11.2638 7.54496C11.3763 7.67921 11.5169 7.78717 11.6757 7.86124C11.8344 7.93532 12.0074 7.97371 12.1826 7.97371C12.3577 7.97371 12.5308 7.93532 12.6895 7.86124C12.8482 7.78717 12.9888 7.67921 13.1013 7.54496C13.336 7.2073 13.4501 6.80041 13.4251 6.38996C13.4514 5.97664 13.3373 5.56655 13.1013 5.22621C12.9888 5.09196 12.8482 4.98399 12.6895 4.90992C12.5308 4.83584 12.3577 4.79746 12.1826 4.79746C12.0074 4.79746 11.8344 4.83584 11.6757 4.90992C11.5169 4.98399 11.3763 5.09196 11.2638 5.22621C11.019 5.5726 10.9015 5.99305 10.9313 6.41621V6.38996Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.66133 2.98621V10.45L3.17883 2.98621H1.23633V13.0137H2.59258V4.80621L6.43383 13.0137H8.01758V2.98621H6.66133Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.3613 11.2812V9.9687H9.98633V11.2812H14.3613Z',
                fill: '#242E30'
            }
        })]);
    }
};
