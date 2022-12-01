import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'MenuCollapseIcon',
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
      "class": "c-pieIcon c-pieIcon--menuCollapse"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M2.625 2.625V25.375H21C22.1603 25.375 23.2731 24.9141 24.0936 24.0936C24.9141 23.2731 25.375 22.1603 25.375 21V2.625H2.625ZM4.375 4.375H6.125V23.625H4.375V4.375ZM23.625 21C23.625 21.6962 23.3484 22.3639 22.8562 22.8562C22.3639 23.3484 21.6962 23.625 21 23.625H7.875V4.375H23.625V21Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.6138 14.945L16.3713 13.7025L13.51 16.5725C13.3873 16.6938 13.2898 16.8382 13.2233 16.9974C13.1568 17.1566 13.1225 17.3275 13.1225 17.5C13.1225 17.6726 13.1568 17.8434 13.2233 18.0026C13.2898 18.1618 13.3873 18.3062 13.51 18.4275L16.3713 21.2975L17.6138 20.055L15.9338 18.375H21.875V16.625H15.9338L17.6138 14.945Z"
      }
    })]);
  }

};