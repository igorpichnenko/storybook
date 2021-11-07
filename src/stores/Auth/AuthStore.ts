import { makeAutoObservable } from 'mobx';
import { API_URL } from '../../utils/url';

export interface LoginRequest {
  readonly username: string;
  readonly password: string;
}

export interface Error {
  error_code: number;
  error_message: string;
}

export class AuthStore {
  private id?: string;
  private name?: string;
  private loading = false;
  private auth = false;
  private errors?: Error;

  constructor() {
    makeAutoObservable(this);
  }
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  async login({ username, password }: LoginRequest) {
    try {
      this.setLoading(true);
      const resp = await fetch(`${API_URL}/users/auth/`, {
        method: 'POST',
        body: `login=${username}&password=${password}`,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      const response = await resp.json();

      if (response['error_code'] === 0) {
        this.setIsAuth(true);
        this.setId(response.user.id);
      }
      this.setLoading(false);

      if (response['error_code'] === 1) {
        this.setErrors(response);
      }
    } catch (e) {
      console.log(e);
      this.setLoading(false);
    }
  }

  async getUserName(id?: string) {
    if (id) {
      try {
        const resp = await fetch(`${API_URL}/users/${id}/`, {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        const response = await resp.json();
        this.setName(response.user.name);
        if (response['error_code'] === 1) {
          this.setErrors(response);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }

  setErrors(errors: Error | undefined) {
    this.errors = errors;
  }

  setIsAuth(isAuth: boolean) {
    this.auth = isAuth;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  async getName() {
    await this.getUserName(this.id);
  }

  get userName() {
    this.getName();
    return this.name;
  }

  get userId() {
    return this.id;
  }

  get isAuth() {
    return this.auth;
  }

  get error() {
    return this.errors;
  }

  get isLoading() {
    return this.loading;
  }
}
