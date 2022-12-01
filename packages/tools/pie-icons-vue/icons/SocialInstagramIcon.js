import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'SocialInstagramIcon',
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
      "class": "c-pieIcon c-pieIcon--socialInstagram"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14.25 2C11.8272 2 9.45877 2.71845 7.44427 4.0645C5.42977 5.41054 3.85965 7.32373 2.93248 9.56213C2.00531 11.8005 1.76272 14.2636 2.23539 16.6399C2.70805 19.0161 3.87475 21.1989 5.58795 22.9121C7.30114 24.6253 9.48388 25.792 11.8601 26.2646C14.2364 26.7373 16.6995 26.4947 18.9379 25.5675C21.1763 24.6404 23.0895 23.0702 24.4355 21.0557C25.7816 19.0412 26.5 16.6728 26.5 14.25C26.5 11.0011 25.2094 7.88526 22.9121 5.58794C20.6147 3.29062 17.4989 2 14.25 2ZM14.25 24.75C12.1733 24.75 10.1432 24.1342 8.41652 22.9804C6.6898 21.8267 5.34399 20.1868 4.54927 18.2682C3.75455 16.3496 3.54662 14.2384 3.95176 12.2016C4.3569 10.1648 5.35693 8.29383 6.82538 6.82538C8.29384 5.35693 10.1648 4.3569 12.2016 3.95175C14.2384 3.54661 16.3496 3.75454 18.2682 4.54926C20.1868 5.34399 21.8267 6.6898 22.9804 8.41651C24.1342 10.1432 24.75 12.1733 24.75 14.25C24.75 17.0348 23.6438 19.7055 21.6746 21.6746C19.7055 23.6438 17.0348 24.75 14.25 24.75Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M21.5304 11.31C21.5165 10.6966 21.3982 10.09 21.1804 9.5163C20.9874 9.01749 20.6923 8.56449 20.3141 8.18629C19.936 7.8081 19.483 7.51305 18.9841 7.32005C18.4102 7.10311 17.8038 6.98477 17.1904 6.97005C16.4116 6.97005 16.1491 6.97005 14.2504 6.97005C12.3516 6.97005 12.0891 6.97005 11.3104 6.97005C10.697 6.98477 10.0906 7.10311 9.51664 7.32005C9.01784 7.51305 8.56483 7.8081 8.18664 8.18629C7.80845 8.56449 7.5134 9.01749 7.32039 9.5163C7.10345 10.0902 6.98512 10.6967 6.97039 11.31C6.97039 12.0713 6.97039 12.325 6.97039 14.25C6.97039 16.175 6.97039 16.4288 6.97039 17.19C6.98512 17.8034 7.10345 18.4099 7.32039 18.9838C7.5134 19.4826 7.80845 19.9356 8.18664 20.3138C8.56483 20.692 9.01784 20.987 9.51664 21.18C10.0906 21.397 10.697 21.5153 11.3104 21.53C12.0891 21.53 12.3516 21.5738 14.2504 21.5738C16.1491 21.5738 16.4116 21.5738 17.1904 21.53C17.8038 21.5153 18.4102 21.397 18.9841 21.18C19.483 20.987 19.936 20.692 20.3141 20.3138C20.6923 19.9356 20.9874 19.4826 21.1804 18.9838C21.3982 18.4101 21.5165 17.8035 21.5304 17.19C21.5304 16.4113 21.5741 16.1488 21.5741 14.25C21.5741 12.3513 21.5654 12.0888 21.5304 11.31ZM14.2504 19.8588C12.3429 19.8588 12.1241 19.8588 11.3891 19.815C10.9627 19.8059 10.5403 19.7291 10.1379 19.5875C9.86285 19.4745 9.61297 19.308 9.40269 19.0977C9.19242 18.8875 9.02594 18.6376 8.91289 18.3625C8.7705 17.9603 8.69369 17.5379 8.68539 17.1113C8.68539 16.3763 8.64164 16.1575 8.64164 14.25C8.64164 12.3425 8.64164 12.1238 8.68539 11.3888C8.69369 10.9622 8.7705 10.5397 8.91289 10.1375C9.02246 9.86044 9.1877 9.60876 9.39841 9.39806C9.60911 9.18735 9.86079 9.02211 10.1379 8.91255C10.5403 8.77103 10.9627 8.69424 11.3891 8.68505C12.1241 8.68505 12.3429 8.6413 14.2504 8.6413C16.1579 8.6413 16.3766 8.6413 17.1116 8.68505C17.5381 8.69424 17.9605 8.77103 18.3629 8.91255C18.6379 9.0256 18.8878 9.19208 19.0981 9.40235C19.3084 9.61262 19.4748 9.86251 19.5879 10.1375C19.7303 10.5397 19.8071 10.9622 19.8154 11.3888C19.8154 12.15 19.8591 12.3775 19.8591 14.25C19.8591 16.1225 19.8591 16.35 19.8154 17.1113C19.8071 17.5379 19.7303 17.9603 19.5879 18.3625C19.4748 18.6376 19.3084 18.8875 19.0981 19.0977C18.8878 19.308 18.6379 19.4745 18.3629 19.5875C17.9605 19.7291 17.5381 19.8059 17.1116 19.815C16.3766 19.85 16.1579 19.8588 14.2504 19.8588Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.2501 10.3825C13.4852 10.3825 12.7375 10.6093 12.1015 11.0343C11.4655 11.4592 10.9698 12.0632 10.6771 12.7699C10.3844 13.4766 10.3078 14.2543 10.457 15.0045C10.6062 15.7547 10.9746 16.4438 11.5154 16.9847C12.0563 17.5256 12.7454 17.8939 13.4956 18.0431C14.2458 18.1924 15.0235 18.1158 15.7301 17.8231C16.4368 17.5303 17.0408 17.0346 17.4658 16.3986C17.8907 15.7626 18.1176 15.0149 18.1176 14.25C18.1176 13.7421 18.0175 13.2392 17.8232 12.7699C17.6288 12.3007 17.3439 11.8744 16.9848 11.5152C16.6257 11.1561 16.1994 10.8712 15.7301 10.6769C15.2609 10.4825 14.758 10.3825 14.2501 10.3825ZM14.2501 16.4025C13.8244 16.4025 13.4083 16.2762 13.0543 16.0397C12.7003 15.8032 12.4244 15.467 12.2615 15.0737C12.0986 14.6804 12.056 14.2476 12.139 13.83C12.2221 13.4125 12.4271 13.0289 12.7281 12.7279C13.0291 12.4269 13.4127 12.2219 13.8302 12.1388C14.2477 12.0558 14.6805 12.0984 15.0738 12.2613C15.4672 12.4242 15.8033 12.7001 16.0398 13.0541C16.2764 13.4081 16.4026 13.8242 16.4026 14.25C16.4003 14.8201 16.1728 15.3663 15.7696 15.7695C15.3664 16.1726 14.8203 16.4002 14.2501 16.4025Z"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.0388 11.5288C18.2525 11.5305 18.4618 11.4686 18.6401 11.351C18.8184 11.2334 18.9577 11.0654 19.0403 10.8684C19.1228 10.6714 19.1449 10.4543 19.1036 10.2447C19.0624 10.0351 18.9597 9.84257 18.8086 9.69152C18.6576 9.54048 18.465 9.4378 18.2554 9.39655C18.0458 9.35531 17.8287 9.37736 17.6317 9.4599C17.4346 9.54244 17.2666 9.68174 17.149 9.86006C17.0314 10.0384 16.9696 10.2477 16.9713 10.4613C16.9736 10.7437 17.0868 11.0139 17.2865 11.2136C17.4862 11.4133 17.7564 11.5265 18.0388 11.5288Z"
      }
    })]);
  }

};