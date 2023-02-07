import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarEditLarge',
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
            class: 'c-pieIcon c-pieIcon--calendarEditLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.2655 12.5087H21.7344L22.6072 10.7631H9.39273L10.2655 12.5087Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.36404 25.5661V8.10974H9.85532V8.98256H11.601V8.10974H20.3291V8.98256H22.0748V8.10974H25.566V12.0636C26.0655 12.227 26.5199 12.505 26.8927 12.8753L27.3117 13.3466V6.36411H22.0748V4.61847H20.3291V6.36411H11.601V4.61847H9.85532V6.36411H4.61841V27.3117H12.2207L12.4127 25.5661H6.36404Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M27.5735 16.0873L25.6359 14.1496C25.4737 13.9873 25.2812 13.8586 25.0693 13.7707C24.8574 13.6829 24.6302 13.6377 24.4008 13.6377C24.1714 13.6377 23.9443 13.6829 23.7324 13.7707C23.5204 13.8586 23.3279 13.9873 23.1658 14.1496L14.8915 22.424C14.5993 22.7104 14.417 23.0904 14.3765 23.4975L13.8965 27.8616L18.2606 27.3816C18.6661 27.3292 19.0432 27.1452 19.3341 26.8579L27.5735 18.5836C27.8986 18.2565 28.0811 17.8141 28.0811 17.3529C28.0811 16.8917 27.8986 16.4493 27.5735 16.1222V16.0873ZM22.0748 17.7107L24.0124 19.6484L18.0685 25.5661L15.869 25.8192L16.1221 23.6284L22.0748 17.7107ZM26.3079 17.3616L25.2518 18.4177L23.3142 16.4801L24.3615 15.424L26.3079 17.3616Z',
                fill: '#242E30'
            }
        })]);
    }
};