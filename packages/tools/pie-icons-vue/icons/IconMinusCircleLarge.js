import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconMinusCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--minusCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M9.81382 15.125V16.875H22.1863V15.125H9.81382Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M24.6626 7.33751C22.9493 5.62444 20.7666 4.45786 18.3904 3.98529C16.0141 3.51273 13.5511 3.75539 11.3128 4.6826C9.07449 5.60981 7.16138 7.17992 5.81539 9.1944C4.4694 11.2089 3.75098 13.5772 3.75098 16C3.75098 18.4228 4.4694 20.7911 5.81539 22.8056C7.16138 24.8201 9.07449 26.3902 11.3128 27.3174C13.5511 28.2446 16.0141 28.4873 18.3904 28.0147C20.7666 27.5421 22.9493 26.3756 24.6626 24.6625C25.8002 23.525 26.7027 22.1745 27.3184 20.6882C27.9341 19.2018 28.251 17.6088 28.251 16C28.251 14.3912 27.9341 12.7982 27.3184 11.3118C26.7027 9.82553 25.8002 8.47504 24.6626 7.33751ZM23.4288 23.4288C21.9589 24.8936 20.088 25.89 18.0522 26.2922C16.0164 26.6944 13.907 26.4843 11.9905 25.6885C10.074 24.8927 8.4363 23.5469 7.28416 21.821C6.13202 20.095 5.51712 18.0664 5.51712 15.9913C5.51712 13.9161 6.13202 11.8875 7.28416 10.1616C8.4363 8.43563 10.074 7.0898 11.9905 6.29401C13.907 5.49822 16.0164 5.28816 18.0522 5.69035C20.088 6.09254 21.9589 7.08895 23.4288 8.55376C24.4077 9.52924 25.1844 10.6884 25.7144 11.9647C26.2443 13.241 26.5171 14.6093 26.5171 15.9913C26.5171 17.3732 26.2443 18.7416 25.7144 20.0179C25.1844 21.2941 24.4077 22.4533 23.4288 23.4288Z',
                fill: '#242E30'
            }
        })]);
    }
};
