// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue>= 42 ){
        return someValue-42
    }
    else if (someValue < 42) {
        return 42 - someValue
    }
    else {
        return 0
    }
}
function distanceFromHqInFeet(someValue) {
        let distanceInBlocks = distanceFromHqInBlocks(someValue);
        return distanceInBlocks * 264;
}
function distanceTravelledInFeet(start,end){
    if (start >= end){
        let distance = start-end
        return distance* 264
    }
    else if (end>start){
        let distance = end-start
        return distance * 264 
    }
    
}
function calculatesFarePrice(start, end){
   let feet= distanceTravelledInFeet(start,end);
   if (feet <=400){
    return 0
   }
   else if (feet > 400 && feet <=2000){
    let newdistance= feet-400
    return newdistance *.02
   }
   else if (feet > 200 && feet <=2500){
    return 25
   }
   else{
    return "cannot travel that far"
   }
}