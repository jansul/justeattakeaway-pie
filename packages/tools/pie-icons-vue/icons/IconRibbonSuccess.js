import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRibbonSuccess',
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
            class: 'c-pieIcon c-pieIcon--ribbonSuccess'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.6962 12.0425C13.0768 11.4642 12.5617 10.7834 12.1737 10.03C12.2703 9.72143 12.3176 9.39955 12.3138 9.07625C12.3071 8.88183 12.3277 8.68744 12.375 8.49875C12.4738 8.34477 12.5914 8.20369 12.725 8.07875C12.9368 7.90867 13.1124 7.69799 13.2417 7.45907C13.3709 7.22016 13.4511 6.95783 13.4775 6.6875C13.4511 6.41717 13.3709 6.15484 13.2417 5.91593C13.1124 5.67701 12.9368 5.46633 12.725 5.29625C12.5914 5.17131 12.4738 5.03023 12.375 4.87625C12.3311 4.69003 12.3135 4.4986 12.3225 4.3075C12.3758 3.77221 12.2154 3.23754 11.8763 2.82C11.4587 2.48083 10.924 2.32043 10.3888 2.37375C10.1976 2.38279 10.0062 2.36512 9.82 2.32125C9.66602 2.22246 9.52494 2.10489 9.4 1.97125C9.22892 1.75847 9.01684 1.58221 8.77635 1.45295C8.53586 1.32369 8.27186 1.24404 8 1.21875C7.72967 1.24518 7.46734 1.32536 7.22843 1.45458C6.98951 1.5838 6.77883 1.75947 6.60875 1.97125C6.48381 2.10489 6.34273 2.22246 6.18875 2.32125C6.00253 2.36512 5.8111 2.38279 5.62 2.37375C5.08471 2.32043 4.55004 2.48083 4.1325 2.82C3.79471 3.23486 3.63433 3.76629 3.68625 4.29875C3.69291 4.49317 3.67229 4.68756 3.625 4.87625C3.52621 5.03023 3.40864 5.17131 3.275 5.29625C3.06483 5.46711 2.89081 5.67815 2.76311 5.91702C2.63541 6.1559 2.55659 6.41782 2.53125 6.6875C2.55768 6.95783 2.63786 7.22016 2.76708 7.45907C2.8963 7.69799 3.07197 7.90867 3.28375 8.07875C3.41739 8.20369 3.53496 8.34477 3.63375 8.49875C3.67762 8.68497 3.69529 8.8764 3.68625 9.0675C3.68179 9.39371 3.72904 9.71857 3.82625 10.03C3.43827 10.7834 2.92322 11.4642 2.30375 12.0425L1.65625 12.6463L5.6025 14.9475L5.96125 14.58C6.65414 13.8377 7.24286 13.0047 7.71125 12.1037C7.81076 12.1339 7.91363 12.1515 8.0175 12.1562C8.12137 12.1515 8.22424 12.1339 8.32375 12.1037C8.79214 13.0047 9.38086 13.8377 10.0737 14.58L10.4325 14.9475L14.3787 12.6463L13.6962 12.0425ZM4.22875 6.25C4.487 6.00019 4.69493 5.70316 4.84125 5.375C4.95573 5.03714 5.00907 4.68158 4.99875 4.325C4.98971 4.13051 5.01036 3.93577 5.06 3.7475C5.25004 3.69113 5.44828 3.66746 5.64625 3.6775C6.00286 3.68839 6.35853 3.63504 6.69625 3.52C7.00568 3.36804 7.28449 3.16041 7.51875 2.9075C7.65 2.785 7.9125 2.5225 8 2.5225C8.0875 2.5225 8.35 2.785 8.48125 2.9075C8.71551 3.16041 8.99432 3.36804 9.30375 3.52C9.64147 3.63504 9.99714 3.68839 10.3537 3.6775C10.5482 3.66913 10.7429 3.68977 10.9313 3.73875C10.9876 3.92879 11.0113 4.12703 11.0013 4.325C10.9909 4.68158 11.0443 5.03714 11.1587 5.375C11.3107 5.68443 11.5183 5.96324 11.7713 6.1975C11.8938 6.32875 12.1562 6.59125 12.1562 6.67875C12.1562 6.76625 11.8938 7.02875 11.7713 7.16C11.5183 7.39426 11.3107 7.67307 11.1587 7.9825C11.0443 8.32036 10.9909 8.67592 11.0013 9.0325C11.0103 9.22699 10.9896 9.42173 10.94 9.61C10.75 9.66637 10.5517 9.69004 10.3537 9.68C9.99714 9.66911 9.64147 9.72246 9.30375 9.8375C8.99432 9.98946 8.71551 10.1971 8.48125 10.45C8.35 10.5725 8.0875 10.835 8 10.835C7.9125 10.835 7.65 10.5725 7.51875 10.45C7.28449 10.1971 7.00568 9.98946 6.69625 9.8375C6.35853 9.72246 6.00286 9.66911 5.64625 9.68C5.45178 9.68837 5.25714 9.66773 5.06875 9.61875C5.01238 9.42871 4.98871 9.23047 4.99875 9.0325C5.007 8.68177 4.95369 8.33232 4.84125 8C4.68929 7.69057 4.48166 7.41176 4.22875 7.1775C4.10625 7.04625 3.84375 6.78375 3.84375 6.69625C3.84375 6.60875 4.10625 6.3375 4.22875 6.25ZM5.375 13.25L3.80875 12.375C4.1989 11.9241 4.54193 11.4344 4.8325 10.9137C5.09194 10.9647 5.35561 10.991 5.62 10.9925C5.8111 10.9835 6.00253 11.0011 6.18875 11.045C6.33528 11.14 6.47034 11.2515 6.59125 11.3775C6.25246 12.0425 5.84481 12.6701 5.375 13.25ZM10.625 13.25C10.1435 12.6656 9.72962 12.0286 9.39125 11.3512C9.51216 11.2253 9.64722 11.1137 9.79375 11.0188C9.97997 10.9749 10.1714 10.9572 10.3625 10.9663C10.6269 10.9648 10.8906 10.9384 11.15 10.8875C11.4446 11.4181 11.7935 11.9166 12.1912 12.375L10.625 13.25Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.06066 5.43934L9.76777 6.14645L7.64645 8.26777L6.93934 7.56066L9.06066 5.43934Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.93934 6.14645L8.35355 7.56066L7.64645 8.26777L6.23223 6.85355L6.93934 6.14645Z',
                fill: '#242E30'
            }
        })]);
    }
};
