import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";
import CardInfrastructure from "./module/infrastructure/card.infrastructure";
import CardApplication from "./module/application/card.application";
import app from "./app";

const cardInfrastructure = new CardInfrastructure();
const cardApplication = new CardApplication(
  cardInfrastructure
);

(async () => {
  try {
    const listPromises = [];

    const serverBootstrap = new ServerBootstrap(app);
    const databaseBootstrap = new DatabaseBootstrap();

    listPromises.push(serverBootstrap.initialize());
    listPromises.push(databaseBootstrap.initialize());

    await Promise.all(listPromises);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();