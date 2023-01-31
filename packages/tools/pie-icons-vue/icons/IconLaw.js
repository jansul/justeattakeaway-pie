import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaw',
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
            class: 'c-pieIcon c-pieIcon--law'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_6703_3640)'
            }
        }, [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M9.24674 8.63437L8.79611 9.08499L9.73236 10.0212L13.7311 6.02249L12.7949 5.08624L12.3399 5.54124L9.89861 3.09999L10.3536 2.64499L9.41736 1.70874L5.42736 5.69874L6.36361 6.63499L6.81861 6.17999L7.56236 6.92374L1.73486 12.76L2.67111 13.6962L8.48986 7.87749L9.24674 8.63437ZM7.74611 5.25249L10.1874 7.69374L11.4036 6.47749L8.96236 4.03624L7.74611 5.25249Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M8.03503 11.9287H13.6088L13.2588 10.6075H8.38503L8.03503 11.9287Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M13.8451 12.8125H7.79885L7.44885 14.1337H14.1951L13.8451 12.8125Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_6703_3640'
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
