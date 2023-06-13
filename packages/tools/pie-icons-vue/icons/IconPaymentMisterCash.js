import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconPaymentMisterCash',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--misterCash');
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
                fill: '#fff',
                'fill-rule': 'evenodd',
                d: 'M8 4.141h5.53c.735 0 .962.534.962.919v5.889c0 .367-.227.918-.962.918H2.47c-.726 0-.963-.55-.963-.918V5.06c0-.376.237-.919.963-.919H8Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                d: 'M13.53 11.929H2.47c-.341 0-.621-.123-.805-.35a1.053 1.053 0 0 1-.228-.639V5.06c0-.236.08-.472.228-.647.131-.158.376-.342.805-.342h11.06c.35 0 .63.123.814.342.14.175.219.41.219.647v5.889c0 .236-.08.463-.22.639-.13.157-.376.35-.813.35v-.01ZM2.47 4.21c-.306 0-.543.097-.7.289a.886.886 0 0 0-.193.56v5.889c0 .201.07.402.193.551.157.193.394.297.7.297h11.06c.7 0 .893-.533.893-.848V5.06c0-.21-.07-.411-.193-.56-.158-.192-.394-.289-.7-.289H2.47Z',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                'fill-rule': 'evenodd',
                d: 'M5.401 8.613h2.021l1.13-1.208h2.03L8.856 9.321h-6.37V8.035H5.9l-.508.569.009.009Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#F8E14B',
                'fill-rule': 'evenodd',
                d: 'M10.572 7.405h-2.03L7.415 8.621h-2.03l1.724-1.916h6.37v1.277h-3.413l.508-.568v-.009Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                'fill-rule': 'evenodd',
                d: 'M12.655 6.233a.6.6 0 0 1-.324.087c-.324 0-.621-.245-.621-.577 0-.333.262-.578.595-.578.122 0 .254.018.35.079v.359c-.07-.062-.175-.088-.298-.088a.25.25 0 0 0-.245.245c0 .131.132.21.245.21.132 0 .21 0 .298-.079v.35-.008Zm.831-.272v.272c-.289.218-.63.035-.63-.22v-.498h-.14v-.332h.14V4.92l.394-.219v.482h.227v.297h-.21v.464c0 .087.14.079.21 0l.01.017Zm-2.879-.411.062-.306c.393-.14.97-.061.97.297v.762h-.367l-.017-.035c-.166.105-.796.157-.709-.333.053-.297.385-.367.586-.367.105 0 .15-.097.018-.105-.123 0-.359 0-.543.096V5.55Zm-6.71 0 .06-.306c.403-.14.972-.061.972.297v.762h-.377v-.035c-.166.105-.813.157-.717-.333.052-.297.376-.367.586-.367.105 0 .149-.097.018-.105-.123 0-.368 0-.534.096l-.009-.009Zm4.558.21c0 .333-.28.569-.613.569-.332 0-.62-.254-.62-.586 0-.333.28-.587.612-.587.34 0 .62.254.62.604Zm2.021.21v.271c-.297.219-.63.035-.63-.218v-.5h-.14v-.332h.14V4.93l.403-.219v.481h.218v.298h-.21v.464c0 .087.15.078.21 0l.01.017Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                'fill-rule': 'evenodd',
                d: 'M3.24 4.623c.367 0 .639.49.297.805.43.262.237.848-.245.857h-.796V4.623h.744Zm3.92 1.6a.58.58 0 0 1-.324.088c-.332 0-.621-.245-.621-.577 0-.333.262-.578.586-.578.123 0 .254.018.35.08v.358a.454.454 0 0 0-.289-.088c-.113 0-.253.097-.253.245 0 .132.14.21.253.21.123 0 .202 0 .29-.078v.35l.008-.01Zm-1.015-.655v.726h-.403v-.621c0-.22-.323-.22-.323 0v.62h-.403v-1.11h.403v.096c.332-.254.708-.018.708.297l.018-.008Zm3.509 0v.726H9.25v-.621c0-.22-.324-.22-.324 0v.62h-.393v-1.11h.393v.096c.342-.254.718-.018.718.297l.009-.008Zm1.496-.123c.131 0 .096.105-.018.105-.21 0-.542.07-.586.368-.087.49.543.446.709.332l.017.035h.368v-.761c0-.359-.569-.438-.971-.298l-.062.307c.175-.088.42-.097.543-.097v.01Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                'fill-rule': 'evenodd',
                d: 'M4.43 5.454c.131 0 .087.105-.018.105-.21 0-.533.07-.586.367-.096.49.551.446.709.333v.035h.385v-.761c0-.36-.569-.438-.971-.298l-.062.306c.167-.087.412-.096.534-.096l.009.009Zm3.404-.298c-.324 0-.613.254-.613.587 0 .332.28.586.621.586.342 0 .613-.236.613-.569a.614.614 0 0 0-.621-.604Zm2.423.805v-.464h.21V5.2h-.218v-.481l-.403.218V5.2h-.14v.332h.14v.5c0 .253.324.428.63.218v-.271c-.061.07-.21.079-.21 0l-.009-.018Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                'fill-rule': 'evenodd',
                d: 'M2.496 4.623v1.662h.796a.46.46 0 0 0 .245-.857c.342-.307.07-.805-.297-.805h-.744Zm4.655 1.25c-.096.07-.175.08-.289.08-.113 0-.253-.08-.253-.21 0-.15.13-.245.253-.245s.21.017.29.087v-.359a.667.667 0 0 0-.35-.078.573.573 0 0 0-.587.577c0 .333.28.578.621.578a.58.58 0 0 0 .324-.088v-.35l-.009.009ZM5.427 5.27v-.096h-.402v1.111h.402v-.621c0-.219.324-.219.324 0v.621h.403V5.56c0-.315-.377-.543-.71-.298l-.017.01Zm3.51 0v-.096h-.395v1.111h.394v-.621c0-.219.324-.219.324 0v.621h.402V5.56c0-.315-.376-.543-.717-.298l-.009.01Zm3.727.604c-.097.07-.175.079-.298.079-.114 0-.245-.08-.245-.21a.25.25 0 0 1 .245-.245c.123 0 .228.017.298.087v-.359a.667.667 0 0 0-.35-.078.576.576 0 0 0-.595.577c0 .333.288.578.62.578a.58.58 0 0 0 .325-.088v-.35.009Zm.62.07V5.48h.21v-.297h-.227V4.7l-.393.22v.262h-.14v.332h.14v.499c0 .254.332.429.63.219V5.96c-.062.07-.21.08-.21 0l-.01-.017ZM8.07 5.743a.224.224 0 0 1-.228.218c-.122 0-.218-.096-.218-.236 0-.14.096-.219.218-.219.123 0 .228.08.228.237Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                'fill-rule': 'evenodd',
                d: 'M2.951 5.62h.175c.219 0 .245.333 0 .333h-.184V5.62h.01Zm1.575.184v.14c0 .149-.297.192-.297.035 0-.14.21-.184.297-.175Zm6.72 0v.14c0 .149-.289.192-.289.035 0-.14.21-.184.29-.175Zm-8.111-.849c.21.096.131.315 0 .315H2.95v-.315s.131-.017.175 0h.009Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                'fill-rule': 'evenodd',
                d: 'M7.842 5.515c-.122 0-.218.079-.218.219s.096.236.218.236a.224.224 0 0 0 .228-.219c0-.157-.105-.236-.228-.236Zm3.107.464c0 .157.288.113.288-.035v-.14c-.078-.018-.288.026-.288.175ZM2.95 4.964v.315h.184c.131 0 .201-.219 0-.315a.557.557 0 0 0-.175 0H2.95ZM4.22 5.979c0 .157.297.113.297-.035v-.14c-.087-.018-.297.026-.297.175ZM2.95 5.96h.184c.236 0 .21-.332 0-.332H2.96v.332H2.95Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                'fill-rule': 'evenodd',
                d: 'M7.44 10.826c0-.385-.158-.639-.551-.639-.368 0-.587.28-.587.596 0 .34.263.595.63.595.324 0 .482-.132.482-.132v-.332a.905.905 0 0 1-.394.114c-.21 0-.324-.062-.324-.21h.744v.008Zm-4.174.061.324-.472v.936h.429V9.724h-.43l-.323.49-.332-.49h-.438v1.627h.438v-.936l.332.473Zm4.638-.183c.043-.097.13-.175.253-.175.062 0 .132.026.184.061v-.35s-.096-.061-.149-.061a.425.425 0 0 0-.288.131v-.114h-.385v1.155h.385v-.647Zm-3.273.577c.131.061.298.079.403.079.41 0 .533-.219.533-.394 0-.21-.21-.323-.402-.35-.026 0-.105-.017-.105-.061 0-.026.017-.061.114-.061.078 0 .218.026.288.061l-.017-.297a1.293 1.293 0 0 0-.368-.062c-.236 0-.437.14-.437.377 0 .175.131.27.332.314.088 0 .167.044.167.088 0 .061-.053.07-.114.07-.053 0-.175.018-.394-.07v.315-.009Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#2D78BB',
                'fill-rule': 'evenodd',
                d: 'M6.084 10.992v-.472h.218v-.306h-.236v-.49l-.402.218v.28h-.14v.333h.14v.516c0 .254.332.429.638.219v-.28c-.061.061-.218.079-.218 0v-.018Zm-1.532.333v-1.12h-.428v1.12h.428Zm-.21-1.155a.235.235 0 0 0 .237-.236c0-.123-.105-.219-.237-.219a.217.217 0 0 0-.218.219c0 .131.096.236.218.236Zm7.009 1.094c.131.061.297.079.402.079.412 0 .543-.22.543-.394 0-.21-.21-.324-.411-.35-.027 0-.105-.018-.105-.062 0-.026.017-.06.122-.06.079 0 .21.025.289.06l-.018-.297a1.293 1.293 0 0 0-.367-.061c-.236 0-.438.14-.438.376 0 .175.132.271.333.315.088 0 .166.044.166.088 0 .06-.061.07-.114.07-.052 0-.175.017-.393-.07v.315l-.009-.01ZM10.1 10.86c-.131.096-.245.123-.42.123-.271 0-.508-.219-.508-.455 0-.254.132-.49.508-.49.175 0 .315.026.42.131v-.385c-.131-.079-.324-.096-.481-.096-.49 0-.867.35-.867.831s.412.831.893.831a.88.88 0 0 0 .455-.114v-.376Zm.682-.411c.132 0 .097.114-.017.114-.21 0-.552.07-.595.367-.097.499.551.455.717.35l.018.026h.385v-.77c0-.367-.586-.437-.998-.297l-.052.306c.175-.087.428-.096.551-.096h-.009Zm1.969-.166v-.578h-.394v1.628h.394v-.639c0-.219.324-.219.324 0v.639h.402v-.735c0-.333-.385-.56-.735-.306l.009-.01Z',
                'clip-rule': 'evenodd',
            },
        }), h('path', {
            attrs: {
                fill: '#fff',
                'fill-rule': 'evenodd',
                d: 'M6.688 10.599c.017-.105.105-.14.183-.14.079 0 .175.035.175.14h-.359Zm4.19.227v.14c0 .158-.297.193-.297.035 0-.14.219-.175.298-.175Z',
                'clip-rule': 'evenodd',
            },
        })]);
    },
};
