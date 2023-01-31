import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconVeganLarge',
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
            class: 'c-pieIcon c-pieIcon--veganLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M27.9438 4.00378L27.7338 3.12878L26.8588 3.36503C26.5 3.47003 17.75 5.93753 15.2563 10.1288C15.1513 10.3038 15.0638 10.4788 14.9763 10.6625C12.1588 7.37253 5.1675 5.60503 4.8525 5.50003L3.9775 5.29003L3.75 6.20003C3.68 6.54128 2 14.565 4.35375 18.31C4.96876 19.289 5.82178 20.0961 6.83319 20.6562C7.84459 21.2162 8.9814 21.5108 10.1375 21.5125C10.5044 21.5084 10.8703 21.4733 11.2313 21.4075L14.1013 28.5563H16.7263L19.78 20.9438C20.2653 21.0545 20.761 21.1132 21.2588 21.1188C22.5559 21.1116 23.8289 20.7665 24.9521 20.1175C26.0752 19.4684 27.0098 18.5379 27.6638 17.4175C30.1225 13.2175 28.0313 4.38003 27.9438 4.00378ZM5.87625 17.3825C4.44125 15.125 4.89625 10.085 5.325 7.46878C7.87125 8.22128 12.57 9.98878 14.0138 12.29C14.1187 12.4556 14.2122 12.6281 14.2938 12.8063C14.135 13.8087 14.1827 14.8329 14.4338 15.8163C14.4863 15.9913 14.5388 16.175 14.6 16.35C14.2905 17.4614 13.5837 18.4204 12.6138 19.045L10.9775 14.9063H8.62375L10.5663 19.7363C9.64387 19.8115 8.71856 19.6317 7.89143 19.2166C7.06431 18.8015 6.36719 18.167 5.87625 17.3825ZM15.5013 26.2638L13.305 20.6813L13.5675 20.5413C14.4442 19.9891 15.1738 19.2324 15.6938 18.3363C16.2472 19.071 16.9399 19.6895 17.7325 20.1563L17.8813 20.2263L15.5013 26.2638ZM26.1413 16.525C25.5731 17.5056 24.7245 18.2937 23.7047 18.7881C22.6849 19.2824 21.5405 19.4602 20.4187 19.2988L22.1687 14.9238H19.9375L18.4938 18.625C17.3165 17.9089 16.468 16.7587 16.1313 15.4225C15.939 14.6882 15.8957 13.9227 16.0039 13.1713C16.1121 12.4199 16.3696 11.6978 16.7613 11.0475C18.4675 8.12503 24.2163 6.04253 26.4388 5.32503C27.0075 8.19503 27.7075 13.865 26.1413 16.525Z',
                fill: '#242E30'
            }
        })]);
    }
};
