// Version 1 - No dynamic loading.
javascript:function url() { var date = new Date(); var y = date.getFullYear(); var m = date.getMonth() +1; if(m < 10){m = '0' + m;} var d = date.getDate(); if(d < 10){d = '0' + d;} var date = y + "-" + m + "-" + d; var dealerNum = prompt("Please enter your dealer number."); var dealerZip = prompt("Please enter your ZIP code."); return 'https://www.fedex.com/apps/fedextrack/?action=altref&trackingnumber='+ dealerNum +'&cntry_code=us&shipdate=' + date +'&account_number=&dest_cntry=us&dest_postal='+ dealerZip; } window.open(url(),"_blank");


// Version 3 - Dynamic Loading with load event listener.
// this version is blocked by popup blockers because the user didn't expressly request
// the new tab (or new window) link.
javascript:(function(){var jsCode = document.createElement('script'); jsCode.setAttribute('src','https://rawgit.com/ccgthree/SSEOrderCheck/master/SSEOrderCheck.js'); document.body.appendChild(jsCode); jsCode.addEventListener('load', function (e) {console.log(e); window.open(url(),'_blank');};)}());
