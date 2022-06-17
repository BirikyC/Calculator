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
		$(this).css({right: '-.25em', bottom: '-.25em'})
		$(this.children[0]).css({display: 'none'})
		$(this.children[2]).css({display: 'none'})
	}).on('mouseup mouseleave', function(){
		$(this).css({right: 0, bottom: 0})
		$(this.children[0]).css({display: 'initial'})
		$(this.children[2]).css({display: 'initial'})
	})
})