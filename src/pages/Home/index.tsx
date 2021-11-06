import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CardAuth } from '../../components/CardAuth';
import { SuccessCard } from '../../components/SuccessCard';

export function Home() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CardAuth />
        </Route>
        <Route path="/success">
          <SuccessCard image="smail" alt="smail" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
