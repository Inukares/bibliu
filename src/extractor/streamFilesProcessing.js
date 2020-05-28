const through2 = require("through2");
const path = require("path");
const readdir = require("@jsdevtools/readdir-enhanced");
const fs = require("fs-extra");

const readableToString = require("./readableToString");
const parseFile = require("./parseFile");
const { extractValues } = require("./extractValues");
const saveBook = require("../controllers/bookController");

const streamFilesProcessing = (
  filePath = path.resolve(__dirname, "../books/cache/epub")
) =>
  readdir
    .stream(filePath, { filter: /.\.rdf/, deep: 2 })
    .pipe(
      through2.obj(async function (fileName, enc, cb) {
        const readableFile = fs.createReadStream(
          path.join(filePath, fileName),
          { encoding: "utf-8" }
        );
        this.push(await readableToString(readableFile));
        cb();
      })
    )
    .pipe(
      through2.obj(function (data, enc, cb) {
        parseFile(data, cb);
      })
    )
    .pipe(
      through2.obj(function (data, enc, cb) {
        this.push(extractValues(data));
        cb();
      })
    )
    .pipe(
      through2.obj(async function (data, ebc, cb) {
        await saveBook(data);
        cb();
      })
    );

module.exports = streamFilesProcessing;
