import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLinkedinCircle',
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
            class: 'c-pieIcon c-pieIcon--linkedinCircle'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_1611_785)'
            }
        }, [h('path', {
            attrs: {
                d: 'M5.80847 4.7725C5.69291 4.72741 5.56791 4.71193 5.44485 4.72749C5.28431 4.71573 5.12408 4.75401 4.98619 4.83706C4.8483 4.9201 4.73953 5.04384 4.67485 5.19124C4.62394 5.29809 4.59927 5.41554 4.60289 5.53384C4.6065 5.65215 4.63829 5.76788 4.69563 5.87142C4.75296 5.97496 4.83418 6.06332 4.93253 6.12917C5.03088 6.19501 5.14352 6.23643 5.2611 6.24999C5.36338 6.27901 5.47043 6.28725 5.57594 6.27423C5.68145 6.26121 5.78329 6.22719 5.87544 6.17418C5.9676 6.12117 6.04821 6.05024 6.11251 5.96558C6.17681 5.88092 6.22351 5.78424 6.24985 5.68124C6.28585 5.56254 6.29159 5.43672 6.26655 5.31523C6.24151 5.19374 6.18648 5.08044 6.10648 4.98565C6.02647 4.89086 5.92403 4.81758 5.80847 4.7725Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.40235 7.42249L8.45485 7.36999C8.62104 7.12093 8.85893 6.92819 9.13703 6.81726C9.41514 6.70633 9.72037 6.68244 10.0124 6.74874C10.3619 6.79921 10.6839 6.96699 10.9256 7.22455C11.1673 7.48212 11.3142 7.81417 11.3424 8.16624C11.3554 8.35268 11.3554 8.5398 11.3424 8.72624V11.08C11.3424 11.1675 11.3424 11.1937 11.2286 11.1937H10.0386C9.9511 11.1937 9.92485 11.1937 9.92485 11.08V8.88374C9.92605 8.71843 9.90546 8.55367 9.8636 8.39374C9.83275 8.27676 9.77246 8.16962 9.68848 8.08253C9.6045 7.99545 9.49962 7.93131 9.38384 7.89622C9.26805 7.86113 9.14521 7.85627 9.02702 7.88209C8.90882 7.90792 8.79921 7.96356 8.7086 8.04374C8.60394 8.13062 8.52098 8.24071 8.4663 8.36526C8.41161 8.48981 8.38672 8.62539 8.3936 8.76124V11.0975C8.3936 11.185 8.3936 11.1937 8.2886 11.1937H7.05485C6.9761 11.1937 6.94985 11.1937 6.94985 11.0975V6.93249C6.94985 6.85374 6.94985 6.82749 7.0461 6.82749H8.31485C8.38485 6.82749 8.4111 6.82749 8.4111 6.92374C8.4111 6.96415 8.40956 7.02616 8.40777 7.09811C8.4053 7.1975 8.40235 7.31592 8.40235 7.42249Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.15358 9.01499V11.08C6.15358 11.1675 6.15358 11.1937 6.03983 11.1937H4.80608C4.72733 11.1937 4.70108 11.1937 4.70108 11.0887V6.92374C4.70108 6.85374 4.70108 6.82749 4.79733 6.82749H6.06608C6.14483 6.82749 6.16233 6.82749 6.16233 6.93249C6.15358 7.62374 6.15358 8.31499 6.15358 9.01499Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M8 1.08124C4.20304 1.08124 1.125 4.15928 1.125 7.95624C1.125 11.7532 4.20304 14.8312 8 14.8312C11.797 14.8312 14.875 11.7532 14.875 7.95624C14.875 4.15928 11.797 1.08124 8 1.08124ZM2.625 7.95624C2.625 4.98771 5.03147 2.58124 8 2.58124C10.9685 2.58124 13.375 4.98771 13.375 7.95624C13.375 10.9248 10.9685 13.3312 8 13.3312C5.03147 13.3312 2.625 10.9248 2.625 7.95624Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_1611_785'
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
