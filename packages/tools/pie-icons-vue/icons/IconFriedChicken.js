import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconFriedChicken',
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
            class: 'c-pieIcon c-pieIcon--friedChicken'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_18_757)'
            }
        }, [h('path', {
            attrs: {
                d: 'M4.28999 4.4125C4.03525 4.0321 3.88443 3.5917 3.85249 3.135C3.84304 2.88704 3.89766 2.64083 4.01108 2.42012C4.1245 2.19942 4.29288 2.01167 4.49999 1.875C4.56195 2.24211 4.68311 2.59673 4.85874 2.925C5.00749 3.17 5.19124 3.3625 5.43624 3.8C5.56557 4.03111 5.65436 4.28266 5.69874 4.54375C5.74205 4.84287 5.69322 5.14808 5.55874 5.41875C5.44587 5.62033 5.2942 5.79757 5.11249 5.94024C4.93077 6.08291 4.7226 6.18819 4.49999 6.25C4.49999 5.76875 4.60499 5.375 4.56999 5.095C4.53299 4.84827 4.43693 4.61413 4.28999 4.4125V4.4125ZM7.19499 3.5375C7.19499 3.765 7.19499 4.08 7.19499 4.47375C7.38218 4.42312 7.55672 4.33391 7.7074 4.21186C7.85809 4.0898 7.98159 3.93759 8.06999 3.765C8.17026 3.54928 8.2096 3.31023 8.18374 3.07375C8.15299 2.87005 8.09101 2.67231 7.99999 2.4875C7.78999 2.1725 7.65874 2.015 7.52749 1.83125C7.36429 1.5751 7.24317 1.29446 7.16874 1C6.99523 1.10524 6.85278 1.25466 6.75593 1.43299C6.65908 1.61132 6.6113 1.81216 6.61749 2.015C6.64134 2.38667 6.762 2.74563 6.96749 3.05625C7.07589 3.20885 7.1532 3.38129 7.19499 3.56375V3.5375ZM14.9475 8.9625C14.9348 9.68121 14.706 10.3794 14.2909 10.9663C13.8757 11.5531 13.2935 12.0013 12.62 12.2525C12.0862 13.25 10.625 14.405 8.09624 13.5213C5.37499 12.585 4.82374 13.0225 4.42999 13.635C4.03624 14.2475 3.62499 14.8338 3.05624 14.8338C2.82899 14.826 2.60817 14.7564 2.41749 14.6325C2.20685 14.4988 2.04204 14.3041 1.9451 14.0742C1.84815 13.8444 1.82369 13.5904 1.87499 13.3462C1.9081 13.1728 1.9081 12.9947 1.87499 12.8213C1.77887 12.5741 1.63963 12.346 1.46374 12.1475C1.25666 11.9596 1.11646 11.7093 1.06435 11.4346C1.01225 11.1599 1.05109 10.8757 1.17499 10.625C1.23079 10.4759 1.31921 10.3413 1.43378 10.2308C1.54835 10.1203 1.68618 10.0369 1.83717 9.98653C1.98816 9.9362 2.14849 9.92027 2.30643 9.9399C2.46437 9.95953 2.61592 10.0142 2.74999 10.1C2.9559 10.1999 3.18177 10.2518 3.41062 10.2518C3.63947 10.2518 3.86534 10.1999 4.07124 10.1C4.57874 9.89875 4.94624 9.225 5.28749 8.46375C5.81249 7.405 6.45124 6.10125 7.91249 5.8825C8.66373 5.15467 9.65087 4.72008 10.695 4.6575V4.6575C11.1684 4.67402 11.6335 4.78646 12.0621 4.988C12.4908 5.18954 12.874 5.47599 13.1887 5.83C13.7654 6.11165 14.2426 6.56228 14.5568 7.12188C14.871 7.68148 15.0073 8.32352 14.9475 8.9625V8.9625ZM13.635 8.9625C13.635 7.39625 12.76 7.04625 12.62 7.02L12.4537 6.95875L12.3225 6.8275C12.1281 6.57322 11.8815 6.36355 11.5992 6.21261C11.317 6.06167 11.0057 5.97298 10.6862 5.9525V5.9525C9.91765 6.03342 9.20357 6.38736 8.67374 6.95L8.48999 7.125H8.22749C7.41374 7.1775 7.01124 7.86875 6.47749 9.00625C6.15068 9.97231 5.47728 10.7829 4.58749 11.2812C3.95658 11.5655 3.24277 11.606 2.58374 11.395C2.79974 11.66 2.97654 11.9547 3.10874 12.27C3.20693 12.5146 3.25455 12.7765 3.24874 13.04L3.35374 12.8737C4.38624 11.2725 6.17124 11.5 8.52499 12.2788C10.8787 13.0575 11.5 11.5525 11.5 11.5L11.6137 11.2025L11.9287 11.1063C12.4026 10.9741 12.8227 10.6957 13.1291 10.3108C13.4355 9.92581 13.6125 9.45397 13.635 8.9625V8.9625Z',
                fill: '#242E30'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_18_757'
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
