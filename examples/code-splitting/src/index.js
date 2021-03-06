import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { messages } from "./i18n/messages";
import LocaleSwitcher from "./LocaleSwitcher";
import CodeSplitExample from "./CodeSplitExample";

var root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);

ReactDOM.render(
  <React.StrictMode>
    <LocaleSwitcher />
    <IntlProvider locale={process.env.LOCALE} messages={messages}>
      <CodeSplitExample />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
