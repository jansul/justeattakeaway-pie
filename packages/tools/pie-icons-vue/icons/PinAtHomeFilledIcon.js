import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'PinAtHomeFilledIcon',
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
      "class": "c-pieIcon c-pieIcon--pinAtHomeFilled"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M15.4614 2.10879C15.0083 1.86971 14.5038 1.74475 13.9914 1.74475C13.4791 1.74475 12.9746 1.86971 12.5214 2.10879C8.14645 4.68129 1.2077 11.375 0.918945 11.62L2.12645 12.88C2.12645 12.88 3.05395 12.005 4.3752 10.7975V24.5H23.6252V10.7975C24.9464 11.9963 25.8477 12.8538 25.8739 12.88L27.1252 11.62C26.7927 11.375 19.8539 4.68129 15.4614 2.10879ZM7.4377 18.375C7.17811 18.375 6.92435 18.2981 6.70851 18.1538C6.49267 18.0096 6.32444 17.8046 6.2251 17.5648C6.12576 17.325 6.09977 17.0611 6.15041 16.8065C6.20106 16.5519 6.32606 16.318 6.50962 16.1345C6.69317 15.9509 6.92704 15.8259 7.18164 15.7753C7.43624 15.7246 7.70014 15.7506 7.93997 15.8499C8.1798 15.9493 8.38478 16.1175 8.529 16.3334C8.67322 16.5492 8.7502 16.8029 8.7502 17.0625C8.7502 17.4106 8.61191 17.7445 8.36577 17.9906C8.11963 18.2368 7.78579 18.375 7.4377 18.375ZM11.8127 18.375C11.5531 18.375 11.2993 18.2981 11.0835 18.1538C10.8677 18.0096 10.6994 17.8046 10.6001 17.5648C10.5008 17.325 10.4748 17.0611 10.5254 16.8065C10.5761 16.5519 10.7011 16.318 10.8846 16.1345C11.0682 15.9509 11.302 15.8259 11.5566 15.7753C11.8112 15.7246 12.0751 15.7506 12.315 15.8499C12.5548 15.9493 12.7598 16.1175 12.904 16.3334C13.0482 16.5492 13.1252 16.8029 13.1252 17.0625C13.1252 17.4106 12.9869 17.7445 12.7408 17.9906C12.4946 18.2368 12.1608 18.375 11.8127 18.375ZM16.1877 18.375C15.9281 18.375 15.6743 18.2981 15.4585 18.1538C15.2427 18.0096 15.0744 17.8046 14.9751 17.5648C14.8758 17.325 14.8498 17.0611 14.9004 16.8065C14.9511 16.5519 15.0761 16.318 15.2596 16.1345C15.4432 15.9509 15.677 15.8259 15.9316 15.7753C16.1862 15.7246 16.4501 15.7506 16.69 15.8499C16.9298 15.9493 17.1348 16.1175 17.279 16.3334C17.4232 16.5492 17.5002 16.8029 17.5002 17.0625C17.5002 17.4106 17.3619 17.7445 17.1158 17.9906C16.8696 18.2368 16.5358 18.375 16.1877 18.375ZM20.5627 18.375C20.3031 18.375 20.0494 18.2981 19.8335 18.1538C19.6177 18.0096 19.4494 17.8046 19.3501 17.5648C19.2508 17.325 19.2248 17.0611 19.2754 16.8065C19.3261 16.5519 19.4511 16.318 19.6346 16.1345C19.8182 15.9509 20.052 15.8259 20.3066 15.7753C20.5612 15.7246 20.8251 15.7506 21.065 15.8499C21.3048 15.9493 21.5098 16.1175 21.654 16.3334C21.7982 16.5492 21.8752 16.8029 21.8752 17.0625C21.8752 17.4106 21.7369 17.7445 21.4908 17.9906C21.2446 18.2368 20.9108 18.375 20.5627 18.375Z"
      }
    })]);
  }

};