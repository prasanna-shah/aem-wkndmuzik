$('.cmp-contentfragment__item').each(function(){
	var flagEl = $(this).find('.cmp-contentfragment__element--membershipFlag .cmp-contentfragment__element-value'); 
	if($(flagEl).text().trim() !== ''){
		$(this).addClass('cmp-contentfragment__item-flagged');
	}
})