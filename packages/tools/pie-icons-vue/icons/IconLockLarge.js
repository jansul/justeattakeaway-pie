import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconLockLarge',
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
            class: 'c-pieIcon c-pieIcon--lockLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M23.875 14.25H22.125V10.75C22.125 9.12555 21.4797 7.56763 20.331 6.41897C19.1824 5.27031 17.6245 4.625 16 4.625C14.3755 4.625 12.8176 5.27031 11.669 6.41897C10.5203 7.56763 9.875 9.12555 9.875 10.75V14.25H8.125V10.75C8.125 8.66142 8.95469 6.65838 10.4315 5.18153C11.9084 3.70469 13.9114 2.875 16 2.875C18.0886 2.875 20.0916 3.70469 21.5685 5.18153C23.0453 6.65838 23.875 8.66142 23.875 10.75V14.25Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16 29.125C12.0142 29.1359 8.135 27.8387 4.9575 25.4325L4.625 25.17V13.375H27.375V25.17L27.0425 25.4325C23.8753 27.8582 19.9892 29.1576 16 29.125ZM6.375 24.3213C9.18912 26.3125 12.5527 27.3796 16 27.375C19.451 27.4039 22.8219 26.3344 25.625 24.3213V15.125H6.375V24.3213Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M16.875 17.75H15.125V23H16.875V17.75Z',
                fill: '#242E30'
            }
        })]);
    }
};
