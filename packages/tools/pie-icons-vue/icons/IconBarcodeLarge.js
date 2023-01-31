import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBarcodeLarge',
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
            class: 'c-pieIcon c-pieIcon--barcodeLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M8.125 8.125V23.875H6.375V8.125H8.125ZM23.875 8.125V23.875H25.625V8.125H23.875ZM19.5 21.25H21.25V8.125H19.5V21.25ZM15.125 21.25H16.875V8.125H15.125V21.25ZM10.75 21.25H12.5V8.125H10.75V21.25ZM28.25 4.625H23V6.375H27.375V10.75H29.125V5.5C29.125 5.26794 29.0328 5.04538 28.8687 4.88128C28.7046 4.71719 28.4821 4.625 28.25 4.625ZM2.875 5.5V10.75H4.625V6.375H9V4.625H3.75C3.51794 4.625 3.29538 4.71719 3.13128 4.88128C2.96719 5.04538 2.875 5.26794 2.875 5.5ZM4.625 21.25H2.875V26.5C2.875 26.7321 2.96719 26.9546 3.13128 27.1187C3.29538 27.2828 3.51794 27.375 3.75 27.375H9V25.625H4.625V21.25ZM27.375 25.625H23V27.375H28.25C28.4821 27.375 28.7046 27.2828 28.8687 27.1187C29.0328 26.9546 29.125 26.7321 29.125 26.5V21.25H27.375V25.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
