import {
  MatSnackBar,
  Message,
  init_message,
  init_snack_bar
} from "./chunk-GRB46NGQ.js";
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
import "./chunk-TTULUY32.js";

// src/app/shared/services/message.spec.ts
init_testing();
init_message();
init_snack_bar();
describe("Message", () => {
  let service;
  let snackBarSpy;
  beforeEach(() => {
    const spy = jasmine.createSpyObj("MatSnackBar", ["open"]);
    TestBed.configureTestingModule({
      providers: [
        Message,
        { provide: MatSnackBar, useValue: spy }
      ]
    });
    service = TestBed.inject(Message);
    snackBarSpy = TestBed.inject(MatSnackBar);
  });
  fit("abre snackbar con el texto y opciones correctas", () => {
    service.show("Proceso completado!!!");
    expect(snackBarSpy.open).toHaveBeenCalledWith("Proceso completado!!! \u2705", "Cerrar", {
      duration: 3e3,
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  });
});
//# sourceMappingURL=spec-message.spec.js.map
