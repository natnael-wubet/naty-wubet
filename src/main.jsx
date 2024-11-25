import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "./index.css"; // Import Tailwind CSS here

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.js";
import PersistenceObserver from "./PersistenceObserver.jsx"; // Path to your observer

import { RecoilRoot } from "recoil";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RecoilRoot>
			<PersistenceObserver />

			<I18nextProvider i18n={i18n}>
				<App />
			</I18nextProvider>
		</RecoilRoot>
	</StrictMode>,
);
