import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--chatFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M25.625 4.625H6.375C5.67881 4.625 5.01113 4.90156 4.51884 5.39384C4.02656 5.88613 3.75 6.55381 3.75 7.25V29.125H6.01625L11.0037 24.1287C11.1714 23.9689 11.3933 23.8782 11.625 23.875H25.625C26.3212 23.875 26.9889 23.5984 27.4812 23.1062C27.9734 22.6139 28.25 21.9462 28.25 21.25V7.25C28.25 6.55381 27.9734 5.88613 27.4812 5.39384C26.9889 4.90156 26.3212 4.625 25.625 4.625ZM9.4375 14.25C9.4375 13.9904 9.51448 13.7367 9.6587 13.5208C9.80292 13.305 10.0079 13.1367 10.2477 13.0374C10.4876 12.9381 10.7515 12.9121 11.0061 12.9627C11.2607 13.0134 11.4945 13.1384 11.6781 13.3219C11.8616 13.5055 11.9866 13.7393 12.0373 13.9939C12.0879 14.2485 12.0619 14.5124 11.9626 14.7523C11.8633 14.9921 11.695 15.1971 11.4792 15.3413C11.2633 15.4855 11.0096 15.5625 10.75 15.5625C10.4019 15.5625 10.0681 15.4242 9.82192 15.1781C9.57578 14.9319 9.4375 14.5981 9.4375 14.25ZM14.6875 14.25C14.6875 13.9904 14.7645 13.7367 14.9087 13.5208C15.0529 13.305 15.2579 13.1367 15.4977 13.0374C15.7376 12.9381 16.0015 12.9121 16.2561 12.9627C16.5107 13.0134 16.7445 13.1384 16.9281 13.3219C17.1116 13.5055 17.2366 13.7393 17.2873 13.9939C17.3379 14.2485 17.3119 14.5124 17.2126 14.7523C17.1133 14.9921 16.945 15.1971 16.7292 15.3413C16.5133 15.4855 16.2596 15.5625 16 15.5625C15.6519 15.5625 15.3181 15.4242 15.0719 15.1781C14.8258 14.9319 14.6875 14.5981 14.6875 14.25ZM21.25 15.5625C20.9904 15.5625 20.7367 15.4855 20.5208 15.3413C20.305 15.1971 20.1367 14.9921 20.0374 14.7523C19.9381 14.5124 19.9121 14.2485 19.9627 13.9939C20.0134 13.7393 20.1384 13.5055 20.3219 13.3219C20.5055 13.1384 20.7393 13.0134 20.9939 12.9627C21.2485 12.9121 21.5124 12.9381 21.7523 13.0374C21.9921 13.1367 22.1971 13.305 22.3413 13.5208C22.4855 13.7367 22.5625 13.9904 22.5625 14.25C22.5625 14.5981 22.4242 14.9319 22.1781 15.1781C21.9319 15.4242 21.5981 15.5625 21.25 15.5625Z',
                fill: '#242E30'
            }
        })]);
    }
};