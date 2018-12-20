describe('Utility', () => {
    
  describe('exists', () => {
    let array = ['Thom','Dick','Harry','Lucy'];

    it('should return true if match is in target', () => {
      let match = 'Harry';
      let result = exists(array,match);
      expect(result).is.true;
    });

    it('should return false if match is not in target', () => {
      let match = 'Not';
      let result = exists(array,match);
      expect(result).is.false;
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
        expect(result.state).is.equal('FL');
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
        expect(result.state).is.equal('FL');
      });
    });

    describe('not', () => {
      test = ()=>()=>true;

      it('should return false', () => {
        let resultFn = not(test());
        expect(resultFn()).is.false;
      });
    });

    describe('prop', () => {
      let obj = { name:"wesley",phone: "411 "};

      it('should return name', () => {
        let name = prop('name',obj);
        expect(name).is.equal('wesley');
      });
    });

    describe('path', () => {
      let obj = { 
                  person: { firstname: "wesley", lastname: "crusher"},
                  phone: "411"
                };

      it('should return name', () => {
        let name = path('person.firstname',obj);
        expect(name).is.equal('wesley');
      });
    });

    // https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
    describe('pipe', () => {
      
      substring = (length) => (text) => text.substring(0, length);
      reverse = (text) => text.split('').reverse().join('');
      uppercase = (text) => text.toUpperCase();
      
      it('returns reverse -> uppercase -> substring6', () => {
        let result = pipe(reverse,uppercase,substring(6))('mytestdata');
        expect(result).is.equal('ATADTS');
      });
    });

    describe('compose', () => {
      
      substring = (length) => (text) => text.substring(0, length);
      reverse = (text) => text.split('').reverse().join('');
      uppercase = (text) => text.toUpperCase();
      
      it('returns reverse <- uppercase <- substring', () => {
        let result = compose(reverse,uppercase,substring(6))('mytestdata');
        expect(result).is.equal('TSETYM');
      });
    });
});
