import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import { CardAuth } from '../../components/CardAuth';
import { SuccessCard } from '../../components/SuccessCard';
import { Redirect, useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import { storesContext } from '../../stores';
import { LoginRequest } from '../../stores/Auth/AuthStore';
import { CardSignIn } from '../../components/CardSignIn';

export const Home = observer(() => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const store = useContext(storesContext);
  const localStorageName = localStorage.getItem('login') || undefined;
  const userName = store.userName || localStorageName;
  const isAuth = store.isAuth;
  const error = store.error;
  const isLoading = store.isLoading;

  const [signInActiveTab, setSignInActiveTab] = useState(false);
  const [loginActiveTab, setLoginActiveTab] = useState(true);

  useEffect(() => {
    if (localStorageName) {
      push('success');
    }
    if (isAuth) push('success');
    if (pathname === '/') {
      setSignInActiveTab(false);
      setLoginActiveTab(true);
    }
    if (pathname === '/signIn') {
      setSignInActiveTab(true);
      setLoginActiveTab(false);
    }
  }, [isAuth, pathname]);

  const login = ({ username, password }: LoginRequest) => {
    store.login({ username, password });
  };
  const logout = () => {
    localStorage.removeItem('login');
    push('/');
    store.setIsAuth(false);
    store.setErrors(undefined);
  };
  return (
    <Switch>
      <Route exact path="/">
        <CardAuth
          loginActiveTab={loginActiveTab}
          signInActiveTab={signInActiveTab}
          isLoading={isLoading}
          error={error}
          login={login}
        />
      </Route>
      <Route exact path="/signIn">
        <CardSignIn
          loginActiveTab={loginActiveTab}
          signInActiveTab={signInActiveTab}
          isLoading={isLoading}
          error={error}
        />
      </Route>
      <Route exact path="/success">
        {localStorageName ? (
          <SuccessCard
            userName={userName}
            logout={logout}
            image="smail"
            alt="smail"
          />
        ) : (
          <Redirect to="/" />
        )}
      </Route>
      <Redirect to="/" />
    </Switch>
  );
});
