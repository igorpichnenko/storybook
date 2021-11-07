import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import { CardAuth } from '../../components/CardAuth';
import { SuccessCard } from '../../components/SuccessCard';
import { Redirect, useHistory } from 'react-router';
import { useContext } from 'react';
import { storesContext } from '../../stores';
import { LoginRequest } from '../../stores/Auth/AuthStore';
import { useEffect } from 'react';

export const Home = observer(() => {
  const history = useHistory();
  const store = useContext(storesContext);
  const userName = store.userName;
  const isAuth = store.isAuth;
  const error = store.error;
  const isLoading = store.isLoading;

  useEffect(() => {
    if (isAuth) history.push('success');
  }, [isAuth]);

  const login = ({ username, password }: LoginRequest) => {
    store.login({ username, password });
  };
  const logout = () => {
    history.push('/');
    store.setIsAuth(false);
    store.setErrors(undefined);
  };
  return (
    <Switch>
      <Route exact path="/">
        <CardAuth isLoading={isLoading} error={error} login={login} />
      </Route>
      <Route exact path="/success">
        {isAuth ? (
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
