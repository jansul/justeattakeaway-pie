import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckCircle',
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
            class: 'c-pieIcon c-pieIcon--checkCircle'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.4952 8.00002C13.5015 9.26192 13.0726 10.4874 12.2808 11.47C11.489 12.4525 10.3826 13.1321 9.14823 13.3941C7.91382 13.6562 6.62682 13.4846 5.50411 12.9085C4.38141 12.3323 3.49166 11.3867 2.98479 10.2311C2.47793 9.07544 2.38495 7.78039 2.72153 6.56419C3.0581 5.34799 3.80365 4.28499 4.83253 3.55435C5.86141 2.82371 7.11071 2.4701 8.36989 2.5531C9.62908 2.6361 10.8211 3.15065 11.7452 4.01002L12.6202 3.04752C11.4761 1.99628 10.0049 1.37102 8.45397 1.27684C6.90307 1.18267 5.36703 1.62534 4.10409 2.53041C2.84116 3.43549 1.92834 4.74779 1.5191 6.24669C1.10986 7.74559 1.22916 9.33968 1.85694 10.761C2.48472 12.1823 3.58269 13.3441 4.96628 14.0511C6.34986 14.7581 7.93468 14.9672 9.45429 14.6433C10.9739 14.3193 12.3356 13.482 13.3106 12.2722C14.2855 11.0624 14.8142 9.55377 14.8077 8.00002C14.8048 7.20197 14.6597 6.41083 14.379 5.66377L13.3465 6.78377C13.4449 7.18171 13.4949 7.59009 13.4952 8.00002Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.06146 10.625C7.89717 10.6233 7.73494 10.5883 7.58455 10.5221C7.43416 10.4559 7.29874 10.36 7.18646 10.24L4.99021 7.78127L5.97021 6.90627L8.08771 9.28627L13.504 3.39752L14.4665 4.27252L8.94521 10.2225C8.83424 10.3441 8.69908 10.4412 8.5484 10.5075C8.39771 10.5738 8.23484 10.6079 8.07021 10.6075L8.06146 10.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
