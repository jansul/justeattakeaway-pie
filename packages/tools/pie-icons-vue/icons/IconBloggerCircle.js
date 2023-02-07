import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBloggerCircle',
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
            class: 'c-pieIcon c-pieIcon--bloggerCircle'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_3633_3283)'
            }
        }, [h('path', {
            attrs: {
                d: 'M7.99986 1.17505C6.66053 1.17508 5.35119 1.57171 4.23699 2.31492C3.12278 3.05814 2.25362 4.11465 1.7391 5.3512C1.22458 6.58776 1.08776 7.94899 1.34589 9.26321C1.60402 10.5774 2.24554 11.7858 3.18954 12.7359C4.13354 13.686 5.33775 14.3352 6.65029 14.6018C7.96283 14.8684 9.32491 14.7403 10.5648 14.2338C11.8046 13.7272 12.8667 12.8649 13.6171 11.7555C14.3674 10.6461 14.7725 9.33932 14.7811 8.00002C14.7857 7.10614 14.6138 6.22015 14.2752 5.39288C13.9365 4.56561 13.4379 3.81335 12.8079 3.17924C12.1778 2.54514 11.4288 2.04168 10.6037 1.69775C9.77862 1.35382 8.89375 1.17619 7.99986 1.17505ZM7.99986 13.425C6.91639 13.425 5.85734 13.1031 4.95709 12.5002C4.05683 11.8974 3.35595 11.0407 2.94335 10.0388C2.53075 9.037 2.42503 7.93519 2.63961 6.87318C2.8542 5.81117 3.37941 4.83684 4.14861 4.0738C4.91781 3.31075 5.89633 2.79339 6.96003 2.58734C8.02373 2.3813 9.12467 2.49586 10.1232 2.91649C11.1216 3.33712 11.9727 4.04487 12.5683 4.94993C13.1639 5.85499 13.4773 6.91659 13.4686 8.00002C13.4571 9.44282 12.8758 10.8226 11.8515 11.8387C10.8271 12.8549 9.44272 13.425 7.99986 13.425Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.8407 7.38326C10.7755 7.33123 10.6942 7.30322 10.6106 7.30397H10.2743C10.2245 7.3034 10.1752 7.29447 10.1283 7.27753C10.0559 7.25041 9.99315 7.20239 9.94823 7.13962C9.9033 7.07684 9.87819 7.00216 9.87611 6.92511C9.8764 6.75552 9.85408 6.58665 9.80974 6.42291C9.6958 6.01442 9.45077 5.65424 9.11204 5.39733C8.7733 5.14043 8.35946 5.00088 7.93363 5H6.94691C6.78274 5.00068 6.61928 5.02139 6.46018 5.06167C6.04413 5.16939 5.67544 5.41089 5.4114 5.74865C5.14736 6.08641 5.00274 6.50152 5.00001 6.92952V9.07489C4.9996 9.22308 5.01593 9.37086 5.04868 9.51542C5.12323 9.81651 5.26892 10.0955 5.47365 10.3292C5.67837 10.5629 5.9362 10.7446 6.22567 10.859C6.45617 10.9522 6.70258 11 6.95133 11H9.0531C9.22164 10.9993 9.38949 10.9786 9.5531 10.9383C9.96815 10.8277 10.3349 10.5839 10.5966 10.2446C10.8582 9.90524 11 9.48944 11 9.06167V7.68722C10.9993 7.62766 10.9845 7.56909 10.9569 7.51628C10.9292 7.46346 10.8894 7.41789 10.8407 7.38326ZM6.82301 6.5815H7.99558C8.08028 6.58155 8.16243 6.6104 8.22841 6.66327C8.29439 6.71615 8.34026 6.78988 8.35841 6.87225C8.36786 6.9238 8.36633 6.97676 8.35393 7.02769C8.34153 7.07862 8.31853 7.12639 8.28641 7.16791C8.2543 7.20944 8.21379 7.24378 8.1675 7.26874C8.12121 7.29369 8.07018 7.30869 8.0177 7.31278H6.80974C6.72719 7.29451 6.65335 7.24877 6.60044 7.18309C6.54752 7.11742 6.51868 7.03574 6.51868 6.95154C6.51868 6.86735 6.54752 6.78567 6.60044 6.71999C6.65335 6.65432 6.72719 6.60857 6.80974 6.59031L6.82301 6.5815ZM9.16372 9.45374H6.91151C6.85391 9.45616 6.79658 9.44453 6.74452 9.41987C6.69246 9.39521 6.64724 9.35826 6.61278 9.31223C6.57833 9.26621 6.55569 9.2125 6.54683 9.15578C6.53797 9.09907 6.54316 9.04105 6.56195 8.98678C6.58103 8.92735 6.61642 8.87442 6.66411 8.83394C6.7118 8.79346 6.7699 8.76706 6.83186 8.75771C6.86563 8.75317 6.89986 8.75317 6.93363 8.75771H9.07965C9.1192 8.75122 9.15956 8.75122 9.19912 8.75771C9.27678 8.77906 9.3448 8.82615 9.39194 8.8912C9.43908 8.95625 9.46252 9.03536 9.4584 9.11546C9.45427 9.19557 9.42282 9.27188 9.36924 9.33178C9.31566 9.39169 9.24316 9.4316 9.16372 9.44493V9.45374Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_3633_3283'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: 'white',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};