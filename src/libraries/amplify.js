import Amplify, { Auth, Analytics } from 'aws-amplify';
// import aws_exports from './aws-exports';


// https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_XMgbcAqlQ/.well-known/openid-configuration

// Verify Provider Information
// Use the following thumbprint to verify the certificate of the provider. Learn how.
//
// Users authenticated by this provider can access your AWS account as long as the provider's certificate does not change. When the provider's certificate changes, you must provide the thumbprint of the new certificate.

// Provider URL https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_XMgbcAqlQ/
// Issued by Starfield Technologies, Inc.
// ValidityFrom 2009-09-02 to 2034-06-28
// Thumbprint 9e99a48a9960b14926bb7f3b02e22da2b0ab7280

// https://cognito-idp.eu-central-1.amazonaws.com/eu-central-1_XMgbcAqlQ/.well-known/jwks.json

// // Initialize the Amazon Cognito credentials provider
// https://eu-central-1.console.aws.amazon.com/cognito/code/?region=eu-central-1&pool=eu-central-1:f29154f9-4a39-4db5-91b9-98e738e8f1d3&response=%7B%22authRole%22%3A%22arn%3Aaws%3Aiam%3A%3A211099707286%3Arole%2FCognito_AmplifyAuth_Role%22%2C%22unauthRole%22%3A%22arn%3Aaws%3Aiam%3A%3A211099707286%3Arole%2FCognito_AmplifyUnauth_Role%22%7D

// TODO: Move to aws-exports
Amplify.configure({
  'identityPoolId': 'eu-central-1:f29154f9-4a39-4db5-91b9-98e738e8f1d3', //REQUIRED - Amazon Cognito Identity Pool ID
  'region': 'eu-central-1', // REQUIRED - Amazon Cognito Region
  'userPoolId': 'eu-central-1_XMgbcAqlQ', //OPTIONAL - Amazon Cognito User Pool ID
  'userPoolWebClientId': '2618bms694di6b5riolk0tcs43', //OPTIONAL - Amazon Cognito Web Client ID
});

export const signin = async (username, password) => {
  // return await Auth.signIn(username, password).then(user => console.log(user)).catch(err => console.log(err))
  return Auth.signIn(username, password)
}
