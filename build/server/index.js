const { resolve } = require('path');
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: resolve(__dirname, '..') });
const handle = app.getRequestHandler();
const server = express();
const port = process.env.PORT || 3000;
app.prepare().then(() => {
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(port, () => {
        console.log(`Listening on ${port}`);
    });
});
//# sourceMappingURL=index.js.map