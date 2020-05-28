const fileToBuffer = require('../readableToString');
const mock = require('mock-fs')
const path = require('path')
const fs = require('fs')
const { assert, root } = require('../../../test-utils')

describe('fileToBuffer', () => {
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
        assert.strictEqual(await fileToBuffer(readableFile), 'woob beep boop')
    })

})