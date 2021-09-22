$(document).ready(function(){
	// console.log('hay');
// Start Navbar

// for navbutton
$('.navbuttons').click(function(){
	// console.log('i am working');
	$('.navbuttons').toggleClass('changes');
});

// for navbar
$(window).scroll(function(){
	let getscrolly = $(this).scrollTop();
	// console.log(getscrolly);

	if(getscrolly >= 200){
		$('.navbar').addClass('navmenus');
	}else{
		$('.navbar').removeClass('navmenus')
	}

});

// Start Mission Section

$(window).scroll(function(){
	let getscrolly = $(this).scrollTop();
	// console.log(getscrolly);

	if(getscrolly >= 650){
		$('.cameraimgs').addClass('fromlefts');
		$('.missiontexts').addClass('fromrights');
	}else{
		$('.cameraimgs').removeClass('fromlefts');
		$('.missiontexts').removeClass('fromrights');
	}

});

// End Mission Section

// End Navbar

// Start Gallery Section
$('.gallerylists').click(function(){
	let datafilter = $(this).attr('data-filter');
	// console.log(datafilter);

	if(datafilter === "all"){
		$('.filters').show();
	}else{
        $('.filters').not('.'+datafilter).hide(400); //hide all filters
        
        $('.filters').filter('.'+datafilter).show(400); 
    }

});	

// remove current active item

// End Gallery Section

// Start Pricing Section 
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 4300){
        $('.cardones').addClass("movefromlefts");
        $('.cardtwos').addClass("movefrombottoms");
        $('.cardthrees').addClass("movefromrights");
        
    }else{
        $('.cardones').removeClass("movefromlefts");
        $('.cardtwos').removeClass("movefrombottoms");
        $('.cardthrees').removeClass("movefromrights");
        
    }
});
// End Pricing Section 

// Start Footer Section 
const showyear = document.getElementById('showyear');
const getfullyear = new Date().getUTCFullYear();
showyear.textContent = getfullyear;
// End Footer Section 

});