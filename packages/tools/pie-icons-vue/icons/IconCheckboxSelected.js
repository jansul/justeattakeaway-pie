import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheckboxSelected',
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
            class: 'c-pieIcon c-pieIcon--checkboxSelected'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.375 2.09375H3.625C2.785 2.09375 2.09375 2.785 2.09375 3.625V12.375C2.09375 13.215 2.785 13.9062 3.625 13.9062H12.375C13.215 13.9062 13.9062 13.215 13.9062 12.375V3.625C13.9062 2.785 13.215 2.09375 12.375 2.09375ZM12.5938 12.375C12.5938 12.4975 12.4975 12.5938 12.375 12.5938H3.625C3.5025 12.5938 3.40625 12.4975 3.40625 12.375V3.625C3.40625 3.5025 3.5025 3.40625 3.625 3.40625H12.375C12.4975 3.40625 12.5938 3.5025 12.5938 3.625V12.375ZM10.1438 5.57625L11.1062 6.46875L7.74625 10.0913C7.5625 10.2925 7.3 10.4062 7.02 10.4062C6.74875 10.4062 6.48625 10.2925 6.29375 10.0913L4.955 8.58625L5.935 7.71125L7.02 8.93625L10.1438 5.5675V5.57625Z',
                fill: '#242E30'
            }
        })]);
    }
};
