function checkJq() {
  if(!window.jQuery || !window.jQuery.ui) {
    var jsDepend = [];
    jsDepend.push('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
    var pageHead = document.getElementsByTagName('head')[0];
    var jqInject = document.createElement('script');
    jqInject.setAttribute('type','text/javascript');
    jqInject.setAttribute('src',jsDepend[0]);
    pageHead.appendChild(jqInject);
  } else {
  }
}

checkJq();

// Construct url using user input.
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
  var shipDate = y + "-" + m + "-" + d;
  var dealerNum = prompt("Please enter your dealer number.");
  var dealerZip = prompt("Please enter your ZIP code.");
  var linkResult = 'https://www.fedex.com/apps/fedextrack/?action=altref&trackingnumber='+ dealerNum +'&cntry_code=us&shipdate=' + shipDate +'&account_number=&dest_cntry=us&dest_postal='+ dealerZip;
  return linkResult;
}

// Construct link and prepare it for display.
// The display will be handled by the callback function.
function buildLink(callback){
  var floatingPanel = document.createElement('a');
  var panelStyle = 'display:none; position:fixed;z-index:9999999;top:10px;width:200px;left:50%;margin-left:-100px;font-family:Helvetica;color:#ffffff;background-color:#f4a802; text-decoration:none; text-align:center; box-shadow:0px 2px 10px #999999; border-radius:4px; ';
  floatingPanel.setAttribute('href', url());
  floatingPanel.setAttribute('style', panelStyle);
  floatingPanel.setAttribute('id', 'clickPanel');
  floatingPanel.setAttribute('target','_blank');
  var linkHeader = document.createElement('h3');
  linkHeader.setAttribute('style','line-height:40px; text-decoration:none; font-size-adjust:0.7;');
  var linkText = document.createTextNode('Track Shipments');
  floatingPanel.appendChild(linkHeader);
  linkHeader.appendChild(linkText);
  document.body.appendChild(floatingPanel);
  callback();
}

// Include asynchronous callback function to 
// display the link AFTER jQuery has loaded. This will
// hold the display / destruct functionality of the link
// for 500ms. 

/*
buildLink(function() {
  setTimeout(function(){
    $('#clickPanel').fadeIn(1000);
    $('#clickPanel').click(function() {
      $('#clickPanel').fadeOut(500);
    });
  }, 500);
});
*/

// Wrapped final function in doStuff, so that
// the code can be called by the bookmarklet. 
function doStuff() {
  buildLink(function() {
  setTimeout(function(){
    $('#clickPanel').fadeIn(1000);
    $('#clickPanel').click(function() {
      $('#clickPanel').fadeOut(500);
    });
  }, 500);
});
}