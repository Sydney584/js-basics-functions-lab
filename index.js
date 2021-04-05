function distanceFromHqInBlocks(blockNumber) {
        if (blockNumber > 42) {
          return blockNumber - 42;
        } else {
          return 42 - blockNumber;
        } 
}
     //returns the number of blocks given a value
     function distanceFromHqInFeet (blockNumber) {
        return distanceFromHqInBlocks(blockNumber) * 264;
      }
      function distanceTravelledInFeet (start, destination) {
        if (start < destination) {
          return (destination - start) * 264;
        } else {
          return (start - destination) * 264;
        }
      }
   //




function distanceTravelledInFeet(feet) {
    return distanceTravelledInFeet(43, 48);
}

function calculatesFarePrice(price) {

}
// Code your solution in this file!
