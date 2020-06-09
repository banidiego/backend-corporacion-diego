'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.indexController = void 0;
class IndexController {
  index(req, res) {
    res.json({ text: 'API is in /api/games' });
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl);

    // "build": "tsc -w",
    // "dev": "nodemon build/index.js",
  }
}
exports.indexController = new IndexController();
