import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLev',
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
            class: 'c-pieIcon c-pieIcon--lev'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_18_2449)'
            }
        }, [h('path', {
            attrs: {
                d: 'M2.96875 3.84374H7.78125V12.27H6.46875V5.15624H4.28125C4.28125 7.40499 3.94875 11.9375 1 11.9375V10.625C2.75 10.625 2.96875 6.78374 2.96875 4.49999V3.84374ZM15 9.89874C14.985 10.2317 14.9023 10.5582 14.7568 10.8581C14.6113 11.158 14.4061 11.4251 14.1538 11.643C13.9016 11.8609 13.6075 12.025 13.2896 12.1253C12.9717 12.2255 12.6366 12.2599 12.305 12.2262H9.3125V3.80874H12.1475C12.4627 3.7751 12.7815 3.80902 13.0825 3.90822C13.3836 4.00743 13.6601 4.16964 13.8936 4.38407C14.127 4.5985 14.3121 4.86021 14.4365 5.15177C14.5609 5.44334 14.6218 5.75807 14.615 6.07499C14.6111 6.44234 14.504 6.80118 14.306 7.11061C14.1079 7.42003 13.8269 7.66757 13.495 7.82499C13.9388 7.95743 14.3266 8.23227 14.5986 8.60707C14.8706 8.98187 15.0117 9.43579 15 9.89874ZM10.5375 7.42249H12.0075C12.1836 7.44126 12.3616 7.42217 12.5297 7.36651C12.6978 7.31085 12.8521 7.2199 12.9822 7.09976C13.1123 6.97962 13.2152 6.83305 13.284 6.6699C13.3528 6.50674 13.386 6.33075 13.3812 6.15374C13.3875 5.97747 13.3555 5.80193 13.2876 5.63914C13.2198 5.47634 13.1175 5.33013 12.9879 5.21049C12.8583 5.09085 12.7044 5.00062 12.5367 4.94595C12.369 4.89128 12.1915 4.87347 12.0163 4.89374H10.5288L10.5375 7.42249ZM13.7487 9.81999C13.7554 9.63093 13.7208 9.44269 13.6474 9.26834C13.574 9.09399 13.4635 8.9377 13.3237 8.81033C13.1838 8.68295 13.0179 8.58753 12.8374 8.53071C12.657 8.47388 12.4664 8.457 12.2788 8.48124H10.5288V11.1062H12.2788C12.4615 11.1299 12.6472 11.1143 12.8234 11.0604C12.9996 11.0066 13.1623 10.9158 13.3006 10.794C13.439 10.6723 13.5497 10.5224 13.6255 10.3544C13.7012 10.1865 13.7403 10.0043 13.74 9.81999H13.7487Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_18_2449'
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
