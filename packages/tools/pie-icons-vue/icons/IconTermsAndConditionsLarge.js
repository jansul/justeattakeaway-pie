import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTermsAndConditionsLarge',
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
            class: 'c-pieIcon c-pieIcon--termsAndConditionsLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M10.8722 10.75H19.1322V12.5H10.8722V10.75Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M10.8722 15.125H15.0022V16.875H10.8722V15.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M20.2347 21.3813L21.0484 22.2738L23.7959 19.3775L25.0647 20.585L22.0459 23.77C21.7834 24.0413 21.4247 24.1988 21.0484 24.1988H21.0397C20.6547 24.1988 20.2872 24.0325 20.0334 23.7525L18.9484 22.5625L20.2347 21.3813Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                'fill-rule': 'evenodd',
                'clip-rule': 'evenodd',
                d: 'M27.9173 19.4825C27.9173 18.5025 27.366 17.61 26.491 17.155L25.616 16.7088V4.59003H4.63354V27.41H18.196C18.2366 27.41 18.2771 27.4077 18.3165 27.4055C18.3535 27.4033 18.3896 27.4013 18.4235 27.4013C18.6685 27.5763 18.9223 27.7425 19.2023 27.8913L21.7835 28.985L24.3998 27.9263C25.5198 27.3488 26.456 26.465 27.1035 25.3713C27.5585 24.6013 27.8298 23.6738 27.926 22.5888V19.4825H27.9173ZM15.746 23.0088C15.9035 24.015 16.236 24.8988 16.7348 25.66H6.38355V6.34003H23.866V15.8163L21.8973 14.81L17.1635 17.0675C16.2535 17.505 15.6673 18.4325 15.6673 19.4388V22.3963L15.7548 23.0175L15.746 23.0088ZM25.5898 24.4788C25.1173 25.2838 24.426 25.94 23.6648 26.3338L21.7923 27.0863L21.1273 26.8063L19.9548 26.3163C19.596 26.1238 19.2723 25.8788 18.966 25.6075C18.7298 25.3888 18.5023 25.1525 18.3098 24.89C17.881 24.3125 17.601 23.595 17.4785 22.755L17.4173 22.335V19.4388C17.4173 19.1063 17.6098 18.7913 17.916 18.6513L21.871 16.77L23.866 17.7938L25.616 18.695L25.6948 18.7388C25.9835 18.8875 26.1673 19.185 26.1673 19.5175V22.4925C26.1148 23.2888 25.9223 23.9713 25.5985 24.505L25.5898 24.4788Z',
                fill: '#242E30'
            }
        })]);
    }
};