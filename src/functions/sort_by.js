var sort_by = function(field, reverse, primer){
   var key = primer ? function(x) {return primer(x[field])} : function(x) {return x[field]}
   // eslint-disable-next-line
   return (a, b) => { return a = key(a), b = key(b), !reverse ? 1 : -1 * ((a > b) - (b > a)) }
}

export default sort_by