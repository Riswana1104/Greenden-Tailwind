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