import {
  NavigationEnd,
  Router,
  init_router
} from "./chunk-RUOOTFZB.js";
import {
  CommonModule,
  init_common
} from "./chunk-TN4SF22G.js";
import {
  Component,
  __decorate,
  filter,
  init_core,
  init_operators,
  init_tslib_es6
} from "./chunk-OSLE7AZX.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\home\breadcrumb\breadcrumb.html
var breadcrumb_default;
var init_breadcrumb = __esm({
  "angular:jit:template:src\\app\\home\\breadcrumb\\breadcrumb.html"() {
    breadcrumb_default = `\r
<div class="container-fluid">\r
    \r
    <div *ngIf="componentCurrent!==''" class="row mt-1">\r
    \r
          <div class="d-flex justify-content-between align-items-center p-1 bg-light rounded border">\r
          <h5  >componente : {{ componentCurrent }}</h5>\r
          </div>\r
    \r
      </div>\r
\r
</div>`;
  }
});

// angular:jit:style:src\app\home\breadcrumb\breadcrumb.scss
var breadcrumb_default2;
var init_breadcrumb2 = __esm({
  "angular:jit:style:src\\app\\home\\breadcrumb\\breadcrumb.scss"() {
    breadcrumb_default2 = "/* src/app/home/breadcrumb/breadcrumb.scss */\n/*# sourceMappingURL=breadcrumb.css.map */\n";
  }
});

// src/app/home/breadcrumb/breadcrumb.ts
var Breadcrumb;
var init_breadcrumb3 = __esm({
  "src/app/home/breadcrumb/breadcrumb.ts"() {
    "use strict";
    init_tslib_es6();
    init_breadcrumb();
    init_breadcrumb2();
    init_common();
    init_core();
    init_router();
    init_operators();
    Breadcrumb = class Breadcrumb2 {
      router;
      componentCurrent = "";
      constructor(router) {
        this.router = router;
      }
      ngOnInit() {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
          this.componentCurrent = event.urlAfterRedirects;
        });
      }
      static ctorParameters = () => [
        { type: Router }
      ];
    };
    Breadcrumb = __decorate([
      Component({
        selector: "app-breadcrumb",
        imports: [CommonModule],
        template: breadcrumb_default,
        styles: [breadcrumb_default2]
      })
    ], Breadcrumb);
  }
});

export {
  Breadcrumb,
  init_breadcrumb3 as init_breadcrumb
};
//# sourceMappingURL=chunk-GZHVVFZ7.js.map
