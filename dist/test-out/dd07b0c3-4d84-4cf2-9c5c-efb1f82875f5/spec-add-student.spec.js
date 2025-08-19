import {
  AddStudent,
  init_add_student
} from "./chunk-VNA5OOOM.js";
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

// src/app/features/students/add-student/add-student.spec.ts
var require_add_student_spec = __commonJS({
  "src/app/features/students/add-student/add-student.spec.ts"(exports) {
    init_testing();
    init_add_student();
    describe("AddStudent", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [AddStudent]
        }).compileComponents();
        fixture = TestBed.createComponent(AddStudent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_add_student_spec();
//# sourceMappingURL=spec-add-student.spec.js.map
