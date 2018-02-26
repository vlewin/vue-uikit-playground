# vue-uikit-playground

> Evaluate UIKit framework

## Demo application: http://vlewin.me/vue-uikit-playground/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

### TODO:
- [x] Init Login page UIKit version
- [x] GitHub Page
- [x] Basic form validation
- [x] Mobile first
- [ ] Add highlighting to invalid input elements
- [x] Disable submit button
- [ ] Improve form validations
- [ ] Introduce input component
- [ ] Simulate form submit with (No account) and without error!
- [ ] Animate SVG logo with Velocity.js

### Improve form validations:
- https://travishorn.com/form-validation-with-vue-js-4d2e7ba8d2fc
- https://monterail.github.io/vuelidate/#sub-basic-usage
- https://github.com/baianat/vee-validate
- https://github.com/auth0/password-sheriff


Node.js AWS Cognito SDK's
================================================================================

- aws-sdk
- amazon-cognito-identity-js (https://github.com/aws/amazon-cognito-identity-js)
- amazon-cognito-auth-js (https://github.com/aws/amazon-cognito-auth-js)

- aws-amplify (https://github.com/aws/aws-amplify)


AWS Cognito SSO Session Managment
================================================================================

Cross domain user session?

Cross domain user session #598 - Use case 26. Using cookies to store cognito tokens
https://github.com/aws/amazon-cognito-identity-js/issues/598

1) Authenticate user on login.paessler.com
2) Store cognito session in the cookies for login.paessler.com
3)

cache cognito identity session credentials in local storage
https://github.com/aws/aws-sdk-js/issues/1097

Using amazon-cognito-auth-js features with my own custom UI? #3
https://github.com/aws/amazon-cognito-auth-js/issues/3

Single sign-on multiple applications #538
https://github.com/aws/amazon-cognito-identity-js/issues/538

JWT Cookie Storage Security with HttpOnly
https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage

Cognito: is it possible to host UI on my domain and redirect to my domain too?
https://stackoverflow.com/questions/46121061/cognito-is-it-possible-to-host-ui-on-my-domain-and-redirect-to-my-domain-too
