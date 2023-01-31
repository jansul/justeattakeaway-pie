import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCreditCardFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--creditCardFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M2.875 13.8125V23C2.875 23.6962 3.15156 24.3639 3.64384 24.8562C4.13613 25.3484 4.80381 25.625 5.5 25.625H26.5C27.1962 25.625 27.8639 25.3484 28.3562 24.8562C28.8484 24.3639 29.125 23.6962 29.125 23V13.8125H2.875ZM12.5 20.375H7.25V18.625H12.5V20.375ZM23.2537 20.9962C23.0394 20.9971 22.8275 20.9514 22.6326 20.8623C22.4377 20.7731 22.2645 20.6427 22.125 20.48C21.9252 20.7105 21.6598 20.8744 21.3642 20.9498C21.0687 21.0252 20.7571 21.0085 20.4714 20.9019C20.1856 20.7953 19.9392 20.6039 19.7653 20.3533C19.5913 20.1027 19.4981 19.805 19.4981 19.5C19.4981 19.195 19.5913 18.8973 19.7653 18.6467C19.9392 18.3961 20.1856 18.2047 20.4714 18.0981C20.7571 17.9915 21.0687 17.9748 21.3642 18.0502C21.6598 18.1256 21.9252 18.2895 22.125 18.52C22.2892 18.3306 22.4983 18.1855 22.7332 18.0979C22.968 18.0104 23.2211 17.9833 23.4692 18.0191C23.7173 18.0548 23.9524 18.1524 24.153 18.3027C24.3536 18.453 24.5132 18.6513 24.6171 18.8794C24.7211 19.1075 24.7661 19.358 24.748 19.608C24.7299 19.858 24.6493 20.0995 24.5136 20.3102C24.3779 20.5209 24.1914 20.6942 23.9712 20.814C23.7511 20.9339 23.5044 20.9966 23.2537 20.9962ZM2.875 11.1875V9C2.875 8.30381 3.15156 7.63613 3.64384 7.14384C4.13613 6.65156 4.80381 6.375 5.5 6.375H26.5C27.1962 6.375 27.8639 6.65156 28.3562 7.14384C28.8484 7.63613 29.125 8.30381 29.125 9V11.1875H2.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
