import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconPatternsLarge',
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
            class: 'c-pieIcon c-pieIcon--patternsLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M4.625 27.375H14.495V17.505H4.625V27.375ZM6.375 19.255H12.745V25.625H6.375V19.255Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M12.5962 15.23C15.5625 15.23 17.9688 12.8237 17.9688 9.85748C17.9688 6.89123 15.5625 4.48499 12.5962 4.48499C9.63 4.48499 7.22375 6.89123 7.22375 9.85748C7.22375 12.8237 9.63 15.23 12.5962 15.23ZM12.5962 6.23499C14.5912 6.23499 16.2188 7.86248 16.2188 9.85748C16.2188 11.8525 14.5912 13.48 12.5962 13.48C10.6012 13.48 8.97375 11.8525 8.97375 9.85748C8.97375 7.86248 10.6012 6.23499 12.5962 6.23499Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M21.46 9.85748L15.6413 20.9262H27.2787L21.46 9.85748ZM21.46 13.62L24.3825 19.1762H18.5375L21.46 13.62Z',
                fill: '#242E30'
            }
        })]);
    }
};