import { getPathHandler } from "../libs/getPathHandler";

export default {
  handler: `${getPathHandler(__dirname)}/handler.cardHandler`,
  events: [
    {
      http: {
        method: "post",
        path: "/get-card-by-token",
        integration: "lambda",
      },
    },
  ],
};
