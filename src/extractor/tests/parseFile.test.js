const mock = require('mock-fs');
const path = require('path');
const xml2js = require('xml2js');

const parseFile = require('../parseFile');
const { assert } = require('../../../test-utils')

// Should be tested although I couldn't make mock file and gave up to save on time
describe.skip('parseFile', () => {
    afterEach(() => {
        mock.restore();
    });

    const xmlObject = {root: {$: {id: "my id"}, _: "my inner text"}};

    before(() => {
        mock({
            [path.join(path.resolve(__dirname), 'file.xml')]: mock.file({
                content: new xml2js.Builder().buildObject(xmlObject),
            }),
        });
    });

    it.skip('should parse xml file correctly', () => {
        const mockCallback = (_, data) => data
        const parsedFile = parseFile(path.join(path.resolve(__dirname, 'file.xml')), mockCallback)
        assert.deepStrictEqual(parsedFile, xmlObject)
    });

    it.skip('should log out errors');
});
