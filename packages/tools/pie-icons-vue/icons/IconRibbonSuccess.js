import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { iconSize, updateContextData } from './configs-vue';

export default {
    name: 'IconRibbonSuccess',
    props: {
        iconSize: iconSize.regular,
    },
    functional: true,
    render (h, ctx) {
        ctx.data = updateContextData(ctx, 'c-pieIcon c-pieIcon--ribbonSuccess');
        return h('svg', _mergeJSXProps([{
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg',
                role: 'presentation',
                focusable: 'false',
                fill: 'currentColor',
                viewBox: '0 0 16 16',
            },
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M13.696 12.043a7.37 7.37 0 0 1-1.522-2.013c.096-.309.144-.63.14-.954a2.08 2.08 0 0 1 .061-.577c.099-.154.216-.295.35-.42a2.04 2.04 0 0 0 .752-1.392 2.039 2.039 0 0 0-.752-1.39 2.207 2.207 0 0 1-.35-.42 2.057 2.057 0 0 1-.053-.57 2.04 2.04 0 0 0-.446-1.487c-.417-.34-.952-.5-1.487-.446a2.056 2.056 0 0 1-.569-.053 2.205 2.205 0 0 1-.42-.35A2.039 2.039 0 0 0 8 1.22a2.039 2.039 0 0 0-1.391.752 2.205 2.205 0 0 1-.42.35 2.057 2.057 0 0 1-.569.053 2.039 2.039 0 0 0-1.487.446 2.03 2.03 0 0 0-.447 1.479c.007.194-.014.389-.061.577a2.205 2.205 0 0 1-.35.42 2.039 2.039 0 0 0-.744 1.391 2.039 2.039 0 0 0 .753 1.392c.133.125.251.266.35.42.044.186.061.377.052.569-.004.326.043.65.14.962a7.368 7.368 0 0 1-1.522 2.013l-.648.603 3.947 2.301.358-.367a11.2 11.2 0 0 0 1.75-2.476c.1.03.203.048.306.052.104-.005.207-.022.307-.052a11.2 11.2 0 0 0 1.75 2.476l.358.367 3.947-2.3-.683-.604ZM4.23 6.25c.258-.25.466-.547.612-.875.115-.338.168-.693.158-1.05-.01-.194.011-.39.061-.578.19-.056.388-.08.586-.07.357.011.713-.042 1.05-.157.31-.152.588-.36.823-.612.131-.123.393-.385.481-.385.088 0 .35.262.481.385.235.252.513.46.823.612.337.115.693.168 1.05.158.194-.009.389.012.577.06.057.19.08.389.07.587-.01.357.043.712.158 1.05.152.31.36.588.612.822.123.132.385.394.385.482 0 .087-.262.35-.385.481-.253.234-.46.513-.612.822A3.001 3.001 0 0 0 11 9.033c.01.195-.011.39-.061.578a1.75 1.75 0 0 1-.586.07 2.975 2.975 0 0 0-1.05.158c-.31.151-.588.36-.823.612-.131.123-.393.385-.481.385-.088 0-.35-.263-.481-.385a2.809 2.809 0 0 0-.823-.612 2.975 2.975 0 0 0-1.05-.158 1.96 1.96 0 0 1-.577-.061 1.75 1.75 0 0 1-.07-.586c.008-.351-.045-.7-.158-1.033a2.809 2.809 0 0 0-.612-.822c-.123-.132-.385-.394-.385-.482 0-.087.262-.358.385-.446Zm1.146 7-1.566-.875c.39-.45.733-.94 1.023-1.461.26.05.524.077.788.079.191-.01.383.008.569.052.146.095.281.207.402.332a10.666 10.666 0 0 1-1.216 1.873Zm5.25 0a10.045 10.045 0 0 1-1.234-1.899c.121-.126.256-.237.403-.332.186-.044.377-.062.569-.053.264-.001.528-.028.787-.079.295.531.643 1.03 1.041 1.488l-1.566.875Z',
            },
        }), h('path', {
            attrs: {
                d: 'm9.06 5.44.708.706-2.122 2.122-.707-.707 2.122-2.122Z',
            },
        }), h('path', {
            attrs: {
                d: 'm6.94 6.146 1.414 1.415-.708.707-1.414-1.414.707-.708Z',
            },
        })]);
    },
};
