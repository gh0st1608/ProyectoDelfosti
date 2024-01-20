import { getPathHandler } from "../libs/getPathHandler";

export default {
  handler: `${getPathHandler(__dirname)}/handler.cardHandler`,
  events: [
    {
      http: {
        method: "post",
        path: "/create-token-lambda",
        integration: "lambda",
      },
    },
  ],
};
