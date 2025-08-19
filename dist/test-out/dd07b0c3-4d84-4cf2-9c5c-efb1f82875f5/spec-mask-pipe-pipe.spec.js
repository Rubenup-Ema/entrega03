import {
  MaskPipe,
  init_mask_pipe_pipe
} from "./chunk-LTLUG5VG.js";
import "./chunk-OSLE7AZX.js";
import "./chunk-TTULUY32.js";

// src/app/shared/pipe/mask-pipe-pipe.spec.ts
init_mask_pipe_pipe();
describe("MaskPipe", () => {
  it("create an instance", () => {
    const pipe = new MaskPipe();
    expect(pipe).toBeTruthy();
  });
  fit("deberia retornar ********", () => {
    const fixture = new MaskPipe();
    const titulo = fixture.transform("password");
    expect(titulo).toBe("********");
  });
});
//# sourceMappingURL=spec-mask-pipe-pipe.spec.js.map
