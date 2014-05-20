$(window).load(function(){
	$('body').addClass('overflow');

	$('#projects li').hover(function(e) {
		$(e.currentTarget).find('.content').addClass('selected');
		$(e.currentTarget).find('.load-bar').addClass('selected');
		checkDevices($(e.currentTarget));
	}, function(e) {
		$(e.currentTarget).find('.content').removeClass('selected');
		$(e.currentTarget).find('.load-bar').removeClass('selected');
		resetDevices();
	});

	$('#projects li').on('click', function(e) {
		stackDeck($(e.currentTarget))
	});

	$('#nav-idle').on('click', function(e) {
		TweenMax.to($('#nav'), 0.2, {width:'0px', onComplete:function(){
			changeNav('expanded');
		}});
	});

	$('#nav-close').on('click', function(e) {
		TweenMax.to($('#nav'), 0.2, {width:'0px', onComplete:function(){
			changeNav('idle');
		}});
	});

	fullIntro();
	//briefIntro();

});

function fullIntro() {
	TweenMax.to($('body'), 4, {backgroundColor:'#DFE5E6'});
	TweenMax.to($('#ribbon'),0,{marginTop:'-'+$('#ribbon').outerHeight()/1.7+'px'});
	TweenMax.to($('#ribbon .container'),0,{marginLeft:'-'+$('#logo-img').outerWidth()/2+'px'});
	TweenMax.to($('#logo-img'),3,{opacity:'1', delay:'1', onComplete:intro_moveRibbon});	
}

function briefIntro() {
	TweenMax.to($('body'), 0, {backgroundColor:'#DFE5E6'});
	TweenMax.to($('#ribbon'),0,{marginTop:'-'+$('#ribbon').outerHeight()/1.7+'px'});
	TweenMax.to($('#ribbon .container'),0,{marginLeft:'-'+$('#logo-img').outerWidth()/2+'px'});
	TweenMax.to($('#logo-img'),0,{opacity:'1', delay:'1', onComplete:intro_moveRibbon});	
	TweenMax.to($('.anim-ribbon'), 0, {left:'0', onComplete:changeRibbonColor});
	TweenMax.to($('#logo-img'), 0, {opacity:'0', delay:'0.1'});
	TweenMax.to($('#logo-text'), 0, {opacity:'1', delay:'0.3'});
	TweenMax.to($('body'),0,{backgroundColor:'#000'});
	TweenMax.to($('#ribbon .container'), 0, {left:'90%', delay:'0.1', ease:Back.easeOut, onComplete:intro_animText});
	TweenMax.to($('.anim-ribbon'), 0, {backgroundColor:'#1D1D1D'});
	TweenMax.to($('#ribbon .everform-paralax'), 0, {opacity:'1'});
	TweenMax.to($('#ribbon .everform-paralax'), 0, {top:'-50px', repeat:10, yoyo:true});
	TweenMax.to($('#ribbon .everform-paralax2'), 0, {top:'50px', repeat:10, yoyo:true});
	TweenMax.to($('#ribbon .text-container'), 0, {delay:'0.6', width:'220px', onComplete:intro_animSubtitle});
	TweenMax.to($('#ribbon .container'), 0, {left:'75%', delay:'0.6'});
	TweenMax.to($('#ribbon .everform-paralax2'), 0, {opacity:'1'});	
	TweenMax.to($('#ribbon'), 0, {marginTop:'0', top:'0%', height:'100px', boxShadow:'0 3px 3px 0px rgba(0, 0, 0, 0.5)'});
	TweenMax.to($('#ribbon .container'), 0, {marginTop:'5px', marginBottom:'5px'});
	TweenMax.to($('.progressbar-border'), 0, {width:'100%', onComplete:loadContainers});
}

function intro_moveRibbon() {
	TweenMax.to($('.anim-ribbon'), 0.3, {left:'0', onComplete:changeRibbonColor});
	TweenMax.to($('#logo-img'), 0.3, {opacity:'0', delay:'0.1'});
	TweenMax.to($('#logo-text'), 0.4, {opacity:'1', delay:'0.3'});
	TweenMax.to($('body'),1,{backgroundColor:'#000'});
	TweenMax.to($('#ribbon .container'), 1.5, {left:'90%', delay:'0.1', ease:Back.easeOut, onComplete:intro_animText});
}

function changeRibbonColor() {
	TweenMax.to($('.anim-ribbon'), 1.2, {backgroundColor:'#1D1D1D'});
	TweenMax.to($('#ribbon .everform-paralax'), 3, {opacity:'1'});
	TweenMax.to($('#ribbon .everform-paralax'), 40, {top:'-50px', repeat:10, yoyo:true});
	TweenMax.to($('#ribbon .everform-paralax2'), 40, {top:'50px', repeat:10, yoyo:true});
}

