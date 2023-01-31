import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDollar',
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
            class: 'c-pieIcon c-pieIcon--dollar'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.61251 7.30869C7.14251 6.92369 5.98751 6.57369 5.98751 5.55869C5.98751 4.54369 7.03751 4.17619 8.00001 4.17619C8.50294 4.17274 9.0013 4.27183 9.46465 4.4674C9.92801 4.66298 10.3466 4.95093 10.695 5.31369L11.6925 4.28119C10.9446 3.42957 9.89866 2.89719 8.77001 2.79369V1.09619H7.38751V2.79369C5.63751 2.98619 4.41251 3.98369 4.41251 5.66369C4.41251 7.50119 5.98751 8.21869 7.56251 8.63869C9.13751 9.05869 10.1875 9.32119 10.1875 10.3362C10.1875 11.3512 9.13751 11.8237 7.94751 11.8237C7.40225 11.8506 6.85774 11.7572 6.35265 11.55C5.84757 11.3429 5.39429 11.027 5.02501 10.6249L4.01001 11.7187C4.41663 12.1768 4.91124 12.5484 5.46442 12.8115C6.0176 13.0746 6.61803 13.2237 7.23001 13.2499V14.9474H8.64751V13.2499C10.45 13.0399 11.7625 12.0599 11.7625 10.2749C11.7625 8.48994 10.17 7.71119 8.61251 7.30869Z',
                fill: '#242E30'
            }
        })]);
    }
};
