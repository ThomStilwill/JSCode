const MINLENGTH = 'MINLENGTH';
const REQUIRED = 'REQUIRED';

required = (value) => new Promise(function(resolve,reject){
    if(!(value)){
        return reject(REQUIRED);
    }
    resolve(value);
});

minlength = (length) => (value) =>
    new Promise(function(resolve,reject) {
        if(value){
            if(value.length < length){
                return reject(MINLENGTH);
            } 
        }
        resolve(value);
    });

validate = (value) => new Promise(function(resolve,reject) {
    resolve(value);
});
