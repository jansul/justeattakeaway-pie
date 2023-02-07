import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconEditLarge',
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
            class: 'c-pieIcon c-pieIcon--editLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.5587 7.73997L24.26 4.44122C23.8093 4.01218 23.2109 3.77289 22.5887 3.77289C21.9665 3.77289 21.3681 4.01218 20.9175 4.44122L5.07123 20.2875C4.67893 20.6811 4.43209 21.1963 4.37123 21.7487L3.63623 28.3637L10.2512 27.6287C10.8036 27.5679 11.3189 27.321 11.7125 26.9287L27.5587 11.0825C27.7783 10.8631 27.9525 10.6025 28.0714 10.3158C28.1902 10.029 28.2514 9.72164 28.2514 9.41122C28.2514 9.1008 28.1902 8.79343 28.0714 8.50667C27.9525 8.21991 27.7783 7.95938 27.5587 7.73997ZM19.0887 8.74622L23.2537 12.9112L12.0187 24.155C11.2147 22.2816 9.72 20.79 7.84498 19.99L19.0887 8.74622ZM10.0587 25.8875L5.61373 26.3862L6.11248 21.9412C6.12966 21.7824 6.20068 21.6341 6.31373 21.5212L6.47998 21.355C7.46831 21.6432 8.36804 22.176 9.09601 22.9039C9.82398 23.6319 10.3567 24.5316 10.645 25.52L10.4787 25.6862C10.3658 25.7993 10.2176 25.8703 10.0587 25.8875ZM26.325 9.87497L24.4962 11.695L20.375 7.50372L22.125 5.68372C22.182 5.62553 22.2501 5.57931 22.3252 5.54776C22.4003 5.51621 22.481 5.49996 22.5625 5.49997C22.6427 5.49963 22.7222 5.51576 22.7959 5.54737C22.8697 5.57897 22.9361 5.62538 22.9912 5.68372L26.325 8.99997C26.4404 9.11633 26.5052 9.27358 26.5052 9.43747C26.5052 9.60136 26.4404 9.75861 26.325 9.87497Z',
                fill: '#242E30'
            }
        })]);
    }
};