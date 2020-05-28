const { saveBook, findAllBooks } = require('../bookController');

const db = require('../../../db/models/index')
const { assert } = require('../../../test-utils')

// should first create proper migrations before writing testing for integrating with database
describe.skip('saveBook', () => {
    before(async() => {
      await db.sequelize.sync();
    });


    it.skip('should save book to the database', async () => {});
});
