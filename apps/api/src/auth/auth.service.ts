import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Injectable()
export class AuthService {
  private users = [{ id: 1, username: "admin", password: "admin" }];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    const user = this.users.find(
      (u) => u.username === username && u.password === password,
    );
    if (!user) throw new UnauthorizedException("Usuário ou senha inválidos");
    return user;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(registerDto: RegisterDto) {
    const exists = this.users.find((u) => u.username === registerDto.username);
    if (exists) throw new UnauthorizedException("Usuário já existe");
    const newUser = {
      id: this.users.length + 1,
      username: registerDto.username,
      password: registerDto.password,
    };
    this.users.push(newUser);
    return { message: "Usuário registrado com sucesso" };
  }
}
