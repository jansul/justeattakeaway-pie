import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCar',
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
            class: 'c-pieIcon c-pieIcon--car'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6 9H4.5V10H6V9Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.5 9H10V10H11.5V9Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M14.895 6.90625H13.495L13.775 7.55375C13.8628 7.76134 13.9074 7.98462 13.9062 8.21V13.25H12.5937V11.7713C11.076 12.0279 9.53931 12.1567 7.99998 12.1563C6.46065 12.1567 4.92401 12.0279 3.40623 11.7713V13.25H2.09373V8.21C2.09254 7.98462 2.1372 7.76134 2.22498 7.55375L2.50498 6.90625H1.10498L1.76998 5.59375H2.99498L3.49373 3.625C3.5527 3.37621 3.67708 3.14769 3.85399 2.96309C4.0309 2.77849 4.25392 2.6445 4.49998 2.575C6.79029 1.94131 9.20967 1.94131 11.5 2.575C11.746 2.6445 11.9691 2.77849 12.146 2.96309C12.3229 3.14769 12.4473 3.37621 12.5062 3.625L13.005 5.59375H14.23L14.895 6.90625ZM4.84998 3.835C4.80487 3.86572 4.77348 3.9128 4.76248 3.96625L4.20248 6.1275C6.71155 6.57369 9.27966 6.57369 11.7887 6.1275L11.2375 3.96625C11.2265 3.9128 11.1951 3.86572 11.15 3.835C9.08847 3.26643 6.91149 3.26643 4.84998 3.835ZM12.6375 10.4325V9.8375L12.5675 8.21C12.5767 8.16379 12.5767 8.11622 12.5675 8.07L12.27 7.37C10.8634 7.64532 9.43329 7.78306 7.99998 7.78125C6.57254 7.78148 5.14842 7.64376 3.74748 7.37L3.44998 8.07C3.44079 8.11622 3.44079 8.16379 3.44998 8.21V10.4325H3.52873C6.51878 10.9574 9.57743 10.9574 12.5675 10.4325H12.6375Z',
                fill: '#242E30'
            }
        })]);
    }
};