
$('.zoom').fancybox();
$(window).scroll(function(){
	if ($(this).scrollTop() > 1){
		$('.app-navbar').addClass('slim');
	} else {
		$('.app-navbar').removeClass('slim');
	}
});


//Analytics
!function(n,i,c,o,l,a,s){n.GoogleAnalyticsObject=c;n[c]||(n[c]=function(){
(n[c].q=n[c].q||[]).push(arguments)});n[c].l=+new Date;a=i.createElement(o);
s=i.getElementsByTagName(o)[0];a.src=l;s.parentNode.insertBefore(a,s)}
(window,document,'ga','script','//www.google-analytics.com/analytics.js');

ga('create', 'UA-43723492-4', 'blog.chypriote.me');
ga('send', 'pageview');