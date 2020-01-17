/*export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "buckets-uploads-notes"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://941gvvlcsg.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_i8Zh6MVjr",
      APP_CLIENT_ID: "38uq4tvnu7mvkd6qjs4d45rvu0",
      IDENTITY_POOL_ID: "us-east-1:7853f553-f1b3-49cf-bb43-7addfa8b4067"
    }
  };*/


  const dev = {
    STRIPE_KEY: "YOUR_STRIPE_DEV_PUBLIC_KEY",
    s3: {
      REGION: "us-east-1",
      BUCKET: "buckets-uploads-notes"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://25b0t3f616.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_T51NOI7wu",
      APP_CLIENT_ID: "6ok9jq085c386gahve2j6m6cen",
      IDENTITY_POOL_ID: "us-east-1:4a724ef9-c288-48d0-8a8c-d3910f8100d5"
    }
  };

  const prod = {
    STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
    s3: {
      REGION: "us-east-1",
      BUCKET: "buckets-uploads-notes"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://hx79mjs884.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_RPzILrMGT",
      APP_CLIENT_ID: "3p4rri7bva3mm2si6pljqieo2i",
      IDENTITY_POOL_ID: "us-east-1:fae40b85-23cd-475d-8b0a-f4e427430f3a"
    }
  };

  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };