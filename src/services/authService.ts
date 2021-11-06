import { LoginRequest } from '../dto/request/login-request.dto';
import { API_URL } from '../utils/url';

export class AuthService {
  async login({ username, password }: LoginRequest) {
    const resp = await fetch(`${API_URL}/users/auth/`, {
      method: 'POST',
      body: `login=${username}&password=${password}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const response = await resp.json();

    return response;
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
        return response.user.name;
      } catch (e) {
        console.log(e);
      }
    }
  }
}
