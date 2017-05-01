$(document).ready(function(){

	$('#slider1').change(function() {
		$(".overlay").removeClass (function (index, className) {
		  return (className.match (/(^|\s)darken-\S+/g) || []).join(' ');
		});
		$('#none').click();
    var cls_array = ['', 'darken-low', 'darken-medium', 'darken-high'];
    $('.overlay').addClass(cls_array[$(this).val()]);
	});

	$('#slider2').change(function() {
		$(".overlay").removeClass (function (index, className) {
		  return (className.match (/(^|\s)blur-\S+/g) || []).join(' ');
		});
    var cls_array = ['', 'blur-low', 'blur-medium', 'blur-high'];
    $('.overlay').addClass(cls_array[$(this).val()]);
	});

	function checklighten() {
		var lighten = document.getElementById("lighten").checked;
		console.log('#lighten', lighten);
	}
	checklighten()

	$('#none').click(function() {
		$(".overlay").removeClass ('lighten');
		$(".overlay").removeClass (function (index, className) {
		  return (className.match (/(^|\s)vintage\S+/g) || []).join(' ');
		});
	});

  function pleaseNameMe(cls) {
		$('#slider1').val(0);
		$(".overlay").removeClass (function (index, className) {
		  return (className.match (/(^|\s)darken-\S+/g) || []).join(' ');
		});
		$(".overlay").removeClass (function (index, className) {
		  return (className.match (/(^|\s)vintage\S+/g) || []).join(' ');
		});
		$('.overlay').addClass(cls);
  }

	$('#lighten').click(function() {
    pleaseNameMe('lighten');
	});

	$('#vintage1').click(function() {
    pleaseNameMe('vintage1');
	});

	$('#vintage2').click(function() {
    pleaseNameMe('vintage2');
	});

	$('.overlay-edit').click(function () {
		$(this).addClass('hide');
		$('.overlay-options').removeClass('hide');
	})

	$('.overlay-close').click(function () {
		$('.overlay-edit').removeClass('hide');
		$('.overlay-options').addClass('hide');
	})


});