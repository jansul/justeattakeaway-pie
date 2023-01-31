import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHelpCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--helpCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75C13.5772 3.75 11.2088 4.46845 9.19427 5.8145C7.17977 7.16054 5.60965 9.07373 4.68248 11.3121C3.75531 13.5505 3.51272 16.0136 3.98539 18.3899C4.45805 20.7661 5.62475 22.9489 7.33795 24.6621C9.05114 26.3752 11.2339 27.5419 13.6101 28.0146C15.9864 28.4873 18.4495 28.2447 20.6879 27.3175C22.9263 26.3903 24.8395 24.8202 26.1855 22.8057C27.5316 20.7912 28.25 18.4228 28.25 16C28.25 12.7511 26.9594 9.63526 24.6621 7.33794C22.3647 5.04062 19.2489 3.75 16 3.75ZM16 22.125C15.7404 22.125 15.4867 22.048 15.2708 21.9038C15.055 21.7596 14.8868 21.5546 14.7874 21.3148C14.6881 21.0749 14.6621 20.811 14.7127 20.5564C14.7634 20.3018 14.8884 20.068 15.0719 19.8844C15.2555 19.7009 15.4893 19.5759 15.7439 19.5252C15.9985 19.4746 16.2624 19.5006 16.5023 19.5999C16.7421 19.6992 16.9471 19.8675 17.0913 20.0833C17.2355 20.2992 17.3125 20.5529 17.3125 20.8125C17.3125 21.1606 17.1742 21.4944 16.9281 21.7406C16.6819 21.9867 16.3481 22.125 16 22.125ZM17.0238 16.315H16.9013L16.735 17.75H15.3438L15.125 15.2387H15.2125C16.9625 14.9675 17.995 14.04 17.995 12.815C17.9875 12.5781 17.9319 12.3452 17.8317 12.1305C17.7314 11.9157 17.5886 11.7235 17.4119 11.5656C17.2352 11.4077 17.0282 11.2873 16.8035 11.2118C16.5789 11.1363 16.3412 11.1072 16.105 11.1262C15.5276 11.1168 14.9626 11.2948 14.495 11.6337L14.4338 11.6775L13.2 10.4087L13.27 10.3475C14.0955 9.67983 15.131 9.3264 16.1925 9.35C18.8963 9.35 20.1125 11.0037 20.1125 12.6487C20.0701 13.5137 19.7449 14.3409 19.1869 15.0032C18.6289 15.6655 17.869 16.1264 17.0238 16.315Z',
                fill: '#242E30'
            }
        })]);
    }
};
