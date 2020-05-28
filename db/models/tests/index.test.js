const db = require('../index');
const { assert } = require('../../../test-utils')

before(async () => {
  await db.sequelize.sync();
});

describe('index', () => {
  it('should initialise models', () => {
    // todo: check more than just if models exist
    assert.isOk(db.Author);
    assert.isOk(db.Book);
  });

  it.skip('should be possible to add author');

  it.skip('should be possible to add book');
});

after(async () => {
  await db.sequelize.close();
});
