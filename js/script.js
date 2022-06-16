$(function(){
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