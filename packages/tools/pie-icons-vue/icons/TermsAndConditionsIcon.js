import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'TermsAndConditionsIcon',
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
      "class": "c-pieIcon c-pieIcon--termsAndConditions"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M23.7387 27.125H6.88622C6.45318 27.1252 6.02682 27.0182 5.64515 26.8136C5.26347 26.609 4.93834 26.3132 4.69872 25.9525L0.813721 20.125H4.37497V2.625H25.375V25.375C25.3757 25.721 25.2738 26.0594 25.0823 26.3476C24.8907 26.6357 24.618 26.8605 24.2987 26.9937C24.1201 27.0651 23.9309 27.1065 23.7387 27.1162V27.125ZM4.08622 21.875L6.12497 24.9812C6.20424 25.1016 6.312 25.2005 6.4387 25.2692C6.5654 25.3379 6.7071 25.3743 6.85122 25.375H21.4462L18.8212 21.875H4.08622ZM6.12497 20.125H19.6875L23.625 25.375V4.375H6.12497V20.125ZM19.25 8.75H10.5V10.5H19.25V8.75ZM15.75 14H10.5V15.75H15.75V14Z"
      }
    })]);
  }

};