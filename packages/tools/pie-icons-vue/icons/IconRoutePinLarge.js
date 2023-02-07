import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRoutePinLarge',
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
            class: 'c-pieIcon c-pieIcon--routePinLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M26.6313 6.37499C24.972 4.71573 22.7215 3.78357 20.375 3.78357C18.0285 3.78357 15.778 4.71573 14.1188 6.37499C12.4595 8.03425 11.5273 10.2847 11.5273 12.6312C11.5273 14.9778 12.4595 17.2282 14.1188 18.8875L20.375 25.1087L26.6313 18.8525C28.2759 17.1926 29.1986 14.9504 29.1986 12.6137C29.1986 10.277 28.2759 8.03487 26.6313 6.37499ZM25.3975 17.6187L20.375 22.6412L15.3525 17.6187C14.3614 16.6258 13.6869 15.3613 13.4141 13.9852C13.1414 12.609 13.2827 11.1828 13.8202 9.88695C14.3577 8.59105 15.2672 7.48355 16.4339 6.7044C17.6006 5.92524 18.9721 5.50938 20.375 5.50938C21.7779 5.50938 23.1494 5.92524 24.3161 6.7044C25.4828 7.48355 26.3923 8.59105 26.9298 9.88695C27.4673 11.1828 27.6086 12.609 27.3359 13.9852C27.0631 15.3613 26.3886 16.6258 25.3975 17.6187ZM20.375 8.87749C19.6132 8.87749 18.8685 9.10352 18.2351 9.52695C17.6018 9.95038 17.1084 10.5522 16.8172 11.2562C16.5261 11.9602 16.4504 12.7347 16.5996 13.4818C16.7489 14.2289 17.1164 14.9149 17.6557 15.4529C18.1951 15.991 18.8819 16.357 19.6293 16.5046C20.3767 16.6521 21.1511 16.5747 21.8544 16.2819C22.5577 15.9892 23.1584 15.4943 23.5804 14.8601C24.0024 14.2258 24.2267 13.4806 24.225 12.7187C24.2227 11.6992 23.816 10.7222 23.0943 10.002C22.3725 9.28191 21.3946 8.87749 20.375 8.87749ZM20.375 14.8187C19.9597 14.8187 19.5536 14.6956 19.2083 14.4648C18.863 14.2341 18.5938 13.9061 18.4349 13.5224C18.2759 13.1387 18.2343 12.7164 18.3154 12.3091C18.3964 11.9017 18.5964 11.5275 18.8901 11.2338C19.1838 10.9401 19.558 10.7401 19.9653 10.6591C20.3727 10.5781 20.7949 10.6197 21.1786 10.7786C21.5624 10.9375 21.8903 11.2067 22.1211 11.552C22.3518 11.8974 22.475 12.3034 22.475 12.7187C22.475 13.2757 22.2537 13.8098 21.8599 14.2037C21.4661 14.5975 20.932 14.8187 20.375 14.8187ZM8.895 26.5L22.125 26.5612V28.3112L8.88625 28.25C8.40091 28.2493 7.92453 28.1192 7.5062 27.8731C7.08787 27.627 6.7427 27.2738 6.50625 26.85C6.2787 26.4469 6.16574 25.9892 6.17963 25.5265C6.19351 25.0638 6.33369 24.6137 6.585 24.225L8.78125 20.725C8.85781 20.5999 8.89833 20.456 8.89833 20.3094C8.89833 20.1627 8.85781 20.0189 8.78125 19.8937C8.69412 19.7405 8.56623 19.6144 8.41177 19.5294C8.25731 19.4445 8.08233 19.404 7.90625 19.4125H2V17.6625H7.94125C8.42869 17.6592 8.90811 17.7865 9.32971 18.0312C9.75131 18.2758 10.0997 18.6289 10.3387 19.0537C10.5682 19.4562 10.6822 19.9142 10.6684 20.3773C10.6545 20.8404 10.5132 21.2907 10.26 21.6787L8.0725 25.1787C7.99475 25.3018 7.95348 25.4444 7.95348 25.59C7.95348 25.7356 7.99475 25.8782 8.0725 26.0012C8.15381 26.1492 8.27261 26.2732 8.41698 26.3607C8.56135 26.4483 8.7262 26.4963 8.895 26.5Z',
                fill: '#242E30'
            }
        })]);
    }
};