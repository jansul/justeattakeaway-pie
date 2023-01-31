import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconInstagramCircleFilledLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32'
            },
            class: 'c-pieIcon c-pieIcon--instagramCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.4544 13.7674C19.8517 13.7674 20.1738 13.4453 20.1738 13.0479C20.1738 12.6505 19.8517 12.3284 19.4544 12.3284C19.0571 12.3284 18.7351 12.6505 18.7351 13.0479C18.7351 13.4453 19.0571 13.7674 19.4544 13.7674Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M13.1694 16.251C13.1694 17.9538 14.5499 19.3321 16.2499 19.3321C17.9499 19.3321 19.3304 17.9513 19.3304 16.251C19.3304 14.5506 17.9524 13.1699 16.2499 13.1699C14.5475 13.1699 13.1694 14.5482 13.1694 16.251ZM18.2499 16.251C18.2499 17.3561 17.3548 18.2514 16.2499 18.2514C15.145 18.2514 14.2499 17.3561 14.2499 16.251C14.2499 15.1459 15.145 14.2506 16.2499 14.2506C17.3548 14.2506 18.2499 15.1459 18.2499 16.251Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M9.44427 6.0645C11.4588 4.71845 13.8272 4 16.25 4C19.4989 4 22.6147 5.29062 24.9121 7.58794C27.2094 9.88526 28.5 13.0011 28.5 16.25C28.5 18.6728 27.7816 21.0412 26.4355 23.0557C25.0895 25.0702 23.1763 26.6404 20.9379 27.5675C18.6995 28.4947 16.2364 28.7373 13.8601 28.2646C11.4839 27.792 9.30114 26.6253 7.58795 24.9121C5.87475 23.1989 4.70805 21.0161 4.23539 18.6399C3.76272 16.2636 4.00531 13.8005 4.93248 11.5621C5.85965 9.32373 7.42977 7.41054 9.44427 6.0645ZM11.2573 11.2575C11.5915 10.9233 11.9256 10.7184 12.3207 10.5647C12.7012 10.4159 13.1378 10.3134 13.7793 10.2866C14.4183 10.2573 14.6232 10.25 16.2524 10.25C17.8817 10.25 18.0866 10.2573 18.7256 10.2866C19.3646 10.3159 19.8012 10.4159 20.1817 10.5647C20.5768 10.7184 20.911 10.9233 21.2451 11.2575C21.5768 11.5893 21.7817 11.926 21.9354 12.3187C22.0817 12.6993 22.1841 13.136 22.2134 13.7751C22.2427 14.4143 22.25 14.6192 22.25 16.2488C22.25 17.8784 22.2427 18.0833 22.2134 18.7225C22.1841 19.3616 22.0841 19.7983 21.9354 20.1788C21.7817 20.574 21.5768 20.9083 21.2427 21.2425C20.9085 21.5767 20.5744 21.7816 20.1793 21.9353C19.7988 22.0817 19.3622 22.1841 18.7232 22.2134C18.0841 22.2427 17.8793 22.25 16.25 22.25C14.6207 22.25 14.4159 22.2427 13.7768 22.2134C13.1378 22.1841 12.7012 22.0841 12.3207 21.9353C11.9256 21.7816 11.5915 21.5767 11.2573 21.2425C10.9232 20.9083 10.7183 20.574 10.5646 20.1788C10.4183 19.7983 10.3159 19.3616 10.2866 18.7225C10.2573 18.0833 10.25 17.8784 10.25 16.2488C10.25 14.6192 10.2573 14.4143 10.2866 13.7751C10.3159 13.136 10.4159 12.6993 10.5646 12.3187C10.7183 11.926 10.9232 11.5893 11.2573 11.2575Z',
                fill: '#242E30'
            }
        })]);
    }
};
