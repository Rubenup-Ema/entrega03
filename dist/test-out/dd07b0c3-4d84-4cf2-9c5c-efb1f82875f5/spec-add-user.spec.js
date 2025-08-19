import {
  AddUser,
  init_add_user
} from "./chunk-DPEWCIGQ.js";
import "./chunk-OXHJM6CS.js";
import "./chunk-PFTOLH65.js";
import "./chunk-74OP2HF7.js";
import "./chunk-EK5H3XRJ.js";
import "./chunk-UU536HXB.js";
import "./chunk-NRHMCMVT.js";
import "./chunk-6DWKSTVF.js";
import "./chunk-TN4SF22G.js";
import "./chunk-IGNVD64K.js";
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

// src/app/features/users/add-user/add-user.spec.ts
var require_add_user_spec = __commonJS({
  "src/app/features/users/add-user/add-user.spec.ts"(exports) {
    init_testing();
    init_add_user();
    describe("AddUser", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AddUser]
        }).compileComponents();
        fixture = TestBed.createComponent(AddUser);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_add_user_spec();
//# sourceMappingURL=spec-add-user.spec.js.map
