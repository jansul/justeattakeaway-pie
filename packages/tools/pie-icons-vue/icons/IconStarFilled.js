import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconStarFilled',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--starFilled');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'm12.288 14.449-4.183-2.197a.219.219 0 0 0-.21 0L3.713 14.45 4.5 9.794a.254.254 0 0 0 0-.193L1.07 6.302l4.673-.682a.228.228 0 0 0 .166-.114L8 1.271l2.091 4.235a.227.227 0 0 0 .167.114l4.672.682-3.386 3.3a.254.254 0 0 0-.061.192l.805 4.655Z',
            },
        })]);
    },
};
