$(document).ready ( function() {
	var toggle = false, elm_old = 0, elm_new = 1;

	$('.active i').addClass("fa fa-arrow-circle-right fa-lg");
	$('.inactive i').addClass("fa fa-info-circle fa-lg");
	$('.pending i').addClass("fa fa-circle-o-notch fa-spin fa-lg");
	$('.item i#lock').addClass("fa fa-lock fa-lg");
	$('.item i#unlock').addClass("fa fa-unlock-alt fa-lg");
	
	$('.inactive').click(function() {
		elm_new = this;
		if (elm_old == elm_new) {
			if (toggle) {
				toggle = false;
				$(this).removeClass("expanded").addClass("collapsed")
			}
			else {
				toggle = true;
				$(this).removeClass("collapsed").addClass("expanded")
			}
		}
		else {
			toggle = true;
			$(elm_old).removeClass("expanded").addClass("collapsed");
			$(elm_new).removeClass("collapsed").addClass("expanded")
		}
		elm_old = elm_new;
	});
	
	$('.active').click(function() {
		toggler()
	});
	$('.pass').click(function() {
		toggler()
	});
	$('.fail').click(function() {
		toggler()
	});
	
	function toggler() {
		$(elm_old).removeClass("expanded").addClass("collapsed")
	}
});
