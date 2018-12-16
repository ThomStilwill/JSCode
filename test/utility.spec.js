describe('Utility', () => {
    
  describe('exists', () => {
    let array = ['Thom','Dick','Harry','Lucy'];

    it('should return true if match is in target', () => {
      let match = 'Harry';
      let result = exists(array,match);
      assert.equal(result,true);
    });

    it('should return false if match is not in target', () => {
      let match = 'Not';
      let result = exists(array,match);
      assert.equal(result,false);
    });
  });

    describe('find', () => {
      let array = [
        {state: 'CT', region: 'NE'},
        {state: 'NH', region: 'NE'},
        {state: 'VT', region: 'NE'},
        {state: 'FL', region: 'SE'},
        {state: 'GA', region: 'SE'},
      ];
  
      it('should return item if predicate is true', () => {
        let predicate = x=>x.region==='SE';
        let regionsearch = find(predicate);
        let result = regionsearch(array);
        assert.equal(result.state,'FL');
      });
    });

    describe('where', () => {
      let array = [
        {state: 'CT', region: 'NE'},
        {state: 'NH', region: 'NE'},
        {state: 'VT', region: 'NE'},
        {state: 'FL', region: 'SE'},
        {state: 'GA', region: 'SE'},
      ];
  
      it('should return item if spec is matched', () => {
        let result = find(where({region:'SE'}),array);
        assert.equal(result.state,'FL');
      });
    });
});
