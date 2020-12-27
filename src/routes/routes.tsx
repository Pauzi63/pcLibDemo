import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../pages/Common/NotFoundPage';
import Page1 from '../pages/DummyPages/Page1';
import Page2 from '../pages/DummyPages/Page2';
import Page3 from '../pages/DummyPages/Page3';
import MaterialTablePage1 from '../pages/MaterialTable/MaterialTablePage1';
import MaterialTablePage2 from '../pages/MaterialTable/MaterialTablePage2';
import FormikPage1 from '../pages/Formik/FormikPage1';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route exact path="/muitable1" component={MaterialTablePage1} />
      <Route path="/muitable1/:id" component={MaterialTablePage2} />
      <Route path="/formikpage1" component={FormikPage1} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
