import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconDirectionsLarge',
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
            class: 'c-pieIcon c-pieIcon--directionsLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.4513 13.6637L20.9 7.25H14.25V5.5C14.25 5.03587 14.0656 4.59075 13.7374 4.26256C13.4092 3.93437 12.9641 3.75 12.5 3.75H10.75C10.2859 3.75 9.84075 3.93437 9.51256 4.26256C9.18437 4.59075 9 5.03587 9 5.5V7.25H2.875V22.125H9V27.375H10.75V22.125H12.5V27.375H14.25V22.125H20.9L28.3988 16.63C28.6261 16.4507 28.8096 16.222 28.9355 15.9613C29.0613 15.7005 29.1261 15.4145 29.125 15.125C29.1284 14.8467 29.0696 14.5711 28.9531 14.3183C28.8365 14.0655 28.6651 13.8419 28.4513 13.6637ZM10.75 5.9375C10.75 5.82147 10.7961 5.71019 10.8781 5.62814C10.9602 5.54609 11.0715 5.5 11.1875 5.5H12.0625C12.1785 5.5 12.2898 5.54609 12.3719 5.62814C12.4539 5.71019 12.5 5.82147 12.5 5.9375V7.25H10.75V5.9375ZM20.2 20.375H4.625V9H20.2L27.375 15.125L20.2 20.375Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M19.78 14.1975L16.9187 11.3275L15.685 12.57L17.365 14.25H10.75V20.375H12.5V16H17.365L15.685 17.68L16.9187 18.9225L19.78 16.0525C19.9028 15.9312 20.0002 15.7868 20.0667 15.6276C20.1333 15.4684 20.1675 15.2976 20.1675 15.125C20.1675 14.9525 20.1333 14.7816 20.0667 14.6224C20.0002 14.4632 19.9028 14.3188 19.78 14.1975Z',
                fill: '#242E30'
            }
        })]);
    }
};