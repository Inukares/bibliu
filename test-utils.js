const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const { assert } = require('chai');

const root = path.resolve(__dirname);

module.exports = {
    root,
    assert,
};
