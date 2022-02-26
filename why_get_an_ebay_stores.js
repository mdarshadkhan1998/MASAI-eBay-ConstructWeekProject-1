// table data for all ebay listing items, just below the boxes
// 1st row
var row1= document.createElement("tr");
row1.setAttribute("id","row1")
var col1= document.createElement("td");
var col2= document.createElement("td");
var col3= document.createElement("td");

col1.innerHTML = "1000 listings";
col2.innerHTML = "Insertion Fees: $262.5";
col3.innerHTML = "Insertion Fees: $0";
row1.append(col1,col2,col3);
document.getElementById('tbody').append(row1);
//2nd row
var row2= document.createElement("tr");
row2.setAttribute("id","row2")
var col1= document.createElement("td");
var col2= document.createElement("td");
var col3= document.createElement("td");

col1.innerHTML = "1000 items sold";
col2.innerHTML = "Final Value Fees: $1555";
col3.innerHTML = "Final Value Fees: $1170";
row2.append(col1,col2,col3);
document.getElementById('tbody').append(row2);

//3rd row
var row3= document.createElement("tr");
row3.setAttribute("id","row3")
var col1= document.createElement("td");
var col2= document.createElement("td");
var col3= document.createElement("td");

col1.innerHTML = "$10 per sold item";
col2.innerHTML = "Subscription Fee: $0";
col3.innerHTML = "Subscription Fee: $21.95";
row3.append(col1,col2,col3);
document.getElementById('tbody').append(row3);

//4th row
var row4= document.createElement("tr");
row4.setAttribute("id","row4")
var col1= document.createElement("td");
var col2= document.createElement("td");
var col3= document.createElement("td");

col1.innerHTML = "$10,000 in sales";
col2.innerHTML = "Total fees: $1817.5";
col3.innerHTML = "Total fees: $1191.95";
row4.append(col1,col2,col3);
document.getElementById('tbody').append(row4);


row1.addEventListener("mouseenter",function(){
  row1.style.background="rgb(252,242,189)";
    // console.log('change')
});
row1.addEventListener("mouseleave",function(){
    row1.style.background="white";
    //   console.log('change')
  });

  row2.addEventListener("mouseenter",function(){
    row2.style.background="rgb(252,242,189)";
     
  });
  row2.addEventListener("mouseleave",function(){
      row2.style.background="rgb(247,227,118)";
        
    });

    row3.addEventListener("mouseenter",function(){
        row3.style.background="rgb(252,242,189)";
         
      });
      row3.addEventListener("mouseleave",function(){
          row3.style.background="white";
            
        });

        row4.addEventListener("mouseenter",function(){
            row4.style.background="rgb(252,242,189)";
             
          });
          row4.addEventListener("mouseleave",function(){
              row4.style.background="rgb(247,227,118)";
                
            });
          
// 2nd table formation 
//1st row
    var rows1= document.createElement('tr');
    rows1.className='rows'
    
    var column1= document.createElement('td');
    var column2= document.createElement('td');
    var column3= document.createElement('td');
    var column4= document.createElement('td');
    var column5= document.createElement('td');
    var column6= document.createElement('td');

    column1.innerHTML="Price per month for a yearly subscription"
    column2.innerHTML="$4.95"
    column3.innerHTML="$21.95"
    column4.innerHTML="$59.95"
    column5.innerHTML="$299.95"
    column6.innerHTML="$2,999.95"
  rows1.append(column1,column2,column3,column4,column5,column6);
  document.getElementById("table2").append(rows1);

  // 2nd row
  var rows2= document.createElement('tr');
  rows2.className='rows'
  var column1= document.createElement('td');
  var column2= document.createElement('td');
  var column3= document.createElement('td');
  var column4= document.createElement('td');
  var column5= document.createElement('td');
  var column6= document.createElement('td');

  column1.innerHTML="Best for sellers who"
  column2.innerHTML="Best for sellers who have a handful of products and want a storefront to brand and promote their business."
  column3.innerHTML="Unlock 250 more zero insertion fee listings, final value fee discounts, and a coupon for eBay-branded shipping supplies each quarter."
  column4.innerHTML="If you have an extensive product assortment, a Premium Store subscription gives you substantially more zero insertion fee listings."
  column5.innerHTML="For high volume sellers who have an extensive product catalog or are running a business that would benefit from dedicated customer support."
  column6.innerHTML="For high volume sellers who have an extensive product catalog or are running a business that would benefit from dedicated customer support."
rows2.append(column1,column2,column3,column4,column5,column6);
document.getElementById("table2").append(rows2);

// 3rd row of table
var rows3= document.createElement('tr');
rows3.className='rows'
var column1= document.createElement('td');
var column2= document.createElement('td');
var column3= document.createElement('td');
var column4= document.createElement('td');
var column5= document.createElement('td');
var column6= document.createElement('td');

column1.innerHTML="Free fixed price insertions*"
column2.innerHTML="250"
column3.innerHTML="1,000 all categories 10,000 select categories**"
column4.innerHTML="10,000 all categories 50,000 select categories**"
column5.innerHTML="25,000 all categories 75,000 select categories**5"
column6.innerHTML="100,000 all categories 100,000 select categories**"
rows3.append(column1,column2,column3,column4,column5,column6);
document.getElementById("table2").append(rows3);

//4th row of table
var rows4= document.createElement('tr');
rows4.className='rows'
var column1= document.createElement('td');
var column2= document.createElement('td');
var column3= document.createElement('td');
var column4= document.createElement('td');
var column5= document.createElement('td');
var column6= document.createElement('td');

column1.innerHTML="Additional fixed price insertion*"
column2.innerHTML="$0.30"
column3.innerHTML="$0.25"
column4.innerHTML="$0.10"
column5.innerHTML="$0.05"
column6.innerHTML="$0.05"
rows4.append(column1,column2,column3,column4,column5,column6);
document.getElementById("table2").append(rows4);

// 5th row of table 
var rows5= document.createElement('tr');
rows5.className='rows'
var column1= document.createElement('td');
var column2= document.createElement('td');
var column3= document.createElement('td');
var column4= document.createElement('td');
var column5= document.createElement('td');
var column6= document.createElement('td');

column1.innerHTML="Final Value Fees*"
column2.innerHTML="0%–15.00% + $0–$0.30 per order + International Fee***"
column3.innerHTML="0%–14.55% + $0–$0.30 per order+ International Fee**"
column4.innerHTML="0%–14.55% + $0–$0.30 per order+ International Fee*"
column5.innerHTML="0%–14.55% + $0–$0.30 per order + International Fee***"
column6.innerHTML="0%–14.55% + $0–$0.30 per order+ International Fee***"
rows5.append(column1,column2,column3,column4,column5,column6);
document.getElementById("table2").append(rows5);