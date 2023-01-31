import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLaptopErrorLarge',
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
            class: 'c-pieIcon c-pieIcon--laptopErrorLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M18.8175 8.44875L15.9825 11.2488L13.1825 8.44875L11.9487 9.6825L14.7662 12.4913L11.9487 15.3175L13.1825 16.5513L16.0175 13.7513L18.8175 16.5513L20.0512 15.3175L17.2337 12.5L20.0512 9.6825L18.8175 8.44875Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.5 19.2638V7.25C26.5 6.55381 26.2234 5.88613 25.7312 5.39384C25.2389 4.90156 24.5712 4.625 23.875 4.625H8.125C7.42881 4.625 6.76113 4.90156 6.26884 5.39384C5.77656 5.88613 5.5 6.55381 5.5 7.25V19.2638L2 25.3888V25.625C2 26.3212 2.27656 26.9889 2.76884 27.4812C3.26113 27.9734 3.92881 28.25 4.625 28.25H27.375C28.0712 28.25 28.7389 27.9734 29.2312 27.4812C29.7234 26.9889 30 26.3212 30 25.625V25.3888L26.5 19.2638ZM7.25 7.25C7.25 7.01794 7.34219 6.79538 7.50628 6.63128C7.67038 6.46719 7.89294 6.375 8.125 6.375H23.875C24.1071 6.375 24.3296 6.46719 24.4937 6.63128C24.6578 6.79538 24.75 7.01794 24.75 7.25V18.625H7.25V7.25ZM27.375 26.5H19.1675L18.5113 25.625H13.4888L12.8325 26.5H4.625C4.42273 26.5049 4.225 26.4396 4.06547 26.3152C3.90593 26.1908 3.79445 26.0149 3.75 25.8175L6.8825 20.375H25.1175L28.25 25.8175C28.2055 26.0149 28.0941 26.1908 27.9345 26.3152C27.775 26.4396 27.5773 26.5049 27.375 26.5Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M17.75 22.125H14.25V23.875H17.75V22.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23 22.125H19.5V23.875H23V22.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.5 22.125H9V23.875H12.5V22.125Z',
                fill: '#242E30'
            }
        })]);
    }
};
