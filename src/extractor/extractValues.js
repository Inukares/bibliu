const get = require('lodash.get')
const flatten = require('lodash.flatten')
const map = require('lodash.map')
const getIdFromString = (string) => /[^/]*$/.exec(string)[0];

const extractAuthors = (object) => {
  const mapToAuthor = (object) => ({
    id: get(object, "$.rdf:about", ""),
    webPage: get(object, "pgterms:webpage.$.rdf:resource", ""),
    deathDate: get(object, "pgterms:deathdate._", ""),
    name: get(object, "pgterms:name", ""),
    birthDate: get(object, "pgterms:birthdate._", ""),
    alias: [].concat(get(object, "pgterms:alias", [])),
  });

  // better naming would be useful, can't think of anything right now
  // there can by many or one author. If there are many, the object containts pgterms:agent, if not such key doesn't exist
  const authors = map(get(object, "dcterms:creator"), (authorsOrAuthor) => {
    if (get(authorsOrAuthor, "pgterms:agent") === undefined) {
      return mapToAuthor(authorsOrAuthor);
    }
    return map(authorsOrAuthor, mapToAuthor);
  });

  return flatten(authors);
};

const extractValues = (object) => {
  const book = get(object, "rdf:RDF.pgterms:ebook");
  const id = getIdFromString(get(book, "$.rdf:about"));
  const title = get(book, "dcterms:title");
  const authors = extractAuthors(book);
  const publisher = get(book, "dcterms:publisher");
  const publicationDate = get(book, "dcterms:issued._");
  const language = get(book, "dcterms:language.rdf:Description.rdf:value._");
  const subjects = [].concat(
    map(get(book, "dcterms:subject", []), (subject) =>
      get(subject, "rdf:Description.rdf:value")
    )
  );
  const licenseRights = get(book, "dcterms:rights");

  return {
    id,
    title,
    authors,
    publisher,
    publicationDate,
    language,
    subjects,
    licenseRights,
  };
};

module.exports = {
  extractAuthors,
  extractValues,
  getIdFromString,
};
