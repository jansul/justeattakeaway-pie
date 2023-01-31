import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconTacoLarge',
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
            class: 'c-pieIcon c-pieIcon--tacoLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M28.1625 18.2313L26.5875 19.01C26.9725 19.7888 27.6025 21.635 27.0863 22.51C26.8763 22.8513 26.4038 23.0263 25.6775 23.0263C24.715 23.0263 24.225 22.265 23.5863 21.1013L23.3238 20.6375L23.2013 20.445C22.9825 20.0775 22.7725 19.6925 22.58 19.2988C25.485 18.1613 26.885 16.525 26.43 14.7313C26.08 13.3488 24.8113 13.0688 23.8838 12.8588C23.4312 12.8068 23 12.6379 22.6325 12.3688C22.545 12.2638 22.7463 11.625 22.8513 11.3188C23.175 10.3038 23.6738 8.76377 22.2475 7.58252C20.9963 6.55002 19.43 7.09252 18.1788 7.53002C16.6563 8.06377 16.2363 8.08127 15.9563 7.62627C15.6609 7.05014 15.229 6.5551 14.6982 6.18445C14.1674 5.8138 13.5539 5.57881 12.9113 5.50002C12.4182 5.46825 11.9246 5.55127 11.4691 5.74258C11.0136 5.93388 10.6087 6.22825 10.2863 6.60252C8.50125 8.71127 7.52125 8.41377 6.5675 8.12502C6.24197 7.97618 5.88677 7.90354 5.52894 7.91264C5.1711 7.92174 4.82006 8.01233 4.5025 8.17752C2 9.75252 3.75 13.4713 4.625 15.0375C3.56396 17.0946 3.00335 19.373 2.98875 21.6875C2.96441 22.0844 3.01917 22.4821 3.14986 22.8577C3.28054 23.2332 3.48454 23.579 3.75 23.875C3.99167 24.1453 4.2867 24.3626 4.6165 24.5132C4.94631 24.6638 5.30374 24.7444 5.66625 24.75H25.6775C26.238 24.8056 26.8031 24.71 27.314 24.473C27.8249 24.236 28.263 23.8663 28.5825 23.4025C29.7375 21.5388 28.32 18.5638 28.1625 18.2313ZM5.4125 9.68252C5.63152 9.68803 5.84781 9.73247 6.05125 9.81377C7.25 10.155 9.105 10.75 11.625 7.73127C11.767 7.56697 11.9453 7.43796 12.1457 7.35443C12.3462 7.27091 12.5633 7.23516 12.78 7.25002C13.1392 7.30713 13.4793 7.44983 13.7717 7.66609C14.0642 7.88235 14.3002 8.16581 14.46 8.49252C15.545 10.2425 17.3913 9.61252 18.7475 9.14002C19.885 8.73752 20.6638 8.51002 21.1188 8.88627C21.5738 9.26252 21.5213 9.64752 21.1713 10.7413C20.9088 11.5638 20.5763 12.5788 21.2675 13.4363C21.8673 14.0347 22.6492 14.4164 23.49 14.5213C24.365 14.7138 24.645 14.8275 24.7238 15.1163C24.9338 15.9475 23.8488 16.9188 21.81 17.6713C20.375 14.5388 18.4325 10.75 13.0863 10.75C11.9223 10.7338 10.7618 10.881 9.63875 11.1875C8.16419 11.574 6.82552 12.3615 5.77125 13.4625C5.08875 12.045 4.52875 10.2425 5.43 9.68252H5.4125ZM5.70125 23C5.57915 22.9997 5.45846 22.9739 5.34695 22.9242C5.23543 22.8744 5.13556 22.8019 5.05375 22.7113C4.93822 22.5841 4.8499 22.4347 4.79423 22.2722C4.73856 22.1097 4.7167 21.9375 4.73 21.7663C4.80875 20.0163 5.07125 17.3913 6.41 15.4488C7.28862 14.1667 8.60455 13.249 10.1113 12.8675C11.0818 12.6113 12.0825 12.4877 13.0863 12.5C17.4613 12.5 18.8438 15.4838 20.3313 18.625L20.62 19.2375C20.9705 20.0034 21.3649 20.7484 21.8013 21.4688L21.88 21.5738L22.055 21.8975C22.2388 22.2213 22.4488 22.6063 22.7025 22.9738L5.70125 23ZM8.125 19.5C8.125 19.6731 8.07369 19.8423 7.97754 19.9861C7.88139 20.13 7.74474 20.2422 7.58485 20.3084C7.42497 20.3746 7.24903 20.392 7.0793 20.3582C6.90957 20.3244 6.75366 20.2411 6.63128 20.1187C6.50891 19.9964 6.42558 19.8405 6.39182 19.6707C6.35805 19.501 6.37538 19.3251 6.44161 19.1652C6.50784 19.0053 6.61999 18.8686 6.76388 18.7725C6.90777 18.6763 7.07694 18.625 7.25 18.625C7.48207 18.625 7.70463 18.7172 7.86872 18.8813C8.03282 19.0454 8.125 19.268 8.125 19.5ZM10.75 16C10.75 16.1731 10.6987 16.3423 10.6025 16.4861C10.5064 16.63 10.3697 16.7422 10.2099 16.8084C10.05 16.8746 9.87403 16.892 9.7043 16.8582C9.53457 16.8244 9.37866 16.7411 9.25628 16.6187C9.13391 16.4964 9.05058 16.3405 9.01682 16.1707C8.98305 16.001 9.00038 15.8251 9.06661 15.6652C9.13283 15.5053 9.24499 15.3686 9.38888 15.2725C9.53277 15.1763 9.70194 15.125 9.875 15.125C10.1071 15.125 10.3296 15.2172 10.4937 15.3813C10.6578 15.5454 10.75 15.768 10.75 16ZM18.625 19.5C18.625 19.6731 18.5737 19.8423 18.4775 19.9861C18.3814 20.13 18.2447 20.2422 18.0849 20.3084C17.925 20.3746 17.749 20.392 17.5793 20.3582C17.4096 20.3244 17.2537 20.2411 17.1313 20.1187C17.0089 19.9964 16.9256 19.8405 16.8918 19.6707C16.8581 19.501 16.8754 19.3251 16.9416 19.1652C17.0078 19.0053 17.12 18.8686 17.2639 18.7725C17.4078 18.6763 17.5769 18.625 17.75 18.625C17.9821 18.625 18.2046 18.7172 18.3687 18.8813C18.5328 19.0454 18.625 19.268 18.625 19.5ZM13.375 19.5C13.375 19.6731 13.3237 19.8423 13.2275 19.9861C13.1314 20.13 12.9947 20.2422 12.8349 20.3084C12.675 20.3746 12.499 20.392 12.3293 20.3582C12.1596 20.3244 12.0037 20.2411 11.8813 20.1187C11.7589 19.9964 11.6756 19.8405 11.6418 19.6707C11.6081 19.501 11.6254 19.3251 11.6916 19.1652C11.7578 19.0053 11.87 18.8686 12.0139 18.7725C12.1578 18.6763 12.3269 18.625 12.5 18.625C12.7321 18.625 12.9546 18.7172 13.1187 18.8813C13.2828 19.0454 13.375 19.268 13.375 19.5ZM16 16C16 16.1731 15.9487 16.3423 15.8525 16.4861C15.7564 16.63 15.6197 16.7422 15.4599 16.8084C15.3 16.8746 15.124 16.892 14.9543 16.8582C14.7846 16.8244 14.6287 16.7411 14.5063 16.6187C14.3839 16.4964 14.3006 16.3405 14.2668 16.1707C14.2331 16.001 14.2504 15.8251 14.3166 15.6652C14.3828 15.5053 14.495 15.3686 14.6389 15.2725C14.7828 15.1763 14.9519 15.125 15.125 15.125C15.3571 15.125 15.5796 15.2172 15.7437 15.3813C15.9078 15.5454 16 15.768 16 16Z',
                fill: '#242E30'
            }
        })]);
    }
};
