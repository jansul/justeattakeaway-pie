import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'RibbonStarIcon',
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
      "class": "c-pieIcon c-pieIcon--ribbonStar"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M25.0953 22.4C23.7702 21.1751 22.6791 19.7193 21.8753 18.1038C22.1021 17.4731 22.206 16.8048 22.1815 16.135C22.1669 15.7093 22.22 15.284 22.339 14.875C22.5476 14.5135 22.8102 14.1859 23.1178 13.9037C23.5056 13.5961 23.8278 13.2138 24.0653 12.7795C24.3027 12.3451 24.4506 11.8675 24.5003 11.375C24.445 10.8901 24.2945 10.4209 24.0572 9.99443C23.8199 9.56795 23.5007 9.19261 23.1178 8.89C22.8102 8.60783 22.5476 8.2803 22.339 7.91875C22.2183 7.49526 22.168 7.0548 22.1903 6.615C22.278 5.67518 22.006 4.73705 21.429 3.99C20.682 3.41304 19.7438 3.14098 18.804 3.22875C18.3618 3.23681 17.9213 3.17177 17.5003 3.03625C17.1387 2.82768 16.8112 2.56506 16.529 2.2575C16.2214 1.86966 15.8391 1.54748 15.4047 1.31001C14.9704 1.07255 14.4928 0.924625 14.0003 0.875C13.5154 0.930228 13.0462 1.08081 12.6197 1.31807C12.1932 1.55534 11.8179 1.87461 11.5153 2.2575C11.2331 2.56506 10.9056 2.82768 10.544 3.03625C10.1205 3.15697 9.68007 3.20723 9.24027 3.185C8.30011 3.09366 7.3607 3.36609 6.61527 3.94625C6.02105 4.70171 5.74482 5.65911 5.84527 6.615C5.8675 7.0548 5.81725 7.49526 5.69652 7.91875C5.48796 8.2803 5.22534 8.60783 4.91777 8.89C4.52843 9.18944 4.20259 9.56337 3.95922 9.99001C3.71586 10.4166 3.55984 10.8875 3.50027 11.375C3.5555 11.8599 3.70608 12.3291 3.94335 12.7556C4.18061 13.182 4.49988 13.5574 4.88277 13.86C5.19393 14.1554 5.45672 14.498 5.66152 14.875C5.78225 15.2985 5.8325 15.7389 5.81027 16.1787C5.7941 16.8345 5.90095 17.4874 6.12527 18.1038C5.32141 19.7193 4.23031 21.1751 2.90527 22.4L1.59277 23.625L6.51027 24.4387L8.89902 27.5975L9.62527 26.8625C11.0453 25.3197 12.2412 23.5848 13.1778 21.7087C13.4412 21.8185 13.7237 21.875 14.009 21.875C14.2944 21.875 14.5769 21.8185 14.8403 21.7087C15.7715 23.5837 16.9614 25.3186 18.3753 26.8625L19.0928 27.5887L21.4815 24.43L26.4078 23.625L25.0953 22.4ZM9.03902 24.8675L7.49027 22.82L5.29402 22.4525C6.13448 21.5028 6.85992 20.4572 7.45527 19.3375C8.02469 19.4968 8.61405 19.5734 9.20527 19.565C9.64507 19.5428 10.0855 19.593 10.509 19.7137C10.8706 19.9223 11.1981 20.1849 11.4803 20.4925L11.6815 20.685C10.9667 22.1774 10.0798 23.581 9.03902 24.8675ZM12.7315 19.25C12.3038 18.7758 11.7902 18.3868 11.2178 18.1038C10.5936 17.8891 9.93462 17.7942 9.27527 17.8237C8.69777 17.8237 8.03277 17.8237 7.81402 17.57C7.59527 17.3162 7.57777 16.695 7.56027 16.1087C7.58987 15.4494 7.49488 14.7904 7.28027 14.1662C6.99552 13.59 6.60353 13.0732 6.12527 12.6437C5.72277 12.25 5.25027 11.725 5.25027 11.375C5.25027 11.025 5.72277 10.5 6.12527 10.1062C6.60264 9.67934 6.99459 9.16566 7.28027 8.5925C7.49488 7.96836 7.58987 7.30934 7.56027 6.65C7.56027 6.0725 7.56027 5.41625 7.81402 5.18875C8.06777 4.96125 8.68902 4.9525 9.27527 4.935C9.93462 4.9646 10.5936 4.86961 11.2178 4.655C11.7909 4.36931 12.3046 3.97737 12.7315 3.5C13.1603 3.08875 13.6065 2.625 14.0003 2.625C14.394 2.625 14.8753 3.0975 15.269 3.5C15.6967 3.97423 16.2103 4.36316 16.7828 4.64625C17.4069 4.86085 18.0659 4.95585 18.7253 4.92625C19.3028 4.92625 19.9678 4.92625 20.1865 5.18C20.4053 5.43375 20.4228 6.055 20.4403 6.64125C20.4107 7.30059 20.5057 7.95961 20.7203 8.58375C21.005 9.16004 21.397 9.67676 21.8753 10.1062C22.2865 10.535 22.7503 10.9812 22.7503 11.375C22.7503 11.7687 22.2778 12.25 21.8753 12.6437C21.401 13.0714 21.0121 13.5851 20.729 14.1575C20.5144 14.7816 20.4194 15.4407 20.449 16.1C20.449 16.6775 20.449 17.3337 20.1953 17.5612C19.9415 17.7887 19.3203 17.7975 18.734 17.815C18.0747 17.7854 17.4157 17.8804 16.7915 18.095C16.2152 18.3797 15.6985 18.7717 15.269 19.25C14.8403 19.6612 14.3503 20.125 14.0003 20.125C13.6503 20.125 13.1253 19.6525 12.7315 19.25ZM20.5103 22.8287L18.9615 24.8762C17.9085 23.5916 17.0099 22.1878 16.284 20.6937L16.4853 20.5012C16.7801 20.187 17.1226 19.9212 17.5003 19.7137C17.9238 19.593 18.3642 19.5428 18.804 19.565C19.3954 19.577 19.9853 19.5003 20.554 19.3375C21.1603 20.459 21.8976 21.5047 22.7503 22.4525L20.5103 22.8287Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M19.2502 9.87875C19.1886 9.68533 19.0739 9.5131 18.9192 9.38162C18.7645 9.25014 18.5761 9.1647 18.3752 9.135L16.0127 8.79375L14.9802 6.65C14.8898 6.46741 14.7501 6.31374 14.5769 6.2063C14.4037 6.09886 14.204 6.04193 14.0002 6.04193C13.7965 6.04193 13.5967 6.09886 13.4236 6.2063C13.2504 6.31374 13.1107 6.46741 13.0202 6.65L11.9615 8.79375L9.62525 9.135C9.42386 9.16497 9.23484 9.25057 9.07946 9.38215C8.92408 9.51373 8.80851 9.68606 8.74576 9.87976C8.68301 10.0735 8.67558 10.2808 8.72429 10.4785C8.77301 10.6762 8.87594 10.8564 9.0215 10.9987L10.7715 12.67L10.369 15.0325C10.3364 15.2327 10.3602 15.438 10.4376 15.6255C10.515 15.813 10.643 15.9753 10.8073 16.0942C10.9716 16.2131 11.1657 16.284 11.368 16.2989C11.5703 16.3139 11.7727 16.2722 11.9527 16.1787L14.0002 15.0675L16.1177 16.1787C16.2736 16.2624 16.4484 16.3046 16.6252 16.3012C16.7847 16.3025 16.9426 16.2686 17.0874 16.2019C17.2323 16.1352 17.3607 16.0373 17.4635 15.9153C17.5663 15.7934 17.6409 15.6502 17.682 15.4961C17.7231 15.342 17.7298 15.1807 17.7015 15.0237L17.299 12.67L19.049 10.9987C19.183 10.849 19.2727 10.665 19.3082 10.4672C19.3438 10.2695 19.3237 10.0658 19.2502 9.87875ZM15.3827 12.0575L15.7502 14L14.0002 13.125L12.2502 14L12.5827 12.0487L11.1652 10.675L13.1252 10.395L14.0002 8.645L14.8752 10.395L16.8352 10.675L15.3827 12.0575Z"
      }
    })]);
  }

};