const xml2js = require("xml2js");

const parseFile = (file, cb) => {
  const parser = new xml2js.Parser({ explicitArray: false });

  // could consider making promise and less callback - style approach
  parser.parseString(file, function (err, result) {
    if (err) {
      // most likely corrupted xml file
      console.log("error during file parsing", err);
    }
    return cb(null, result);
  });
};

module.exports = parseFile;
