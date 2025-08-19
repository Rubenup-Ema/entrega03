import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  init_forms
} from "./chunk-PFTOLH65.js";
import "./chunk-TN4SF22G.js";
import "./chunk-Z6ZKRIMX.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import "./chunk-OSLE7AZX.js";
import "./chunk-TTULUY32.js";

// src/app/features/course/add-course/add-course.spec.ts
init_testing();
init_forms();
describe("AddCourse", () => {
  let fb;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    });
    fb = TestBed.inject(FormBuilder);
  });
  fit("Deber\xEDa crear el formulario de los cursos con valores iniciales", () => {
    const form = fb.group({
      id: [0, [Validators.required]],
      title: ["", Validators.required],
      description: ["", Validators.required]
    });
    expect(form.value).toEqual({
      id: 0,
      title: "",
      description: ""
    });
    expect(form.valid).toBeFalse();
  });
  fit("Deber\xEDa ser validar que  todos los campos tengan valores", () => {
    const form = fb.group({
      id: [0, [Validators.required]],
      title: ["", Validators.required],
      description: ["", Validators.required]
    });
    form.setValue({
      id: 1,
      title: "Angular",
      description: "Curso Angular"
    });
    expect(form.valid).toBeTrue();
  });
  fit('Deber\xEDa marcar "title" como inv\xE1lido si est\xE1 vac\xEDo', () => {
    const form = fb.group({
      id: [1, [Validators.required]],
      title: ["", Validators.required],
      description: ["algo", Validators.required]
    });
    const titleControl = form.get("title");
    expect(titleControl?.valid).toBeFalse();
    expect(titleControl?.errors?.["required"]).toBeTrue();
  });
});
//# sourceMappingURL=spec-add-course.spec.js.map
