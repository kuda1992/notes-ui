export const config = {
  s3: {
    REGION: 'eu-west-2',
    BUCKET: 'notes-app-external-assets'
  },
  apiGateway: {
    REGION: 'eu-west-2',
    URL: ' https://1m0k7iidc1.execute-api.eu-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'eu-west-2',
    USER_POOL_ID: 'eu-west-2_4pXycNW0M',
    APP_CLIENT_ID: '3447etghggpfcvkmo9ljagov27',
    IDENTITY_POOL_ID: 'eu-west-2_4pXycNW0M'
  }
};
