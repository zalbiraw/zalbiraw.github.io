$(document).ready ( function() {
	var s_container = document.getElementById("sliding-container"),
		breadcrumb = document.getElementById("breadcrumb");

	$('#question-arrays .item-edit').click(function(){
		slide(this)
	});

	$('.item-qlist').click(function(){
		slide(this)
	});

	$('.slide-back').click(function(){
		slide_back()
	});

	function slide(elm){
		$(s_container).addClass('slide');
		breadcrumb.innerHTML = elm.parentElement.getElementsByClassName('item-title')[0].innerHTML
	}

	function slide_back(){
		$(s_container).removeClass('slide')
	}
});
