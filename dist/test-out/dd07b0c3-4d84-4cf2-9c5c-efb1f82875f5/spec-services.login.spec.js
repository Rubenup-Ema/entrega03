import {
  ServicesLogin,
  init_services_login
} from "./chunk-LMPK6EOH.js";
import "./chunk-IGNVD64K.js";
import "./chunk-Z6ZKRIMX.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import "./chunk-OSLE7AZX.js";
import "./chunk-TTULUY32.js";

// src/app/shared/services/services.login.spec.ts
init_testing();
init_services_login();
describe("ServicesLogin", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesLogin);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-services.login.spec.js.map
