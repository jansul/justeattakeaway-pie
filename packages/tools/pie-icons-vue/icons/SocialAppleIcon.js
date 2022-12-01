import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialAppleIcon',
  props: {},
  functional: true,

  render(h, ctx) {
    const attrs = ctx.data.attrs || {};
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 28 28"
      },
      "class": "c-pieIcon c-pieIcon--socialApple"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14 26.25C11.5772 26.25 9.20877 25.5316 7.19427 24.1855C5.17977 22.8395 3.60965 20.9263 2.68248 18.6879C1.75531 16.4495 1.51272 13.9864 1.98539 11.6101C2.45805 9.23388 3.62475 7.05114 5.33795 5.33795C7.05114 3.62475 9.23388 2.45805 11.6101 1.98539C13.9864 1.51272 16.4495 1.75531 18.6879 2.68248C20.9263 3.60965 22.8395 5.17977 24.1855 7.19427C25.5316 9.20877 26.25 11.5772 26.25 14C26.25 17.2489 24.9594 20.3647 22.6621 22.6621C20.3647 24.9594 17.2489 26.25 14 26.25ZM14 3.50001C11.9233 3.50001 9.89323 4.11582 8.16652 5.26957C6.4398 6.42333 5.09399 8.06321 4.29927 9.98183C3.50455 11.9005 3.29662 14.0117 3.70176 16.0485C4.1069 18.0853 5.10693 19.9562 6.57538 21.4246C8.04384 22.8931 9.91476 23.8931 11.9516 24.2983C13.9884 24.7034 16.0996 24.4955 18.0182 23.7007C19.9368 22.906 21.5767 21.5602 22.7304 19.8335C23.8842 18.1068 24.5 16.0767 24.5 14C24.5 11.2152 23.3938 8.54452 21.4246 6.57538C19.4555 4.60625 16.7848 3.50001 14 3.50001Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.1251 17.5C20.0886 17.5637 20.0593 17.6312 20.0376 17.7013C19.6244 18.8723 18.9684 19.9428 18.1126 20.8425C17.7945 21.169 17.3769 21.3806 16.9255 21.4439C16.4741 21.5073 16.0145 21.4189 15.6188 21.1925C15.2198 20.9622 14.7671 20.8409 14.3063 20.8409C13.8455 20.8409 13.3929 20.9622 12.9938 21.1925C12.6065 21.3972 12.1713 21.4939 11.7338 21.4725C11.4726 21.4487 11.2196 21.3692 10.9917 21.2394C10.7638 21.1096 10.5663 20.9325 10.4126 20.72C8.77615 19.0074 7.8667 16.7275 7.87506 14.3588C7.87982 13.693 8.01973 13.0351 8.28631 12.425C8.46317 11.9691 8.7336 11.5553 9.08018 11.2103C9.42675 10.8654 9.84178 10.5968 10.2985 10.422C10.7552 10.2473 11.2435 10.1701 11.7318 10.1956C12.2202 10.2211 12.6978 10.3487 13.1338 10.57C13.4171 10.7336 13.7385 10.8197 14.0657 10.8197C14.3928 10.8197 14.7142 10.7336 14.9976 10.57C15.2987 10.4145 15.6155 10.2914 15.9426 10.2025C16.7284 10.0506 17.5416 10.1359 18.2788 10.4475C18.8511 10.6764 19.3312 11.0888 19.6438 11.62C19.4338 11.8038 19.2326 11.97 19.0401 12.1625C18.8105 12.3508 18.61 12.572 18.4451 12.8188C18.1039 13.4282 17.965 14.1303 18.0483 14.8237C18.1317 15.5172 18.433 16.1663 18.9088 16.6775C19.225 17.0648 19.6479 17.3508 20.1251 17.5Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M16.9577 6.52753C17.0288 7.06036 16.9405 7.60232 16.7039 8.08503C16.5268 8.54491 16.2381 8.95357 15.8639 9.2743C15.4898 9.59503 15.0418 9.81777 14.5602 9.92253C13.8777 10.0713 13.8952 10.08 13.9652 9.38878C14.0637 8.70025 14.3719 8.05877 14.8478 7.55154C15.3238 7.04431 15.9443 6.69593 16.6252 6.55378C16.7477 6.53628 16.8527 6.53628 16.9577 6.52753Z"
      }
    })]);
  }

};