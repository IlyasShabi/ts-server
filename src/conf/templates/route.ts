import { Request, Response } from "express";

export class xxxx {

    public routes(app): void {
        app.get("/api/v1", (req: Request, res: Response) => {
                res.status(200).send({ "api-version": "1.0.0"});
            });

        // Start PF
        app.get(
          "/api/v1/product-finder",
          (req: Request, res: Response) => {
              console.log("pppos");
            //this.finderCtrl.startProductFinder(req, res);
          }
        );

    }
}
