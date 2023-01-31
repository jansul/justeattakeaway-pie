import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPinterest',
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
            class: 'c-pieIcon c-pieIcon--pinterest'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_1615_900)'
            }
        }, [h('path', {
            attrs: {
                d: 'M7.99997 1.875C4.61726 1.875 1.875 4.61727 1.875 8C1.875 10.5949 3.48944 12.8131 5.76788 13.7056C5.71436 13.221 5.66596 12.4757 5.78912 11.9466C5.90043 11.4686 6.50734 8.90209 6.50734 8.90209C6.50734 8.90209 6.32413 8.53517 6.32413 7.99272C6.32413 7.14104 6.81778 6.5052 7.43242 6.5052C7.95499 6.5052 8.20738 6.89753 8.20738 7.36798C8.20738 7.89351 7.8728 8.67922 7.70013 9.40734C7.55584 10.017 8.00585 10.5141 8.60714 10.5141C9.69575 10.5141 10.5326 9.36627 10.5326 7.70934C10.5326 6.24281 9.4788 5.21746 7.97412 5.21746C6.23135 5.21746 5.20841 6.52463 5.20841 7.87553C5.20841 8.40197 5.4112 8.96646 5.66425 9.27333C5.71431 9.33398 5.72164 9.3871 5.70672 9.44901C5.66023 9.64246 5.5569 10.0585 5.53662 10.1436C5.50991 10.2558 5.44785 10.2796 5.33177 10.2255C4.5668 9.86945 4.08852 8.75101 4.08852 7.85269C4.08852 5.92058 5.49234 4.14617 8.13554 4.14617C10.2603 4.14617 11.9115 5.66025 11.9115 7.68369C11.9115 9.79459 10.5805 11.4934 8.73316 11.4934C8.11249 11.4934 7.52902 11.171 7.3293 10.7901C7.3293 10.7901 7.02217 11.9596 6.94772 12.2462C6.80944 12.7782 6.43615 13.445 6.18646 13.8519C6.75954 14.0293 7.36856 14.125 7.99997 14.125C11.3827 14.125 14.125 11.3827 14.125 8C14.125 4.61727 11.3827 1.875 7.99997 1.875Z',
                fill: '#E60023'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_1615_900'
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
