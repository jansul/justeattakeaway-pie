import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRestaurantMenu',
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
            class: 'c-pieIcon c-pieIcon--restaurantMenu'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.09375H3.625C3.2196 2.09605 2.83145 2.25811 2.54478 2.54478C2.25811 2.83145 2.09605 3.2196 2.09375 3.625V13.9062H13.9062V3.625C13.904 3.2196 13.7419 2.83145 13.4552 2.54478C13.1686 2.25811 12.7804 2.09605 12.375 2.09375ZM12.5938 12.5938H3.40625V3.625C3.40625 3.56698 3.4293 3.51134 3.47032 3.47032C3.51134 3.4293 3.56698 3.40625 3.625 3.40625H12.375C12.433 3.40625 12.4887 3.4293 12.5297 3.47032C12.5707 3.51134 12.5938 3.56698 12.5938 3.625V12.5938Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.625 7.6675C10.5301 7.12493 10.267 6.62596 9.87282 6.24122C9.47866 5.85648 8.97347 5.60548 8.42876 5.52375C8.42876 5.40772 8.38267 5.29644 8.30062 5.21439C8.21858 5.13235 8.1073 5.08625 7.99126 5.08625C7.87523 5.08625 7.76395 5.13235 7.68191 5.21439C7.59986 5.29644 7.55376 5.40772 7.55376 5.52375C7.0202 5.61713 6.52858 5.87329 6.14635 6.2571C5.76411 6.6409 5.50996 7.13356 5.41876 7.6675C5.40586 7.81305 5.40586 7.95945 5.41876 8.105V8.5425H10.6688V8.105C10.6672 7.95816 10.6525 7.81175 10.625 7.6675Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.625 9.645H5.375V10.9575H10.625V9.645Z',
                fill: '#242E30'
            }
        })]);
    }
};
