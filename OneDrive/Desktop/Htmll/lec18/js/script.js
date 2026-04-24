
var arr =[1,2,3,4,5] ;
var products =["Phone" ,"Laptop" ,"Tablet" ,"Headphones" ] ;
do{

window.alert("=== MENU ===\n" + "1. Show produt\n" +  "2. Add product\n"+ "3. Edit product\n" + "4. Delete product\n"  + "5. Exit\n\n" ) ;

var choice = +prompt("Enter your choice ") ;


 if (choice===arr[0]){
         console.log(products) ;
 }

  else  if (choice===arr[1]){
  var newProduct = prompt(" Add New Product ") ;
  console.log( "== Products After Adding ==\n" , products.concat(newProduct)) ;

} 


 else if (choice===arr[2]){
   console.log( products.concat(newProduct)) ;
         products.splice(+prompt("Choose Number of Product You Want Edit Start From 0 to 4") ,1 ,prompt("Enter The Edited Product ") ) ;
         console.log("== Products After Editting ==\n" ,products.concat(newProduct)) ;
}
else if (choice===arr[3]){
  products.splice(+prompt("Choose Number of Product You Want Delet Start From 0 to 4") ,1  ) ;
         console.log("== Products After Delet A Product ==\n" ,products.concat(newProduct)) ;

}


}
while (choice==arr[0] ||choice==arr[1] ||choice==arr[2] ||choice==arr[3] ) ;



if (choice==arr[4]){
 console.log(" Thank you for using our service. 👍  ");
 window.alert(" Thank you for using our service. 👍  ") ;
}

else{
   console.log("Wrong choice");
 window.alert("Wrong choice") ;
}











