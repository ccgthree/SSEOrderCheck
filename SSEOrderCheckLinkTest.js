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
  var dealerNum = prompt("Please enter your dealer number.");
  var dealerZip = prompt("Please enter your ZIP code.");
  var linkResult = 'https://www.fedex.com/apps/fedextrack/?action=altref&trackingnumber='+ dealerNum +'&cntry_code=us&shipdate=' + date +'&account_number=&dest_cntry=us&dest_postal='+ dealerZip;
  return linkResult;
}

function displayLink(){
  var floatingPanel = document.creatElement('a');
  var panelStyle = 'display:block;position:fixed;z-index:9999999;top:10px;width:200px;left:50%;margin-left:-100px;font-family:Helvetica;color:#ffffff;background-color:#f4a802;';
  floatingPanel.setAttribute('href', url());
  floatingPanel.setAttribute('style', panelStyle);
  floatingPanel.setAttribute('id', 'clickPanel');
  floatingPanel.setAttribute('target','_blank');
  var linkText = document.createTextNode("Track Shipments");
  floatingPanel.appendChild(linkText);
  document.body.appendChild(floatingPanel);
}
