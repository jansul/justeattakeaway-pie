import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCheque',
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
            class: 'c-pieIcon c-pieIcon--cheque'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.1188 4.71873L13.4775 4.35123C13.6573 4.17452 13.7997 3.9633 13.8959 3.73024C13.9921 3.49719 14.0403 3.24711 14.0375 2.99498C14.0396 2.74426 13.9911 2.49568 13.8949 2.26415C13.7986 2.03261 13.6567 1.82287 13.4775 1.64748C13.3009 1.46838 13.0904 1.32616 12.8583 1.22909C12.6262 1.13202 12.3772 1.08203 12.1256 1.08203C11.8741 1.08203 11.625 1.13202 11.3929 1.22909C11.1609 1.32616 10.9504 1.46838 10.7738 1.64748L7.7025 4.71873H1.21875V13.0312H14.7812V4.71873H13.1188ZM8.93625 5.37498L11.7013 2.57498C11.757 2.51453 11.8246 2.46628 11.8999 2.43328C11.9752 2.40028 12.0565 2.38324 12.1388 2.38324C12.221 2.38324 12.3023 2.40028 12.3776 2.43328C12.4529 2.46628 12.5205 2.51453 12.5763 2.57498C12.6356 2.63138 12.6828 2.69924 12.715 2.77445C12.7473 2.84966 12.7639 2.93064 12.7639 3.01248C12.7639 3.09432 12.7473 3.1753 12.715 3.25051C12.6828 3.32572 12.6356 3.39359 12.5763 3.44998L9.79375 6.18873L8.79625 6.32873L8.93625 5.37498ZM13.4688 11.7625H2.53125V6.03123H7.51L7.2475 7.87748L10.4062 7.42248L11.8063 6.03123H13.4688V11.7625ZM3.625 9.09373H8.875V10.4062H3.625V9.09373ZM10.625 9.09373H12.375V10.4062H10.625V9.09373Z',
                fill: '#242E30'
            }
        })]);
    }
};
