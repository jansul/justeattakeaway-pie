import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconGoogleVoice',
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
            class: 'c-pieIcon c-pieIcon--googleVoice'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_18_1955)'
            }
        }, [h('path', {
            attrs: {
                d: 'M12.1474 10.1262C12.0527 10.0236 11.9376 9.94183 11.8096 9.88609C11.6815 9.83035 11.5433 9.80188 11.4036 9.80248C11.1306 9.80451 10.8694 9.91463 10.6774 10.1087L9.95988 10.8087C9.81603 10.9465 9.62531 11.0247 9.42613 11.0275C9.21984 11.0259 9.02222 10.9444 8.87488 10.8L5.66363 7.56248C5.52307 7.41862 5.44437 7.22548 5.44437 7.02435C5.44437 6.82323 5.52307 6.63008 5.66363 6.48623L6.24988 5.89123C6.82738 5.29623 6.84488 4.89373 6.24988 4.30748L4.07988 2.14623C3.97133 2.03461 3.8407 1.94685 3.69634 1.88856C3.55197 1.83026 3.39703 1.8027 3.24142 1.80764C3.0858 1.81258 2.93293 1.84991 2.79255 1.91725C2.65217 1.98459 2.52738 2.08045 2.42613 2.19873C1.7629 2.96519 1.40748 3.95038 1.42863 4.96373C1.4399 6.69022 2.00416 8.36767 3.03863 9.74998C4.78863 12.2612 7.01988 14.2212 10.1436 14.8687C10.5549 14.9575 10.9741 15.0044 11.3949 15.0087C11.95 15.019 12.5015 14.9165 13.0158 14.7074C13.5302 14.4984 13.9968 14.1871 14.3874 13.7925C14.4884 13.7244 14.5712 13.6326 14.6285 13.525C14.6857 13.4174 14.7156 13.2974 14.7156 13.1756C14.7156 13.0538 14.6857 12.9338 14.6285 12.8262C14.5712 12.7186 14.4884 12.6268 14.3874 12.5587C13.6611 11.7362 12.9086 10.9225 12.1474 10.1262ZM11.3949 13.6875C11.0621 13.6861 10.7305 13.648 10.4061 13.5737C7.99988 13.0662 5.97863 11.6137 4.10613 8.97998C3.23647 7.82056 2.76116 6.41301 2.74988 4.96373C2.73255 4.33513 2.92666 3.71891 3.30113 3.21373L4.08863 4.00123L5.16488 5.09498C4.97238 5.29623 4.83238 5.43623 4.70113 5.58498C4.32118 5.97122 4.10825 6.49131 4.10825 7.0331C4.10825 7.5749 4.32118 8.09499 4.70113 8.48123L7.91238 11.7187C8.10537 11.9271 8.33962 12.0931 8.60023 12.2061C8.86083 12.3191 9.14209 12.3766 9.42613 12.375C9.96529 12.3747 10.4831 12.1644 10.8699 11.7887L10.9661 11.7012L11.3949 11.2812L13.1449 13.1537C12.6381 13.5232 12.0216 13.7112 11.3949 13.6875ZM9.03238 1.22748H8.97113C8.46363 1.22748 8.26238 1.40248 8.26238 1.92748C8.26238 3.76498 8.26238 5.60248 8.26238 7.43998C8.26238 7.83373 8.42863 7.99998 8.81363 7.99998H11.5874H14.3436C14.8424 7.99998 15.0261 7.79873 15.0261 7.31748C15.0043 5.72563 14.3687 4.20368 13.252 3.06904C12.1353 1.9344 10.6237 1.27468 9.03238 1.22748ZM13.1711 6.66998H9.54863C9.54863 6.07498 9.54863 5.47123 9.54863 4.86748C9.54863 4.10623 9.54863 3.35373 9.54863 2.57498C10.5744 2.73198 11.5229 3.21345 12.2552 3.94882C12.9874 4.68418 13.4648 5.63477 13.6174 6.66123L13.1711 6.66998Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_18_1955'
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
