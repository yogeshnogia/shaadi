console.log('Hello');



$(document).ready(function() {

	var $toggleButton = $('.toggle-button'),
    	$menuWrap = $('.menu-wrap'),
    	$sidebarArrow = $('.sidebar-menu-arrow');

	// Hamburger button

	$toggleButton.on('click', function() {
		$(this).toggleClass('button-open');
		$menuWrap.toggleClass('menu-show');
	});

	// Sidebar navigation arrows

	$sidebarArrow.click(function() {
		$(this).next().slideToggle(300);
	});

    $('#events').find('.card').click(function(){

      //Expand or collapse this panel
      $(this).css({
      	"box-shadow": "0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);"
      });
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".neha_show").not($(this).next()).slideUp('fast');
 }); 

});