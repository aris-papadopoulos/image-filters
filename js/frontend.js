$( document ).ready(function() {
	var scroll_top_results;
	/* site header */

	$('.burger').click(function(){
		// if($(window).scrollTop() > 0) {
		// 	console.log('more than 0');
		// 	window.scrollTo(0,0);
		// }

		$(this).toggleClass('open');
		if($('.hotel-container').hasClass('hidden')){
			// $('.hotel-header').removeClass('hotel-header_closed');
			$('body').addClass('modal-open');
			$('.hotel-container').fadeIn().removeClass('hidden');
		}else{

			$('body').removeClass('modal-open');

			$('#room_info').fadeOut().removeClass('active');
			$('.hotel-container').fadeOut().addClass('hidden');
		}

	})

			

	$('.lang_selector').click(function(){
		$('.lang_list').toggleClass('open');
	})
	
	$('.lang_list ul li').click(function(){
		$('.lang_list ul li').each(function(){
			$(this).removeClass('lang_active');
		})
		$(this).addClass('lang_active');

		$('.language').text($(this).text());
		$('.lang_list').removeClass('open');
	})

	/* site main */
		/*sync engine */
		var month = new Array();
		month[0] = "Jan";
		month[1] = "Feb";
		month[2] = "Mar";
		month[3] = "Apr";
		month[4] = "May";
		month[5] = "Jun";
		month[6] = "Jul";
		month[7] = "Aug";
		month[8] = "Sept";
		month[9] = "Oct";
		month[10] = "Nov";
		month[11] = "Dec";

		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth(); //January is 0!
		var yyyy = today.getFullYear();
		$('.checkin_day').text(dd);
		if( (dd+1)>31 ){
			$('.checkout_day').text(1);
			if((mm+1) == 12){
				$(".checkout_month").text(month[0]);

			}else{
				$(".checkout_month").text(month[mm+1]);
			}

		}else{
			$('.checkout_day').text(dd+1);
			$(".checkout_month").text(month[mm]);

		}
		$('.checkin_year').text(yyyy);
		$('.checkout_year').text(yyyy);
		$(".checkin_month").text(month[mm]);

		$( "#checkin_datepicker" ).datepicker({
      		inline: true,
      		firstDay: 1,
            dateFormat: 'dd/mm/yy',
            minDate: 0,
      		dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            onSelect: function(dateText, inst) { 

	            	var dateAsObject = $(this).datepicker( 'getDate' ); 

	                $('.checkin_day').html(dateAsObject.getDate());
	                $('.checkin_month').html(month[dateAsObject.getMonth()]);
	                $('.checkin_year').html(dateAsObject.getUTCFullYear());
	    
	 				if( dateAsObject >= $("#checkout_datepicker").datepicker( 'getDate' )) {
						var date2 = dateAsObject;
						date2.setDate(date2.getDate()+1);
						jQuery('#checkout_datepicker').datepicker( "option", "minDate", date2 );
						$('.checkout_day').html(date2.getDate());
						$('.checkout_month').html(month[date2.getMonth()]);
						$('.checkout_year').html(date2.getUTCFullYear());
	            	}else{
	            		var date2 = dateAsObject;
						date2.setDate(date2.getDate()+1);
						jQuery('#checkout_datepicker').datepicker( "option", "minDate", date2 );

	            	}

	            	setTimeout(function(){
		            	$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
						$('.checkin').removeClass('active');
						
			            $('#checkout_datepicker').fadeIn( 400, "easeInOutQuad" );
	            		
	            	}, 600);
      			 
            }

      	});
       
		$( "#checkout_datepicker" ).datepicker({
      		inline: true,
      		firstDay: 1,
            dateFormat: 'dd/mm/yy',
            minDate: 1,
      		dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            onSelect: function(dateText, inst) {

               var dateAsObject = $(this).datepicker( 'getDate' ); 
                $('.checkout_day').html(dateAsObject.getDate());
                $('.checkout_month').html(month[dateAsObject.getMonth()]);
                $('.checkout_year').html(dateAsObject.getUTCFullYear());

            	setTimeout(function(){
	            	$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
					$('.checkout').removeClass('active');
					$('body').removeClass('modal-open');
            		
            	}, 600);
            }

      	});


      	$('#adults_selector .cdb-8').click(function(){

				$('#adults_num').text($(this).children('span').text());

				
				if ($(this).children('span').text() == 0){
					$('#adults_num').html('&#45;').css('font-weight', '300');
				}

				else {

					$('#adults_num').css('font-weight', '700');

				 }

			setTimeout(function(){

				$('#adults_selector').fadeOut( 400, "easeInOutQuad" );
				$('.sync_engine').children().removeClass('active');
				$('body').removeClass('modal-open');

			}, 600);

		});


      	$('#children_selector .cdb-8').click(function(){
	

				$('#children_num').text($(this).children('span').text()).css('font-weight', '700');


				if ($(this).children('span').text() == 0){
					$('#children_num').html('&#45;').css('font-weight', '300');
				}

				else {

					$('#children_num').css('font-weight', '700');

				}

			setTimeout(function(){

				$('#children_selector').fadeOut( 400, "easeInOutQuad" );
				$('.sync_engine').children().removeClass('active');
				$('body').removeClass('modal-open');

			}, 600);

		});


      	$('#babies_selector .cdb-8').click(function(){
			$('#babies_num').text($(this).children('span').text()).css('font-weight', '700');

			if ($(this).children('span').text() == 0){
				$('#babies_num').html('&#45;').css('font-weight', '300');
			}

			else {

				$('#babies_num').css('font-weight', '700');

			}

			setTimeout(function(){

				$('#babies_selector').fadeOut( 400, "easeInOutQuad" );
				$('.sync_engine').children().removeClass('active');
				$('body').removeClass('modal-open');

			}, 600);


		
		});

		

		$('#room_selector .select_room').click(function(){

				$('#rooms_num').text($(this).children('span').text());

			setTimeout(function(){

				$('#room_selector').fadeOut( 400, "easeInOutQuad" );
				$('.sync_engine').children().removeClass('active');
				$('body').removeClass('modal-open');
				
			}, 600);


		});

		
		$('#sel_2room').click(function(){
			$('.room2_guests').removeClass('false');
		});

		$('#sel_1room').click(function(){
			$('.room2_guests').addClass('false');
		});

	// guests counter for room 1
		var room_one_guests;

		$('#room1_plus_adlt').click(function(){
			var child_num = parseInt($('#children_number').html());
			var adlt_num = parseInt($('#adults_number').html());
			var inf_num = parseInt($('#infants_number').html());

			adlt_num = adlt_num + 1;
			if(adlt_num<=9) {
				$('#adults_number').html(adlt_num);
				room_one_guests =  child_num + adlt_num + inf_num;
				$('#guest_1_num').html(room_one_guests);
			}
		});

		$('#room1_minus_adlt').click(function(){
			var child_num = parseInt($('#children_number').html());
			var adlt_num = parseInt($('#adults_number').html());
			var inf_num = parseInt($('#infants_number').html());
			adlt_num = adlt_num - 1;
			if(adlt_num>=0) {
				$('#adults_number').html(adlt_num);
				room_one_guests =  child_num + adlt_num + inf_num;
				$('#guest_1_num').html(room_one_guests);
			}
		});


		$('#room1_plus_child').click(function(){
			var child_num = parseInt($('#children_number').html());
			var adlt_num = parseInt($('#adults_number').html());
			var inf_num = parseInt($('#infants_number').html());

			child_num = child_num + 1;
			if(child_num<=9) {
				$('#children_number').html(child_num);
				room_one_guests =  child_num + adlt_num + inf_num;
				$('#guest_1_num').html(room_one_guests);
			}
		});

		$('#room1_minus_child').click(function(){
			var child_num = parseInt($('#children_number').html());
			var adlt_num = parseInt($('#adults_number').html());
			var inf_num = parseInt($('#infants_number').html());

			child_num = child_num - 1;
			if(child_num>=0) {
				$('#children_number').html(child_num);
				room_one_guests =  child_num + adlt_num + inf_num;
				$('#guest_1_num').html(room_one_guests);
			}
		});


		$('#room1_plus_inf').click(function(){
				var child_num = parseInt($('#children_number').html());
			var adlt_num = parseInt($('#adults_number').html());
			var inf_num = parseInt($('#infants_number').html());

			inf_num = inf_num + 1;
			if(inf_num<=9) {
				$('#infants_number').html(inf_num);
				room_one_guests =  child_num + adlt_num + inf_num;
				$('#guest_1_num').html(room_one_guests);
			}
		});

		$('#room1_minus_inf').click(function(){
				var child_num = parseInt($('#children_number').html());
			var adlt_num = parseInt($('#adults_number').html());
			var inf_num = parseInt($('#infants_number').html());

			inf_num = inf_num - 1;
			if(inf_num>=0) {
				$('#infants_number').html(inf_num);
				room_one_guests =  child_num + adlt_num + inf_num;
				$('#guest_1_num').html(room_one_guests);
			}
		});

	// guests counter for room 2
		var room_two_guests;

		$('#room2_plus_adlt').click(function(){
			var child_num = parseInt($('#children_number_2').html());
			var adlt_num = parseInt($('#adults_number_2').html());
			var inf_num = parseInt($('#infants_number_2').html());

			adlt_num = adlt_num + 1;
			if(adlt_num<=9) {
				$('#adults_number_2').html(adlt_num);
				room_two_guests =  child_num + adlt_num + inf_num;
				$('#guest_2_num').html(room_two_guests);
			}
		});

		$('#room2_minus_adlt').click(function(){
			var child_num = parseInt($('#children_number_2').html());
			var adlt_num = parseInt($('#adults_number_2').html());
			var inf_num = parseInt($('#infants_number_2').html());
			adlt_num = adlt_num - 1;
			if(adlt_num>=0) {
				$('#adults_number_2').html(adlt_num);
				room_two_guests =  child_num + adlt_num + inf_num;
				$('#guest_2_num').html(room_two_guests);
			}
		});


		$('#room2_plus_child').click(function(){
			var child_num = parseInt($('#children_number_2').html());
			var adlt_num = parseInt($('#adults_number_2').html());
			var inf_num = parseInt($('#infants_number_2').html());

			child_num = child_num + 1;
			if(child_num<=9) {
				$('#children_number_2').html(child_num);
				room_two_guests =  child_num + adlt_num + inf_num;
				$('#guest_2_num').html(room_two_guests);
			}
		});

		$('#room2_minus_child').click(function(){
			var child_num = parseInt($('#children_number_2').html());
			var adlt_num = parseInt($('#adults_number_2').html());
			var inf_num = parseInt($('#infants_number_2').html());

			child_num = child_num - 1;
			if(child_num>=0) {
				$('#children_number_2').html(child_num);
				room_two_guests =  child_num + adlt_num + inf_num;
				$('#guest_2_num').html(room_two_guests);
			}
		});


		$('#room2_plus_inf').click(function(){
				var child_num = parseInt($('#children_number_2').html());
			var adlt_num = parseInt($('#adults_number_2').html());
			var inf_num = parseInt($('#infants_number_2').html());

			inf_num = inf_num + 1;
			if(inf_num<=9) {
				$('#infants_number_2').html(inf_num);
				room_two_guests =  child_num + adlt_num + inf_num;
				$('#guest_2_num').html(room_two_guests);
			}
		});

		$('#room2_minus_inf').click(function(){
				var child_num = parseInt($('#children_number_2').html());
			var adlt_num = parseInt($('#adults_number_2').html());
			var inf_num = parseInt($('#infants_number_2').html());

			inf_num = inf_num - 1;
			if(inf_num>=0) {
				$('#infants_number_2').html(inf_num);
				room_two_guests =  child_num + adlt_num + inf_num;
				$('#guest_2_num').html(room_two_guests);
			}
		});



		$('.checkin').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
			}else{
				$('.sync_engine div').each(function(){
					$(this).removeClass('active')
				});
				$(this).addClass('active');
				$('#checkin_datepicker').fadeToggle( 400, "easeInOutQuad" );
				$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#adults_selector').fadeOut( 400, "easeInOutQuad" );
				$('#children_selector').fadeOut( 400, "easeInOutQuad" );
				$('#babies_selector').fadeOut( 400, "easeInOutQuad" );
				$('#guest_1_selector').fadeOut( 400, "easeInOutQuad" );
				$('#guest_2_selector').fadeOut( 400, "easeInOutQuad" );
				$('#room_selector').fadeOut( 400, "easeInOutQuad" );
			}
		}).children('#checkin_datepicker').click(function(e) {
			  return false;
		});

		$('.checkout').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
			}else{
				$('.sync_engine div').each(function(){
					$(this).removeClass('active')
				});
				$(this).addClass('active');
				$('#checkout_datepicker').fadeToggle( 400, "easeInOutQuad" );
				$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#adults_selector').fadeOut( 400, "easeInOutQuad" );
				$('#children_selector').fadeOut( 400, "easeInOutQuad" );
				$('#babies_selector').fadeOut( 400, "easeInOutQuad" );
				$('#guest_1_selector').fadeOut( 400, "easeInOutQuad" );
				$('#guest_2_selector').fadeOut( 400, "easeInOutQuad" );
				$('#room_selector').fadeOut( 400, "easeInOutQuad" );
			}
		}).children('#checkout_datepicker').click(function(e) {
			  return false;
		});

		$('.adults').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#adults_selector').fadeOut( 400, "easeInOutQuad" );
			}else{
				$('.sync_engine div').each(function(){
					$(this).removeClass('active')
				});
				$(this).addClass('active');
				$('#adults_selector').fadeToggle( 400, "easeInOutQuad" );
				$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#children_selector').fadeOut( 400, "easeInOutQuad" );
				$('#babies_selector').fadeOut( 400, "easeInOutQuad" );
			}
		}).children('#adults_selector').click(function(e) {
			  return false;
		});
	
		$('.children').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#children_selector').fadeOut( 400, "easeInOutQuad" );
			}else{
				$('.sync_engine div').each(function(){
					$(this).removeClass('active')
				});
				$(this).addClass('active');
				$('#adults_selector').fadeOut( 400, "easeInOutQuad" );
				$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#children_selector').fadeToggle( 400, "easeInOutQuad" );
				$('#babies_selector').fadeOut( 400, "easeInOutQuad" );
			}
		}).children('#children_selector').click(function(e) {
			  return false;
		});
		
		$('.babies').click(function(){

			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#babies_selector').fadeOut( 400, "easeInOutQuad" );
			}else{
				$('.sync_engine div').each(function(){
					$(this).removeClass('active')
				});
				$(this).addClass('active');
				$('#adults_selector').fadeOut( 400, "easeInOutQuad" );
				$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#children_selector').fadeOut( 400, "easeInOutQuad" );
				$('#babies_selector').fadeToggle( 400, "easeInOutQuad" );
			}	
		}).children('#babies_selector').click(function(e) {
			  return false;
		});

		$('.rooms_number').click(function(){

			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#room_selector').fadeOut( 400, "easeInOutQuad" );
			}else{
				$('.sync_engine div').each(function(){
					$(this).removeClass('active')
				});

				$(this).addClass('active');
				$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#guest_1_selector').fadeOut( 400, "easeInOutQuad" );
				$('#guest_2_selector').fadeOut( 400, "easeInOutQuad" );
				$('#room_selector').fadeToggle( 400, "easeInOutQuad" );
			}
		}).children('#room_selector').click(function(e){
			return false;
		});

		$('.room1_guests').click(function(){

			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#guest_1_selector').fadeOut( 400, "easeInOutQuad" );
			}else{
				$('.sync_engine div').each(function(){
					$(this).removeClass('active')
				});

				$(this).addClass('active');
				$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#guest_1_selector').fadeToggle( 400, "easeInOutQuad" );
				$('#guest_2_selector').fadeOut( 400, "easeInOutQuad" );
				$('#room_selector').fadeOut( 400, "easeInOutQuad" );
			}
		}).children('#guest_1_selector').click(function(e){
			return false;
		});

		$('.room2_guests').click(function(){

			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('#guest_2_selector').fadeOut( 400, "easeInOutQuad" );
			}else{
				$('.sync_engine div').each(function(){
					$(this).removeClass('active')
				});

				$(this).addClass('active');
				$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
				$('#guest_1_selector').fadeOut( 400, "easeInOutQuad" );
				$('#guest_2_selector').fadeToggle( 400, "easeInOutQuad" );
				$('#room_selector').fadeOut( 400, "easeInOutQuad" );
			}
		}).children('#guest_2_selector').click(function(e){
			return false;
		});
		 
		//CLICK OUTSIDE OF DIV CLOSE SELECTOR//

		$(document).bind("mouseup touchend", function (e){
			var container = $('.sync_engine, .lang_selector');

		if (!container.is(e.target) // if the target of the click isn't the container...
		&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{	$('.sync_engine').children().removeClass('active');
			//alert();
			$('#babies_selector').fadeOut( 400, "easeInOutQuad" );
			$('#checkout_datepicker').fadeOut( 400, "easeInOutQuad" );
			$('#adults_selector').fadeOut( 400, "easeInOutQuad" );
			$('#children_selector').fadeOut( 400, "easeInOutQuad" );
			$('#checkin_datepicker').fadeOut( 400, "easeInOutQuad" );
			$('#room_selector').fadeOut( 400, "easeInOutQuad" );
			$('#guest_1_selector').fadeOut( 400, "easeInOutQuad" );
			$('#guest_2_selector').fadeOut( 400, "easeInOutQuad" );
			$('.lang_list').removeClass('open');
		}
		});


		if ($(window).width() > 960 ){
			
			setTimeout(function(){ 
				if($('.special_offer_banner').hasClass('close')){
					$('.special_offer_banner').toggle('slide', {
				 	   direction: 'left'
					}, 500, "easeInOutQuad" );
				}
			}, 1000);

			$('.special_offer_banner .fa-times').click(function(){
				$('.special_offer_banner').toggle('slide', {
	         	   direction: 'left'
	        	}, 500 , "easeInOutQuad");
			});

		}


		$('.special_offer a').click(function(){
			$('.special_offer_modal').fadeIn( 400, "easeInOutQuad" ); 
			$('.special_offer_modal').removeClass('close');

			scroll_top_results = jQuery(window).scrollTop();
				console.log(scroll_top_results);

		});

	


		$('.special_offer_modal').on('click', function(e) {
		  if (e.target !== this)
		    return;
		 	$('.special_offer_modal').fadeOut( 400, "easeInOutQuad" ); 
			$('.special_offer_modal').addClass('close');
			$('body').removeClass('modal-open');

			jQuery(window).scrollTop(scroll_top_results);

		});


		$('.view-photos_modal').on('click', function(e) {
		  if (e.target !== this)
		    return;
		 	$('.view-photos_modal').fadeOut( 400, "easeInOutQuad" ); 
			$('.view-photos_modal').addClass('close');
			$('body').removeClass('modal-open');
			enableScroll();
		});


		$('.policy_modal').on('click', function(e) {
		  if (e.target !== this)
		    return;
			$('.policy_modal').fadeOut( 400, "easeInOutQuad" );
			$('.policy_modal').addClass('close');
			$('body').removeClass('modal-open');
			disbleScroll();
		});


		$('.terms_modal').on('click', function(e) {
		  if (e.target !== this)
		    return;
			$('.terms_modal').fadeOut( 400, "easeInOutQuad" );
			$('.terms_modal').addClass('close');
			$('body').removeClass('modal-open');

			jQuery(window).scrollTop(scroll_top_results);

			enableScroll();
		});

		
		$('.rooms_details').on('click', function(e) {
		  if (e.target !== this)
		    return;
			$('.rooms_details').fadeOut( 400, "easeInOutQuad" );
			$('.rooms_details').addClass('close');
			$('body').removeClass('modal-open');
		});

		$('.special_offer_modal .fa-times').click(function(){
			$('.special_offer_modal').fadeOut( 400, "easeInOutQuad" ); 
			jQuery(window).scrollTop(scroll_top_results);
			$('.special_offer_modal').addClass('close');


		});


		
		$('#select_extra').click(function() {
		    $('.breakfast > #price_extra').toggleClass("price_active");
		});


		$('#accept_terms').click(function() {
		    $('#button_payment').toggleClass("payment_active");
		});


		// Reservation Extras for Option 2
		$('#extras1_btn').click(function(){

			$('.res_extras-wrapper').addClass('slided-left');
			$('.res_extras2').removeClass('hidden');
			$(this).addClass('hidden');
			$('#extras2_btn').removeClass('hidden');

			setTimeout(function(){ 
				$('.res_extras1').addClass('hidden');
			}, 400);

		})

		$('#extras2_btn').click(function(){

			$('.res_extras-wrapper').removeClass('slided-left');
			$('.res_extras1').removeClass('hidden');
			$(this).addClass('hidden');
			$('#extras1_btn').removeClass('hidden');

			setTimeout(function(){ 
				$('.res_extras2').addClass('hidden');
			}, 400);

		})



		//	check if room has one rate option. if so then do not show descriprion div
		//	or if there are more than one rate options --> show description but truncated to up to 100chars
		$(".room_type_info").each(function(){  
			if($(this).children().length == 1){

				$('#features_general').addClass('hidden');

			} else {

				var roomDesc = $('#short_desc').text(),
				 	roomDescTrunc = $.trim(roomDesc).substring(0, 100).split(" ").slice(0, -1).join(" ") + "...";

		    		console.log(roomDesc);
		    		console.log(roomDescTrunc);

		    	$('#features_general #short_desc').text(roomDescTrunc);

			}

 		});


    		


		$('.hotel-menu span').click(function(){

			var this_element = $(this);
			var click_element = $(this).data('page');
			if(click_element=='room_types' && $('#room_info').hasClass('active') ){
				$('#room_info.active').toggle('slide', { direction: 'left'}, 500, "easeInOutQuad" ).removeClass('active');

			}else if(this_element.hasClass('active')  ) {


			}else if($('#room_info').hasClass('active')) {
				$('#room_info.active').toggle('slide', { direction: 'left'}, 500, "easeInOutQuad" ).removeClass('active');				
				$('.hotel-menu span').each(function(){
					$(this).removeClass('active');
				});
				this_element.addClass('active');
				$('.hotel-content.active').fadeOut('100',function(){
					if(click_element == 'photos' &&  !(this_element.hasClass('clicked')) ){
						flexsliderStart();
						this_element.addClass('clicked');

					}
					if(click_element == 'map' && !(this_element.hasClass('clicked')) ) {
							init_map();
							this_element.addClass('clicked');

					}
					$(this).removeClass('active');

					$('#'+click_element).fadeIn().addClass('active').scrollTop(0);
				})

			}else{
				$('.hotel-menu span').each(function(){
					$(this).removeClass('active');
				});
				this_element.addClass('active');
				$('.hotel-content.active').fadeOut(function(){
					if(click_element == 'photos' &&  !(this_element.hasClass('clicked')) ){
						flexsliderStart();
						this_element.addClass('clicked');

					}
					if(click_element == 'map' && !(this_element.hasClass('clicked')) ) {
							init_map();
							this_element.addClass('clicked');

					}
					$(this).removeClass('active');

					$('#'+click_element).fadeIn().addClass('active').scrollTop(0);
				})
			}
		})	
	
		$('.room_thumb').click(function(){
			flexSliderStartRoomInfo();
			$('#room_info').addClass('active');
			$('#room_info').toggle('slide', {
			 	   direction: 'left'
				}, 500, "easeInOutQuad" );

			// Read more/less for room description
		    $('#room_info .room-description p').each(function() {
			    var lessContent = 100;  // How many characters are shown by default
			    var ellipsestext = "...";
			    var moretext = "More";
			    var lesstext = "Less";
		        var fullContent = $(this).html();
		 
		        if(fullContent.length > lessContent) {
		 
		            var c = fullContent.substr(0, lessContent);
		            var h = fullContent.substr(lessContent, fullContent.length - lessContent);
		 
		            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
		 
		            $(this).html(html);
		        }

		        $(".morelink").click(function(){
			        if($(this).hasClass("less")) {
			            $(this).removeClass("less");
			            $(this).html(moretext);
			        } else {
			            $(this).addClass("less");
			            $(this).html(lesstext);
			        }
			        $(this).parent().prev().toggle();
			        $(this).prev().toggle();
			        return false;
			    });
		 
		    });
			
		})



		$('.close_room_type').click(function(){
			$('#room_info.active').toggle('slide', { direction: 'left'}, 500, "easeInOutQuad" ).removeClass('active');

		})

		$('.sync_calendar a, .room_calendar').click(function() {
			if($(this).hasClass('room_calendar') ) {
				scroll_top_results = jQuery(window).scrollTop();
				console.log(scroll_top_results);
			}
			$('.main-content').fadeOut( 0, "easeInOutQuad" ); 

			$('.calendar_modal').fadeIn( 400, "easeInOutQuad" ); 
			$('.calendar_modal').removeClass('close');
			var cal = $( '#calendar_one' ).calendario({
				weeks : [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ],

				onDayClick : function( el, contentEl, dateProperties ) {
					console.log(contentEl);

					for( var key in dateProperties ) {
						console.log( key + ' = ' + dateProperties[ key ] );
					}

				}
				
			} )
				
				 $( '#custom-month' ).html( cal.getMonthName() );
				 $( '#custom-year' ).html( cal.getYear() );

			$( '#custom-next' ).on( 'click', function() {
				cal.gotoNextMonth( updateMonthYear );
			} );

			$( '#custom-prev' ).on( 'click', function() {
				var d = new Date();
				var month = new Array();
				month[0] = "January";
				month[1] = "February";
				month[2] = "March";
				month[3] = "April";
				month[4] = "May";
				month[5] = "June";
				month[6] = "July";
				month[7] = "August";
				month[8] = "September";
				month[9] = "October";
				month[10] = "November";
				month[11] = "December";
				var n = month[d.getMonth()];
				console.log(n);
				console.log(cal.getMonthName() );
				if(n == cal.getMonthName()){

				}else{
					cal.gotoPreviousMonth( updateMonthYear );
				}
			} );
			$( '#custom-current' ).on( 'click', function() {
				cal.gotoNow( updateMonthYear );
			} );

			function updateMonthYear() {	
				$( '#custom-month' ).html( cal.getMonthName() );
				 $( '#custom-year' ).html( cal.getYear() );

			}
			var car = { 
				'09-01-2016':"<span class='no_available'></span>",
				'09-02-2016':"<span class='no_available'></span>",
				'09-03-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-04-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-05-2016':"<span class='no_available'></span>",
				'09-06-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-07-2016':"<span class='no_available'></span>",
				'09-08-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-09-2016':"<span class='no_available'></span>",
				'09-10-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-11-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-12-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-13-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-14-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-15-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-16-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-17-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-18-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-19-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-20-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-21-2016':"<span class='no_available'></span>",
				'09-22-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-23-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-24-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-25-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-26-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-27-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-28-2016':"<span class='no_available'></span>",
				'09-29-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-30-2016':"<span  class='available'><span>from</span><span> 200€</span></span>",
				'09-31-2016':"<span class='no_available'></span>",
			};
			cal.setData( car );
		
		});	
		

		$('.calendar_modal .fa-times').click(function(){
			$('.calendar_modal').fadeOut( 400, "easeInOutQuad" );
			$('.main-content').fadeIn( 400, "easeInOutQuad" ); 
			jQuery(window).scrollTop(scroll_top_results);
			$('.calendar_modal').addClass('close');
		});

		$('.policy_modal .fa-times').click(function(){
			$('.policy_modal').fadeOut( 400, "easeInOutQuad" );
			$('.policy_modal').addClass('close');
			enableScroll();
		});



		$('.view-photos_modal .fa-times').click(function(){
			$('.view-photos_modal').fadeOut( 400, "easeInOutQuad" );
			$('.view-photos_modal').addClass('close');
			enableScroll();
		});

		$('.room_policy').click(function(){
			$('.policy_modal').fadeIn( 400, "easeInOutQuad" ); 
			$('.policy_modal').removeClass('close');
			disableScroll();
		});


		$('#terms_conditions').click(function(){
			$('.terms_modal').fadeIn( 400, "easeInOutQuad" );

			scroll_top_results = jQuery(window).scrollTop();
				console.log(scroll_top_results);

			$('.terms_modal').removeClass('close');
			disableScroll();
		});

		$('.terms_modal .fa-times').click(function(){
			$('.terms_modal').fadeOut( 400, "easeInOutQuad" );
			jQuery(window).scrollTop(scroll_top_results);
			$('.terms_modal').addClass('close');

			enableScroll();
		});


		$('.extras_view-photos').click(function(){
			$('.view-photos_modal').fadeIn( 400, "easeInOutQuad" ); 
			$('.view-photos_modal').removeClass('close');
			disableScroll();
		});


		$('.modal-room-details .fa-times').click(function(){
			$('.rooms_details').fadeOut( 400, "easeInOutQuad" );
			$('.rooms_details').addClass('close');
						$('body').removeClass('modal-open');

		});


		$('.room_type_img > img, #button_details, .room_type_header > h3').click(function(){
	
			$('body').addClass('modal-open');
			flexSliderStartRoomInfo();
			$('.rooms_details').fadeIn( 400, "easeInOutQuad" ); 
			$('.rooms_details').removeClass('close');

		    // Read more/less for room description
		    $('.rooms_details .room-description p').each(function() {
			    var lessContent = 100;  // How many characters are shown by default
			    var ellipsestext = "...";
			    var moretext = "More";
			    var lesstext = "Less";
		        var fullContent = $(this).html();
		 
		        if(fullContent.length > lessContent) {
		 
		            var c = fullContent.substr(0, lessContent);
		            var h = fullContent.substr(lessContent, fullContent.length - lessContent);
		 
		            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
		 
		            $(this).html(html);
		        }

		        $(".morelink").click(function(){
			        if($(this).hasClass("less")) {
			            $(this).removeClass("less");
			            $(this).html(moretext);
			        } else {
			            $(this).addClass("less");
			            $(this).html(lesstext);
			        }
			        $(this).parent().prev().toggle();
			        $(this).prev().toggle();
			        return false;
			    });
		 
		    });
	

		});



		$('#bnk_transfer').click(function(){
			$('.payment_method').addClass('hidden');
			$('#payment_transfer').removeClass('hidden');
		});

		$('#sel_auth_form').click(function(){
			$('.payment_method').addClass('hidden');
			$('#payment_auth').removeClass('hidden');
		});

		$('#sel_alpha_bnk').click(function(){
			$('.payment_method').addClass('hidden');
			$('#payment_alpha').removeClass('hidden');
		});

		$('#sel_credit_card').click(function(){
			$('.payment_method').addClass('hidden');
			$('#payment_card').removeClass('hidden');
		})


});



// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}


function flexsliderStart() {
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
}

function flexSliderStartRoomInfo() {
	    $('#carousel_room_info').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider_room_info'
  });
 
  $('#slider_room_info').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel_room_info"
  });
}

function init_map() {

	var mapOptions = {
	zoom: 8,
	center: new google.maps.LatLng(37.9833333 , 23.7333333), 
	styles: [{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
	};
	var mapElement = document.getElementById('gMap');

	var map = new google.maps.Map(mapElement, mapOptions);
	var marker = new google.maps.Marker({
	position: new google.maps.LatLng( 37.9833333, 23.7333333),
	map: map,
	title: 'Map Hotel',
	// icon: 'images/map-icon.png'
	});


}


$(window).bind("load resize", function() {
	 var width = $(window).width();

	if (width <= 960) {
        console.log(' < 960!');

        $('.burger').click(function(){
			$('#burger_mobile').toggleClass('down');

			if($(this).hasClass('open')){

				$('.hotel-menu').removeClass('hotel-menu_hide');
				$('.hotel-website').removeClass('button_hide');
				$('#burger_mobile').removeClass('down');

			}else{
				setTimeout(function() {
				    $('.hotel-header').removeClass('hotel-header_closed');
				},300);

				$('#burger_mobile').removeClass('down');
			}
			
		})

		$('#burger_mobile').click(function(){
			$(this).toggleClass('down');
			
			if($(this).hasClass('down')){
				$('.hotel-menu').addClass('hotel-menu_hide');
				$('.hotel-website').addClass('button_hide');
				$('.hotel-header').addClass('hotel-header_closed');

			}else{

				$('.hotel-menu').removeClass('hotel-menu_hide');
				$('.hotel-website').removeClass('button_hide');
				$('.hotel-header').removeClass('hotel-header_closed');

			}

		})

		

		$('.hotel-menu span').click(function(){
			$('.hotel-header').addClass('hotel-header_closed');

			$('.hotel-menu').addClass('hotel-menu_hide');
			$('.hotel-website').addClass('button_hide');
			$('#burger_mobile').addClass('down');

		})


		// if($('.main-content > header').hasClass('results-content-header')){
		// 	$('#meal_incl').insertBefore('.rate_option > .rate_option-extras');
		// }

		
			var activeLang = $('.lang_selector > span').text();
			var truncLang =  activeLang.substring(0, 2);

				$('.lang_selector > span').text(truncLang);


		$('.lang_list ul').find('li').each(function(){

			$(this).text();

			var langText = $(this).text();
			var langCut = langText.substring(0, 2);

			$(this).text(langCut);

		});


		$('.hasDatepicker').on('click', function(e) {
		  if (e.target !== this)
		    return;
		 	$('.hasDatepicker').fadeOut( 400, "easeInOutQuad" );
		 	$('.sync_engine > .checkin, .sync_engine > .checkout').removeClass('active');
		});


		$('.selector_sync').on('click', function(e) {
		  if (e.target !== this)
		    return;
		 	$('.selector_sync').fadeOut( 400, "easeInOutQuad" );
		 	$('.adults , .children, .babies').removeClass('active');
		});

		$('.room_selector_sync').on('click', function(e) {
		  if (e.target !== this)
		    return;
		 	$('.room_selector_sync').fadeOut( 400, "easeInOutQuad" );
		 	$('.rooms_number').removeClass('active');
		});

		$('.guest_selector_sync > i.fa-times').on('click', function() {
		  
		 	$('.guest_selector_sync').fadeOut( 400, "easeInOutQuad" );
		 	$('.room1_guests, .room2_guests').removeClass('active');
		});


		$('.guest_selector_sync .title_engine-2_modal').on('click', function() {
		  
		  setTimeout(function(){

		 	$('.guest_selector_sync').fadeOut( 400, "easeInOutQuad" );
		 	$('.room1_guests, .room2_guests').removeClass('active');
		  	
		  }, 600);

		});


		// enable scroll in modals for mobile
		$('.room_policy').click(function(){
			
			$('body').addClass('modal-open');
			enableScroll();
		});

		$('.policy_modal .fa-times').click(function(){
			
			$('body').removeClass('modal-open');
			
		});



		$('.special_offer a').click(function(){
			$('body').addClass('modal-open');
		});

		$('.special_offer_modal .fa-times').click(function(){
			$('body').removeClass('modal-open');
		});



		$('#terms_conditions').click(function(){
			
			$('body').addClass('modal-open');
			enableScroll();

		});

		$('.terms_modal .fa-times').click(function(){
			
			$('body').removeClass('modal-open');
			
		});


		// $('.checkin, .checkout, .adults, .children, .babies, .rooms_number, .room1_guests, .room2_guests').click(function(){

			// $('body').addClass('modal-open');

			// if($('#checkin_datepicker').css('display') == 'none') {
			// 	$('body').removeClass('modal-open');
			// }
			// else{
			// 	$('body').addClass('modal-open');
			// }

		// })


	// get the outerHeight of the datepicker and set top of element//
		$('.checkin').click(function(){

			if( $(this).hasClass('active') ){

				$('body').addClass('modal-open');

				var calHeight = ($('#checkin_datepicker .ui-datepicker').outerHeight())
					titlePos = parseInt(calHeight, 10) / 4;

					console.log(calHeight);

				$('.title_engine_modal').css( 'top', titlePos );

			}

		})

		$('.checkout').click(function(){

			if( $(this).hasClass('active') ){

				$('body').addClass('modal-open');

				var calHeight = ($('#checkout_datepicker .ui-datepicker').outerHeight())
					titlePos = parseInt(calHeight, 10) / 4;

					console.log(calHeight);

				$('.title_engine_modal').css( 'top', titlePos );

			}

		})


		$('.adults').click(function(){

			if( $(this).hasClass('active') ){

				$('body').addClass('modal-open');

				var calHeight = ($('#adults_selector .holder').outerHeight())
					titlePos = parseInt(calHeight, 10) / 2;

					console.log(calHeight);

				$('.title_engine_modal').css( 'top', titlePos );

			}

		})


		$('.children').click(function(){

			if( $(this).hasClass('active') ){

				$('body').addClass('modal-open');

				var calHeight = ($('#children_selector .holder').outerHeight())
					titlePos = parseInt(calHeight, 10) / 2;

					console.log(calHeight);

				$('.title_engine_modal').css( 'top', titlePos );

			}

		})

		$('.babies').click(function(){

			if( $(this).hasClass('active') ){

				$('body').addClass('modal-open');

				var calHeight = ($('#babies_selector .holder').outerHeight())
					titlePos = parseInt(calHeight, 10) / 2;

					console.log(calHeight);

				$('.title_engine_modal').css( 'top', titlePos );

			}

		})

		$('.rooms_number').click(function(){

			if( $(this).hasClass('active') ){

				$('body').addClass('modal-open');

				var calHeight = ($('#room_selector').outerHeight())
					titlePos = parseInt(calHeight, 10) / 4;

					console.log(calHeight);

				$('.title_engine_modal').css( 'top', titlePos );

			}

		})

		$('.room1_guests ').click(function(){

			if( $(this).hasClass('active') ){

				$('body').addClass('modal-open');

				var calHeight = ($('#guest_1_selector').outerHeight())
					titlePos = parseInt(calHeight, 10) / 5;

					console.log(calHeight);

				$('.title_engine_modal').css( 'top', titlePos );

			}

		})

		$('.room2_guests ').click(function(){

			if( $(this).hasClass('active') ){

				$('body').addClass('modal-open');

				var calHeight = ($('#guest_2_selector').outerHeight())
					titlePos = parseInt(calHeight, 10) / 5;

					console.log(calHeight);

				$('.title_engine_modal').css( 'top', titlePos );

			}

		})

		$('.hasDatepicker, .selector_sync, .room_selector_sync, .guest_selector_sync > .fa-times, .guest_selector_sync .title_engine-2_modal').click(function(){
			$('body').removeClass('modal-open');
		})

		
		// reservation extras for room 2
		// on click scroll me up
		$('.reserv_extras-switch').click(function(){

			var elemOffset = $('.reserv_extras').offset().top
				elemPositionCurr = elemOffset - ($(window).scrollTop());
				

				console.log(elemOffset);
				console.log($(window).scrollTop());
				console.log(elemPositionCurr);


				if( elemPositionCurr < 0 ) {

					$('html, body').animate({
					 	scrollTop: $(".reserv_extras").offset().top
					}, 600, "easeInOutQuad");

				}

		})

    }

    // else {
     
    // }
});

