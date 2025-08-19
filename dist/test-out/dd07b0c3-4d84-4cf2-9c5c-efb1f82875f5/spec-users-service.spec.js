import {
  UsersService,
  init_users_service
} from "./chunk-BRWHSKAL.js";
import "./chunk-IGNVD64K.js";
import "./chunk-Z6ZKRIMX.js";
import {
  TestBed,
  init_testing
} from "./chunk-BSCEPWPW.js";
import "./chunk-OSLE7AZX.js";
import "./chunk-TTULUY32.js";

// src/app/features/users/users-service.spec.ts
init_testing();
init_users_service();
describe("UsersService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-users-service.spec.js.map
