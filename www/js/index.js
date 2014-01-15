
document.addEventListener('deviceready', onDeviceReady, false);

    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    function onDeviceReady () {
        // app.receivedEvent('deviceready');

        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);

        // alert( db )
        db.transaction(populateDB, errorCB, successCB);

    }



    // Populate the database
    //
    function populateDB(tx) {
        // alert( 'populateDB' )
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        // tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (3, "dsad row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (4, "hgfh row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (5, "Sekjhkghcond row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (6, "truryu row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (8, "bvmbnm row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (10, "gdsfgbnvgf row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (11, "zcfswtew row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (12, "ttwert row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (13, "rewtdsfgbnvgf row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (15, "pigdsrwqrfgbnvgf row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (16, "gdsgfhfgbnvgf row")');
        // tx.executeSql('INSERT INTO DEMO (id, data) VALUES (17, "dsf row")');



        tx.executeSql('DROP TABLE IF EXISTS OFFERINGS');
        tx.executeSql('CREATE TABLE IF NOT EXISTS OFFERINGS (id unique, name, img, type, availability, price, description)');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (1,  "Sarix IXSeriesIP",     "1.jpg",   "p", "25",   "8800",  "Sarix IXSeriesIP Sarix IXSeriesIPSarix IXSeriesIPIXSeriesIPSarix IXSeriesIP IXSeriesIPSarix IXSeriesIP")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (2,  "Sarix IMVSeries",      "2.jpg",   "p", "25",   "5000",  "Sarix IMVSeries Sarix IMVSeriesSarix IMVSeriesIMVSeriesSarix IMVSeries IMVSeriesSarix IMVSeries")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (3,  "Sarix IESeries",       "3.jpg",   "p", "25",   "4000",  "Sarix IESeries Sarix IESeriesSarix IESeriesIESeriesSarix IESeries IESeriesSarix IESeries")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (4,  "Spectra HD",           "4.jpg",   "s", "n",    "6000",  "Spectra HD Spectra HDSpectra HDHDSpectra HD HDSpectra HD")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (5,  "Sekjhkghcond row",     "5.jpg",   "p", "25",   "5000",  "Sekjhkghcond row Sekjhkghcond rowSekjhkghcond rowrowSekjhkghcond row rowSekjhkghcond row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (6,  "truryu row",           "6.jpg",   "s", "y",    "8000",  "truryu row truryu rowtruryu rowrowtruryu row rowtruryu row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (8,  "bvmbnm row",           "8.jpg",   "p", "25",   "5000",  "bvmbnm row bvmbnm rowbvmbnm rowrowbvmbnm row rowbvmbnm row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (10, "gdsfgbnvgf row",       "10.jpg",  "p", "25",   "7000",  "gdsfgbnvgf row gdsfgbnvgf rowgdsfgbnvgf rowrowgdsfgbnvgf row rowgdsfgbnvgf row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (11, "zcfswtew row",         "11.jpg",  "s", "n",    "3500",  "zcfswtew row zcfswtew rowzcfswtew rowrowzcfswtew row rowzcfswtew row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (12, "ttwert row",           "12.jpg",  "p", "25",   "1600",  "ttwert row ttwert rowttwert rowrowttwert row rowttwert row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (13, "rewtdsfgbnvgf row",    "13.jpg",  "p", "25",   "3800",  "rewtdsfgbnvgf row rewtdsfgbnvgf rowrewtdsfgbnvgf rowrowrewtdsfgbnvgf row rowrewtdsfgbnvgf row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (15, "pigdsrwqrfgbnvgf row", "15.jpg",  "s", "n",    "4480",  "pigdsrwqrfgbnvgf row pigdsrwqrfgbnvgf rowpigdsrwqrfgbnvgf rowrowpigdsrwqrfgbnvgf row rowpigdsrwqrfgbnvgf row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (16, "gdsgfhfgbnvgf row",    "16.jpg",  "s", "y",    "8200",  "gdsgfhfgbnvgf row gdsgfhfgbnvgf rowgdsgfhfgbnvgf rowrowgdsgfhfgbnvgf row rowgdsgfhfgbnvgf row")');
        tx.executeSql('INSERT INTO OFFERINGS (id, name, img, type, availability, price, description ) VALUES (17, "dsf row",              "17.jpg",  "p", "25",   "1900",  "dsf row dsf rowdsf rowrowdsf row rowdsf row")');



    }

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HDSpectra HD
    // Transaction error callback
    //
    function errorCB(tx, err) {
        // alert("Error processing SQL: "+err);
        // alert("Error processing SQL: "+tx);
    }

    // Transaction success callback
    //
    function successCB() {
        // alert( 'successCB' )
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        db.transaction(queryDB, errorCB);
    }


    // Query the database
    //
    function queryDB(tx) {
        // alert( 'queryDB' )
        // tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
        // offering_num
        tx.executeSql('SELECT * FROM OFFERINGS', [], queryOffering, errorCB);
    }



    // Query the success callback
    //
    function querySuccess(tx, results) {
        // alert( 'querySuccess' )
        var len = results.rows.length;
        $('#coffee_num').html(len);
        // alert( len )
        // console.log("DEMO table: " + len + " rows found.");

        var coffee_list = '';

        for (var i=0; i<len; i++){

            coffee_list += '<li><a href="#">'+
                                '<img src="../../_assets/img/album-bb.jpg">'+
                                '<h2>'+ results.rows.item(i).id +'</h2>'+
                                '<p>'+ results.rows.item(i).data +'</p></a>'+
                            '</li>';

            // console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
        }


        $( "#coffee_list_container" ).html( coffee_list );

        $( "#coffee_list_container" ).listview( "refresh" );


    }


    // Query the queryOffering callback
    //
    function queryOffering(tx, results) {
        // alert( 'queryOffering' )
        var len = results.rows.length;
        // $('#coffee_num').html(len);
        // alert( len )
        // console.log("DEMO table: " + len + " rows found.");

        var offering_list = '';
        for (var i=0; i<len; i++){

            // id, name, img, type, availability, price, description
            offering_list += '<li><a href="#">'+
                                '<img src="img/offerings/'+ results.rows.item(i).img +'">'+
                                '<h2>'+ results.rows.item(i).name +'</h2>'+
                                '<p>'+ results.rows.item(i).description +'</p></a>'+
                                '<a href="#purchase" data-rel="popup" data-position-to="window" data-transition="pop">Purchase album</a>'+
                                // '<span class="ui-li-count">'+ results.rows.item(i).price +'</span>'+
                            '</li>';

            // console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
        }


        $( "#offering_list_container" ).html( offering_list );

        $( "#offering_list_container" ).listview( "refresh" );


    }


