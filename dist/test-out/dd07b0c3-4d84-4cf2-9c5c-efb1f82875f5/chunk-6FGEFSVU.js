import {
  Pipe,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-54PHUPNT.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// src/app/shared/pipe/mask-pipe-pipe.ts
var MaskPipe;
var init_mask_pipe_pipe = __esm({
  "src/app/shared/pipe/mask-pipe-pipe.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    MaskPipe = class MaskPipe2 {
      transform(value) {
        return "*".repeat(value.length);
      }
    };
    MaskPipe = __decorate([
      Pipe({
        name: "mask"
      })
    ], MaskPipe);
  }
});

export {
  MaskPipe,
  init_mask_pipe_pipe
};
//# sourceMappingURL=chunk-6FGEFSVU.js.map
