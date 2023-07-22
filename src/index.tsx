import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Fragment>
			<CssBaseline>
				<App />
			</CssBaseline>
		</Fragment>
	</React.StrictMode>
);
reportWebVitals();
