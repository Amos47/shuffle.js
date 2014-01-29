//in place shuffle array
Array.prototype.shuffle = function(){
  var a = this;
  for(var i = a.length - 1; i >= 1; i--){
    var j = parseInt(Math.random()*i);
    if(i !== j){
      var holder = a[j];
      a[j] = a[i];
      a[i] = holder;
    }
  }
}
