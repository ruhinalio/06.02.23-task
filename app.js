// 1. arrayin sonunda m herfi varsa loga yazdirmaq
// var a = ['salam','malas', 'alma', 'janam']
// for(var i=0; i<a.length; i++){
//     if(a[i][a[i].length-1]=='m'){
//         console.log(a[i])
//     }
// }
// ===========================================================
// 2. arraydaki sozlerin boyuk olub olmadigini yoxlamag
// var a = ['salam', 'SALAM', 'malas', 'MALAS']
// for(var i=0; i<a.length; i++){
//    if(a[i]===a[i].toUpperCase){
//     console.log(a[i]);
//    }
// }
//============================================================
//3. arrayin icindeki reqemleri qarsilasdiririg hansi yoxdursa onu ekranda cap ele
// var a= [0,1,2,3,4,5,7,8,9]
// var b= [0,1,2,3,4,5,6,7,8,9]
// for(var i=1; i<b.length;i++){
//    if(a[i]!==b[i]){
//        console.log(`${b[i]} den sora arraylar arasinda ferq var`);
//        break
//    }
// }
//=============================================================
//4. array icindeki guzgu ededleri tapin
// var a = [12421, 111, 321, 432, 323];
// for (var i = 0; i < a.length; i++) {
//   let num = a[i].toString(),
//     revNum = "";
//   for (var j = num.length - 1; j >= 0; j--) {
//     revNum += num[j];
//   }
//   if (num == revNum) {
//     console.log(num);
//   }
// }
//======================================================================
//5.arraya 0 daxil edene qeder promt
// var arr =[]
// var a = prompt('ededi daxil edin')
// while(true){
// arr[arr.length] = a
// a=prompt('ededi daxil edin')
// if(a==0){
//     console.log(arr);
//     break;
// }
// }
//=======================================================================
//6. arraya daxil edilen edelerin cemi cutdurse true tekdirse false cixacag
// var a= [12,2113,23,3232,3]
// var cem= 0 +a
// if(a%2==0){
//     console.log(`${a} ededlerin cemi cutdur`);
// }else{
//     console.log(`${a} ededlerin cemi tekdir`);
// }
