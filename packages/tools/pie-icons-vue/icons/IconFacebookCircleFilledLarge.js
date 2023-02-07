import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFacebookCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--facebookCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.67126C13.5772 3.67126 11.2088 4.38971 9.19427 5.73576C7.17977 7.08181 5.60965 8.995 4.68248 11.2334C3.75531 13.4718 3.51272 15.9349 3.98539 18.3111C4.45805 20.6874 5.62475 22.8701 7.33795 24.5833C9.05114 26.2965 11.2339 27.4632 13.6101 27.9359C15.9864 28.4086 18.4495 28.166 20.6879 27.2388C22.9263 26.3116 24.8395 24.7415 26.1855 22.727C27.5316 20.7125 28.25 18.3441 28.25 15.9213C28.25 12.6724 26.9594 9.55653 24.6621 7.25921C22.3647 4.96189 19.2489 3.67126 16 3.67126ZM19.85 11.0738H18.7125C18.5174 11.0473 18.3189 11.0656 18.132 11.1274C17.9451 11.1892 17.7747 11.2928 17.6338 11.4303C17.4929 11.5678 17.3852 11.7356 17.319 11.9209C17.2527 12.1063 17.2295 12.3044 17.2513 12.5V14.1888H19.745L19.3425 16.8138H17.2513V23.0963C16.3183 23.2485 15.3668 23.2485 14.4338 23.0963V16.77H12.15V14.145H14.4338V12.185C14.3849 11.7217 14.4385 11.2533 14.5909 10.813C14.7433 10.3727 14.9906 9.97138 15.3154 9.63738C15.6403 9.30338 16.0346 9.04493 16.4704 8.88034C16.9063 8.71576 17.373 8.64907 17.8375 8.68501C18.5117 8.6946 19.1843 8.75308 19.85 8.86001V11.0738Z',
                fill: '#242E30'
            }
        })]);
    }
};