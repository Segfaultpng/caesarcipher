var iocipher = function(){

    var str = prompt("Enter in your string");
    var num = prompt("Enter in your number");
    num = parseInt(num);
 
   //make string lowercase to  keep consistency
   var lowerCaseString = str.toLocaleLowerCase();

   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");

   //string to hold new string
   var cipher = "";

   for(var i = 0; i < lowerCaseString.length; i++){
       //get current letter
       var currentLetter = lowerCaseString[i];

       if(currentLetter != " "){
           //get the current index of the current letter from alphabet
           var currentIndex = alphabet.indexOf(currentLetter);
           var newIndex = currentIndex + num;

           if(newIndex > 25){
               newIndex -= 26;
           }
           if(newIndex < 0){
               newIndex += 26;
           }

           cipher += alphabet[newIndex];
       }else{
           cipher += currentLetter;
       }
   }

   document.getElementById("ciphertext").textContent = cipher;



}

window.onload = function () {
iocipher();
}