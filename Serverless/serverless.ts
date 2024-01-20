import type { AWS } from "@serverless/typescript";

import { token,card } from "./src/functions";

const serverlessConfiguration: AWS = {
  service: "delfosti",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild",'serverless-offline','serverless-dynamodb-local'],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    stage: "${opt:stage, 'dev'}",
    environment: {
      JWT_SECRET: "6b219fc8-0f7d-4985-a419-b4ae7a6e034f",
    },
    iam: {
      role: {
        name: "card-role-${self:provider.stage}",
        statements: [
          {
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Resource: "arn:aws:lambda:us-east-1:282865065290:function:*",
          },
          {
            Effect: "Allow",
            Action: "dynamodb:*",
            Resource: "arn:aws:dynamodb:us-east-1:*:table/card",
          },
        ],
      },
    },
  },
  package: { individually: true },
  custom: {
    tableName: 'card',
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: true,
      exclude: ["aws-sdk"],
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
  functions: { token,card},
  resources:{
    Resources: {
      CardTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: '${self:custom.tableName}'
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;