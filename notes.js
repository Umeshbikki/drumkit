document.querySelector("h1")=$("h1")
$("tag or class or id").css("attribute","value")
$(document).ready(()=>{
     $("h1").css("color","red")

})
console.log($("h1").css("color or font-size"))
// you can get attribute value like green or 30px
$("h1").hasClass("green //here comes the class name")
$("h1").text("hi")
//it will change  the inner text of all h1's as hi
$(h1).html("<em>hi<em>")
//this will change innerhtml of h1
// as you can see here html and text are two methods
$("h1").attr("attribute","value or the path")
// to set the value
$("img").attr("src")
// to get the value 
$("img").on("evnt like click or keypress",()=>{
    //code

})
$("img").click(()=>{})
$("img").keypress(()=>{})
// or you can use them as methods 
$("h1").before("<em>hi<em>")
// befor adds html before the tag starts  
// after adds html after the end tag of html 
// appends adds html befor end tag 
// prepend adds html before start tag 
//before
{/* <h1>
    //prepend
    //code 
    //append 
</h1> */}
//after