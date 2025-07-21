import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";

describe("AuthService", () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(() => {
    jwtService = new JwtService({ secret: "test" });
    service = new AuthService(jwtService);
  });

  it("should validate user", async () => {
    const user = await service.validateUser("admin", "admin");
    expect(user).toBeDefined();
    expect(user.username).toBe("admin");
  });

  it("should not validate invalid user", async () => {
    await expect(service.validateUser("foo", "bar")).rejects.toThrow();
  });

  it("should register new user", async () => {
    const result = await service.register({ username: "new", password: "123" });
    expect(result.message).toBe("Usuário registrado com sucesso");
  });

  it("should not register duplicate user", async () => {
    await service.register({ username: "dup", password: "123" });
    await expect(
      service.register({ username: "dup", password: "123" }),
    ).rejects.toThrow();
  });

  it("should login user", async () => {
    const result = await service.login({
      username: "admin",
      password: "admin",
    });
    expect(result.access_token).toBeDefined();
  });
});
