export interface LoginDetails {
  email: string;
  password: string;
}

export interface CognitoUser {
  username: string;
  pool: Pool;
  Session?: any;
  client: Client;
  signInUserSession: SignInUserSession;
  authenticationFlowType: string;
  storage: Storage;
  keyPrefix: string;
  userDataKey: string;
  attributes: Attributes;
  preferredMFA: string;
}

export interface Pool {
  userPoolId: string;
  clientId: string;
  client: Client;
  advancedSecurityDataCollectionFlag: boolean;
  storage: Storage;
}

export interface Storage {
  [key: string]: string;
}

export interface Client {
  endpoint: string;
  fetchOptions: any;
}

export interface Attributes {
  sub: string;
  email_verified: boolean;
  email: string;
}

export interface SignInUserSession {
  idToken: IdToken;
  refreshToken: RefreshToken;
  accessToken: AccessToken;
  clockDrift: number;
}

export interface Payload {
  sub: string;
  aud: string;
  email_verified: boolean;
  event_id: string;
  token_use: string;
  auth_time: number;
  iss: string;
  ['cognito:username']: string;
  exp: number;
  iat: number;
  email: string;
}

export interface IdToken {
  jwtToken: string;
  payload: Payload;
}


export interface RefreshToken {
  token: string;
}

export interface Payload2 {
  sub: string;
  device_key: string;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  iss: string;
  exp: number;
  iat: number;
  jti: string;
  client_id: string;
  username: string;
}

export interface AccessToken {
  jwtToken: string;
  payload: Payload2;
}
