import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLocationPinFoodLarge',
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
            class: 'c-pieIcon c-pieIcon--locationPinFoodLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M24.05 5.49125C21.8975 3.32125 19.0363 2.1225 16 2.1225C12.9638 2.1225 10.1025 3.32125 7.95002 5.49125C3.52252 9.97125 3.52252 17.26 7.95002 21.74L16 29.8775L24.05 21.74C28.4775 17.26 28.4775 9.97125 24.05 5.49125ZM22.8075 20.5062L16.0088 27.3837L9.21002 20.5062C5.45627 16.7087 5.45627 10.5225 9.21002 6.71625C11.03 4.87875 13.445 3.86375 16.0088 3.86375C18.5725 3.86375 20.9963 4.87875 22.8075 6.71625C26.5613 10.5137 26.5613 16.7 22.8075 20.5062Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M14.9326 8.62372C14.7576 8.62372 14.6264 8.76372 14.6176 8.92997C14.5389 10.2687 14.5301 11.8525 14.5564 13.4187C14.5564 13.62 14.3901 13.8037 14.1801 13.8037C13.9701 13.8037 13.7864 13.6462 13.7864 13.4275C13.7601 11.8787 13.7689 10.3037 13.8476 8.97372V8.94747C13.8389 8.77247 13.6901 8.63247 13.5151 8.63247C13.3401 8.63247 13.2089 8.77247 13.2001 8.93872C13.1214 10.2775 13.1126 11.87 13.1389 13.445C13.1389 13.655 12.9726 13.8387 12.7626 13.8387C12.6489 13.8387 12.5526 13.7862 12.4826 13.7075C12.4739 13.69 12.4564 13.69 12.4389 13.6725C12.3951 13.6112 12.3689 13.5412 12.3689 13.4625C12.3426 11.905 12.3514 10.3212 12.4301 8.98247V8.95622C12.4301 8.78122 12.2726 8.64122 12.0976 8.64122C12.0626 8.64122 12.0276 8.65872 12.0014 8.66747C11.9926 8.66747 11.9751 8.66747 11.9576 8.67622C11.8614 8.72872 11.7826 8.82497 11.7826 8.94747C11.6601 10.96 11.7039 13.515 11.7826 15.7375C11.7914 15.965 11.8614 16.175 11.9489 16.3675C11.9576 16.3937 11.9751 16.4112 11.9926 16.4375C12.1064 16.6475 12.2464 16.84 12.4389 16.9887C12.4564 16.9975 12.4651 17.0062 12.4826 17.0237V20.0337H14.5651C14.5389 19.815 14.5214 19.5612 14.4864 19.255C14.3289 17.645 14.3726 17.3125 14.3726 17.3125C14.3726 17.2075 14.4339 17.1287 14.5214 17.0675C14.9764 16.7525 15.2739 16.2362 15.2739 15.6412V15.5625C15.1951 13.3925 15.1514 10.925 15.2739 8.97372V8.94747C15.2739 8.77247 15.1164 8.63247 14.9414 8.63247L14.9326 8.62372Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M20.1651 8.125C20.1126 8.0025 19.9901 7.90625 19.8501 7.90625C19.7801 7.90625 19.7101 7.9325 19.6489 7.97625C19.6489 7.97625 19.6051 8.0025 19.5439 8.06375C19.5439 8.06375 19.3164 8.30875 18.9926 8.85125C18.8439 9.09625 18.6776 9.41125 18.5114 9.7875C18.1439 10.6012 17.7414 11.7387 17.4264 13.2612C17.2164 14.2675 17.0501 15.44 16.9539 16.805C16.9539 16.805 16.9539 16.9013 16.9714 16.98C17.0064 17.12 17.1114 17.225 17.2864 17.26L17.4264 17.2775L18.4064 17.4175C18.4064 17.4175 18.4851 17.4438 18.5114 17.4788V18.5725C18.4851 18.9575 18.4414 19.4475 18.3801 20.0338H20.0076C20.0514 19.3075 20.1214 18.0387 20.1826 16.5687C20.2964 13.8387 20.3926 10.3387 20.2001 8.2825C20.2001 8.16875 20.1739 8.125 20.1739 8.125H20.1651Z',
                fill: '#242E30'
            }
        })]);
    }
};
