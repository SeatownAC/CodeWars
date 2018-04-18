function cubeOdd(arr) {

    var sol = 0;
    for(var i = 0; i < arr.length; i++)
    {
      if(isNaN(arr[i]) == true)
      {
        return undefined;
      }
      else if(arr[i] % 2 != 0)
      {
        sol += Math.pow(arr[i], 3)
      }
    }
    return sol;
    }