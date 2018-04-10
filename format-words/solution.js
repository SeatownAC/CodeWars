function formatWords(words){
    words = words || [];
    return words
        .filter(function(word) { return !!word; })
        .join(', ')
        .replace(/, (\w+)$/, " and $1");
  }