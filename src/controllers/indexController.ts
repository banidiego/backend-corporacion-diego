import { Request, Response } from 'express';

class IndexController {
  public index(req: Request, res: Response) {
    res.json({ text: 'API is in /api/games' });
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    var port = req.app.settings.port;
    console.log(fullUrl);
    res.json({ host: fullUrl, port });
  }
}

export const indexController = new IndexController();
