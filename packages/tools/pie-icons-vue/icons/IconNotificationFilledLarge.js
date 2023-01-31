import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconNotificationFilledLarge',
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
            class: 'c-pieIcon c-pieIcon--notificationFilledLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 29.125C16.8607 29.1234 17.7029 28.8753 18.427 28.4101C19.1512 27.9449 19.7269 27.2821 20.0862 26.5H11.9137C12.2731 27.2821 12.8488 27.9449 13.573 28.4101C14.2971 28.8753 15.1393 29.1234 16 29.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M26.6925 21.0837C25.7926 20.1889 25.0799 19.1237 24.5962 17.9504C24.1124 16.777 23.8673 15.5191 23.875 14.25V13.375C23.8741 11.4386 23.1597 9.57037 21.8684 8.12735C20.5771 6.68432 18.7994 5.76766 16.875 5.5525V2.875H15.125V5.5525C13.1679 5.82866 11.3782 6.80767 10.0901 8.30672C8.802 9.80577 8.10349 11.7224 8.125 13.6987V14.25C8.12926 15.5147 7.88241 16.7677 7.39876 17.9362C6.91511 19.1048 6.20428 20.1657 5.3075 21.0575L4.625 21.7663V24.75H27.375V21.7663L26.6925 21.0837Z',
                fill: '#242E30'
            }
        })]);
    }
};
