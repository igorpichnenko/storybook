import { createContext, useContext } from 'react';
import { AuthService } from '../services/authService';
import { AuthStore } from './Auth/AuthStore';

interface Stores {
  authStore: AuthStore;
}
const authService = new AuthService();
const authStore = new AuthStore(authService);

const initStores = (): Stores => ({
  authStore,
});
const stores = initStores();
export default stores;
export const storesContext = createContext(stores);
export const useStores = () => useContext(storesContext);
