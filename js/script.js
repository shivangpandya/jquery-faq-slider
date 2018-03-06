$(document).ready(function () {
//set options
	var speed = 500; //Fade speed
	var autoswitch = true;  //Auto slider o[ptions
	var autoswitch_speed= 4000;  //Auto slider speed

	//Add initial active class
	$('.slide').first().addClass('active');

	//Hide all slides
	$('.slide').hide();

	//Show first slide
	$('.active').show();

	
	//Next handler
	$('#next').on('click',nextSlide());

	//Previous Handler
	$('#prev').on('click',prevSlide());
	
			//Auto Switch Handler

			if(autoswitch == true)
			setInterval(nextSlide(),autoswitch_speed);

			






			//Switch to nnext slide
			function nextSlide(){
				$('.active').removeClass('active').addClass('oldActive');
			if ($('.oldActive').is(':last-child')) 
			{
					$('.slide').first().addClass('active');

			}
			else
			{
				$('.oldActive').next().addClass('active');
			}

			$('.oldActive').removeClass('oldActive');
			$('.slide').fadeOut(speed);
			$('.active').fadeIn(speed);
			}

			






			//Switch to previous slide

			function prevSlide()
			{
				$('.active').removeClass('active').addClass('oldActive');
				if ($('.oldActive').is(':first-child')) 
				{
					$('.slide').last().addClass('active');
				}
				else
				{
				$('.oldActive').prev().addClass('active');
				}

				$('.oldActive').removeClass('oldActive');
				$('.slide').fadeOut(speed);
				$('.active').fadeIn(speed);
			}


	
	
});