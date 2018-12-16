

function exists(array, match){
    return array.some(function(x){
        return x === match;
    })
}

function find(predicate, list) {
    if(!list) {
        return function _find(ls){
            return find(predicate,ls);
        }
    }
    var i = 0;
    while( i< list.length){
        if(predicate(list[i])){
            return list[i];
        }
        i++;
    }
}

function traverse(predicate,obj){
    if(Object(obj) !== obj){
        return null;
    }

    if(predicate(obj)){
        return obj;
    }

    for(var i in obj) {
        if(obj.hasOwnProperty(i)) {
            let result = traverse(predicate,obj[i]);
            if(result){
                return result;
            }
        }
    }
}

function where(spec,test) {
    if (!test) {
        return function _where(tst) {
            return where (spec,tst);
        }
    }
    for(var k in spec){
        if(spec.hasOwnProperty(k)){
            if (spec[k] != test[k]){
                return false;
            }
        }
    }
    return true;
}

function not(f) {
    return function _negated() {
        return !f.apply(null,arguments);
    }
}

function prop(x,obj) {
    if (!obj) {
        return function _prop(obj){
            return obj[x];
        }
    }
}

function path(props,obj){
    var i = 0;
    var tmp = obj;
    while(i<props.length){
        if(tmp[props[i]] === undefined){
            return tmp[props[i]];
        }
        tmp = tmp[props[i]];
        i += 1;
    }
}

function tap(proc) {
    return function(x){
        proc(x);
        return x;
    }
}

function curry(fn){
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        return fn.apply(this,args.concat(Array.prototype.slice.call(arguments,0)));
    }
}
