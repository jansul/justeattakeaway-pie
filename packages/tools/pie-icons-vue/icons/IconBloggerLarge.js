import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconBloggerLarge',
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
            class: 'c-pieIcon c-pieIcon--bloggerLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M6.7423 27.9055C6.29318 27.7872 5.90564 27.6131 5.5482 27.3691C5.24648 27.1631 4.80547 26.7373 4.63776 26.49C4.43293 26.188 4.19749 25.6708 4.10153 25.3122C4.00366 24.9463 4.00208 24.8006 4.00032 16.0184C3.99858 7.28056 4.00056 7.08842 4.09649 6.71291C4.43573 5.38497 5.48623 4.3746 6.84109 4.07318C7.23064 3.98652 24.6325 3.97136 25.0527 4.05732C26.1903 4.29003 27.0845 4.9742 27.602 6.00776C28.0133 6.82945 27.9766 5.92524 27.9954 15.6813C28.0074 21.8887 27.9963 24.4947 27.9568 24.8194C27.7715 26.3387 26.7254 27.5171 25.2201 27.9022C24.8351 28.0006 24.7011 28.002 15.9588 27.9994C7.50591 27.9968 7.07178 27.9924 6.7423 27.9055Z',
                fill: '#F06A35'
            }
        }), h('path', {
            attrs: {
                d: 'M19.3958 23.397C20.474 23.2497 21.3189 22.8168 22.1115 22.0056C22.6849 21.4188 23.0438 20.7836 23.2784 19.9406C23.3758 19.5904 23.384 19.4199 23.4019 17.3637C23.4153 15.8117 23.4041 15.0849 23.3637 14.9014C23.3053 14.6354 23.1395 14.3884 22.9504 14.2855C22.8922 14.2538 22.5194 14.2134 22.1218 14.1957C21.4557 14.1661 21.3812 14.1531 21.1709 14.0296C20.8374 13.8339 20.7455 13.6224 20.7446 13.0484C20.7429 11.9516 20.2873 10.9334 19.387 10.0144C18.7457 9.35971 18.0302 8.91655 17.2137 8.66824C17.0182 8.60879 16.5805 8.58856 15.1144 8.57121C12.814 8.54398 12.3034 8.59121 11.5203 8.9037C10.0765 9.4798 9.03904 10.6939 8.66062 12.2505C8.58955 12.5428 8.57575 13.0114 8.55896 15.7029C8.53793 19.0748 8.56113 19.5699 8.77145 20.2382C8.94522 20.7902 9.12055 21.1286 9.48174 21.6087C10.1698 22.5235 11.201 23.1841 12.232 23.3707C12.7226 23.4595 18.7759 23.4817 19.3958 23.397Z',
                fill: 'white'
            }
        }), h('path', {
            attrs: {
                d: 'M13.0343 14.1405C12.4831 13.9883 12.2772 13.1961 12.6823 12.7864C12.9412 12.5245 13.0128 12.5145 14.6335 12.5145C16.0885 12.5145 16.1374 12.5177 16.3512 12.6258C16.66 12.7821 16.7942 13.0025 16.7942 13.3534C16.7942 13.6703 16.6682 13.8924 16.3871 14.0708C16.2361 14.1666 16.1459 14.1726 14.7203 14.181C13.84 14.1862 13.1388 14.1693 13.0343 14.1405ZM12.9653 19.4719C12.7287 19.3686 12.5083 19.0817 12.4703 18.8273C12.434 18.585 12.5556 18.2519 12.7419 18.083C12.9768 17.87 13.0799 17.8629 15.9685 17.8606C18.9399 17.8583 18.9244 17.857 19.2062 18.1206C19.6042 18.4928 19.5202 19.1556 19.0407 19.4277L18.5478 19.5079L15.9792 19.5381C13.7221 19.5645 13.0828 19.5231 12.9653 19.4719Z',
                fill: '#F06A35'
            }
        })]);
    }
};