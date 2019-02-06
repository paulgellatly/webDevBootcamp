function average(arr){
    var total = 0;
    arr.forEach(function(score){
        total += score;
    });
    var ave = total/arr.length;
    return Math.round(ave);
    
} 

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));

