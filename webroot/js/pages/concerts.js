


	function getConcertData(loc, success, error){
            var zip = loc.zip;
            var radius = 0;//parseInt(document.getElementById('rad').value);
	    
	    //var apikey = "6mnky94spc5h9u8n3fjxq6t7"; //joes
	    var apikey = "k5dywsuqf9vaexvg5xczcspf"; //brandons	

			$.getJSON("http://api.jambase.com/events?zipCode=" + zip +"&radius=" + radius + "&page=0&api_key=" + apikey, 
    			function(data) {
        		//console.log(data.Events);
		
   
        		var json = "<div style='display: flex; flex-wrap: wrap'>";

        		for (i = 0; i < 15; i++)//data.Info.TotalResults for all results, currently returns just 50
        		{
                    
                    var date = data.Events[i].Date;
                    var split = date.split("T",2);
                    
        		json += "<div class='tile' ><b>Artists:</b><br /><div style='font-size: 15px'>" +  data.Events[i].Artists[0].Name + "</div>  <b>Venue:</b><br /><div style='font-size: 15px'>" + data.Events[i].Venue.Name + "</div> <b>Day:</b><br /><div style='font-size: 15px'> " + split[0] + "</div> <b>Time:</b><br /><div style='font-size: 15px'> " + split[1] + "</div></div>";
				// shows 1st artists, venue, date
        			//document.write("<br>");

        				}
                json += "</div><br ><br /><br /><a href=http://www.jambase.com>Results powered by JamBase™</a>";
        			

      success(json);

	});
      var out = 'There was a problem getting the concert data in your area.';
      error(out);
        		
			
		

    
    }

    function getConcertSummary(loc){
    	
    	summary_json = "hot dog";

		return summary_json;
		}

