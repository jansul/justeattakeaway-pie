import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPickUp',
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
            class: 'c-pieIcon c-pieIcon--pickUp'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_4_159)'
            }
        }, [h('path', {
            attrs: {
                d: 'M8.87491 2.53125H14.9999V1.21875H8.87491C8.03748 1.23432 7.22212 1.48995 6.52569 1.95527C5.82926 2.42059 5.28104 3.07604 4.94616 3.84375H3.25741L3.13491 3.89625C2.85512 4.01318 2.6048 4.19079 2.40203 4.41626C2.19926 4.64173 2.0491 4.90942 1.96241 5.2C1.85906 5.61473 1.87847 6.05056 2.01828 6.45446C2.15809 6.85836 2.41227 7.21292 2.74991 7.475L1.95366 13.425C1.94162 13.79 2.07362 14.1452 2.32116 14.4137C2.433 14.533 2.56873 14.6274 2.71949 14.6907C2.87026 14.7541 3.03267 14.7849 3.19616 14.7812H11.8674C12.0309 14.7849 12.1933 14.7541 12.3441 14.6907C12.4948 14.6274 12.6306 14.533 12.7424 14.4137C12.8724 14.2736 12.9715 14.1077 13.0333 13.9268C13.0951 13.746 13.1182 13.5541 13.1012 13.3638L12.3312 7.57125C12.6695 7.42882 12.9753 7.21875 13.2295 6.95393C13.4838 6.68911 13.6813 6.37513 13.8099 6.03125H14.9999V4.71875H12.7337L12.6112 5.22625C12.5747 5.43266 12.497 5.62959 12.3826 5.80523C12.2682 5.98088 12.1196 6.13164 11.9455 6.24847C11.7715 6.3653 11.5757 6.4458 11.3698 6.48516C11.164 6.52451 10.9523 6.52191 10.7474 6.4775L10.4062 6.41625L9.27741 7.545C9.16961 7.64977 9.02522 7.70837 8.87491 7.70837C8.72459 7.70837 8.5802 7.64977 8.47241 7.545C8.4183 7.48947 8.37574 7.42375 8.34721 7.35166C8.31867 7.27956 8.30472 7.20252 8.30616 7.125C8.30621 7.0495 8.32177 6.97482 8.35187 6.90558C8.38197 6.83635 8.42598 6.77403 8.48116 6.7225L10.0999 5.1825C10.2201 5.07547 10.3028 4.93273 10.3358 4.77525C10.3689 4.61777 10.3506 4.45383 10.2837 4.3075C10.2273 4.16309 10.1286 4.03906 10.0006 3.95163C9.8726 3.86421 9.72118 3.81746 9.56616 3.8175H6.45991C6.72471 3.42013 7.08392 3.09464 7.50538 2.87016C7.92684 2.64569 8.3974 2.52924 8.87491 2.53125ZM8.87491 9.02375C9.122 9.02416 9.36674 8.97567 9.595 8.88106C9.82327 8.78645 10.0306 8.64759 10.2049 8.4725L10.8699 7.8075H10.9574L11.7099 13.4688H3.26616L4.02741 7.78125H7.12491C7.21977 8.04023 7.36895 8.27592 7.56241 8.4725C7.91027 8.82187 8.3819 9.01995 8.87491 9.02375ZM8.23616 5.15625L7.57116 5.78625C7.3734 5.97765 7.22093 6.21083 7.12491 6.46875H3.62491C3.49283 6.36787 3.38998 6.23365 3.32694 6.07987C3.26389 5.9261 3.24291 5.75831 3.26616 5.59375C3.32224 5.4273 3.43743 5.2872 3.58991 5.2H8.23616V5.15625Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_4_159'
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
