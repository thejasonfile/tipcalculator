

//set tip % by which button is clicked
	function doTheMath(rate) {
		var sub = parseFloat($("#subtotal").val())
		var tip = sub * rate;
		var total = sub + tip;
		$(".tipamount").html(tip.toFixed(2));
		$(".totalamount").html(total.toFixed(2));
	}

$("button").click(function() {
	if ($("#subtotal").val() === "") {
	alert("Please enter a valid bill amount");
	} else {
		switch (this.id) {
			case "15per":
				rate = 0.15;
				break;
			case "20per":
				rate = 0.20;
				break;
			case "25per":
				rate = 0.25;
				break;
			case "custom":
				rate = parseFloat($("#customtip").val() / 100);
				if ($("#customtip").val() === "") {
					alert("Please enter a valid custom percentage.")
				}
				break;
		}
	//determine different dollar amounts and add them to the HTML
	doTheMath(rate);	
	}
})


