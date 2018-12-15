describe('Utility', () => {
    
  describe('exists', () => {
    let array = ['Thom','Dick','Harry','Lucy'];

      it('should return true if match is in target', () => {
        let match = 'Harry';
        let result = exists(array,match);
        assert.equal(result,true);
      });
    });
    
});