import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGeolocationCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--geolocationCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M17.4788 22.44H15.7288L15.1775 20.235C14.9679 19.4025 14.5367 18.6424 13.9297 18.0353C13.3226 17.4283 12.5625 16.9971 11.73 16.7875L9.52501 16.2363V14.4863L21.4425 10.5575L17.4788 22.44ZM12.815 15.2825C13.7143 15.6026 14.5311 16.1189 15.2061 16.7939C15.8811 17.4689 16.3974 18.2857 16.7175 19.185L18.6775 13.3225L12.815 15.2825ZM16 28.25C13.5772 28.25 11.2088 27.5316 9.19427 26.1855C7.17977 24.8395 5.60965 22.9263 4.68248 20.6879C3.75531 18.4495 3.51272 15.9864 3.98539 13.6101C4.45805 11.2339 5.62475 9.05114 7.33795 7.33795C9.05114 5.62475 11.2339 4.45805 13.6101 3.98539C15.9864 3.51272 18.4495 3.75531 20.6879 4.68248C22.9263 5.60965 24.8395 7.17977 26.1855 9.19427C27.5316 11.2088 28.25 13.5772 28.25 16C28.25 19.2489 26.9594 22.3647 24.6621 24.6621C22.3647 26.9594 19.2489 28.25 16 28.25ZM16 5.50001C13.9233 5.50001 11.8932 6.11582 10.1665 7.26957C8.4398 8.42333 7.09399 10.0632 6.29927 11.9818C5.50455 13.9005 5.29662 16.0117 5.70176 18.0485C6.1069 20.0853 7.10693 21.9562 8.57538 23.4246C10.0438 24.8931 11.9148 25.8931 13.9516 26.2983C15.9884 26.7034 18.0996 26.4955 20.0182 25.7007C21.9368 24.906 23.5767 23.5602 24.7304 21.8335C25.8842 20.1068 26.5 18.0767 26.5 16C26.5 13.2152 25.3938 10.5445 23.4246 8.57538C21.4555 6.60625 18.7848 5.50001 16 5.50001Z',
                fill: '#242E30'
            }
        })]);
    }
};
