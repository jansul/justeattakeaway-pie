import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRestaurantMenuLarge',
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
            class: 'c-pieIcon c-pieIcon--restaurantMenuLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M19.5 22.125H12.5V23.875H19.5V22.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M23.875 3.75H8.125C7.42881 3.75 6.76113 4.02656 6.26884 4.51884C5.77656 5.01113 5.5 5.67881 5.5 6.375V28.3025L5.5875 28.25H26.4125L26.5 28.3025V6.375C26.5 5.67881 26.2234 5.01113 25.7312 4.51884C25.2389 4.02656 24.5712 3.75 23.875 3.75ZM7.25 26.5V6.375C7.25 6.14294 7.34219 5.92038 7.50628 5.75628C7.67038 5.59219 7.89294 5.5 8.125 5.5H23.875C24.1071 5.5 24.3296 5.59219 24.4937 5.75628C24.6578 5.92038 24.75 6.14294 24.75 6.375V26.5H7.25Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M21.25 18.625H10.75V20.375H21.25V18.625Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M21.1712 13.375C20.9889 12.3019 20.4775 11.3119 19.7078 10.5422C18.9381 9.77254 17.9481 9.26111 16.875 9.07875C16.8791 9.05266 16.8791 9.02609 16.875 9C16.875 8.76794 16.7828 8.54538 16.6187 8.38128C16.4546 8.21719 16.2321 8.125 16 8.125C15.7679 8.125 15.5454 8.21719 15.3813 8.38128C15.2172 8.54538 15.125 8.76794 15.125 9C15.1209 9.02609 15.1209 9.05266 15.125 9.07875C14.0519 9.26111 13.0619 9.77254 12.2922 10.5422C11.5225 11.3119 11.0111 12.3019 10.8288 13.375C10.7805 13.6643 10.7541 13.9568 10.75 14.25V15.125H21.25V14.25C21.2459 13.9568 21.2195 13.6643 21.1712 13.375ZM12.6225 13.375C12.824 12.6336 13.2639 11.979 13.8743 11.5124C14.4847 11.0457 15.2317 10.7929 16 10.7929C16.7683 10.7929 17.5153 11.0457 18.1257 11.5124C18.7361 11.979 19.176 12.6336 19.3775 13.375H12.6225Z',
                fill: '#242E30'
            }
        })]);
    }
};
