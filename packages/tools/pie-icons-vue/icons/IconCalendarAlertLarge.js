import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarAlertLarge',
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
            class: 'c-pieIcon c-pieIcon--calendarAlertLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.3266 12.4738H21.7867L22.6596 10.7282H9.45381L10.3266 12.4738Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.0748 6.36411V4.61847H20.3291V6.36411H11.601V4.61847H9.85532V6.36411H4.61841V27.3117H22.9476C24.105 27.3117 25.215 26.8519 26.0335 26.0335C26.8519 25.2151 27.3117 24.1051 27.3117 22.9476V6.36411H22.0748ZM25.566 22.9476C25.566 23.6421 25.2902 24.3081 24.7991 24.7992C24.3081 25.2902 23.642 25.5661 22.9476 25.5661H6.36404V8.10974H9.85532V8.98256H11.601V8.10974H20.3291V8.98256H22.0748V8.10974H25.566V22.9476Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16.8728 14.2195H15.1271V19.4564H16.8728V14.2195Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M15.9999 23.8205C16.723 23.8205 17.3092 23.2343 17.3092 22.5112C17.3092 21.7882 16.723 21.202 15.9999 21.202C15.2769 21.202 14.6907 21.7882 14.6907 22.5112C14.6907 23.2343 15.2769 23.8205 15.9999 23.8205Z',
                fill: '#242E30'
            }
        })]);
    }
};