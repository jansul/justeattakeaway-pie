import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNuts',
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
            class: 'c-pieIcon c-pieIcon--nuts'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.345 4.50001C10.5866 4.50001 10.7825 4.30414 10.7825 4.06251C10.7825 3.82089 10.5866 3.62501 10.345 3.62501C10.1034 3.62501 9.9075 3.82089 9.9075 4.06251C9.9075 4.30414 10.1034 4.50001 10.345 4.50001Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.0625 6.25001C11.3041 6.25001 11.5 6.05414 11.5 5.81251C11.5 5.57089 11.3041 5.37501 11.0625 5.37501C10.8209 5.37501 10.625 5.57089 10.625 5.81251C10.625 6.05414 10.8209 6.25001 11.0625 6.25001Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M9.3125 6.12751C9.55412 6.12751 9.75 5.93164 9.75 5.69001C9.75 5.44839 9.55412 5.25251 9.3125 5.25251C9.07087 5.25251 8.875 5.44839 8.875 5.69001C8.875 5.93164 9.07087 6.12751 9.3125 6.12751Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.585 14.7813H5.08625C4.42739 14.6992 3.79585 14.4683 3.23947 14.1059C2.6831 13.7436 2.21649 13.2594 1.875 12.69C1.43405 11.9844 1.2061 11.1666 1.21852 10.3347C1.23094 9.50276 1.48319 8.6921 1.945 8.00001C2.58282 7.05886 3.56195 6.40297 4.675 6.17126C5.07031 6.08435 5.43328 5.88818 5.72256 5.60508C6.01184 5.32199 6.21581 4.96335 6.31125 4.57001C6.34574 4.4063 6.39254 4.24542 6.45125 4.08876C6.70609 3.35432 7.15621 2.70319 7.75325 2.20531C8.35029 1.70743 9.0717 1.38161 9.83997 1.26286C10.6082 1.14411 11.3944 1.23692 12.1139 1.5313C12.8334 1.82569 13.4591 2.31054 13.9237 2.93376C14.4065 3.58156 14.7005 4.3504 14.7731 5.15506C14.8457 5.95972 14.6941 6.76876 14.335 7.49251C14.0408 8.11309 13.5804 8.64006 13.005 9.01501C12.526 9.33075 11.9961 9.56162 11.4387 9.69751C11.0215 9.81898 10.6446 10.0504 10.3475 10.3675C10.0504 10.6846 9.84406 11.0758 9.75 11.5C9.50256 12.4267 8.95746 13.2463 8.19859 13.8329C7.43971 14.4194 6.50911 14.7404 5.55 14.7463L5.585 14.7813ZM10.4762 2.53126C10.3219 2.51855 10.1668 2.51855 10.0125 2.53126C9.48441 2.6225 8.99025 2.85309 8.58108 3.19919C8.17191 3.54529 7.86256 3.99436 7.685 4.50001C7.64486 4.61133 7.61269 4.72537 7.58875 4.84126C7.44139 5.48094 7.11711 6.06629 6.65295 6.53046C6.18878 6.99462 5.60343 7.3189 4.96375 7.46626C4.57193 7.54388 4.19935 7.69826 3.86747 7.92052C3.53558 8.14278 3.25096 8.42851 3.03 8.76126C2.71233 9.23896 2.53779 9.79749 2.52694 10.3711C2.51609 10.9446 2.66938 11.5094 2.96875 11.9988C3.20771 12.3942 3.53351 12.73 3.92149 12.9809C4.30947 13.2318 4.74945 13.3911 5.20811 13.4467C5.66677 13.5024 6.13207 13.4529 6.56878 13.3021C7.0055 13.1513 7.40217 12.9031 7.72875 12.5763C8.10633 12.1995 8.37536 11.728 8.5075 11.2113C8.64962 10.5512 8.96919 9.94239 9.43176 9.45052C9.89434 8.95865 10.4824 8.60235 11.1325 8.42001C11.5465 8.31831 11.94 8.14667 12.2962 7.91251C12.6705 7.67398 12.9729 7.33828 13.1712 6.94126C13.4287 6.43208 13.5397 5.86139 13.4918 5.29283C13.4439 4.72427 13.239 4.18018 12.9 3.72126C12.6166 3.34787 12.2498 3.04584 11.829 2.83923C11.4082 2.63263 10.945 2.52717 10.4762 2.53126Z',
                fill: '#242E30'
            }
        })]);
    }
};
