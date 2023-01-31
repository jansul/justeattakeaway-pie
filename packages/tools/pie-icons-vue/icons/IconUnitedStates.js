import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUnitedStates',
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
            class: 'c-pieIcon c-pieIcon--unitedStates'
        }, ctx.data]), [h('g', {
            attrs: {
                'clip-path': 'url(#clip0_3446_3207)'
            }
        }, [h('path', {
            attrs: {
                d: 'M7.89349 2.95093V4.07292H13.7952C13.5193 3.66701 13.2019 3.29098 12.848 2.95093H7.89349Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M7.89349 5.19491V6.31691H14.7958C14.7008 5.93271 14.5732 5.55734 14.4143 5.19491H7.89349Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M8.0003 15C9.15422 15.0013 10.2904 14.716 11.3068 14.1697H4.69356C5.71005 14.716 6.84631 15.0013 8.0003 15Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M3.15217 13.0489H12.8484C13.2024 12.7089 13.5199 12.3329 13.7956 11.9269H2.20476C2.48052 12.3329 2.79805 12.709 3.15217 13.0489Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M11.3068 1.82894C10.2903 1.28317 9.1541 0.998338 8.0003 1.00001C7.96462 1.00001 7.92894 1.00001 7.89349 1.00135V1.82894H11.3068Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M14.9777 7.4389H7.89349V8.56089H14.9777C14.9927 8.37599 15.0002 8.18899 15.0002 7.99989C15.0002 7.8108 14.9927 7.6238 14.9777 7.4389Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M1.58542 10.8049H14.4143C14.5732 10.4424 14.7008 10.0671 14.7958 9.68288H1.20439C1.29916 10.0671 1.42664 10.4424 1.58542 10.8049Z',
                fill: '#D80027'
            }
        }), h('path', {
            attrs: {
                d: 'M3.8128 13.6099C4.09201 13.8185 4.38642 14.006 4.69356 14.1709H11.3068C11.8695 13.869 12.3882 13.4915 12.8484 13.0489H3.15217C3.36059 13.2493 3.58122 13.4367 3.8128 13.6099Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M1.86143 11.3659C1.96734 11.5586 2.08179 11.7456 2.20476 11.9269H13.7956C13.9186 11.7457 14.033 11.5587 14.1389 11.3659C14.239 11.1837 14.3304 10.9967 14.4143 10.8049H1.58542C1.66934 10.9965 1.76135 11.1835 1.86143 11.3659Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M1.09017 9.12189C1.12009 9.31173 1.15816 9.49873 1.20439 9.68288H14.7958C14.8406 9.49858 14.8787 9.31158 14.91 9.12189C14.9399 8.93713 14.9628 8.75013 14.9777 8.56089L1.02263 8.56089C1.03773 8.75028 1.06025 8.93728 1.09017 9.12189Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M7.89349 2.95093H12.848C12.3877 2.50832 11.8695 2.13082 11.3068 1.82894H7.89349V2.95093Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M7.89349 7.4389H14.9777C14.9628 7.2498 14.9403 7.06281 14.9104 6.8779C14.8805 6.68821 14.842 6.50121 14.7958 6.31691H7.89349V7.4389Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M7.89349 5.19491H14.4143C14.3304 5.00328 14.2384 4.81628 14.1383 4.63392C14.0324 4.44138 13.9181 4.25438 13.7952 4.07292H7.89349V5.19491Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M7.89349 8.56089V7.4389V6.31691V5.19491V4.07292V2.95093V1.82894V1.00135C7.58764 1.0058 7.28241 1.03017 6.97973 1.07428L6.95887 1.0772C6.86686 1.09081 6.77546 1.10637 6.68465 1.12388L6.78271 1.42569H7.45793L6.91219 1.8222L6.95213 1.9445L7.12066 2.46353L6.57492 2.06702L6.02941 2.46353L6.19793 1.9445L6.23787 1.8222L5.69214 1.42569H6.36668L6.44858 1.17302C6.05086 1.26301 5.66183 1.38781 5.28597 1.54597L5.28373 1.54776C5.21641 1.57604 5.14909 1.60566 5.08379 1.63595C5.0229 1.66408 4.96254 1.69295 4.9027 1.72257C4.83269 1.75713 4.76327 1.79281 4.69446 1.82961C4.55384 1.90531 4.41606 1.98557 4.28112 2.07039L4.45099 2.59324H5.12418L4.57845 2.98975L4.78691 3.63108L4.24117 3.23457L3.69566 3.63108L3.86418 3.11205L3.9039 2.98975L3.46363 2.66908C3.41875 2.70753 3.37387 2.74643 3.32899 2.78577C3.27813 2.83065 3.22787 2.87688 3.1782 2.92445H3.17236L3.1699 2.9323C3.16339 2.93836 3.15711 2.94487 3.15082 2.95093C3.11245 2.98795 3.0743 3.0252 3.03683 3.06313C2.83406 3.26698 2.64394 3.48303 2.46753 3.71007H2.45025L2.45541 3.726L2.43993 3.74642H2.79066L2.24492 4.14293L2.45339 4.78426L1.97385 4.436C1.93481 4.50122 1.89688 4.56727 1.86008 4.63414C1.79815 4.74694 1.73921 4.86161 1.68326 4.97814C1.68146 4.98174 1.67989 4.98533 1.6781 4.98914C1.64556 5.05646 1.61436 5.12602 1.58407 5.19514C1.46006 5.47819 1.35511 5.76921 1.26991 6.06625H1.67383L1.8823 5.42492L2.09054 6.06625H2.76508L2.22024 6.46321L2.26018 6.58574L2.42871 7.10455L1.88319 6.70826L1.33746 7.10455L1.50598 6.58574L1.54592 6.46321L1.22593 6.23074C1.21853 6.25946 1.21157 6.28818 1.20349 6.31691C1.15861 6.50121 1.12054 6.68821 1.08927 6.8779C1.05935 7.06266 1.03691 7.24966 1.02195 7.4389C1.01672 7.50457 1.0123 7.57055 1.00871 7.63682H0.999512L1.00849 7.64333C1.00265 7.76151 0.999661 7.88037 0.999512 7.9999C0.999512 8.18884 1.00767 8.37584 1.02263 8.56089L7.89349 8.56089ZM6.366 3.7462L6.57425 3.10464L6.78271 3.7462H7.45793L6.91219 4.14271L6.95213 4.26523L7.12066 4.78404L6.57492 4.38775L6.02941 4.78404L6.19793 4.26523L6.23787 4.14271L5.69214 3.7462H6.366ZM6.33998 6.0667L6.54844 5.42537L6.75691 6.0667H7.4301L6.88571 6.46321L7.09418 7.10455L6.54844 6.70826L6.0027 7.10455L6.21117 6.46321L5.66543 6.0667H6.33998ZM4.03316 4.91307L4.24162 4.27151L4.45009 4.91307H5.12418L4.57845 5.30958L4.78691 5.95091L4.24117 5.55462L3.69566 5.95091L3.9039 5.30958L3.35839 4.91307H4.03316ZM4.00735 7.23357L4.21582 6.59224L4.42428 7.23357H5.09748L4.55309 7.63009L4.76133 8.27142L4.21582 7.87513L3.67008 8.27142L3.87855 7.63009L3.33281 7.23357H4.00735Z',
                fill: '#0052B4'
            }
        }), h('path', {
            attrs: {
                d: 'M4.18283 2.13232L4.17206 2.13928C4.14042 2.16015 4.10855 2.18079 4.07714 2.20211C4.03944 2.22769 4.00219 2.25372 3.96494 2.27998C3.91378 2.31611 3.86306 2.35268 3.8128 2.39016C3.72528 2.45568 3.63949 2.523 3.55541 2.59211H4.03316L4.18283 2.13232Z',
                fill: '#0052B4'
            }
        }), h('path', {
            attrs: {
                d: 'M5.69214 1.42569L6.23787 1.8222L6.19793 1.9445L6.02941 2.46353L6.57492 2.06702L7.12066 2.46353L6.95213 1.9445L6.91219 1.8222L7.45793 1.42569H6.78271L6.68465 1.12388C6.60521 1.13884 6.52697 1.15522 6.44858 1.17302L6.36668 1.42569H5.69214Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M6.0027 7.10455L6.54844 6.70826L7.09418 7.10455L6.88571 6.46321L7.43122 6.0667L6.75691 6.0667L6.54844 5.42537L6.33998 6.0667H5.66543L6.21117 6.46321L6.0027 7.10455Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M6.19793 4.26523L6.02941 4.78404L6.57492 4.38775L7.12066 4.78404L6.95213 4.26523L6.91219 4.14271L7.45793 3.7462H6.78271L6.57425 3.10464L6.366 3.7462H5.69214L6.23787 4.14271L6.19793 4.26523Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M1.50598 6.58574L1.33746 7.10455L1.88319 6.70826L2.42871 7.10455L2.26018 6.58574L2.22024 6.46321L2.76598 6.0667H2.09144L1.88319 5.42537L1.67473 6.0667H1.27081C1.25533 6.12101 1.24029 6.17598 1.22593 6.23074L1.54592 6.46321L1.50598 6.58574Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M2.28599 4.26523L2.24627 4.14271L2.79201 3.7462H2.44127C2.38562 3.8189 2.33109 3.89228 2.27814 3.96723C2.25345 4.00224 2.22899 4.03747 2.20476 4.07292C2.18232 4.1068 2.15988 4.14024 2.13744 4.17525C2.08149 4.26082 2.02756 4.34766 1.97565 4.43577L2.45339 4.78426L2.28599 4.26523Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M3.86418 3.11205L3.69566 3.63108L4.24117 3.23457L4.78691 3.63108L4.57845 2.98975L5.12418 2.59324H4.45099L4.28112 2.07039L4.27798 2.07151C4.24626 2.09156 4.21395 2.11198 4.18283 2.13232L4.03406 2.59256H3.55631C3.52557 2.6177 3.49527 2.64328 3.46498 2.66908L3.90525 2.98908L3.86418 3.11205Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M3.67008 8.27142L4.21582 7.87513L4.76133 8.27142L4.55309 7.63009L5.0986 7.23357L4.42428 7.23357L4.21582 6.59224L4.00735 7.23357H3.33281L3.87855 7.63009L3.67008 8.27142Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M3.69566 5.95091L4.24117 5.55462L4.78691 5.95091L4.57845 5.30958L5.12418 4.91307H4.45009L4.24162 4.27151L4.03316 4.91307H3.35839L3.9039 5.30958L3.69566 5.95091Z',
                fill: 'white'
            }
        })]), h('defs', [h('clipPath', {
            attrs: {
                id: 'clip0_3446_3207'
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