function intro_animText() {
	TweenMax.to($('#ribbon .text-container'), 0.4, {delay:'0.6', width:'220px', onComplete:intro_animSubtitle});
	TweenMax.to($('#ribbon .container'), 0.4, {left:'75%', delay:'0.6'});
	TweenMax.to($('#ribbon .everform-paralax2'), 3, {opacity:'1'});
}

function intro_animSubtitle() {
	TweenMax.to($('#ribbon .subtitle'), 1, {opacity:'1', onComplete:intro_nextPage});
}

function intro_nextPage() {
	$('#ribbon').css('position','fixed');
	$('body').removeClass('overflow');

	setTimeout( function(){
		TweenMax.to($('#ribbon'), 0.3, {marginTop:'0', top:'0%', height:'100px', boxShadow:'0 3px 3px 0px rgba(0, 0, 0, 0.5)'});
		TweenMax.to($('#ribbon .container'), 0.3, {marginTop:'5px', marginBottom:'5px'});
		TweenMax.to($('.progressbar-border'), 0.7, {width:'100%', onComplete:loadContainers});
	}, 1000);
}

function loadContainers() {
	TweenMax.to($('.container'), 1.5, {opacity:'1', onComplete:loadProjects});

	var projectsHeight = $(window).outerHeight() - $('#ribbon').outerHeight() - $('#devices').outerHeight();
	$('#projects').css('height',projectsHeight);
}

function loadProjects() {
	TweenMax.to($('#projects li'), 0, {width: ($('#projects ul').outerWidth()*0.23) + 'px'});
	TweenMax.to($('#projects .img'), 0, {top: ($('#projects .content').outerHeight()/2 - $('#projects .img').outerHeight()/2) + 'px'});
	
	$('#projects ul').addClass('ease-to-left');
	TweenMax.to($('#projects ul'), 0.8, {left:'0', ease:Back.easeOut, onComplete:function(){
		$('#projects ul').removeClass('ease-to-left');
	}});

	var maxApp = 0;
	$( "#projects li" ).each(function(i){
		$(this).data('order',i);
		maxApp++;
	});

	TweenMax.to($('#projects ul'), 0, {width: ($('#projects li').outerWidth()*maxApp) + 'px'});

	changeNav('idle');
}


function changeNav(NAV_STATE) {

	switch (NAV_STATE) {
        case ('expanded'):
        	$('#nav').addClass('expanded');
			TweenMax.to($('#nav'), 0, {top:$(window).outerHeight()/2 - $('#nav').outerHeight()/2 + 'px', onComplete:function(){
				TweenMax.to($('#nav'), 0.2, {width:'100%', boxShadow:'0 1px 5px 2px rgba(0, 0, 0, 0.5)'});
			}});
            break;
        case ('idle'):
        	$('#nav').removeClass('expanded');
           	TweenMax.to($('#nav'), 0, {height:'50px', top:$('#ribbon').outerHeight() + $('#devices').outerHeight() - $('#nav').outerHeight()/2 + 'px', onComplete:function(){
           		TweenMax.to($('#nav'), 0.5, {width:'50px', boxShadow:'0 1px 5px 2px rgba(0, 0, 0, 0.5)'});
           	}});
            break;
	}
}

function checkDevices(li) {
	if(li.data('android')){
		TweenMax.to('li.android img', 0.2, {top:'0'});
	}
	else {
		TweenMax.to('li.android img', 0.2, {top:'300px'});
	}

	if(li.data('ipad')){
		TweenMax.to('li.ipad img', 0.2, {top:'0'});
	}
	else {
		TweenMax.to('li.ipad img', 0.2, {top:'300px'});
	}

	if(li.data('iphone')){
		TweenMax.to('li.iphone img', 0.2, {top:'0'});
	}
	else {
		TweenMax.to('li.iphone img', 0.2, {top:'300px'});
	}
}

function resetDevices(li) {
	TweenMax.to('li.android img', 0.2, {top:'0'});
	TweenMax.to('li.ipad img', 0.2, {top:'0'});
	TweenMax.to('li.iphone img', 0.2, {top:'0'});
}

function stackDeck(li) {
	var selected = li.data('order');
	var width = $('#projects li').outerWidth();

	$( "#projects li" ).each(function(i){
		var moveInteger = selected - $(this).data('order');
		TweenMax.to($(this), 0.25, {left: ( (width) * moveInteger ) + 'px'})
	});

	TweenMax.to(li, 0, {zIndex: '50'});
}
