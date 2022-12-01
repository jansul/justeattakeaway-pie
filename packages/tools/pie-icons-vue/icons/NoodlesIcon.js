import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'NoodlesIcon',
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
      "class": "c-pieIcon c-pieIcon--noodles"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M22.755 12.8537C22.5697 11.9272 22.0894 11.0855 21.386 10.4546C20.6825 9.82365 19.7937 9.43746 18.8525 9.35375L24.505 3.4475L23.245 2.275L16.245 9.625L18.7825 0.4725L17.1025 0L14.67 8.6275C13.7288 7.74458 12.5619 7.13903 11.2981 6.87776C10.0343 6.61648 8.7229 6.70964 7.50876 7.14695C6.29461 7.58426 5.22499 8.34869 4.41806 9.35579C3.61113 10.3629 3.09831 11.5735 2.93625 12.8537H2V17.2288C2.00553 18.878 2.52873 20.4839 3.4958 21.8199C4.46287 23.1559 5.82499 24.1546 7.39 24.675L7.8975 26.8538H18.8525L19.36 24.675C20.925 24.1546 22.2871 23.1559 23.2542 21.8199C24.2213 20.4839 24.7445 18.878 24.75 17.2288V12.8537H22.755ZM20.935 12.8537H16.8138C16.7693 12.5286 16.7021 12.207 16.6125 11.8912C16.9249 11.5793 17.3109 11.3512 17.7348 11.228C18.1588 11.1048 18.6069 11.0906 19.0378 11.1865C19.4687 11.2825 19.8685 11.4855 20.2001 11.777C20.5317 12.0684 20.7845 12.4387 20.935 12.8537V12.8537ZM9.875 8.47875C10.7411 8.47843 11.5938 8.69238 12.3571 9.10153C13.1205 9.51068 13.7708 10.1023 14.25 10.8237C14.396 11.0546 14.5219 11.2976 14.6263 11.55C14.8252 11.9633 14.9666 12.402 15.0462 12.8537H13.7075C13.6547 12.5961 13.5695 12.3462 13.4538 12.11C13.3712 11.9194 13.2747 11.7351 13.165 11.5588C12.7397 10.9159 12.1351 10.412 11.4262 10.1095C10.7172 9.807 9.93501 9.71926 9.17664 9.85715C8.41827 9.99503 7.71705 10.3525 7.15992 10.8852C6.60279 11.4178 6.21426 12.1023 6.0425 12.8537H4.70375C4.91038 11.6313 5.54295 10.5215 6.48943 9.72071C7.43591 8.91996 8.63523 8.48001 9.875 8.47875V8.47875ZM11.87 12.8537H7.87125C8.02946 12.4955 8.28061 12.186 8.59866 11.9574C8.91672 11.7289 9.29012 11.5895 9.68015 11.5538C10.0702 11.5181 10.4627 11.5873 10.8169 11.7544C11.1712 11.9214 11.4744 12.1801 11.695 12.5037C11.7475 12.6 11.8 12.6962 11.8613 12.8275L11.87 12.8537ZM23 17.2288C22.9946 18.5825 22.5409 19.8963 21.7098 20.9649C20.8787 22.0334 19.717 22.7966 18.4062 23.135L17.89 23.2663L17.4613 25.1038H9.28875L8.86 23.2663L8.34375 23.135C7.03299 22.7966 5.87129 22.0334 5.04017 20.9649C4.20905 19.8963 3.75536 18.5825 3.75 17.2288V14.6038H23V17.2288Z"
      }
    })]);
  }

};