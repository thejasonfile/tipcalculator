$(document).ready(function() {
	

	$("#15per").click(function() {
		var sub = parseFloat($("#subtotal").val())
		var tip = sub * 0.15;
		var total = sub + tip;
		$(".tipamount").html(tip.toFixed(2));
		$(".totalamount").html(total.toFixed(2));
	});

	$("#20per").click(function() {
		var sub = parseFloat($("#subtotal").val())
		var tip = sub * 0.20;
		var total = sub + tip;
		$(".tipamount").html(tip.toFixed(2));
		$(".totalamount").html(total.toFixed(2));
	});

	$("#25per").click(function() {
		var sub = parseFloat($("#subtotal").val())
		var tip = sub * 0.25;
		var total = sub + tip;
		$(".tipamount").html(tip.toFixed(2));
		$(".totalamount").html(total.toFixed(2));
	});

	$("#custom").click(function() {
		var sub = parseFloat($("#subtotal").val())
		var tip = sub * (parseFloat($("#customtip").val()) / 100) ;
		var total = sub + tip;
		$(".tipamount").html(tip.toFixed(2));
		$(".totalamount").html(total.toFixed(2));
	});
})
	
