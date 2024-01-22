import type { AWS } from "@serverless/typescript";

import { token,card } from "./src/functions";

const serverlessConfiguration: AWS = {
  service: "delfosti",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild",'serverless-offline','serverless-dynamodb-local'],
  provider: {
    name: "aws",
    profile: "default",
    runtime: "nodejs14.x",
    stage: "${opt:stage, 'dev'}",
    environment: {
      JWT_SECRET: "0ae8dW2FpEAZlxlz"
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
          AttributeDefinitions: [
            {
              "AttributeName": "tokenCard",
              "AttributeType": "S"
            }
          ],
          TableName: '${self:custom.tableName}',
          KeySchema: [
            {
              "AttributeName": "tokenCard",
              "KeyType": "HASH"
            }
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 3,
            WriteCapacityUnits: 3
          },       
        }
      }
    }
  }
}

module.exports = serverlessConfiguration;