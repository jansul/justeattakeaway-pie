import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSocialYoutubeCircleLarge',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 32 32',
            },
            class: 'c-pieIcon c-pieIcon--youtubeCircleLarge',
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M9.194 5.814a12.25 12.25 0 1113.612 20.372A12.25 12.25 0 019.194 5.814zm.972 18.916A10.5 10.5 0 1021.834 7.27a10.5 10.5 0 00-11.666 17.46z',
                fill: '#242E30',
            },
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M21.47 11.3c.602.164 1.077.65 1.238 1.266.292 1.116.292 3.447.292 3.447s0 2.33-.293 3.447a1.774 1.774 0 01-1.237 1.267c-1.092.299-5.47.299-5.47.299s-4.378 0-5.47-.3a1.774 1.774 0 01-1.237-1.266C9 18.343 9 16.013 9 16.013s0-2.33.293-3.447a1.774 1.774 0 011.237-1.267C11.622 11 16 11 16 11s4.378 0 5.47.3zm-3.242 5.071l-3.66 2.116v-4.232l3.66 2.116z',
                fill: '#242E30',
            },
        })]);
    },
};