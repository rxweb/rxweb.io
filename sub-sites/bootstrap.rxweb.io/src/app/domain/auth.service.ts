import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  auth0Options = {
    theme: {
      // logo: 'http://logo.radixoffice.com/images/Logo_100x75(transparent).png',
      primaryColor: '#0c7dc5',
      foreGroundColor:"#000",
    },
    auth: {
      redirectUrl: environment.auth0.callbackURL,
      responseType: 'token id_token',
      audience: `https://${environment.auth0.domain}/userinfo`,
      params: {
        scope: 'openid profile'
      }
    },
    allowedConnections: ['windowslive', 'google-oauth2', 'facebook','github'],
    autoclose: true,
    oidcConformant: true,
    languageDictionary: {
      title: "Rx Web"
    },
  };


  isAuthenticated() {
    // ...implement logout
  }
}