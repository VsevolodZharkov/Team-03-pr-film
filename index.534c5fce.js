const e=document.querySelector('[data-theme="light"]'),t=document.querySelector('[data-theme="dark"]'),s=document.querySelector("body");let d=localStorage.getItem("theme");var i;function a(){s.classList.add("light"),s.classList.remove("dark"),e.classList.add("is-hidden"),t.classList.remove("is-hidden"),c("light")}function l(){s.classList.add("dark"),s.classList.remove("light"),e.classList.remove("is-hidden"),t.classList.add("is-hidden"),c("dark")}function c(e){localStorage.setItem("theme",e)}"light"===(i=d)||null===i?a():l(),e.addEventListener("click",a),t.addEventListener("click",l);
//# sourceMappingURL=index.534c5fce.js.map
