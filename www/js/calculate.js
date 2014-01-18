/*
call calculate invoice function
*/
function calculate_invoice (argument) {
	one_offring_total ();
	sum_ofall_offrings ();
	grand_total ();
}

/*
get each offring items total on Invoice
set each offring items total
*/
function one_offring_total () {
	$("#table_invoice tbody .invoice_offring").each(function()
	{
	    var unit_price	= parseInt($(this).find('.unit_price').html());
	    var qty			= parseInt($(this).find('.qty').html());

	    $(this).find('.tolal').html(unit_price*qty)
	});
}

/*
get sum of all offring items on Invoice
set the sum of offring items
*/
function sum_ofall_offrings () {
	var invoice_sum = 0;
	$("#table_invoice tbody .invoice_offring").each(function()
	{
	    var unit_total	= parseInt($(this).find('.tolal').html());
	    invoice_sum += unit_total;
	});

	$("#invoice_sum").html(invoice_sum);
}

/*
get Grand total Invoice
set grand total on invoice bottom and top
*/
function grand_total () {
	var invoice_sum 		= parseInt($("#invoice_sum").html());
	var invoice_deduct 		= parseInt($("#invoice_deduct").html());
	var invoice_grand_total = invoice_sum - invoice_deduct;

	$("#invoice_grand_total").html(invoice_grand_total);
	$("#invoice_grandtotal_top").html(invoice_grand_total);
}