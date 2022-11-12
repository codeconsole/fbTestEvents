import { SplashScreen } from '@capacitor/splash-screen';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { AppTrackingTransparency } from 'capacitor-plugin-app-tracking-transparency';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `
    <style>
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        display: block;
        width: 100%;
        height: 100%;
      }
      h1, h2, h4, h5 {
        text-transform: uppercase;
      }
      .button {
        display: inline-block;
        padding: 10px;
        background-color: #73B5F6;
        color: #fff;
        font-size: 0.9em;
        border: 0;
        border-radius: 3px;
        text-decoration: none;
        cursor: pointer;
      }
      main {
        padding: 15px;
      }
      main hr { height: 1px; background-color: #eee; border: 0; }
      main h1 {
        font-size: 1.4em;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      main h2 {
        font-size: 1.1em;
      }
      main h3 {
        font-size: 0.9em;
      }
      main p {
        color: #333;
      }
      main pre {
        white-space: pre-line;
      }
    </style>
    <div>
      <capacitor-welcome-titlebar>
        <h1>Capacitor</h1>
      </capacitor-welcome-titlebar>
      <main>
        <h2>Tiny Demo</h2>
        <p>
          This demo shows how to call Capacitor plugins. Say cheese!
        </p>
        <p>
          <h3>Step 1. Open Event Manager Test Events in Browser</h3>
          <a target="_blank" href="https://business.facebook.com/events_manager2/list/">Event Manager</a>
        </p>
        <p>
          <h3>Step 2. Login in with Facebook</h3>
          <button class="button" id="facebook-login">Facebook Login</button>
        </p>
        <o><pre id="facebook-response"></pre></p>
        <p>
          <h3>Step 3. Click the following link and come back</h3>
          <a target="_blank" href="http://ionicframework.com/">Ionic</a>
        </p>
        <p>
          <h3>Step 4. Verify Test Events Appeared</h3>
          applicationDidEnterBackground and applicationWillEnterForeground should have showed.
        </p>
        <p>
          <img id="image" style="max-width: 100%">
        </p>
      </main>
    </div>
    `;
    }

    connectedCallback() {
      const self = this;
      
      self.shadowRoot.querySelector('#facebook-login').addEventListener('click', async function (e) {
        var result = await FacebookLogin.login({ permissions: ['email'] })
        self.shadowRoot.querySelector('#facebook-response').innerHTML = result.accessToken? result.accessToken.token : 'No Token'
        const response = await AppTrackingTransparency.requestPermission()
      });
    }
  }
);

window.customElements.define(
  'capacitor-welcome-titlebar',
  class extends HTMLElement {
    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `
    <style>
      :host {
        position: relative;
        display: block;
        padding: 15px 15px 15px 15px;
        text-align: center;
        background-color: #73B5F6;
      }
      ::slotted(h1) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 0.9em;
        font-weight: 600;
        color: #fff;
      }
    </style>
    <slot></slot>
    `;
    }
  }
);
