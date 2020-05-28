const { get } = require("lodash");
const { assert } = require("../../../test-utils");
const {
  getIdFromString,
  extractAuthors,
  extractValues,
} = require("../extractValues");
const completeDataBook = require("./mocks/completeDataBook");
const multipleAuthors = require("./mocks/multipleAuthors");

describe("extractValues", () => {
  describe("#getIdFromString", () => {
    it("should return 6", () => {
      assert.strictEqual(getIdFromString("ebooks/6"), "6");
    });
    it("should return empty string", () => {
      assert.strictEqual(getIdFromString("someString/"), "");
    });
  });

  describe("#extractAuthors", () => {
    it("should extract single author", () => {
      const book = get(completeDataBook, "rdf:RDF.pgterms:ebook");
      const authors = extractAuthors(book);
      const expected = [
        {
          id: "2009/agents/1638",
          webPage: "http://en.wikipedia.org/wiki/Thomas_Jefferson",
          deathDate: "1826",
          name: "Jefferson, Thomas",
          birthDate: "1743",
          alias: ["United States President (1801-1809)"],
        },
      ];
      assert.deepStrictEqual(authors, expected);
    });

    it("should extract multiple authors", () => {
      const book = get(multipleAuthors, "rdf:RDF.pgterms:ebook");
      const authors = extractAuthors(book);
      const expected = [
        {
          id: "2009/agents/14",
          webPage: "http://en.wikipedia.org/wiki/James_Madison",
          deathDate: "1836",
          name: "Madison, James",
          birthDate: "1751",
          alias: ["United States President (1809-1817)"],
        },
        {
          id: "2009/agents/13",
          webPage: "http://en.wikipedia.org/wiki/Alexander_Hamilton",
          deathDate: "1804",
          name: "Hamilton, Alexander",
          birthDate: "1757",
          alias: [],
        },
        {
          id: "2009/agents/15",
          webPage: "http://en.wikipedia.org/wiki/John_Jay",
          deathDate: "1829",
          name: "Jay, John",
          birthDate: "1745",
          alias: ["Jay, J. (John)"],
        },
      ];

      assert.deepStrictEqual(authors, expected);
    });

    it("should return default value for non existing fields", () => {
      const noAuthors = extractAuthors(undefined);
      const expected = [];
      assert.deepEqual(noAuthors, expected);
    });
  });

  describe("#extractValues", () => {
    it("should extract all book fields", () => {
      const actual = extractValues(completeDataBook);
      const expected = {
        authors: [
          {
            alias: ["United States President (1801-1809)"],
            birthDate: "1743",
            deathDate: "1826",
            id: "2009/agents/1638",
            name: "Jefferson, Thomas",
            webPage: "http://en.wikipedia.org/wiki/Thomas_Jefferson",
          },
        ],
        id: "1",
        language: "en",
        licenseRights: "Public domain in the USA.",
        publicationDate: "1971-12-01",
        publisher: "Project Gutenberg",
        subjects: [
          "United States. Declaration of Independence",
          "United States -- History -- Revolution, 1775-1783 -- Sources",
          "E201",
          "JK",
        ],
        title:
          "The Declaration of Independence of the United States of America",
      };
      assert.deepEqual(actual, expected);
    });
  });
});
