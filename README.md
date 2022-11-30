![PayPal Developer Cover](https://github.com/paypaldev/.github/blob/main/pp-cover.png)
<div align="center">
  <a href="https://twitter.com/paypaldev" target="_blank">
    <img alt="Twitter: PayPal Developer" src="https://img.shields.io/twitter/follow/paypaldev?style=social" />
  </a>
  <br />
  <a href="https://twitter.com/paypaldev" target="_blank">Twitter</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://www.paypal.com/us/home" target="_blank">PayPal</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://developer.paypal.com/home" target="_blank">Docs</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://github.com/paypaldev" target="_blank">Code Samples</a>
    <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span>
  <a href="https://dev.to/paypaldeveloper" target="_blank">Blog</a>
  <br />
  <hr />
</div>
 
# PayPal React PWA Sample App
This is a simple Progressive Web Application with PayPal Checkout buttons built with React. If you want to learn how to integrate the PayPal Checkout buttons into any React application, take a look at this how-to guide [How to add PayPal checkout payments to your React app](https://dev.to/paypaldeveloper/how-to-add-paypal-checkout-payments-to-your-react-app-53aa) we made for you.
 
## Progressive Web App (PWA)
 
This app was created using [Create React App (CRA)](https://create-react-app.dev/), by default CRA already comes with a service worker installed and a super powerful library called [Workbox](https://developer.chrome.com/docs/workbox/) that will help us increase the developer experience when working with javascript [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).
 
## How to register your Service Worker
 
Navigate to the `index.js` file and change the following line from `unregister()` to `register()`. Your `index.js` file should look like this.
 
```javascript
serviceWorkerRegistration.register();
```
 
## Using Workbox
 
CRA comes with a `service-worker.js` file located at the root of your project. This service worker has all the necessary things you need to start making your app performant thanks to the caching strategies.
 
We changed line 56 to cache the current images in our app using the `.jpeg` format.
 
From this:
 
```javascript
url.pathname.endsWith('.png')
```
To this:
```javascript
url.pathname.endsWith('.jpeg')
```
 
At the bottom of the file, we are using the [NetworkFirst()](https://developer.chrome.com/docs/workbox/modules/workbox-strategies/#network-first-network-falling-back-to-cache) caching strategy to cache the call to the server that has the JSON object with all the data about the shoes of our store.
 
```javascript
registerRoute(
 ({url}) => url.pathname.endsWith('shoes.json'),
 new NetworkFirst()
);
```
 
## Run this project
 
Make sure you run `npm i` or `yarn` to install all the dependencies of this project.
 
Install the `serve` npm package. This package will help you run a PWA locally since it's not running on an HTTPS server which is a requirement for PWA to work.
 
Install this package globally on your computer by running `npm i serve -g`.
 
Finally, run this project by executing the following command.
 
`serve -s build`.
 
## PayPal Developer Community
The PayPal Developer community helps you build your career, while also improving PayPal products and the developer experience. You’ll be able to contribute code and documentation, meet new people and learn from the open-source community.
 
* Website: [developer.paypal.com](https://developer.paypal.com)
* Twitter: [@paypaldev](https://twitter.com/paypaldev)
* GitHub:  [@paypal](https://github.com/paypal)
