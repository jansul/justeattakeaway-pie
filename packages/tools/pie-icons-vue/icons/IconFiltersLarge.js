import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFiltersLarge',
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
            class: 'c-pieIcon c-pieIcon--filtersLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.25 9V8.125C14.25 7.42881 13.9734 6.76113 13.4812 6.26884C12.9889 5.77656 12.3212 5.5 11.625 5.5H10.75C10.0538 5.5 9.38613 5.77656 8.89384 6.26884C8.40156 6.76113 8.125 7.42881 8.125 8.125V9H2.875V10.75H8.125V11.625C8.125 12.3212 8.40156 12.9889 8.89384 13.4812C9.38613 13.9734 10.0538 14.25 10.75 14.25H11.625C12.3212 14.25 12.9889 13.9734 13.4812 13.4812C13.9734 12.9889 14.25 12.3212 14.25 11.625V10.75H29.125V9H14.25ZM12.5 11.625C12.5 11.8571 12.4078 12.0796 12.2437 12.2437C12.0796 12.4078 11.8571 12.5 11.625 12.5H10.75C10.5179 12.5 10.2954 12.4078 10.1313 12.2437C9.96719 12.0796 9.875 11.8571 9.875 11.625V8.125C9.875 7.89294 9.96719 7.67038 10.1313 7.50628C10.2954 7.34219 10.5179 7.25 10.75 7.25H11.625C11.8571 7.25 12.0796 7.34219 12.2437 7.50628C12.4078 7.67038 12.5 7.89294 12.5 8.125V11.625ZM23.875 20.375C23.875 19.6788 23.5984 19.0111 23.1062 18.5188C22.6139 18.0266 21.9462 17.75 21.25 17.75H20.375C19.6788 17.75 19.0111 18.0266 18.5188 18.5188C18.0266 19.0111 17.75 19.6788 17.75 20.375V21.25H2.875V23H17.75V23.875C17.75 24.5712 18.0266 25.2389 18.5188 25.7312C19.0111 26.2234 19.6788 26.5 20.375 26.5H21.25C21.9462 26.5 22.6139 26.2234 23.1062 25.7312C23.5984 25.2389 23.875 24.5712 23.875 23.875V23H29.125V21.25H23.875V20.375ZM22.125 23.875C22.125 24.1071 22.0328 24.3296 21.8687 24.4937C21.7046 24.6578 21.4821 24.75 21.25 24.75H20.375C20.1429 24.75 19.9204 24.6578 19.7563 24.4937C19.5922 24.3296 19.5 24.1071 19.5 23.875V20.375C19.5 20.1429 19.5922 19.9204 19.7563 19.7563C19.9204 19.5922 20.1429 19.5 20.375 19.5H21.25C21.4821 19.5 21.7046 19.5922 21.8687 19.7563C22.0328 19.9204 22.125 20.1429 22.125 20.375V23.875Z',
                fill: '#242E30'
            }
        })]);
    }
};
