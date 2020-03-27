const generatorUniqueId = require('../../src/utils/generatorUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generatorUniqueId();
        expect(id).toHaveLength(8);
    })
})