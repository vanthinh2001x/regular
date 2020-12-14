const phoneNumber = "123-456-789";

function removeHyphens(str){
   return str.replace(/-/g, '');
}
var a = removeHyphens(phoneNumber);
console.log(a);