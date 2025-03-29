import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'ca-central-1', // e.g., 'ca-central-1'
    userPoolId: 'ca-central-1_3ijks3Qia',
    userPoolWebClientId: '439d2mmnue6ihr0v1sr537vone',
  }
});
