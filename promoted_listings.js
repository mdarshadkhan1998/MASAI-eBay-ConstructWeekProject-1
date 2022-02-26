

 

 display()

function display(){


    document.getElementById("part1").addEventListener("click", show);
function show(){

  var box1=  document.createElement("p");
  box1.innerText="Promoted Listings Express appear as ads on similar listings’ pages, which means that your listing is in the right place at the right time."
  var box2=  document.createElement("p");
box2.innerText="More visibility means more views, which increases your chances of a sale."

var box3=  document.createElement("p");
box3.innerText="With simple tiered pricing, you don’t have to worry about how to price your ad."
var all=document.createElement("div");
all.style.width="100%";
all.style.height="300px"
all.style.backgroundColor='whitesmoke';
all.style.display='flex'
all.append(box1,box2,box3);

    document.querySelector("#beforefooter> #second > div").append(all)

    

    console.log('working')
    
};







// =========================================================================
document.getElementById("part2").addEventListener("click", show);


     var h3=document.createElement("h3");
     h3.innerText="Be auction listings"
  var box1=  document.createElement("p");
  box1.innerText="Can be in any category other than Vehicles, Real Estate, Travel, or other select categories"
  var box2=  document.createElement("p");
box2.innerText="Your seller level is Above Standard or Top Rated"

var box3=  document.createElement("p");
box3.innerText="With simple tiered pricing, you don’t have to worry about how to price your ad."
var all=document.createElement("div");
all.style.width="100%";
all.style.height="300px"
all.style.backgroundColor='whitesmoke'
all.style.display='flex'
all.append(h3,box1,box2,box3);

    document.querySelector("#beforefooter> #second > div").append(all)

   

    // console.log('working')
    











};