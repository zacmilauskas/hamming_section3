var compute;

//computes the hamming distance from two nucleotides
//: s1 and s2
compute = function(s1, s2) {

  //check to see if the strands are the same length
  if(s1.length !== s2.length) {
    //throw an error
    throw new Error('DNA strands must be of equal length.');

  }


// this what the program returns
  var distance = 0;

  //write code here to set the appropriate distance */
  //calculate the Hamming distance
  //for each character in the strands
  for(var i = 0; i < s1.length; i += 1) {
    //if the chracter in strand1 is NOT
    //equal to the character in strand2
    if(s1[i] !== s2[i]) {
      //add 1 to the hamming distance
    //OR if(s1[i] )
      distance += 1;
    }

  }

  //this is where it gets returned
  return distance;
};

module.exports = {
  compute: compute
};

