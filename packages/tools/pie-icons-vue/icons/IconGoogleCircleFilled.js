import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGoogleCircleFilled',
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
            class: 'c-pieIcon c-pieIcon--googleCircleFilled'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_923_545)'
            }
        }, [h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M7.99986 1.17505C6.66053 1.17508 5.35119 1.57171 4.23699 2.31492C3.12278 3.05814 2.25362 4.11465 1.7391 5.3512C1.22458 6.58776 1.08776 7.94899 1.34589 9.26321C1.60402 10.5774 2.24554 11.7858 3.18954 12.7359C4.13354 13.686 5.33775 14.3352 6.65029 14.6018C7.96283 14.8684 9.32491 14.7403 10.5648 14.2338C11.8046 13.7272 12.8667 12.8649 13.6171 11.7555C14.3674 10.6461 14.7725 9.33932 14.7811 8.00002C14.7857 7.10614 14.6138 6.22015 14.2752 5.39288C13.9365 4.56561 13.4379 3.81335 12.8079 3.17924C12.1778 2.54514 11.4288 2.04168 10.6037 1.69775C9.77862 1.35382 8.89375 1.17619 7.99986 1.17505ZM8.07842 8.69125V7.21249L11.7534 7.15999C11.7972 7.29124 11.7972 7.42249 11.7972 7.54499C11.8523 8.11914 11.7959 8.69854 11.6309 9.25125C11.386 10.0428 10.8682 10.7219 10.1697 11.1675C9.63747 11.4817 9.03691 11.6618 8.41967 11.6925C8.059 11.7186 7.69645 11.6921 7.34342 11.6138C6.65378 11.4688 6.01777 11.1356 5.50592 10.6513C5.16689 10.3376 4.8933 9.9599 4.70092 9.54C4.5655 9.26194 4.46555 8.96797 4.40342 8.665C4.39511 8.61723 4.38582 8.56897 4.37647 8.52045C4.34645 8.36455 4.31592 8.20598 4.31592 8.05249V7.45749C4.34598 7.18868 4.40766 6.92435 4.49967 6.66999C4.78768 5.84152 5.35175 5.13725 6.09731 4.67525C6.84287 4.21326 7.7246 4.02162 8.59467 4.13248C9.25565 4.2097 9.88092 4.47378 10.3972 4.89373L10.6247 5.08623L9.52217 6.17123C9.30918 5.97436 9.05772 5.82373 8.78364 5.72886C8.50955 5.63398 8.21879 5.59691 7.92967 5.61998C7.48322 5.6369 7.05392 5.79636 6.70467 6.07498C6.4281 6.27918 6.2 6.54191 6.03665 6.84441C5.8733 7.14691 5.77872 7.48173 5.75967 7.82499C5.74162 8.1234 5.78941 8.42212 5.89967 8.7C5.98469 8.93149 6.10257 9.14956 6.24967 9.3475C6.56534 9.76703 7.01689 10.0639 7.52717 10.1875C7.8446 10.2678 8.17505 10.2827 8.49842 10.2313C8.8354 10.1854 9.15647 10.0594 9.43467 9.86375C9.80765 9.60931 10.0679 9.22056 10.1609 8.77875V8.69125H8.07842Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_923_545'
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
