$(function(){
	let result = $('.calc-score-result').text()
	let action = $('.calc-score-action').text()

	$('[data-number]').mousedown(function(){
		//if(this.innerText == ".") return
		action = parseFloat(action + this.innerText)

		return $('.calc-score-action').html(action)
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