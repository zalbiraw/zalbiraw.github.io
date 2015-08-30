$(document).ready ( function() {
	var search_box = $('#search-box'),
		search_input = $('#search-box input'),
		menu_box = $('#menubar-box'),
		filter_box_outer = $('#filter-box-outer'),
		filter_toggle = 0,
		sidebar_toggle = 0,
		but_filter = $('#filter-icon'),
		but_sidebar = $('#sidebar-icon'),
		but_sidebar_mask = $('#sidebar-mask'),
		filter_box = $('#filter-box'),
		body = $('body'),
		sliding_container = $('#sliding-container'),
		breadcrumb = document.getElementById("breadcrumb"),
		scroll_cache = 0,
		menu_scroll = 0;


	search_input.focusin(function() {
		search_box.addClass('infocus');
	});

	search_input.focusout(function() {
		search_box.removeClass('infocus');
	});

	but_filter.click(function() {
		if (filter_toggle)
			filter_collapse()
		else {
			close_sidebar()

			filter_toggle = 1;
			filter_box.removeClass('collapsed').addClass('expanded');
		}
	});

	but_sidebar.click(function() {
		if (sidebar_toggle)
			close_sidebar()
		else {
			filter_collapse()

			sidebar_toggle = 1;
			body.addClass('push-sidebar');
		}
	});

	but_sidebar_mask.click(function() {
		close_sidebar()
	});

	$('#question-arrays .item-edit').click(function(){
		slide_in(this)
	});

	$('#test-rooms .item-qlist').click(function(){
		slide_in(this)
	});

	$('.slide-back').click(function() {
		slide_out()
	});

	function filter_collapse() {
		filter_toggle = 0;
		filter_box.removeClass('expanded').addClass('collapsed');
	}

	function close_sidebar() {
		sidebar_toggle = 0;
		body.removeClass('push-sidebar');
	}

	function slide_in(elm) {
		filter_collapse();
		sliding_container.addClass('slide');
		//scroll_cache = body.scrollTop();
		window.scrollTo(0, 0);
		breadcrumb.innerHTML = elm.parentElement.getElementsByClassName('item-title')[0].innerHTML
	}

	 function slide_out() {
	 	filter_collapse();
		sliding_container.removeClass('slide')
		//window.scrollTo(0, scroll_cache);
		window.scrollTo(0, 0);
	}

	$(window).bind('mousewheel', function(event) {
	    menu_scroll += ($(window).scrollTop() + $(window).height() == $(document).height() ? 0 : 
	    	(event.originalEvent.wheelDelta >= 0 && menu_scroll < 0 ? 1 :
	    	(event.originalEvent.wheelDelta < 0 && menu_scroll > -70 ? -1 : 0)));
	    
	    menu_box.css("margin-top", menu_scroll);
	    filter_box_outer.css("margin-top", menu_scroll+60);
	});
});
