import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAlertTriangleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--alertTriangleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.5825 21.7313L18.0825 4.91376C17.8646 4.55725 17.5585 4.2629 17.1937 4.05907C16.829 3.85523 16.4178 3.74879 16 3.75001C15.5851 3.75179 15.1776 3.85965 14.8162 4.06334C14.4547 4.26703 14.1514 4.55978 13.935 4.91376L3.435 21.7313C3.18866 22.1222 3.05216 22.5723 3.03984 23.0342C3.02752 23.4961 3.13984 23.9528 3.365 24.3563C3.57261 24.7413 3.88089 25.0627 4.25691 25.2861C4.63294 25.5096 5.06259 25.6267 5.5 25.625H26.5C26.9383 25.6259 27.3686 25.5074 27.7447 25.2824C28.1208 25.0573 28.4286 24.7341 28.635 24.3475C28.8611 23.9466 28.9755 23.4924 28.9663 23.0322C28.957 22.572 28.8245 22.1228 28.5825 21.7313ZM16 21.9063C15.6971 21.9063 15.4011 21.8165 15.1493 21.6482C14.8975 21.4799 14.7012 21.2408 14.5853 20.961C14.4694 20.6812 14.4391 20.3733 14.4982 20.0763C14.5573 19.7792 14.7031 19.5064 14.9172 19.2923C15.1314 19.0781 15.4042 18.9323 15.7013 18.8732C15.9983 18.8141 16.3062 18.8444 16.586 18.9603C16.8658 19.0762 17.1049 19.2725 17.2732 19.5243C17.4414 19.7761 17.5312 20.0722 17.5312 20.375C17.5312 20.7811 17.3699 21.1706 17.0828 21.4578C16.7956 21.7449 16.4061 21.9063 16 21.9063ZM16.875 10.75V16.875H15.125V10.75H16.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
