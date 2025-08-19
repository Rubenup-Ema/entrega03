import {
  ConfirmDialog,
  init_confirm_dialog
} from "./chunk-6DRM22MQ.js";
import "./chunk-EXAOP4IR.js";
import "./chunk-UU536HXB.js";
import "./chunk-ZTMR27KN.js";
import "./chunk-NRHMCMVT.js";
import "./chunk-6DWKSTVF.js";
import "./chunk-TN4SF22G.js";
import "./chunk-Z6ZKRIMX.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import "./chunk-OSLE7AZX.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/shared/utils/confirm-dialog/confirm-dialog.spec.ts
var require_confirm_dialog_spec = __commonJS({
  "src/app/shared/utils/confirm-dialog/confirm-dialog.spec.ts"(exports) {
    init_testing();
    init_confirm_dialog();
    describe("ConfirmDialog", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ConfirmDialog]
        }).compileComponents();
        fixture = TestBed.createComponent(ConfirmDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_confirm_dialog_spec();
//# sourceMappingURL=spec-confirm-dialog.spec.js.map
