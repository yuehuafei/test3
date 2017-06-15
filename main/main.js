module.exports = function main(str) {
  // Write your cade here
  var s=new Array();
  s=str.split("");
  var result = 0;
  for(var i=0;i<s.length;i++){
    result+=parseInt(s[i]);
  }
  return result;
};
