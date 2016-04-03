SC.initialize({
  client_id: '7b9c5b47c81e949b866695aaee59f001'
});

// Loop through tradck data and append SC embed.
function makeCenterFromTracks(tracks) {
  var results = document.querySelector('.input-group')
	var track, permURL, newDiv;
	for (var i = 0; i <= 10; i++) {
		newDiv = document.createElement("center");
		newDiv.id = "track" + i;
		track=tracks[i];
		SC.oEmbed(track.permalink_url,{color:"ff0066",
				  maxwidth:750, maxheight: 166},newDiv);
		document.results.appendChild(newDiv);
	}
}

$(document).ready(function() {
	$('#search').click(function() {
		// assign user variable to input name
		var user = $('input[name=Soundcloud]').val();
		// get SC data and append results into html page.
		SC.get('/users/'+user+'/tracks', {limit: 100}, function(tracks) {
			$('#results').append(makeCenterFromTracks(tracks));
		});
	});
});
