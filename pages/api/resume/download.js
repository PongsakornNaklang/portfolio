var path = require('path');
var mime = require('mime');
var fs = require('fs');

export default (req, res) => {
    const dir = path.join(__dirname, 'pages', 'api', 'resume', 'resume2020.pdf');
    const filename = path.basename(dir);
    const mimetype = mime.getType(dir);
    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);
    const filestream = fs.createReadStream(dir);
    filestream.pipe(res);
}
