import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-OSLE7AZX.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\home\main\main.html
var main_default;
var init_main = __esm({
  "angular:jit:template:src\\app\\home\\main\\main.html"() {
    main_default = '<div class="container text-left">\r\n    \r\n    <h3>Registro de Cursos</h3>\r\n    <p><span >{{user}}</span></p>\r\n\r\n</div>';
  }
});

// angular:jit:style:src\app\home\main\main.scss
var main_default2;
var init_main2 = __esm({
  "angular:jit:style:src\\app\\home\\main\\main.scss"() {
    main_default2 = "/* src/app/home/main/main.scss */\nspan {\n  font-size: 18px;\n  padding: 5px;\n}\n/*# sourceMappingURL=main.css.map */\n";
  }
});

// src/app/home/main/main.ts
var Main;
var init_main3 = __esm({
  "src/app/home/main/main.ts"() {
    "use strict";
    init_tslib_es6();
    init_main();
    init_main2();
    init_core();
    Main = class Main2 {
      user = "";
      constructor() {
        this.user = "" + sessionStorage.getItem("user") + " / " + sessionStorage.getItem("role");
      }
      static ctorParameters = () => [];
    };
    Main = __decorate([
      Component({
        selector: "app-main",
        imports: [],
        template: main_default,
        styles: [main_default2]
      })
    ], Main);
  }
});

export {
  Main,
  init_main3 as init_main
};
//# sourceMappingURL=chunk-EV5RVWVB.js.map
