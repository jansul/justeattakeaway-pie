import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCamera',
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
            class: 'c-pieIcon c-pieIcon--camera'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 4.71876C7.43756 4.71876 6.88775 4.88554 6.4201 5.19802C5.95245 5.51049 5.58796 5.95463 5.37272 6.47425C5.15749 6.99388 5.10117 7.56566 5.2109 8.1173C5.32062 8.66893 5.59146 9.17564 5.98917 9.57334C6.38688 9.97105 6.89358 10.2419 7.44522 10.3516C7.99685 10.4613 8.56863 10.405 9.08826 10.1898C9.60789 9.97456 10.052 9.61006 10.3645 9.14241C10.677 8.67476 10.8438 8.12495 10.8438 7.56251C10.8414 6.80901 10.5411 6.08703 10.0083 5.55422C9.47548 5.02142 8.7535 4.72107 8 4.71876ZM8 9.09376C7.69715 9.09376 7.4011 9.00395 7.14929 8.8357C6.89747 8.66744 6.70121 8.42829 6.58531 8.14849C6.46942 7.86869 6.43909 7.56081 6.49818 7.26378C6.55726 6.96674 6.7031 6.6939 6.91725 6.47975C7.1314 6.2656 7.40424 6.11977 7.70127 6.06068C7.99831 6.0016 8.30619 6.03192 8.58599 6.14782C8.86579 6.26372 9.10494 6.45998 9.27319 6.71179C9.44145 6.9636 9.53125 7.25966 9.53125 7.56251C9.52896 7.96791 9.36689 8.35606 9.08022 8.64273C8.79355 8.9294 8.40541 9.09146 8 9.09376ZM13.6175 3.62501C12.865 3.44126 12.0863 3.30126 11.2988 3.18751L10.8438 2.13751C10.7242 1.8636 10.5271 1.63066 10.2768 1.46741C10.0265 1.30415 9.73386 1.21772 9.435 1.21876H6.565C6.26517 1.21846 5.97185 1.30619 5.72142 1.47106C5.47099 1.63594 5.27447 1.87072 5.15625 2.14626L4.70125 3.19626C3.9225 3.31001 3.1525 3.45001 2.4 3.63376C2.06367 3.71111 1.76359 3.90044 1.54896 4.17071C1.33434 4.44098 1.21791 4.77614 1.21875 5.12126V11.5C1.22105 11.9054 1.38312 12.2936 1.66979 12.5802C1.95645 12.8669 2.3446 13.029 2.75 13.0313H13.25C13.6554 13.029 14.0436 12.8669 14.3302 12.5802C14.6169 12.2936 14.779 11.9054 14.7813 11.5V5.12126C14.7834 4.77741 14.6698 4.44284 14.4587 4.17142C14.2476 3.9 13.9513 3.70753 13.6175 3.62501ZM13.4688 11.5C13.4688 11.558 13.4457 11.6137 13.4047 11.6547C13.3637 11.6957 13.308 11.7188 13.25 11.7188H2.75C2.69199 11.7188 2.63635 11.6957 2.59532 11.6547C2.5543 11.6137 2.53125 11.558 2.53125 11.5V5.12126C2.53178 5.07278 2.54839 5.02585 2.57848 4.98784C2.60857 4.94983 2.65044 4.92289 2.6975 4.91126C3.53386 4.70868 4.38106 4.55385 5.235 4.44751H5.61125L6.36375 2.69751C6.38083 2.65838 6.40899 2.6251 6.44475 2.60178C6.48051 2.57846 6.52231 2.56611 6.565 2.56626H9.435C9.4777 2.56611 9.5195 2.57846 9.55526 2.60178C9.59102 2.6251 9.61918 2.65838 9.63625 2.69751L10.3888 4.44751H10.765C11.6213 4.55733 12.4712 4.71213 13.3113 4.91126C13.356 4.9257 13.3951 4.95365 13.4233 4.99125C13.4515 5.02886 13.4674 5.07427 13.4688 5.12126V11.5Z',
                fill: '#242E30'
            }
        })]);
    }
};
