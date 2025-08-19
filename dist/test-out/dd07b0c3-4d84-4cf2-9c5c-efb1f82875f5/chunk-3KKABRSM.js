import {
  Pipe,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-CYARENY7.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/shared/pipe/fullname-pipe.ts
var FullnamePipe;
var init_fullname_pipe = __esm({
  "src/app/shared/pipe/fullname-pipe.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    FullnamePipe = class FullnamePipe2 {
      transform(name, surname) {
        return name + " " + surname;
      }
    };
    FullnamePipe = __decorate([
      Pipe({
        name: "fullname"
      })
    ], FullnamePipe);
  }
});

export {
  FullnamePipe,
  init_fullname_pipe
};
//# sourceMappingURL=chunk-3KKABRSM.js.map
