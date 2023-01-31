import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconClockAlertLarge',
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
            class: 'c-pieIcon c-pieIcon--clockAlertLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M16 3.75002C13.2692 3.75263 10.6176 4.66761 8.4663 6.34963C6.31503 8.03165 4.78746 10.3843 4.12622 13.0338L4.52872 12.8763C5.03347 12.697 5.5605 12.5881 6.09497 12.5525C6.82573 10.4486 8.20657 8.63151 10.0379 7.36394C11.8693 6.09637 14.0562 5.44397 16.2827 5.50103C18.5092 5.5581 20.6599 6.32167 22.4239 7.68139C24.1879 9.04111 25.4739 10.9265 26.0959 13.0651C26.7179 15.2037 26.6438 17.4847 25.8842 19.5785C25.1247 21.6722 23.719 23.4701 21.8705 24.7124C20.0219 25.9548 17.8262 26.5771 15.6007 26.4895C13.3752 26.4018 11.2352 25.6088 9.48997 24.225C9.60608 24.5448 9.66531 24.8824 9.66497 25.2225C9.66432 25.6036 9.59004 25.9809 9.44622 26.3338C11.0511 27.3554 12.8718 27.9892 14.7641 28.185C16.6565 28.3807 18.5684 28.1331 20.3484 27.4616C22.1284 26.7901 23.7275 25.7133 25.0191 24.3164C26.3106 22.9196 27.2591 21.2411 27.7893 19.4141C28.3195 17.587 28.4169 15.6616 28.0737 13.7903C27.7305 11.9191 26.9563 10.1535 25.8122 8.63351C24.6682 7.11348 23.1859 5.8808 21.4827 5.03316C19.7796 4.18551 17.9024 3.74619 16 3.75002Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M15.125 9.00003V16.8488L20.795 20.2525L21.705 18.7475L16.875 15.8513V9.00003H15.125Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M6.60246 26.535C7.32733 26.535 7.91496 25.9474 7.91496 25.2225C7.91496 24.4977 7.32733 23.91 6.60246 23.91C5.87759 23.91 5.28996 24.4977 5.28996 25.2225C5.28996 25.9474 5.87759 26.535 6.60246 26.535Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M5.14998 14.5125L5.89373 22.125H7.31123L8.05498 14.4775C7.58917 14.3242 7.10161 14.2474 6.61123 14.25C6.11297 14.256 5.61916 14.3447 5.14998 14.5125Z',
                fill: '#242E30'
            }
        })]);
    }
};
