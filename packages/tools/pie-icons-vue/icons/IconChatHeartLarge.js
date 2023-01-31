import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconChatHeartLarge',
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
            class: 'c-pieIcon c-pieIcon--chatHeartLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M21.9325 9.2275C21.5935 8.8728 21.1861 8.59049 20.7349 8.39762C20.2837 8.20475 19.7982 8.10531 19.3075 8.10531C18.8168 8.10531 18.3313 8.20475 17.8801 8.39762C17.4289 8.59049 17.0215 8.8728 16.6825 9.2275L16 9.93625L15.2912 9.2275C14.9535 8.87847 14.549 8.60094 14.1018 8.41139C13.6546 8.22185 13.1738 8.12418 12.6881 8.12418C12.2024 8.12418 11.7217 8.22185 11.2745 8.41139C10.8273 8.60094 10.4228 8.87847 10.085 9.2275C9.39477 9.96378 9.01066 10.9352 9.01066 11.9444C9.01066 12.9536 9.39477 13.925 10.085 14.6613L16.0087 20.7863L21.9412 14.6613C22.6284 13.9229 23.0096 12.9513 23.008 11.9427C23.0064 10.934 22.622 9.96365 21.9325 9.2275ZM20.6812 13.4363L16 18.2488L11.3187 13.4363C10.9468 13.0284 10.7405 12.4964 10.7405 11.9444C10.7405 11.3924 10.9468 10.8603 11.3187 10.4525C11.4943 10.2699 11.7049 10.1246 11.938 10.0254C12.171 9.92613 12.4217 9.87497 12.675 9.87497C12.9283 9.87497 13.179 9.92613 13.412 10.0254C13.6451 10.1246 13.8557 10.2699 14.0312 10.4525L15.0462 11.4763C15.2927 11.7147 15.6221 11.848 15.965 11.848C16.3079 11.848 16.6373 11.7147 16.8837 11.4763L17.9512 10.4525C18.1311 10.2683 18.3462 10.1223 18.5837 10.023C18.8212 9.92381 19.0763 9.87347 19.3337 9.875C19.5844 9.8734 19.8328 9.92214 20.0643 10.0183C20.2958 10.1145 20.5056 10.2562 20.6812 10.435C21.0582 10.8438 21.2675 11.3795 21.2675 11.9356C21.2675 12.4917 21.0582 13.0274 20.6812 13.4363Z',
                fill: '#242E30'
            }
        }), h('path', {
            attrs: {
                d: 'M25.625 4.625H6.375C5.67881 4.625 5.01113 4.90156 4.51884 5.39384C4.02656 5.88613 3.75 6.55381 3.75 7.25V29.125H6.01625L11.0037 24.1287C11.1714 23.9689 11.3933 23.8782 11.625 23.875H25.625C26.3212 23.875 26.9889 23.5984 27.4812 23.1062C27.9734 22.6139 28.25 21.9462 28.25 21.25V7.25C28.25 6.55381 27.9734 5.88613 27.4812 5.39384C26.9889 4.90156 26.3212 4.625 25.625 4.625ZM26.5 21.25C26.5 21.4821 26.4078 21.7046 26.2437 21.8687C26.0796 22.0328 25.8571 22.125 25.625 22.125H11.625C10.929 22.1256 10.2618 22.4026 9.77 22.895L5.5 27.165V7.25C5.5 7.01794 5.59219 6.79538 5.75628 6.63128C5.92038 6.46719 6.14294 6.375 6.375 6.375H25.625C25.8571 6.375 26.0796 6.46719 26.2437 6.63128C26.4078 6.79538 26.5 7.01794 26.5 7.25V21.25Z',
                fill: '#242E30'
            }
        })]);
    }
};
