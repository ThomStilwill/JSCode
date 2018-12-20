describe('Promises', () => {
    
    describe('chain', () => {
  
       it('should reject if value is empty', () => {
            let target = '';

            return validate(target)
            .then(required)
            .then(minlength(6))
            .then(function(value){
                    
                })
            .catch(function(reject){
                    expect(reject).is.equal(REQUIRED)
                }
            );
        });

        it('should reject if length < minlength', () => {
            let target = 'tt';

            return validate(target)
            .then(required)
            .then(minlength(6))
            .then(function(value){

                })
            .catch(function(reject){
                    expect(reject).is.equal(MINLENGTH)
                }
            );
        });
    });
});
