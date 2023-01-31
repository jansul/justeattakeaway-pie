import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationPinFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--locationPinFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.6001 23.735L20.1651 25.17C22.1251 25.625 23.0001 26.2375 23.0001 26.5C23.0001 26.9462 20.5938 28.25 16.0001 28.25C11.4063 28.25 9.0001 26.9462 9.0001 26.5C9.0001 26.2375 9.8751 25.625 11.8351 25.17L10.4001 23.735C8.58885 24.2862 7.2501 25.1875 7.2501 26.5C7.2501 28.9062 11.7826 30 16.0001 30C20.2176 30 24.7501 28.9062 24.7501 26.5C24.7501 25.1875 23.4113 24.2862 21.6001 23.735Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16.0001 26.8587L23.2539 19.605C24.6874 18.1705 25.6634 16.3432 26.0586 14.3541C26.4537 12.365 26.2502 10.3035 25.4739 8.42999C24.6975 6.55652 23.3831 4.9553 21.6968 3.82877C20.0105 2.70223 18.0281 2.10095 16.0001 2.10095C13.9722 2.10095 11.9897 2.70223 10.3034 3.82877C8.61717 4.9553 7.30275 6.55652 6.52638 8.42999C5.75001 10.3035 5.54653 12.365 5.94168 14.3541C6.33683 16.3432 7.31286 18.1705 8.74637 19.605L16.0001 26.8587ZM16.0001 9.87496C16.5193 9.87496 17.0268 10.0289 17.4585 10.3174C17.8902 10.6058 18.2266 11.0158 18.4253 11.4954C18.624 11.9751 18.676 12.5029 18.5747 13.0121C18.4734 13.5213 18.2234 13.989 17.8563 14.3561C17.4892 14.7232 17.0214 14.9732 16.5122 15.0745C16.003 15.1758 15.4752 15.1238 14.9956 14.9251C14.5159 14.7265 14.106 14.39 13.8175 13.9583C13.5291 13.5267 13.3751 13.0191 13.3751 12.5C13.3751 11.8038 13.6517 11.1361 14.144 10.6438C14.6362 10.1515 15.3039 9.87496 16.0001 9.87496Z',
                fill: '#242E30'
            }
        })]);
    }
};
