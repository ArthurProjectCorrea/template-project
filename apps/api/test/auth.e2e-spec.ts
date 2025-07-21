import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import request from "supertest";
import { AppModule } from "../src/app.module";

describe("AuthController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/auth/register (POST)", async () => {
    const res = await request(app.getHttpServer())
      .post("/auth/register")
      .send({ username: "e2euser", password: "123" });
    expect(res.body.message).toBe("Usuário registrado com sucesso");
  });

  it("/auth/login (POST)", async () => {
    await request(app.getHttpServer())
      .post("/auth/register")
      .send({ username: "e2elogin", password: "123" });
    const res = await request(app.getHttpServer())
      .post("/auth/login")
      .send({ username: "e2elogin", password: "123" });
    expect(res.body.access_token).toBeDefined();
  });

  it("/auth/profile (POST) - protected", async () => {
    await request(app.getHttpServer())
      .post("/auth/register")
      .send({ username: "e2eprofile", password: "123" });
    const login = await request(app.getHttpServer())
      .post("/auth/login")
      .send({ username: "e2eprofile", password: "123" });
    const token = login.body.access_token;
    const res = await request(app.getHttpServer())
      .post("/auth/profile")
      .set("Authorization", `Bearer ${token}`);
    expect(res.body.username).toBe("e2eprofile");
  });

  afterAll(async () => {
    await app.close();
  });
});
