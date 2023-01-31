import _mergeJSXProps from '@vue/babel-helper-vue-jsx-merge-props';

export default {
    name: 'IconWrapLarge',
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
            class: 'c-pieIcon c-pieIcon--wrapLarge'
        }, ctx.data]), [h('path', {
            attrs: {
                d: 'M29.615 9.54252C29.5832 8.87764 29.3405 8.24016 28.922 7.72254C28.5035 7.20492 27.931 6.83407 27.2875 6.66377C27.4242 5.9901 27.3354 5.29018 27.035 4.67191C26.7346 4.05365 26.2391 3.55138 25.625 3.24252C25.0372 3.00334 24.3921 2.94217 23.7698 3.06662C23.1476 3.19108 22.5756 3.49566 22.125 3.94252C21.8434 3.58501 21.4883 3.29218 21.0838 3.08385C20.6792 2.87552 20.2346 2.75656 19.78 2.73502C19.1377 2.70171 18.5035 2.89056 17.984 3.26981C17.4645 3.64906 17.0915 4.19559 16.9275 4.81752C16.8138 5.16752 16.7175 5.50002 16.63 5.84127L2.98875 19.1413C2.90033 19.2319 2.83264 19.3406 2.79034 19.46C2.74804 19.5793 2.73214 19.7064 2.74375 19.8325V19.8325C3.2075 26.0538 6.24375 29.5363 11.2663 29.6413C11.4843 29.6383 11.6933 29.5541 11.8525 29.405L26.2288 16.28C26.7062 16.1969 27.1531 15.9886 27.5238 15.6763C28.0427 15.2971 28.3946 14.7317 28.5055 14.0987C28.6165 13.4657 28.4778 12.8143 28.1188 12.2813C28.5927 12.0029 28.9822 11.6012 29.2457 11.1188C29.5092 10.6365 29.6368 10.0917 29.615 9.54252V9.54252ZM21.6 11.625C22.23 11.625 22.6413 11.7475 22.755 11.9313C22.8688 12.115 22.8163 12.7538 22.2563 13.6813C21.7319 13.4357 21.2311 13.1428 20.76 12.8063C21.0867 12.4213 21.3667 12.0275 21.6 11.625ZM20.3138 10.3913C20.0617 10.8512 19.7689 11.2875 19.4388 11.695C18.7981 11.0824 18.2916 10.3435 17.9513 9.52502C18.87 8.91252 20.1913 8.77252 20.5763 9.07002C20.7688 9.21002 20.6638 9.72627 20.3138 10.3913ZM16.1838 8.72002C16.1838 8.84252 16.1838 8.96502 16.1838 9.08752C16.1838 9.21002 16.1838 9.35877 16.1838 9.49002C16.1838 10.015 16.1838 10.5313 16.1838 11.0125C16.1838 11.3275 16.1838 11.6338 16.1838 11.9488C16.3063 14.6788 16.4288 17.505 14.4338 19.8238C13.9356 20.4852 13.2996 21.0304 12.5699 21.4217C11.8402 21.813 11.0341 22.0411 10.2075 22.09H10.12C7.88875 22.09 5.85875 20.62 4.87 19.7713L16.1838 8.72002ZM10.9338 27.8738C7.06625 27.6463 5.43 24.855 4.80875 21.915C6.35081 23.0759 8.20905 23.7411 10.1375 23.8225H10.2775C11.3533 23.7743 12.4056 23.4917 13.3608 22.9945C14.3159 22.4973 15.151 21.7974 15.8075 20.9438C17.995 18.3888 18.0738 15.4225 17.9775 12.71C18.2854 13.0188 18.6097 13.3108 18.9488 13.585C19.9373 14.4229 21.0502 15.1018 22.2475 15.5975C22.7429 15.8112 23.2551 15.9839 23.7788 16.1138L10.9338 27.8738ZM26.4213 11.0038C26.2459 11.0273 26.0817 11.1034 25.9505 11.2222C25.8193 11.3409 25.7272 11.4966 25.6863 11.6688C25.6448 11.8415 25.657 12.0228 25.7211 12.1884C25.7851 12.3541 25.8981 12.4964 26.045 12.5963C26.4102 12.8307 26.6753 13.1924 26.7888 13.6113C26.7747 13.7563 26.729 13.8965 26.6549 14.0219C26.5808 14.1474 26.4802 14.2551 26.36 14.3375C26.0188 14.6438 25.135 14.7313 23.8925 14.3375C24.645 12.99 24.7675 11.87 24.2513 11.0125C24.0385 10.694 23.7563 10.4277 23.426 10.2337C23.0956 10.0398 22.7256 9.92311 22.3438 9.89252C22.4615 9.49119 22.4587 9.06412 22.3358 8.66435C22.2129 8.26457 21.9753 7.90969 21.6525 7.64377C21.1124 7.33227 20.5053 7.15534 19.8824 7.12793C19.2595 7.10052 18.6391 7.22342 18.0738 7.48627C18.1263 7.14502 18.1875 6.80377 18.2663 6.47127C18.345 6.13877 18.4588 5.72752 18.59 5.34252C18.6414 5.09024 18.7801 4.86417 18.9818 4.70412C19.1835 4.54406 19.4351 4.46028 19.6925 4.46752C20.0175 4.49455 20.3252 4.62585 20.5695 4.84185C20.8139 5.05785 20.982 5.34701 21.0488 5.66627C21.0858 5.83699 21.1732 5.9927 21.2995 6.11335C21.4259 6.234 21.5854 6.31407 21.7577 6.34325C21.9299 6.37243 22.107 6.34938 22.266 6.27707C22.425 6.20476 22.5588 6.0865 22.65 5.93752C22.65 5.93752 23.6913 4.30127 24.9075 4.82627C25.975 5.29877 25.4238 7.06627 25.415 7.08377C25.3733 7.21219 25.3618 7.34853 25.3815 7.48212C25.4013 7.6157 25.4517 7.7429 25.5288 7.85377C25.6048 7.96382 25.7051 8.05496 25.8219 8.12018C25.9387 8.18541 26.0689 8.22298 26.2025 8.23002C27.3925 8.29127 27.8388 9.00002 27.865 9.59502C27.8913 10.19 27.5238 10.8638 26.4213 11.0038Z',
                fill: '#242E30'
            }
        })]);
    }
};
