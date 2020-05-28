## How to run the app

Unzip contents of the books downloadable at https://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.zip to: `src/books` , so that these could be find by `streamFilesProcessing`.
The goal is to have folder structure like `src/books/cache/epub/1/pg1.rdf`

Start a database, for instance:
```
docker run -e POSTGRES_PASSWORD=password -it -p 5432:5432 postgres
```

Install dependencies
```
npm install
```

Sync database models

```
npm run migrate
```

Start the app
```
npm start
```


## Testing


Run tests
```
npm run test
```

Test coverage report
```
npm run coverage
```



While this submission does do what it was supposed to do, it's far from being perfect. These are the list of things
which would improve quality of the code and it's usability.
- Decouple finding and reading files from extracting values. There could be completely different data extracting services
adjusting contents to their needs, hence the code shouldn't be coupled either. It is the case here though for the sake of simplicity.
- Make use of different environments
- Handling dates in models -> postgres often returned invalid date for dates available in the folders, hence 
the type for publication date and death date are of type STRING to avoid this problem.
A better approach would be to sanitize the input and format dates if possible.
- Add formatting and eslint as pre-commit hook.
- Folders organisation. I really like Kent C Dodd's approach towards organising folders based on feature code provides
(https://kentcdodds.com/blog/colocation/).
- Database migrations. For now there are no tests regarding database integraitons due to lack of correct setup for that (setup database, migration files).
Sequelize cli would be a good starting place for adding it.
- Better testings - all the files with `it.skip` don't have logic tested well-enough and it should be improved.
- Error handling - as for now, the errors are just printed to the console.
As the errors which are happening there are crucial to understanding how data could be cleared
creating custom errors, possibly behind debug statements would be extremely useful.

I would love to hear your thoughts on that. 
Enjoy your day!
