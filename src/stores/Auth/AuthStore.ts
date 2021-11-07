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
  id?: string;
  name?: string;
  isLoading = false;
  auth = false;

  constructor() {
    makeAutoObservable(this);
  }

  async login({ username, password }: LoginRequest) {
    try {
      const resp = await fetch(`${API_URL}/users/auth/`, {
        method: 'POST',
        body: `login=${username}&password=${password}`,
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      this.setIsAuth(true);
      const response = await resp.json();
      this.setId(response.user.id);
    } catch (e) {
      console.log(e);
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
      } catch (e) {
        console.log(e);
      }
    }
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
}
