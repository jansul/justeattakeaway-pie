import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationRestaurant',
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
            class: 'c-pieIcon c-pieIcon--locationRestaurant'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.7267 7.83383C12.1133 7.27256 11.3066 6.97031 10.4754 6.99035C9.64421 7.01038 8.85299 7.35114 8.26735 7.9413C7.6817 8.53146 7.34704 9.32528 7.3334 10.1566C7.31977 10.9879 7.62821 11.7923 8.19418 12.4013L10.4604 14.7026L12.7267 12.4013C13.3283 11.7935 13.6658 10.9728 13.6658 10.1176C13.6658 9.26234 13.3283 8.44164 12.7267 7.83383ZM11.7992 11.4826L10.4604 12.8301L9.12168 11.4826C8.76523 11.1194 8.56554 10.6308 8.56554 10.122C8.56554 9.61308 8.76523 9.12452 9.12168 8.76133C9.29667 8.58408 9.50512 8.44334 9.73494 8.34728C9.96475 8.25123 10.2113 8.20176 10.4604 8.20176C10.7095 8.20176 10.9561 8.25123 11.1859 8.34728C11.4157 8.44334 11.6242 8.58408 11.7992 8.76133C12.1556 9.12452 12.3553 9.61308 12.3553 10.122C12.3553 10.6308 12.1556 11.1194 11.7992 11.4826ZM4.69418 5.61133C5.09319 5.91785 5.58227 6.08402 6.08543 6.08402C6.58859 6.08402 7.07766 5.91785 7.47668 5.61133C7.74654 5.81607 8.0577 5.95968 8.38858 6.03221C8.71947 6.10473 9.06217 6.10443 9.39293 6.03133C9.7894 5.93776 10.1535 5.73946 10.4471 5.45712C10.7408 5.17479 10.9532 4.81879 11.0623 4.4263C11.1714 4.03381 11.1731 3.61924 11.0672 3.22588C10.9613 2.83251 10.7518 2.47479 10.4604 2.19008L9.58543 1.35883C9.35192 1.12939 9.0378 1.00059 8.71043 1.00008H3.46043C3.13394 0.996366 2.81929 1.12223 2.58543 1.35008L1.71043 2.22508C1.4727 2.44878 1.28632 2.72138 1.16413 3.02408C1.04194 3.32677 0.986844 3.65237 1.00265 3.97841C1.01845 4.30446 1.10477 4.6232 1.25567 4.91266C1.40656 5.20212 1.61843 5.45542 1.87668 5.65508V10.4063C1.87895 10.5797 1.94881 10.7453 2.0714 10.8679C2.19398 10.9904 2.35959 11.0603 2.53293 11.0626H6.08543V9.75008H3.24168V6.07508C3.76518 6.09511 4.27914 5.93101 4.69418 5.61133ZM2.67293 3.12633L3.46043 2.31258H8.15918H8.65793L9.53293 3.18758C9.62732 3.27987 9.70228 3.39014 9.75337 3.51186C9.80447 3.63359 9.83067 3.76431 9.83043 3.89633C9.82514 4.09856 9.75388 4.29352 9.6275 4.45149C9.50113 4.60946 9.32657 4.72178 9.13043 4.77133C8.92084 4.82162 8.70048 4.80077 8.50405 4.71206C8.30762 4.62335 8.14628 4.47182 8.04543 4.28133H6.90793C6.81762 4.41669 6.69531 4.52767 6.55183 4.60442C6.40835 4.68118 6.24815 4.72134 6.08543 4.72134C5.92271 4.72134 5.76251 4.68118 5.61903 4.60442C5.47555 4.52767 5.35324 4.41669 5.26293 4.28133H4.12543C4.02295 4.45997 3.86491 4.60023 3.67537 4.68079C3.48583 4.76134 3.27517 4.77777 3.07543 4.72758C2.87696 4.68103 2.69961 4.56979 2.5713 4.41138C2.44298 4.25297 2.371 4.05639 2.36668 3.85258C2.36623 3.71715 2.39312 3.58301 2.44574 3.45822C2.49836 3.33343 2.57564 3.22054 2.67293 3.12633Z',
                fill: '#242E30'
            }
        })]);
    }
};
