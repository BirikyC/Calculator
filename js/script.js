$(function(){
	let result = $('.calc-score-result').text()
	let action = $('.calc-score-action').text()
	let symbol = null
	let isFloat = false
	let lastClickNumber = null

	$('[data-container="number"]').mousedown(function(){
		action = action + this.innerText
		if(action[0] == 0 && action[1] != '.') action = action.substring(1)

		$('.calc-score-action').html(action)

		return lastClickNumber = true
	})

	$('[data-container="dot"]').mousedown(function(){
		if(!isFloat) action = action + '.'
		
		$('.calc-score-action').html(action)
		return isFloat = true
	})

	$('[data-container="symbol"]').mousedown(function(e){
		isFloat = false
		if(!lastClickNumber) return symbol = this.innerText
		lastClickNumber = false

		result = parseFloat(result)
		action = parseFloat(action)
		
		if(symbol === "+"){
			result += action
		}
		else if(symbol === "−"){
			result -= action
		}
		else if(symbol === "×"){
			result *= action
		}
		else if(symbol === "÷"){
			result /= action
		}
		else if(symbol === "="){
			result = action
		}
		else if(symbol === "%"){
			result = action / 100 * result
		}
		else if(!symbol){
			result = action
		}
		symbol = this.innerText

		if(symbol === "√"){
			result = Math.sqrt(action)
			lastClickNumber = true
		}
		action = 0

		$('.calc-score-result').html(result)
		$('.calc-score-action').html(action)
	})

	$('[data-container="clear"]').mousedown(function(){
		action = 0
		$('.calc-score-action').html(action)

		if(this.innerText === "CE") return
		result = 0
		$('.calc-score-result').html(result)
	})

	$('.btn').mousedown(function(){
		$($(this).children('span')).addClass('btn-clicked')
		$($(this).children('div')).addClass('btn-animate')
	}).on('mouseup mouseleave', function(){
		$(this.children).removeClass('btn-clicked btn-animate')
	})
})