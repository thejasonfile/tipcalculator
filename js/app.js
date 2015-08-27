$(document).ready(function() {
	$("#15per").click(function() {
	var tip = $("#subtotal").val() * 0.15;
	$(".tipamount").html("<p>" + tip + "</p>")
	$(".totalamount").html("<p>")
	});

	$("#20per").click(function() {
	var tip = $("#subtotal").val() * 0.20;
	$(".tipamount").html("<p>" + Total + "</p>")
	});

	$("#25per").click(function() {
	var Total = $("#subtotal").val() * 0.25;
	$(".tipamount").html("<p>" + Total + "</p>")
	});	

})
	
