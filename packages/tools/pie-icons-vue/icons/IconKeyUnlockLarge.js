import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconKeyUnlockLarge',
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
            class: 'c-pieIcon c-pieIcon--keyUnlockLarge'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_18_2240)'
            }
        }, [h('path', {
            attrs: {
                d: 'M29.125 7.25V24.75C29.125 25.4462 28.8485 26.1139 28.3562 26.6062C27.8639 27.0984 27.1962 27.375 26.5 27.375H16.875C16.1788 27.375 15.5112 27.0984 15.0189 26.6062C14.5266 26.1139 14.25 25.4462 14.25 24.75V22.125H16V24.75C16 24.9821 16.0922 25.2046 16.2563 25.3687C16.4204 25.5328 16.643 25.625 16.875 25.625H26.5C26.7321 25.625 26.9547 25.5328 27.1188 25.3687C27.2829 25.2046 27.375 24.9821 27.375 24.75V7.25C27.375 7.01794 27.2829 6.79538 27.1188 6.63128C26.9547 6.46719 26.7321 6.375 26.5 6.375H16.875C16.643 6.375 16.4204 6.46719 16.2563 6.63128C16.0922 6.79538 16 7.01794 16 7.25V9.875H14.25V7.25C14.25 6.55381 14.5266 5.88613 15.0189 5.39384C15.5112 4.90156 16.1788 4.625 16.875 4.625H26.5C27.1962 4.625 27.8639 4.90156 28.3562 5.39384C28.8485 5.88613 29.125 6.55381 29.125 7.25ZM15.23 20.1475H14.1275L13.1388 19.15L12.395 19.8938C11.8444 20.5362 11.1612 21.0519 10.3924 21.4053C9.62363 21.7588 8.78744 21.9416 7.94129 21.9412C6.95954 21.9473 5.9916 21.7099 5.12402 21.2504C4.25644 20.7909 3.51625 20.1235 2.96964 19.308C2.42303 18.4924 2.08704 17.5542 1.9917 16.5771C1.89637 15.5999 2.04466 14.6144 2.42332 13.7086C2.80198 12.8028 3.39921 12.005 4.16161 11.3864C4.924 10.7678 5.8278 10.3478 6.7922 10.164C7.75659 9.98012 8.75152 10.0381 9.68802 10.3328C10.6245 10.6274 11.4734 11.1496 12.1588 11.8525H18.3363L22.4838 16L18.3363 20.1475H17.2425L16.2363 19.1413L15.23 20.1475ZM14.6875 18.2225L16.2363 16.6737L17.75 18.2225L20.0163 16L17.61 13.6025H11.3713L11.1088 13.2962C10.5546 12.6398 9.81214 12.1696 8.98186 11.9491C8.15158 11.7287 7.27361 11.7687 6.46681 12.0637C5.66001 12.3587 4.96336 12.8945 4.47116 13.5986C3.97896 14.3026 3.71499 15.141 3.71499 16C3.71499 16.859 3.97896 17.6974 4.47116 18.4014C4.96336 19.1055 5.66001 19.6413 6.46681 19.9363C7.27361 20.2313 8.15158 20.2713 8.98186 20.0509C9.81214 19.8304 10.5546 19.3602 11.1088 18.7038L13.1475 16.665L14.6875 18.2225ZM6.97004 14.53C6.67968 14.5317 6.39633 14.6194 6.15575 14.782C5.91516 14.9446 5.72811 15.1747 5.61819 15.4435C5.50827 15.7122 5.4804 16.0075 5.53811 16.2921C5.59581 16.5767 5.7365 16.8378 5.94243 17.0425C6.14836 17.2472 6.4103 17.3863 6.69521 17.4424C6.98012 17.4984 7.27524 17.4688 7.54333 17.3572C7.81143 17.2457 8.0405 17.0573 8.20164 16.8158C8.36278 16.5742 8.44878 16.2904 8.44879 16C8.44879 15.8062 8.41048 15.6143 8.33606 15.4354C8.26164 15.2565 8.15258 15.0941 8.01515 14.9574C7.87771 14.8208 7.71463 14.7127 7.53527 14.6394C7.35591 14.566 7.16382 14.5288 6.97004 14.53ZM23.875 12.5V18.625H25.625V12.5H23.875Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_18_2240'
            }
        }, [h('rect', {
            attrs: {
                width: '28',
                height: '28',
                fill: 'white',
                transform: 'translate(2 2)'
            }
        })])])]);
    }
};
