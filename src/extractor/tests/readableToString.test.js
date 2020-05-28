const mock = require('mock-fs')
const path = require('path')
const fs = require('fs')
const { assert, root } = require('../../../test-utils')
const readableToString = require('../readableToString');

describe('readableToString', () => {
    before(() => {
        mock({
            [path.join(root, '/file.txt')]: 'woob beep boop'
        })
    })

    after(() => {
        mock.restore()
    })

    it('returns whole content of a file', async () => {
        const readableFile = fs.createReadStream(path.join(root, 'file.txt'))
        assert.strictEqual(await readableToString(readableFile), 'woob beep boop')
    })

})