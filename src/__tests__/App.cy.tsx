import App from "../App";
import { mount } from "@cypress/react18";
import Dashboard from "../Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";

describe("<App>", () => {
  it("mounts", () => {
    mount(
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
      >
        <App />
      </GoogleOAuthProvider>
    );
  });
});
