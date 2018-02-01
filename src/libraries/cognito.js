import { AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js'
import {Config} from 'aws-sdk'
import router from '../router'
import config from '../.config'

export const userPool = new CognitoUserPool({
  UserPoolId: config.userPoolId,
  ClientId: config.clientId
})

export const refresh = async () => {
  Config.region = 'eu-central-1'
  // Config.credentials = new CognitoIdentityCredentials({
  //   IdentityPoolId: appConfig.IdentityPoolId
  // });

  // Config.credentials = new CognitoIdentityCredentials({
  //   IdentityPoolId: '...', // your identity pool id here
  //   Logins: {
  //     // Change the key below according to the specific region your user pool is in.
  //     'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result.getIdToken().getJwtToken()
  //   }
  // })

  // Config.credentials.refresh((error) => {
  //   if (error) {
  //     console.error(error)
  //   } else {
  //     alert('Successfully logged!')
  //   }
  // })

  let cognitoUser = userPool.getCurrentUser()
  if(cognitoUser) {
    cognitoUser.getSession((err, session) => {
      if (err) {
        alert(err)
      }

      console.log(session)
      router.push('/dashboard')
    })
  }
}

export const signin = async (form) => {
  var authenticationData = {
    Username: 'vlad',
    Password: 'Password_1'
  }

  var authenticationDetails = new AuthenticationDetails(authenticationData)

  var userData = {
    Username: 'vlad',
    Pool: userPool
  }

  var cognitoUser = new CognitoUser(userData)
  return await new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('access token + ' + result.getAccessToken().getJwtToken())
        this.accessToken = result.getAccessToken().getJwtToken()

        cognitoUser.getUserAttributes((error, result) => {
          if (error) {
            alert(error)
          }

          localStorage.setItem('authenticated', true)
          resolve(result)
        })
      },

      onFailure: function (error) {
        reject(error)
      }
    })
  })
}

export const signup = async (username, email, password) => {
  var attributeList = []
  var dataEmail = {
    Name: 'email',
    Value: email
  }

  var dataPhoneNumber = {
    Name: 'phone_number',
    Value: '+15555555555'
  }

  var attributeEmail = new CognitoUserAttribute(dataEmail)
  var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber)

  attributeList.push(attributeEmail)
  attributeList.push(attributePhoneNumber)

  console.log('*** before return')
  return await new Promise((resolve, reject) => {
    userPool.signUp(username, password, attributeList, null, (error, result) => {
      if (error) {
        reject(error)
      }

      let cognitoUser = result.user
      console.log('user name is ' + cognitoUser.getUsername())
      console.log(CognitoUser)
      resolve();
      // return Promise.resolve(result)
    })
  })
}

export const logout = async () => {
  localStorage.clear()
  router.push('/')
}
