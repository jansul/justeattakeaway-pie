import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAndroidCircleLarge',
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
            class: 'c-pieIcon c-pieIcon--androidCircleLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M15.5797 9.27526C14.6752 9.37197 13.8681 9.77646 13.2714 10.3785L12.582 9.04849C12.559 9.00211 12.5035 8.98664 12.462 9.01241C12.4204 9.03818 12.4065 9.10003 12.4296 9.14642L13.1403 10.5177C12.5741 11.151 12.2282 11.9748 12.2171 12.8779H19.7875C19.7764 11.9723 19.4275 11.1464 18.8579 10.5125L19.5659 9.14642C19.589 9.10003 19.5751 9.03818 19.5336 9.01241C19.492 8.98664 19.4366 9.00211 19.4135 9.04849L18.7266 10.3737C18.1299 9.77429 17.3247 9.37171 16.4249 9.27526H15.5797ZM14.4389 11.6821C14.6791 11.6821 14.8731 11.4708 14.8731 11.208V11.2028C14.8731 10.94 14.6791 10.7287 14.4389 10.7287C14.1987 10.7338 14.0047 10.9451 14.0047 11.208C14.0047 11.4708 14.1987 11.6821 14.4389 11.6821ZM17.6768 11.6821C17.917 11.6821 18.1109 11.4708 18.1109 11.208V11.2028C18.1109 10.94 17.917 10.7287 17.6768 10.7287C17.4366 10.7338 17.2426 10.9451 17.2426 11.208C17.2426 11.4708 17.4366 11.6821 17.6768 11.6821Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M17.0531 20.65H14.9468V23.062C14.9468 23.5774 14.5726 24 14.1061 24C13.6396 24 13.2655 23.5825 13.2655 23.062V20.65H13.2286C12.6512 20.65 12.1894 20.1243 12.1894 19.4697V13.3881C12.1894 13.3701 12.1905 13.352 12.1917 13.334C12.1928 13.316 12.194 13.2979 12.194 13.2799H19.8106V19.4697C19.8106 20.1243 19.3487 20.65 18.7713 20.65H18.7344V23.062C18.7344 23.5774 18.3603 24 17.8938 24C17.4273 24 17.0531 23.5825 17.0531 23.062V20.65Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M11.6813 14.759C11.6813 14.2385 11.3025 13.821 10.8406 13.821C10.3741 13.821 10 14.2436 10 14.759V18.7739C10 19.2945 10.3741 19.7119 10.8406 19.7119C11.3072 19.7119 11.6813 19.2893 11.6813 18.7739V14.759Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M22 14.759C22 14.2385 21.6212 13.821 21.1594 13.821C20.6928 13.821 20.3187 14.2436 20.3187 14.759V18.7739C20.3187 19.2945 20.6928 19.7119 21.1594 19.7119C21.6259 19.7119 22 19.2893 22 18.7739V14.759Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16 28.25C13.5772 28.25 11.2088 27.5316 9.19427 26.1855C7.17977 24.8395 5.60965 22.9263 4.68248 20.6879C3.75531 18.4495 3.51272 15.9864 3.98539 13.6101C4.45805 11.2339 5.62475 9.05114 7.33795 7.33795C9.05114 5.62475 11.2339 4.45805 13.6101 3.98539C15.9864 3.51272 18.4495 3.75531 20.6879 4.68248C22.9263 5.60965 24.8395 7.17977 26.1855 9.19427C27.5316 11.2088 28.25 13.5772 28.25 16C28.25 19.2489 26.9594 22.3647 24.6621 24.6621C22.3647 26.9594 19.2489 28.25 16 28.25ZM16 5.50001C13.9233 5.50001 11.8932 6.11582 10.1665 7.26957C8.4398 8.42333 7.09399 10.0632 6.29927 11.9818C5.50455 13.9005 5.29662 16.0117 5.70176 18.0485C6.1069 20.0853 7.10693 21.9562 8.57538 23.4246C10.0438 24.8931 11.9148 25.8931 13.9516 26.2983C15.9884 26.7034 18.0996 26.4955 20.0182 25.7007C21.9368 24.906 23.5767 23.5602 24.7304 21.8335C25.8842 20.1068 26.5 18.0767 26.5 16C26.5 13.2152 25.3938 10.5445 23.4246 8.57538C21.4555 6.60625 18.7848 5.50001 16 5.50001Z',
                fill: '#242E30'
            }
        })]);
    }
};
