import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconUsers',
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
            class: 'c-pieIcon c-pieIcon--users'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M1.20996 11.8238L1.69996 10.4325C1.86957 9.99868 2.14222 9.61266 2.49436 9.30777C2.84651 9.00287 3.26758 8.78828 3.72121 8.6825C3.54754 8.57841 3.38611 8.45513 3.23996 8.315C2.90232 7.97893 2.67203 7.5502 2.57827 7.08312C2.48451 6.61605 2.53151 6.13166 2.7133 5.69132C2.8951 5.25098 3.2035 4.87451 3.59945 4.60961C3.9954 4.34472 4.46107 4.20331 4.93746 4.20331C5.41385 4.20331 5.87952 4.34472 6.27547 4.60961C6.67142 4.87451 6.97983 5.25098 7.16162 5.69132C7.34341 6.13166 7.39041 6.61605 7.29665 7.08312C7.20289 7.5502 6.9726 7.97893 6.63496 8.315C6.53747 8.41718 6.42888 8.50816 6.31121 8.58625C6.91217 8.57378 7.5022 8.74804 7.99996 9.085C8.49707 8.73601 9.09008 8.54955 9.69746 8.55125C9.37743 8.32991 9.11562 8.0345 8.93432 7.6902C8.75303 7.34589 8.65762 6.96287 8.65621 6.57375C8.66358 6.1798 8.76757 5.79368 8.95906 5.44932C9.15055 5.10496 9.42367 4.81289 9.75443 4.59878C10.0852 4.38466 10.4635 4.25504 10.8561 4.22131C11.2486 4.18758 11.6435 4.25077 12.0059 4.40533C12.3684 4.55989 12.6873 4.80109 12.9347 5.10774C13.1821 5.41439 13.3505 5.7771 13.4249 6.16402C13.4994 6.55094 13.4777 6.95023 13.3617 7.3268C13.2458 7.70338 13.0392 8.04572 12.76 8.32375C12.6138 8.46388 12.4524 8.58716 12.2787 8.69125C12.733 8.79562 13.1547 9.00971 13.5071 9.31478C13.8594 9.61985 14.1317 10.0066 14.3 10.4413L14.79 11.8325H13.3987L13.0575 10.8788C12.9394 10.5654 12.7251 10.2974 12.4453 10.1135C12.1654 9.92956 11.8345 9.83906 11.5 9.855H9.74996C9.42236 9.84586 9.09998 9.93858 8.82729 10.1204C8.5546 10.3022 8.34503 10.5641 8.22746 10.87L7.88621 11.8238H6.45996L6.94996 10.4325C6.94996 10.31 7.05496 10.1963 7.10746 10.0825C6.84768 9.92998 6.55118 9.85132 6.24996 9.855H4.49996C4.17236 9.84586 3.84998 9.93858 3.57729 10.1204C3.3046 10.3022 3.09503 10.5641 2.97746 10.87L2.63621 11.8238H1.20996ZM9.95996 6.57375C9.95839 6.82687 10.0447 7.07271 10.2041 7.26934C10.3635 7.46597 10.5861 7.60122 10.8341 7.65204C11.0821 7.70285 11.34 7.66608 11.5639 7.548C11.7878 7.42991 11.9638 7.23782 12.0619 7.00448C12.1601 6.77113 12.1742 6.51099 12.1019 6.26838C12.0297 6.02578 11.8755 5.81575 11.6658 5.6741C11.456 5.53245 11.2036 5.46794 10.9515 5.49158C10.6995 5.51523 10.4635 5.62555 10.2837 5.80375C10.1831 5.90506 10.1035 6.02523 10.0495 6.15736C9.99542 6.28949 9.96798 6.43099 9.96871 6.57375H9.95996ZM3.83496 6.57375C3.83339 6.82687 3.91966 7.07271 4.07907 7.26934C4.23847 7.46597 4.46115 7.60122 4.70913 7.65204C4.9571 7.70285 5.21503 7.66608 5.43893 7.548C5.66283 7.42991 5.83883 7.23782 5.93694 7.00448C6.03505 6.77113 6.04919 6.51099 5.97695 6.26838C5.9047 6.02578 5.75054 5.81575 5.54076 5.6741C5.33098 5.53245 5.07856 5.46794 4.82653 5.49158C4.57451 5.51523 4.33849 5.62555 4.15871 5.80375C4.05813 5.90506 3.97853 6.02523 3.92448 6.15736C3.87042 6.28949 3.84298 6.43099 3.84371 6.57375H3.83496Z',
                fill: '#242E30'
            }
        })]);
    }
};
