import * as React from 'react';

import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import logo from './static/logo.svg';
import smail from './static/smail.svg';

import { Form, Inputs } from '../../components/Form';

import { WrapperCard, Wrapper, BasicTabsWrapper, StyledTabs } from './styles';

import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';
import { Redirect, useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import { storesContext } from '../../stores';
import { LoginRequest } from '../../stores/Auth/AuthStore';
import { Button } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: '100%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function activeTab(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface BasicTabsProps {
  onSubmitHandleForm: (data: Inputs) => void;
  isLoading: boolean;
}

export default function BasicTabs({
  onSubmitHandleForm,
  isLoading,
}: BasicTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <BasicTabsWrapper>
      <Box sx={{ borderBottom: 0.1, borderColor: 'divider', width: '100%' }}>
        <StyledTabs value={value} onChange={handleChange}>
          <Tab label="Вход" {...activeTab(0)} />
          <Tab label="Регистрация" {...activeTab(1)} />
        </StyledTabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Form
          buttonText="Войти"
          onSubmitHandleForm={onSubmitHandleForm}
          isLoading={isLoading}
        ></Form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Form
          buttonText="Зарегистрироваться"
          onSubmitHandleForm={onSubmitHandleForm}
        ></Form>
      </TabPanel>
    </BasicTabsWrapper>
  );
}

export const Home = observer(() => {
  const { push } = useHistory();
  const store = useContext(storesContext);
  const localStorageName = localStorage.getItem('login') || undefined;
  const userName = store.userName || localStorageName;
  const isAuth = store.isAuth;
  const error = store.error;
  const isLoading = store.isLoading;

  useEffect(() => {
    /*  if (isAuth || localStorageName) push('success'); */
  }, [isAuth, localStorageName]);

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
    <>
      <Switch>
        <Route exact path="/">
          <Wrapper>
            <WrapperCard>
              <img src={logo} alt={'logo'} />
              <BasicTabs onSubmitHandleForm={login} isLoading={isLoading} />
            </WrapperCard>
          </Wrapper>
        </Route>

        <Route exact path="/success">
          {isAuth || localStorageName ? (
            <Wrapper>
              <WrapperCard>
                <img src={logo} alt={'logo'} />
                <BasicTabsWrapper>
                  <Box
                    sx={{
                      borderTop: 0.1,
                      borderColor: 'divider',
                      width: '100%',
                    }}
                  >
                    <img src={smail} alt={'smail'} />
                    <Button
                      onChange={() => logout}
                      color="secondary"
                      variant="contained"
                    >
                      Выйти
                    </Button>
                  </Box>
                </BasicTabsWrapper>
              </WrapperCard>
            </Wrapper>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
});
