import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSushiLarge',
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
            class: 'c-pieIcon c-pieIcon--sushiLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.2925 6.375C24.7682 5.87384 24.0709 5.59416 23.3456 5.59416C22.6204 5.59416 21.923 5.87384 21.3988 6.375L21.0312 6.73375C20.7749 6.98903 20.5715 7.29243 20.4327 7.62652C20.2939 7.96062 20.2224 8.31884 20.2224 8.68063C20.2224 9.04241 20.2939 9.40063 20.4327 9.73473C20.5715 10.0688 20.7749 10.3722 21.0312 10.6275L21.3988 10.995C21.6532 11.2509 21.956 11.4538 22.2894 11.592C22.6228 11.7302 22.9803 11.8009 23.3412 11.8C24.0725 11.8003 24.7741 11.5108 25.2925 10.995L25.625 10.61C26.1412 10.0918 26.431 9.39017 26.431 8.65875C26.431 7.92734 26.1412 7.22572 25.625 6.7075L25.2925 6.375ZM24.4175 9.39375L24.05 9.7525C23.8604 9.93743 23.6061 10.0409 23.3412 10.0409C23.0764 10.0409 22.8221 9.93743 22.6325 9.7525L22.2738 9.39375C22.1801 9.301 22.1058 9.19061 22.055 9.06896C22.0043 8.94731 21.9782 8.81681 21.9782 8.685C21.9782 8.55319 22.0043 8.42269 22.055 8.30104C22.1058 8.17939 22.1801 8.069 22.2738 7.97625L22.6325 7.60875C22.822 7.42371 23.0764 7.32009 23.3412 7.32C23.4726 7.3191 23.6028 7.34415 23.7244 7.3937C23.846 7.44325 23.9567 7.51633 24.05 7.60875L24.4175 7.97625C24.5099 8.06956 24.583 8.18021 24.6325 8.30183C24.6821 8.42346 24.7071 8.55367 24.7062 8.685C24.6995 8.94076 24.5963 9.18452 24.4175 9.3675V9.39375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M28.0312 13.06L28.25 12.8413C28.8006 12.2918 29.2374 11.6392 29.5354 10.9208C29.8334 10.2023 29.9868 9.43218 29.9868 8.65438C29.9868 7.87657 29.8334 7.10641 29.5354 6.38797C29.2374 5.66953 28.8006 5.01692 28.25 4.4675L27.5325 3.75C26.4486 2.67072 24.9897 2.05181 23.4604 2.02246C21.9311 1.99311 20.4495 2.5556 19.325 3.5925L19.6663 2.5775L18.0037 2L12.7537 17.75L2.875 20.8125V22.6413L12.0712 19.8062L9 29.125H10.8375L14.1625 19.1762L29.7025 14.39L29.125 12.7188L28.0312 13.06ZM14.81 17.1375L17.015 10.5312C17.2992 11.4041 17.7882 12.1962 18.4412 12.8413L19.15 13.5588C19.8394 14.2458 20.6866 14.7535 21.6175 15.0375L14.81 17.1375ZM26.29 12.325C25.5075 13.1062 24.447 13.5449 23.3412 13.5449C22.2355 13.5449 21.175 13.1062 20.3925 12.325L19.675 11.625C18.896 10.8413 18.4587 9.78125 18.4587 8.67625C18.4587 7.57125 18.896 6.51115 19.675 5.7275L20.375 4.9925C21.1586 4.21345 22.2188 3.77617 23.3237 3.77617C24.4287 3.77617 25.4888 4.21345 26.2725 4.9925L26.99 5.71C27.3778 6.09689 27.6856 6.55649 27.8955 7.06249C28.1055 7.56848 28.2136 8.11093 28.2136 8.65875C28.2136 9.20657 28.1055 9.74902 27.8955 10.255C27.6856 10.761 27.3778 11.2206 26.99 11.6075L26.29 12.325Z',
                fill: '#242E30'
            }
        })]);
    }
};
