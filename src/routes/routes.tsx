import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../pages/Common/NotFoundPage';
import Page1 from '../pages/DummyPages/Page1';
import Page2 from '../pages/DummyPages/Page2';
import Page3 from '../pages/DummyPages/Page3';
import MaterialTableListPage1 from '../pages/MaterialTable/MaterialTableListPage1';
import MaterialTableDetailPage1 from '../pages/MaterialTable/MaterialTableDetailPage1';
import BaustellenListPage from '../pages/MaterialTable/BaustellenListPage';
import BaustellenDetailPageEdit from '../pages/MaterialTable/BaustellenDetailPageEdit';
import BaustellenDetailPageAddNew from '../pages/MaterialTable/BaustellenDetailPageAddNew';
import FormikPage1 from '../pages/Formik/FormikPage1';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route exact path="/muitable1" component={MaterialTableListPage1} />
      <Route path="/muitable1/:id" component={MaterialTableDetailPage1} />
      <Route exact path="/bsttable" component={BaustellenListPage} />
      <Route
        exact
        path="/bsttable/edit/:id"
        component={BaustellenDetailPageEdit}
      />
      <Route
        exact
        path="/bsttable/addnew"
        component={BaustellenDetailPageAddNew}
      />
      <Route path="/formikpage1" component={FormikPage1} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
