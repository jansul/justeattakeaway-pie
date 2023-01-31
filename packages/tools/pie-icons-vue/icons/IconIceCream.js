import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconIceCream',
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
            class: 'c-pieIcon c-pieIcon--iceCream'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M12.1475 7.93875V7.06375C12.1478 6.67088 12.0599 6.28296 11.8903 5.92859C11.7206 5.57422 11.4737 5.26244 11.1675 5.01625C11.1718 4.94631 11.1718 4.87618 11.1675 4.80625C11.1675 3.96153 10.8319 3.15141 10.2346 2.55411C9.63733 1.95681 8.82721 1.62125 7.9825 1.62125C7.13779 1.62125 6.32767 1.95681 5.73037 2.55411C5.13306 3.15141 4.7975 3.96153 4.7975 4.80625C4.79871 5.01234 4.82218 5.2177 4.8675 5.41875C4.56233 5.6103 4.3092 5.87427 4.1306 6.18719C3.952 6.50012 3.85347 6.85232 3.84375 7.2125V8C3.84176 8.11401 3.8721 8.22626 3.93125 8.32375L7.43125 14.4487C7.48879 14.5487 7.57166 14.6317 7.67151 14.6895C7.77136 14.7472 7.88466 14.7776 8 14.7776C8.11534 14.7776 8.22864 14.7472 8.32849 14.6895C8.42834 14.6317 8.51121 14.5487 8.56875 14.4487L12.0687 8.32375C12.1372 8.20779 12.1649 8.07227 12.1475 7.93875V7.93875ZM6.1275 4.7625C6.13414 4.29949 6.3121 3.85538 6.62702 3.5159C6.94193 3.17642 7.37146 2.96567 7.83266 2.92433C8.29386 2.883 8.75402 3.01402 9.12428 3.29209C9.49454 3.57016 9.74863 3.97555 9.8375 4.43H9.61875C9.36873 4.41612 9.11804 4.43971 8.875 4.5L9.26 5.75125C9.37332 5.73733 9.48793 5.73733 9.60125 5.75125C9.76635 5.75576 9.92892 5.79292 10.0796 5.86057C10.2302 5.92823 10.366 6.02504 10.4791 6.14543C10.5922 6.26582 10.6803 6.4074 10.7384 6.562C10.7964 6.71661 10.8233 6.88119 10.8175 7.04625V7.4575C9.88461 7.59425 8.94285 7.66152 8 7.65875V7.65875C7.04739 7.65383 6.09661 7.57484 5.15625 7.4225V7.2125C5.16721 7.08051 5.20434 6.95202 5.26548 6.83453C5.32661 6.71704 5.41054 6.61291 5.51235 6.5282C5.61416 6.44349 5.73183 6.37991 5.85847 6.34116C5.98512 6.30241 6.11822 6.28926 6.25 6.3025C6.37233 6.30074 6.49393 6.3215 6.60875 6.36375L6.97625 5.1125C6.74163 5.03569 6.49684 4.9944 6.25 4.99H6.15375C6.137 4.9153 6.1282 4.83904 6.1275 4.7625V4.7625ZM8 12.8037L5.73375 8.875C6.48669 8.95063 7.24336 8.98276 8 8.97125V8.97125C8.75374 8.98339 9.50753 8.95125 10.2575 8.875L8 12.8037Z',
                fill: '#242E30'
            }
        })]);
    }
};
