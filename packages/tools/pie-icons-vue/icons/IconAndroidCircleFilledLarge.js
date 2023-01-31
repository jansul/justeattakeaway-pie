import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconAndroidCircleFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--androidCircleFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M14.8731 11.208C14.8731 11.4708 14.6791 11.6821 14.4389 11.6821C14.1987 11.6821 14.0047 11.4708 14.0047 11.208C14.0047 10.9451 14.1987 10.7338 14.4389 10.7287C14.6791 10.7287 14.8731 10.94 14.8731 11.2028V11.208Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M18.1109 11.208C18.1109 11.4708 17.917 11.6821 17.6768 11.6821C17.4366 11.6821 17.2426 11.4708 17.2426 11.208C17.2426 10.9451 17.4366 10.7338 17.6768 10.7287C17.917 10.7287 18.1109 10.94 18.1109 11.2028V11.208Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M9.19427 26.1855C11.2088 27.5316 13.5772 28.25 16 28.25C19.2489 28.25 22.3647 26.9594 24.6621 24.6621C26.9594 22.3647 28.25 19.2489 28.25 16C28.25 13.5772 27.5316 11.2088 26.1855 9.19427C24.8395 7.17977 22.9263 5.60965 20.6879 4.68248C18.4495 3.75531 15.9864 3.51272 13.6101 3.98539C11.2339 4.45805 9.05114 5.62475 7.33795 7.33795C5.62475 9.05114 4.45805 11.2339 3.98539 13.6101C3.51272 15.9864 3.75531 18.4495 4.68248 20.6879C5.60965 22.9263 7.17977 24.8395 9.19427 26.1855ZM13.2714 10.3785C13.8681 9.77646 14.6752 9.37197 15.5797 9.27526H16.4249C17.3247 9.37171 18.1299 9.77429 18.7266 10.3737L19.4135 9.04849C19.4366 9.00211 19.492 8.98664 19.5336 9.01241C19.5751 9.03818 19.589 9.10003 19.5659 9.14642L18.8579 10.5125C19.4275 11.1464 19.7764 11.9723 19.7875 12.8779H12.2171C12.2282 11.9748 12.5741 11.151 13.1403 10.5177L12.4296 9.14642C12.4065 9.10003 12.4204 9.03818 12.462 9.01241C12.5035 8.98664 12.559 9.00211 12.582 9.04849L13.2714 10.3785ZM14.9468 20.65H17.0531V23.062C17.0531 23.5825 17.4273 24 17.8938 24C18.3603 24 18.7344 23.5774 18.7344 23.062V20.65H18.7713C19.3487 20.65 19.8106 20.1243 19.8106 19.4697V13.2799H12.194C12.194 13.2979 12.1928 13.3159 12.1917 13.3339C12.1905 13.352 12.1894 13.3701 12.1894 13.3881V19.4697C12.1894 20.1243 12.6512 20.65 13.2286 20.65H13.2655V23.062C13.2655 23.5825 13.6396 24 14.1061 24C14.5726 24 14.9468 23.5774 14.9468 23.062V20.65ZM11.6813 14.759C11.6813 14.2385 11.3025 13.821 10.8406 13.821C10.3741 13.821 10 14.2436 10 14.759V18.7739C10 19.2945 10.3741 19.7119 10.8406 19.7119C11.3072 19.7119 11.6813 19.2893 11.6813 18.7739V14.759ZM21.1594 13.821C21.6212 13.821 22 14.2385 22 14.759V18.7739C22 19.2893 21.6259 19.7119 21.1594 19.7119C20.6928 19.7119 20.3187 19.2945 20.3187 18.7739V14.759C20.3187 14.2436 20.6928 13.821 21.1594 13.821Z',
                fill: '#242E30'
            }
        })]);
    }
};
