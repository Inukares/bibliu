const streamFilesProcessing = require('../streamFilesProcessing')
const { assert } = require('../../../test-utils')


describe('streamFilesProcessing', () => {
    it('returns 1', () => {
        assert.strictEqual(streamFilesProcessing(), 1)
    })
})