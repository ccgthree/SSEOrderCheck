// Version 0.1 - No dynamic loading.
// This is the OG bookmarklet that I used.
javascript:function url() { var date = new Date(); var y = date.getFullYear(); var m = date.getMonth() +1; if(m < 10){m = '0' + m;} var d = date.getDate(); if(d < 10){d = '0' + d;} var date = y + "-" + m + "-" + d; var dealerNum = prompt("Please enter your dealer number."); var dealerZip = prompt("Please enter your ZIP code."); return 'https://www.fedex.com/apps/fedextrack/?action=altref&trackingnumber='+ dealerNum +'&cntry_code=us&shipdate=' + date +'&account_number=&dest_cntry=us&dest_postal='+ dealerZip; } window.open(url(),"_blank");

// Version 1 - Production-Ready Bookmarklet
javascript:(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','https://rawgit.com/ccgthree/SSEOrderCheck/master/SSEOrderCheck.js');document.body.appendChild(jsCode);setTimeout(function(){doStuff();},500)})();

/* HTML Markup for Link
<a class="bookmarklet" href="javascript:(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','https://rawgit.com/ccgthree/SSEOrderCheck/master/SSEOrderCheck.js');document.body.appendChild(jsCode);setTimeout(function(){doStuff();},500)})();">SSE Tracking</a>
*/

// Version 1.1 - My Bookmarklet
javascript:function url() { var date = new Date(); var y = date.getFullYear(); var m = date.getMonth() +1; if(m < 10){m = '0' + m;} var d = date.getDate(); if(d < 10){d = '0' + d;} var date = y + "-" + m + "-" + d; var dealerNum = '46818'; var dealerZip = '35640'; return 'https://www.fedex.com/apps/fedextrack/?action=altref&trackingnumber='+ dealerNum +'&cntry_code=us&shipdate=' + date +'&account_number=&dest_cntry=us&dest_postal='+ dealerZip; } window.open(url(),"_blank");
