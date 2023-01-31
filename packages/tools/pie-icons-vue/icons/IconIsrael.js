import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconIsrael',
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
            class: 'c-pieIcon c-pieIcon--israel'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z',
                fill: '#EEEEEE'
            }
        }), h('path', {
            attrs: {
                d: 'M10.6362 6.47693H8.87526L8.00026 4.95662L7.12252 6.47693H5.36432L6.24205 7.99998L5.36705 9.52303H7.12252L8.00026 11.0433L8.87799 9.52303H10.6362L9.75846 7.99998L10.6335 6.47693H10.6362ZM9.0776 7.99998L8.53893 8.93513H7.46159L6.92018 7.99998L7.46159 7.06482H8.53893L9.08033 7.99998H9.0776ZM8.00026 6.12967L8.19987 6.47693H7.80065L8.00026 6.12967ZM6.38151 7.06482H6.78346L6.58112 7.41209L6.38151 7.06482ZM6.38151 8.93513L6.58112 8.58787L6.78346 8.93513H6.38151ZM8.00026 9.87029L7.80065 9.52303H8.19987L8.00026 9.87029ZM9.61901 8.93513H9.21705L9.4194 8.58787L9.61901 8.93513ZM9.21705 7.06482H9.61901L9.4194 7.41209L9.21705 7.06482ZM12.3588 2.52303H3.64166C3.00199 3.03258 2.45605 3.64977 2.02838 4.34685H13.9721C13.5445 3.64977 12.9985 3.03258 12.3588 2.52303ZM3.64166 13.4769H12.3588C12.9985 12.9674 13.5445 12.3502 13.9721 11.6531H2.02838C2.45605 12.3502 3.00199 12.9674 3.64166 13.4769Z',
                fill: '#0052B4'
            }
        })]);
    }
};
