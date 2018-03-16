function abbrevName(name){
    var makeInit = name.split(' ');
    return (makeInit[0][0]+'.' + makeInit[1][0]).toUpperCase();
  }