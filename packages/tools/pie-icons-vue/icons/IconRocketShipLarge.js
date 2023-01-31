import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconRocketShipLarge',
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
            class: 'c-pieIcon c-pieIcon--rocketShipLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.0163 5.63123L26.885 5.13248L26.3863 5.00123C22.265 3.95123 18.5113 5.07123 15.2475 8.34373L12.1325 11.4587C11.9915 11.5782 11.8094 11.6379 11.625 11.625H7.69628C7.41356 11.609 7.13061 11.6521 6.86546 11.7515C6.60032 11.851 6.3588 12.0045 6.15628 12.2025L4.20503 14.1887L17.75 27.7425L19.7013 25.7912C19.8945 25.5944 20.0455 25.3602 20.1448 25.1028C20.2441 24.8455 20.2897 24.5706 20.2788 24.295V20.3137C20.2773 20.2214 20.2943 20.1296 20.3289 20.044C20.3635 19.9583 20.4149 19.8805 20.48 19.815L23.595 16.7C26.9025 13.375 28.0488 9.67373 27.0163 5.63123ZM22.37 15.4662L19.255 18.625C19.0246 18.854 18.8425 19.1268 18.7192 19.4274C18.596 19.728 18.5342 20.0502 18.5375 20.375V24.4087C18.5454 24.4841 18.5235 24.5595 18.4763 24.6187L17.75 25.275L6.67253 14.1887L7.39003 13.4712C7.42734 13.4437 7.46985 13.4241 7.51498 13.4136C7.56011 13.4031 7.60691 13.4018 7.65253 13.41H11.625C11.9496 13.4114 12.2712 13.3487 12.5715 13.2256C12.8718 13.1024 13.1449 12.9213 13.375 12.6925L16.49 9.58623C19.15 6.90873 22.125 5.90248 25.4413 6.57623C26.1063 9.82248 25.1 12.7362 22.37 15.4662ZM17.9075 10.0325C17.5058 10.4354 17.2325 10.9484 17.1222 11.5066C17.0118 12.0648 17.0694 12.6431 17.2875 13.1686C17.5057 13.6941 17.8747 14.1432 18.3479 14.4591C18.8211 14.775 19.3773 14.9436 19.9463 14.9436C20.5153 14.9436 21.0715 14.775 21.5447 14.4591C22.0179 14.1432 22.3869 13.6941 22.605 13.1686C22.8232 12.6431 22.8807 12.0648 22.7704 11.5066C22.66 10.9484 22.3867 10.4354 21.985 10.0325C21.4352 9.50928 20.7053 9.21748 19.9463 9.21748C19.1873 9.21748 18.4574 9.50928 17.9075 10.0325ZM20.7425 12.8675C20.5269 13.0552 20.2481 13.1542 19.9624 13.1443C19.6766 13.1345 19.4053 13.0165 19.2031 12.8144C19.001 12.6122 18.8831 12.3409 18.8732 12.0551C18.8633 11.7694 18.9623 11.4906 19.15 11.275C19.2542 11.1697 19.3782 11.0861 19.5149 11.029C19.6515 10.972 19.7982 10.9426 19.9463 10.9426C20.0944 10.9426 20.241 10.972 20.3777 11.029C20.5144 11.0861 20.6384 11.1697 20.7425 11.275C20.8489 11.3785 20.9334 11.5023 20.9912 11.6391C21.0489 11.7759 21.0786 11.9228 21.0786 12.0712C21.0786 12.2197 21.0489 12.3666 20.9912 12.5034C20.9334 12.6401 20.8489 12.7639 20.7425 12.8675ZM9.07878 21.5387L5.24628 25.3712L4.00378 24.1287L7.83628 20.2962L9.07878 21.5387ZM10.4613 22.9212L11.7038 24.1637L9.18378 26.6837L7.94128 25.4412L10.4613 22.9212Z',
                fill: '#242E30'
            }
        })]);
    }
};
