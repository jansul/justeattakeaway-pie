import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconSendLarge',
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
            class: 'c-pieIcon c-pieIcon--sendLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.705 7.31495C25.6855 7.04517 25.5681 6.79181 25.375 6.60245C25.1749 6.40174 24.9079 6.28161 24.625 6.26495C24.4606 6.24484 24.2938 6.2628 24.1375 6.31745L5.5 12.4299C5.28292 12.5145 5.09578 12.6615 4.96228 12.8524C4.82877 13.0433 4.7549 13.2695 4.75 13.5024C4.75 13.7421 4.82131 13.9764 4.95487 14.1754C5.08844 14.3744 5.2782 14.5291 5.5 14.6199L9.25 16.1724V21.9999H15.25L17.3575 26.5899C17.458 26.786 17.6106 26.9506 17.7984 27.0657C17.9863 27.1808 18.2022 27.2419 18.4225 27.2424H18.475C18.7108 27.2286 18.9374 27.146 19.1267 27.0046C19.316 26.8633 19.4597 26.6696 19.54 26.4474L25.645 7.86995C25.7095 7.6925 25.7301 7.50208 25.705 7.31495ZM22.195 8.53745L13.75 16.4049L6.865 13.5624L22.195 8.53745ZM10.75 20.4999V16.7949L12.535 17.5449L13.3675 17.8899L13.6675 18.5424L14.575 20.4999H10.75ZM18.3775 25.2099L14.8225 17.4474L23.605 9.24995L18.3775 25.2099Z',
                fill: '#242E30'
            }
        })]);
    }
};
