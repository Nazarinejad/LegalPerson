// component ===============================================
import React, { useEffect } from "react";
import { Login } from "sanhab.mct.uicomponents.login";
import { ConfigProvider, Layout, ILayoutLink, AuthValue } from "sanhab-components-library";

import Home from './component/pages/home';
import HttpBaseConstant from "./controler/services/HttpBaseConstant";

// styles ===============================================
import "./assets/styles/main.sass";
import "sanhab.mct.uicomponents.login/dist/index.css";
import "sanhab-components-library/src/assets/styles/main.sass";
import './assets/styles/styles.css'
import "antd/dist/antd.css";
 
const links: ILayoutLink[] = [
  {
    path: "/",
    title: "استعلام اشخاص حقوقی",
    accessId: true,
    component: Home,
    subLink: []
  }

]

function App() {

  useEffect(() => {
    if (AuthValue()?.token) {
      //GetAllErrorType();
    }
  }, []);

  return (
    <ConfigProvider>
      <Layout
        softwareCode={6300}
        links={links}
        authorizationUrl={`${HttpBaseConstant.login}`}
        backendUrl={HttpBaseConstant.url}
        loginComponent={(
          <Login
            pushPath="/"
            timer={1140}
            submitUrl={`${HttpBaseConstant.login}/security/captchalogin`}
            captchaUrl={`${HttpBaseConstant.login}/Captcha/GetBase64`}
          />
        )}
      />
    </ConfigProvider>
  );
}

export default App;
