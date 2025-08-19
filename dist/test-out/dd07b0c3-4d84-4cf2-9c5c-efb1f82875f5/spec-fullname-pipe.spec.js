import {
  FullnamePipe,
  init_fullname_pipe
} from "./chunk-GUMMJGYU.js";
import "./chunk-OSLE7AZX.js";
import "./chunk-TTULUY32.js";

// src/app/shared/pipe/fullname-pipe.spec.ts
init_fullname_pipe();
describe("FullnamePipe", () => {
  it("create an instance", () => {
    const pipe = new FullnamePipe();
    expect(pipe).toBeTruthy();
  });
  fit("deberia retornar titulo incorrecto", () => {
    const fixture = new FullnamePipe();
    const titulo = fixture.transform("titulo", "incorrecto");
    expect(titulo).toBe("titulo incorrecto");
  });
});
//# sourceMappingURL=spec-fullname-pipe.spec.js.map
