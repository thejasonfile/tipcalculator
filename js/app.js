$(document).ready(function() {
	$("#subtotal").keyup(function() {
		var billAmount = $("#subtotal").val();
		console.log(billAmount);
	}); //end of keyup
}); //end of ready
