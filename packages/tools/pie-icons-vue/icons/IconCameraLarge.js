import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconCameraLarge',
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
            class: 'c-pieIcon c-pieIcon--cameraLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 9.875C14.7886 9.875 13.6044 10.2342 12.5971 10.9072C11.5899 11.5803 10.8048 12.5369 10.3413 13.6561C9.87766 14.7753 9.75637 16.0068 9.9927 17.1949C10.229 18.3831 10.8124 19.4744 11.669 20.331C12.5256 21.1876 13.617 21.771 14.8051 22.0073C15.9932 22.2436 17.2248 22.1223 18.3439 21.6588C19.4631 21.1952 20.4197 20.4101 21.0928 19.4029C21.7658 18.3956 22.125 17.2114 22.125 16C22.125 14.3755 21.4797 12.8176 20.331 11.669C19.1824 10.5203 17.6245 9.875 16 9.875ZM16 20.375C15.1347 20.375 14.2889 20.1184 13.5694 19.6377C12.8499 19.1569 12.2892 18.4737 11.958 17.6742C11.6269 16.8748 11.5403 15.9951 11.7091 15.1465C11.8779 14.2978 12.2946 13.5183 12.9064 12.9064C13.5183 12.2946 14.2978 11.8779 15.1465 11.7091C15.9952 11.5403 16.8748 11.6269 17.6743 11.958C18.4737 12.2892 19.157 12.8499 19.6377 13.5694C20.1184 14.2888 20.375 15.1347 20.375 16C20.375 17.1603 19.9141 18.2731 19.0936 19.0936C18.2731 19.9141 17.1603 20.375 16 20.375ZM27.13 8.57125C25.5329 8.19822 23.9179 7.90618 22.2913 7.69625L21.25 5.3425C21.0507 4.87646 20.7207 4.47808 20.3 4.19549C19.8792 3.91289 19.3856 3.75817 18.8788 3.75H13.1213C12.6145 3.75817 12.1209 3.91289 11.7001 4.19549C11.2793 4.47808 10.9493 4.87646 10.75 5.3425L9.70876 7.67C8.0908 7.8799 6.48456 8.17195 4.89626 8.545C4.31643 8.682 3.80045 9.01219 3.43312 9.48128C3.06579 9.95038 2.86898 10.5305 2.87501 11.1263V23.875C2.87501 24.5712 3.15157 25.2389 3.64386 25.7312C4.13614 26.2234 4.80382 26.5 5.50001 26.5H26.5C27.1962 26.5 27.8639 26.2234 28.3562 25.7312C28.8485 25.2389 29.125 24.5712 29.125 23.875V11.1263C29.1265 10.5385 28.9307 9.96727 28.569 9.50401C28.2073 9.04076 27.7006 8.71231 27.13 8.57125ZM27.375 23.875C27.375 24.1071 27.2828 24.3296 27.1187 24.4937C26.9546 24.6578 26.7321 24.75 26.5 24.75H5.50001C5.26795 24.75 5.04539 24.6578 4.88129 24.4937C4.7172 24.3296 4.62501 24.1071 4.62501 23.875V11.1263C4.61964 10.9252 4.6837 10.7284 4.80641 10.569C4.92913 10.4097 5.103 10.2974 5.29876 10.2513C6.9899 9.85389 8.70167 9.55009 10.4263 9.34125L10.925 9.28L12.3163 6.03375C12.3832 5.8756 12.4953 5.74065 12.6384 5.64574C12.7816 5.55083 12.9495 5.50014 13.1213 5.5H18.8788C19.0505 5.50014 19.2184 5.55083 19.3616 5.64574C19.5047 5.74065 19.6168 5.8756 19.6838 6.03375L21.075 9.28L21.5738 9.34125C23.3046 9.55509 25.0222 9.86473 26.7188 10.2687C26.9113 10.3184 27.0812 10.432 27.2005 10.5911C27.3197 10.7501 27.3813 10.945 27.375 11.1437V23.875Z',
                fill: '#242E30'
            }
        })]);
    }
};