import { createContext } from 'react';
import { AuthStore } from './Auth/AuthStore';

const authService = new AuthStore();

export const storesContext = createContext(authService);
