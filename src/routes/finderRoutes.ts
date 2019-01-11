import { Request, Response } from "express";
import { FinderController } from "../controllers/finderController";


export class FinderRoutes{

    public finderCtrl = new FinderController();

    public routes(app): void {
        app.get("/api/v1", (req: Request, res: Response) => {
                res.status(200).send({ "api-version": "1.0.0"});
            });

        // Start PF
        app.get(
          "/api/v1/product-finder",
          (req: Request, res: Response) => {
            this.finderCtrl.startProductFinder(req, res);
          }
        );

    }
}
