import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCalendarFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--calendarFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M22.125 6.375V9H20.375V6.375H11.625V9H9.875V6.375H4.625V27.375H23C24.1603 27.375 25.2731 26.9141 26.0936 26.0936C26.9141 25.2731 27.375 24.1603 27.375 23V6.375H22.125ZM15.7987 19.5H14.9237V18.0125H15.755C16.5425 18.0125 16.98 17.6188 16.98 17.05C16.98 16.4813 16.35 16.0875 15.6937 16.0875C15.3772 16.0897 15.0644 16.1559 14.7742 16.2823C14.484 16.4086 14.2223 16.5924 14.005 16.8225L12.9812 15.6587C13.3503 15.2812 13.7956 14.9868 14.2875 14.7952C14.7794 14.6036 15.3066 14.5191 15.8338 14.5475C17.5838 14.5475 18.765 15.5712 18.765 16.8575C18.761 17.2439 18.6459 17.6211 18.4333 17.9438C18.2207 18.2665 17.9197 18.5213 17.5663 18.6775C17.9966 18.7937 18.3772 19.0471 18.6504 19.3992C18.9236 19.7514 19.0744 20.1831 19.08 20.6287C19.08 21.9937 17.9075 23.0525 15.7987 23.0525C15.2557 23.0917 14.7106 23.0152 14.1992 22.8282C13.6879 22.6412 13.2221 22.3478 12.8325 21.9675L13.8562 20.7862C14.0982 21.0218 14.3843 21.2072 14.6982 21.3318C15.012 21.4564 15.3474 21.5178 15.685 21.5125C16.665 21.5125 17.2862 21.1363 17.2862 20.4538C17.2862 19.7713 16.6825 19.5 15.7987 19.5ZM22.6762 10.75L21.8012 12.5H10.3125L9.4375 10.75H22.6762Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.625 4.625H9.875V6.375H11.625V4.625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22.125 4.625H20.375V6.375H22.125V4.625Z',
                fill: '#242E30'
            }
        })]);
    }
};
