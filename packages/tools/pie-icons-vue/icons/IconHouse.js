import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconHouse',
    props: {},
    functional: true,
    render (h, ctx) {
        const attrs = ctx.data.attrs || {};
        ctx.data.attrs = attrs;
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 16 16'
            },
            class: 'c-pieIcon c-pieIcon--house'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_15_1251)'
            }
        }, [h('path', {
            attrs: {
                d: 'M15.0437 8.07006C14.8862 7.90381 11.2288 3.89631 8.91875 2.34756C8.64679 2.18704 8.33646 2.10309 8.02067 2.10464C7.70487 2.10618 7.39538 2.19314 7.125 2.35631C4.77125 3.89631 1.11375 7.90381 1 8.07006L1.97125 8.94506C1.97125 8.94506 2.4 8.49006 3.0125 7.84256V13.8976H13.075V7.85131C13.6875 8.49881 14.0988 8.94506 14.1163 8.95381L15.0437 8.07006ZM8.875 12.5938V10.6251C8.875 10.393 8.78281 10.1704 8.61872 10.0063C8.45462 9.84225 8.23206 9.75006 8 9.75006C7.76794 9.75006 7.54538 9.84225 7.38128 10.0063C7.21719 10.1704 7.125 10.393 7.125 10.6251V12.5938H4.28125V6.52131C5.36144 5.40568 6.53211 4.38135 7.78125 3.45881C7.84098 3.4288 7.9069 3.41317 7.97375 3.41317C8.0406 3.41317 8.10652 3.4288 8.16625 3.45881C9.41521 4.38479 10.5858 5.41201 11.6662 6.53006V12.6026L8.875 12.5938Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_15_1251'
            }
        }, [h('rect', {
            attrs: {
                width: '14',
                height: '14',
                fill: 'white',
                transform: 'translate(1 1)'
            }
        })])])]);
    }
};
