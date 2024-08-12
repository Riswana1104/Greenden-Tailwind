// select side nav,menuicon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",function()
{
   sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
  sidenav.style.display="none"  
})

// product search functionality

var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div"); // Select all product divs

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase()
    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h2").textContent; // Change h1 to h2
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        } else {
            productlist[count].style.display = "block"
        }
    }
})
