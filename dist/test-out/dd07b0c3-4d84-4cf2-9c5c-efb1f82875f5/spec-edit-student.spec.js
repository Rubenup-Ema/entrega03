import {
  EditStudent,
  init_edit_student
} from "./chunk-DFMHYYBT.js";
import "./chunk-PFTOLH65.js";
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

// src/app/features/students/edit-student/edit-student.spec.ts
var require_edit_student_spec = __commonJS({
  "src/app/features/students/edit-student/edit-student.spec.ts"(exports) {
    init_testing();
    init_edit_student();
    describe("EditStudent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [EditStudent]
        }).compileComponents();
        fixture = TestBed.createComponent(EditStudent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_edit_student_spec();
//# sourceMappingURL=spec-edit-student.spec.js.map
