export function getAvg(score){
  return score.reduce(function(p, c){
    return p + c;
  }) / score.length;
}

export function getSum(score){
  return score.reduce(function(p, c){
    return p + c;
  });
}
