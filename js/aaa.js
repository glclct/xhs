// var arr = [1, 2, 3, 4, 5, ];
// var evens = arr.map(function(val, i, arr) {
//     return val * 2;
// })
// console.log(arr);
// console.log(evens);
// var arr1 = [12, 23, 2, 434, 34, 3, 54, 5, ];
// var res = arr1.filter(function(val, i, arr1) {
//     return val % 2 == 0;
// })
// console.log(res);
var str = "sdfsadjfkljsdaklfjsdljf";
var dic = str.split("").reduce(function(dic, char) {
    if (dic[char])
        dic[char]++;
    else
        dic[char] = 1;
    return dic;
}, {})
console.log(dic)
function calc(base){
  console.log( `底薪：￥${base.toFixed(2)}`);
  var 
}