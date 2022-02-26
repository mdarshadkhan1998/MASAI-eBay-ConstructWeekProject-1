



// for store option in home page

var store= document.querySelectorAll("#store > p")
for(var i=0;i<store.length;i++){
    store[i].addEventListener("click",gotostore);
}

function gotostore(){
  window.location.href='../marketing_promotion/why_get_an_ebay_store.html'
}

// for marketing and promotion option in home page
var marketing= document.querySelectorAll("#Promotions > p");
for(var j=0;j<marketing.length;j++){
    marketing[j].addEventListener("click",gotomarketing)
}
 function gotomarketing(){
     window.location.href='../promoted_listings/promoted_listings.html'
     console.log('yes')
 }