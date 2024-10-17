import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import React from "react"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";
import Homestays from "./pages/Homestays";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/homepage" component={Homepage} />
          <Route path="/homestay" component={Homestays} />
          <Route path="/detail/:id" component={Detail} />
          <Redirect to="/homepage" />
        </Switch>

      </BrowserRouter>
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        limit={5}
        style={{width: "24rem"}}
      />
    </div>
  );
}

export default App;
