import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDashboardLarge',
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
            class: 'c-pieIcon c-pieIcon--dashboardLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M29.0726 18.625C29.0712 20.4332 28.6928 22.2213 27.9613 23.875H26.0276C26.9086 22.1991 27.3536 20.3284 27.3215 18.4352C27.2894 16.5421 26.7812 14.6876 25.8438 13.0425L27.0513 11.6688C28.3695 13.7496 29.0704 16.1617 29.0726 18.625ZM15.9476 7.25C18.194 7.24876 20.3901 7.9158 22.2563 9.16625L23.4113 7.845C21.0642 6.22868 18.2547 5.42021 15.4075 5.54177C12.5602 5.66332 9.82991 6.70829 7.62906 8.51877C5.42821 10.3293 3.87644 12.8069 3.20821 15.5773C2.53998 18.3477 2.7916 21.2603 3.92506 23.875H5.85881C4.95685 22.1413 4.51675 20.2046 4.58094 18.2514C4.64513 16.2982 5.21145 14.3945 6.2253 12.7238C7.23914 11.0531 8.66632 9.67176 10.3692 8.713C12.0721 7.75425 13.9933 7.25039 15.9476 7.25ZM19.3338 12.5L20.5151 11.1525C19.1881 10.3404 17.6687 9.89679 16.1132 9.86734C14.5578 9.83788 13.0226 10.2237 11.6659 10.9849C10.3091 11.7462 9.17989 12.8554 8.39449 14.1983C7.60908 15.5413 7.19592 17.0693 7.19756 18.625H8.94756C8.94781 17.4074 9.26564 16.211 9.86965 15.1538C10.4737 14.0967 11.343 13.2153 12.3918 12.5968C13.4405 11.9783 14.6325 11.6441 15.8499 11.6271C17.0674 11.6101 18.2682 11.911 19.3338 12.5ZM18.8263 18.3888C19.2704 19.0331 19.4858 19.8077 19.438 20.5888C19.3902 21.3699 19.082 22.1125 18.5626 22.6978C18.0432 23.2832 17.3426 23.6777 16.5728 23.8181C15.8029 23.9586 15.0082 23.837 14.3156 23.4728C13.6229 23.1086 13.0723 22.5228 12.7517 21.8089C12.4311 21.095 12.359 20.2943 12.5469 19.5346C12.7348 18.7749 13.1719 18.1001 13.7883 17.618C14.4048 17.1359 15.165 16.8743 15.9476 16.875C16.4895 16.881 17.0227 17.0128 17.5051 17.26L26.0713 7.4775L27.3751 8.62375L18.8263 18.3888ZM17.6976 20.375C17.6976 20.0289 17.5949 19.6905 17.4026 19.4028C17.2103 19.115 16.937 18.8907 16.6173 18.7582C16.2975 18.6258 15.9456 18.5911 15.6062 18.6586C15.2667 18.7261 14.9549 18.8928 14.7101 19.1376C14.4654 19.3823 14.2987 19.6941 14.2312 20.0336C14.1637 20.3731 14.1983 20.7249 14.3308 21.0447C14.4632 21.3645 14.6875 21.6378 14.9753 21.8301C15.2631 22.0224 15.6014 22.125 15.9476 22.125C16.4117 22.125 16.8568 21.9406 17.185 21.6124C17.5132 21.2842 17.6976 20.8391 17.6976 20.375Z',
                fill: '#242E30'
            }
        })]);
    }
};
