
$( document ).on( "pagecreate", "#invoice", function() {
	
	/*
	Query the database
	*/
    function get_offring_list (tx) {
        // db.transaction(populateDB, errorCB, successCB);
		// alert('get_offring_list')
		tx.executeSql('SELECT * FROM OFFERINGS', [], queryOffering, errorCB);
    }

    /*
	create the list view from queried resats at get_offring_list()
    */
    function queryOffering(tx, results) {
        // alert( 'queryOffering' )

        var len = results.rows.length;
        // $('#coffee_num').html(len);
        // alert( len )
        // console.log("DEMO table: " + len + " rows found.");

        var offering_list = '';
        for (var i=0; i<len; i++)
        {

            // id, name, img, type, availability, price, description
            offering_list += '<li><a href="#">'+
                                '<img class="item_image" src="img/offerings/'+ results.rows.item(i).img +'">'+
                                '<h2 class="item_name">'+ results.rows.item(i).name +'</h2>'+
                                '<p class="item_description">'+ results.rows.item(i).description +'</p></a>'+
                                '<a href="#purchase" class="offering_list_item_add" data-price="'+ results.rows.item(i).price +'">Purchase album</a>'+
                                // '<span class="ui-li-count">'+ results.rows.item(i).price +'</span>'+
                            '</li>';
        }

        $( "#offering_list_container" ).html( offering_list );
        $( "#offering_list_container" ).listview( "refresh" );

    }

    /*
	init the database
	*/
    var db = window.openDatabase("invobill", "2.0", "invobill", 200000);
    db.transaction(get_offring_list, errorCB);


	/*
	to create the slyding pnal to add
	????????
	offrings to the invoice
	*/
	$( document ).on( "swipeleft swiperight", "#invoice", function( e )
	{
		// We check if there is no open panel on the page because otherwise
		// a swipe to close the left panel would also open the right panel (and v.v.).
		// We do this by checking the data that the framework stores on the page element (panel: open).
		if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" )
		{
			if ( e.type === "swipeleft" )
			{
				$( "#right-panel" ).panel( "open" );
			} 
			else if ( e.type === "swiperight" )
			{
				$( "#left-panel" ).panel( "open" );
			}
		}
	});



	$( document ).on( "click", ".offering_list_item_add", function( e )
	{
		e.preventDefault()
		var img 	= $(this).parent().find('.item_image').attr('src');
		var name 	= $(this).parent().find('.item_name').html();
		var discrip = $(this).parent().find('.item_description').html();
		var price 	= parseInt($(this).attr('data-price'));

		// alert(name+discrip+price)

		var new_invoice_item = '<tr class="invoice_offring">'+
						            '<td class="unit_image">'+ img +'</td>'+
						            '<td>'+
						                '<span class="pns_name">'+ name +'</span>'+
						                '<span class="pns_discription">'+ discrip +'</span>'+
						            '</td>'+
						            '<td class="unit_price">'+ price +'</td>'+
						            '<td class="qty">1</td>'+
						            '<td class="tolal">'+ price +'</td>'+
						        '</tr>';

		$('#table_invoice tbody').append(new_invoice_item);

		/*call to calculate the new invoice value*/
		calculate_invoice ();

	});


	/*
	to remove invoice items
	*/
	$( document ).on( "taphold", "#table_invoice tbody tr.invoice_offring", function( e )
	{
		var name = $(this).find(".pns_name").html();

		var r = confirm("confirm removing "+ name);

		if (r==true)
		  	{
		  		$(this).fadeOut( "slow", function() {
				    $(this).remove();
					/*call to calculate the new invoice value*/
					calculate_invoice ();
				});

		  	}
		else
		  	{
		  		$(this).off();
		  	}
		// $("#yes").click(confarm_remove (e) )
	});


	// function confarm_remove (e) 
	// {
	// 	$( "#confirm" ).popup( "open" );
	// 	e.fadeOut( "slow", function() {
	// 	    e.remove();
	// 	});
	// }


	// $( document ).on( "click", "#yes", function( e )
	// {
	// 	confarm_remove(e);

	// });


});