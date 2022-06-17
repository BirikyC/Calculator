$(function(){
	let result = $('.calc-score-result').text()
	let action = $('.calc-score-action').text()
	let isFloat = false

	$('[data-container="number"]').mousedown(function(){
		action = action + this.innerText
		if(action[0] == 0 && action[1] != '.') action = action.substring(1)

		return $('.calc-score-action').html(action)
	})

	$('[data-container="dot"]').mousedown(function(){
		if(!isFloat) action = action + '.'
		
		$('.calc-score-action').html(action)
		return isFloat = true
	})

	$('.btn').mousedown(function(){
		$($(this).children('span')).addClass('btn-clicked')
		$($(this).children('div')).addClass('btn-clicked-children')
	}).on('mouseup mouseleave', function(){
		$(this.children).removeClass('btn-clicked')
		$(this.children).removeClass('btn-clicked-children')
	})
})