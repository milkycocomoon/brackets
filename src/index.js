module.exports = function check(str, bracketsConfig) {
  let brackets = [];

  for(let i=0; i<bracketsConfig.length; i++){
    brackets[i] = bracketsConfig[i].join('');
  }

  let before = '';
  while(str.length != before.length){
    before = str;
    for(let i=0; i<brackets.length; i++){
      str = str.replace(brackets[i], '');
    }
  }
  return (str.length > 0) ? false : true;
}