// src/aws-exports.js
const awsConfig = {
    Auth: {
        Cognito: {
            region: 'us-east-1',
            userPoolId: 'us-east-1_P4s21RqQz',
            userPoolClientId: '4inhhge1cp6t0p9k35jb41jqtg',
            mandatorySignIn: true,
            authenticationFlowType: 'USER_SRP_AUTH',
            loginWith: {
                email: true,
            },
            signUpVerificationMethod: "code",
            userAttributes: {
                email: {
                    required: true,
                },
            },
            allowGuestAccess: false,
            passwordFormat: {
                minLength: 3,
                requireLowercase: false,
                requireUppercase: false,
                requireNumbers: false,
                requireSpecialCharacters: false,
            },
        },
    },
    API: {
        endpoints: [
            {
                name: "TodoApi",
                endpoint: "https://enrm8v28ai.execute-api.us-east-1.amazonaws.com/prod",
                region: "us-east-1",
            },
        ],
    },
};

export default awsConfig;
