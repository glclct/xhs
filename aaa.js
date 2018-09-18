for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
console.log(new Date, i);
//
// 
//
function calc( /*10000,2000,3000*/ ) {
    //arguments[  10000,2000,3000  ]
    for (var i = 0, total = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    console.log(`${this.ename}的总工资是:${total}`);
}
var lilei = { ename: "Li Lei" }
var hmm = { ename: "Han Meimei" }
var lBonus = [10000, 2000, 3000];
var hBonus = [4000, 5000, 2000, 3000];
calc.apply(lilei, lBonus);
//(lilei,10000,2000,3000)
//  this arguments
calc.apply(hmm, hBonus);
//(hmm,4000,5000,2000,3000)
//this arguments