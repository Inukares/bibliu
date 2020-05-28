const through2 = require("through2");
const path = require("path");
const readdir = require("@jsdevtools/readdir-enhanced");
const fs = require("fs-extra");

const readableToString = require("./readableToString");
const parseFile = require("./parseFile");

const streamFilesProcessing = (
  filePath = path.resolve(__dirname, "../books/cache/epub_2")
) =>
  readdir
    .stream(filePath, { filter: /.\.rdf/, deep: 2 })
    .pipe(
      through2.obj(async function (fileName, enc, cb) {
        const readableFile = fs.createReadStream(
          path.join(filePath, fileName),
          { encoding: "utf-8" }
        );
        this.push(await readableToString(readableFile, cb));
      })
    )
    .pipe(
      through2.obj(function (data, enc, cb) {
        parseFile(data, cb);
      })
    );

module.exports = streamFilesProcessing;
