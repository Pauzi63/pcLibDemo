import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../p5coreLib/commonPages/NotFoundPage";
import NotificationPage from "../p5coreLib/commonPages/NotificationPage";

import Page1 from "../pages/DummyPages/Page1";
import Page2 from "../pages/DummyPages/Page2";
import Page3 from "../pages/DummyPages/Page3";
import Page4 from "../pages/DummyPages/Page4";
import Page5 from "../pages/DummyPages/Page5";
import MsGraph from "../pages/DummyPages/MsGraph";
import FilePondPage from "../pages/DummyPages/FilePondDemo";
import MaterialTableListPage1 from "../pages/MaterialTable/MaterialTableListPage1";
import MaterialTableDetailPage1 from "../pages/MaterialTable/MaterialTableDetailPage1";
import {
  BaustellePage,
  BaustelleEditPage,
  BaustelleAddPage,
  BaustelleDeletePage,
} from "../pages/Baustelle";
import FormikPage1 from "../pages/Formik/FormikPage1";
import SnackbarPage from "../pages/Snackbar/SnackbarPage";
import I18nextPage from "../pages/I18next/I18nextPage";
import GeolocatedPage from "../pages/Geolocated/GeolocatedPage";
import GoogleMapsPage from "../pages/GoogleMaps/GoogleMapsPage";
import HighlightPage from "../pages/Highlight/HighlightPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
      <Route path="/page4" component={Page4} />
      <Route path="/page5" component={Page5} />
      <Route path="/msgraph" component={MsGraph} />
      <Route path="/filepond" component={FilePondPage} />
      <Route exact path="/muitable1" component={MaterialTableListPage1} />
      <Route path="/muitable1/:id" component={MaterialTableDetailPage1} />
      <Route exact path="/baustelle" component={BaustellePage} />
      <Route exact path="/baustelle/add" component={BaustelleAddPage} />
      <Route exact path="/baustelle/edit/:id" component={BaustelleEditPage} />
      <Route
        exact
        path="/baustelle/delete/:id"
        component={BaustelleDeletePage}
      />
      <Route exact path="/snackbar" component={SnackbarPage} />
      <Route exact path="/i18next" component={I18nextPage} />
      <Route exact path="/geolocated" component={GeolocatedPage} />
      <Route exact path="/googlemaps" component={GoogleMapsPage} />
      <Route exact path="/highlight" component={HighlightPage} />
      <Route path="/formikpage1" component={FormikPage1} />
      <Route exact path="/notification" component={NotificationPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
