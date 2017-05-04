var pureCss = document.createElement('link');
pureCss.setAttribute('rel','stylesheet');
pureCss.setAttribute('href','https://unpkg.com/purecss@0.6.2/build/pure-min.css" integrity="sha384-UQiGfs9ICog+LwheBSRCt1o5cbyKIHbwjWscjemyBMT9YCUMZffs6UqUTd0hObXD" crossorigin="anonymous');
document.head.appendChild(pureCss);

var sseForm = document.createElement('div');
sseForm.setAttribute('class','pure-form');
sseForm.setAttribute('id','sseForm');

var dealerNum = prompt("Please enter your dealer number."); 
var dealerZip = prompt("Please enter your ZIP code."); 

function url() { 
  var date = new Date(); 
  var y = date.getFullYear(); 
  var m = date.getMonth() +1; 
  if(m < 10){
    m = '0' + m;
  } 
  var d = date.getDate(); 
  if(d < 10){
    d = '0' + d;
  } 
  var date = y + "-" + m + "-" + d; 
  return 'https://www.fedex.com/apps/fedextrack/?action=altref&trackingnumber='+ dealerNum +'&cntry_code=us&shipdate=' + date +'&account_number=&dest_cntry=us&dest_postal='+ dealerZip; 
}
window.open(url(),'_blank');
