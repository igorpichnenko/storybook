import { makeAutoObservable } from 'mobx';
import { LoginRequest } from '../../dto/request/login-request.dto';
import { AuthService } from '../../services/authService';

export class AuthStore {
  private authenticated = false;
  private name?: string;
  private loading = false;

  constructor(private readonly authService: AuthService) {
    makeAutoObservable(this);
    this.authenticated = !!this.getAccessToken();
  }

  async login(loginRequest: LoginRequest) {
    try {
      const tokenPayload = await this.authService.login(loginRequest);
      localStorage.setItem('MyApp_access_token', tokenPayload.user.id);
      this.setAuthenticated(true);
      this.getUserName(tokenPayload.user.id);
    } catch {
      this.setAuthenticated(false);
    }
  }

  public setAuthenticated(authenticated: boolean) {
    if (!authenticated) {
      localStorage.removeItem('MyApp_access_token');
    }
    this.authenticated = authenticated;
  }

  private setName(name: string) {
    this.name = name;
  }
  async getUserName(id: string) {
    const name = await this.authService.getUserName(id);

    this.setName(name);
  }

  get userName() {
    return this.name;
  }

  getAccessToken() {
    return localStorage.getItem('MyApp_access_token');
  }

  get isAuthenticated() {
    return this.authenticated;
  }
}
