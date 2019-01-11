import * as express from "express";
import * as bodyParser from "body-parser";
// import { FinderRoutes } from "./routes/finderRoutes";
import {FinderRoutes, CustomerRoutes} from "./routes/index";
import * as mongoose from "mongoose";

class App {
  public app: express.Application;
  public pfRoutes: FinderRoutes = new FinderRoutes();
  public mongoUrl: string = "mongodb://localhost:27017/test_ts";

  constructor() {
    this.app = express();
    this.config();
    this.pfRoutes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useFindAndModify: false } );
  }
}

export default new App().app;
