$(document).ready(function() {


$.ajax({
 	type: 'GET',
 	url: 'https://api.twitch.tv/kraken/streams/freecodecamp',
	headers: {
 		'Client-ID': '6sqwlcjum7l47zxcyuvbzyfsfwyap8'
 			},
 		success: function(data1) {
 		if (data1.stream===null) {
 			//FCC offline
 			$(".streamerBar").css("background-color", "#BD7868");
 		} else {
 				//FCC online
 				$(".streamerBar").css("background-color", "#83BD68 ");
 			}
 			 		console.log(data1);
 		}

});

// $.ajax({
//  	type: 'GET',
//  	url: 'https://api.twitch.tv/kraken/users/freecodecamp',
// 	headers: {
//  		'Client-ID': '6sqwlcjum7l47zxcyuvbzyfsfwyap8'
//  			},
//  		success: function(data1) {
//  		if (data1.stream===null) {
//  			//FCC offline
//  			$(".streamerBar").css("background-color", "#BD7868");
//  		} else {
//  				//FCC online
//  				$(".streamerBar").css("background-color", "#83BD68 ");
//  			}
//  			 		console.log(data1);
//  		}

// });


$.ajax({
 	type: 'GET',
 	url: 'https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/',
 	headers:{
 		'Client-ID': '6sqwlcjum7l47zxcyuvbzyfsfwyap8'
 	},
 		success: function(data2){
			for (var i=0; i<data2.follows.length; i++){
				//gets displayName
				var displayName=data2.follows[i].channel.display_name;
				// $(displayName).addClass("name");

				var logo= data2.follows[i].channel.logo;
				// $(logo).addClass("profilePic");

				var status= data2.follows[i].channel.status;
				// $(status).addClass("game");

				var url= data2.follows[i].channel._links.self;

			// following.push(displayName);
				if (logo==null){
					logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
				}

				$(".followers").prepend(
					"<div class = 'row streamerBar'>" + 
						"<div class= 'col-md-4'>" +
							"<img src='" +logo +"'>"+
						"</div>" + 

						"<div class= 'col-md-4 display-name'>" + 
							displayName + 
						"</div>" + 

						"<div class= 'col-md-4 game'>" + 
							status +
					"</div></div>");
			
		}

		// console.log(url);
		// $(displayName).append('<a href="' + url +'">' + displayName + '</a>');

		// $(displayName).addClass("name");
		// $(logo).addClass("profilePic");
		// $(status).addClass("game");
		}
});


// 	following.push('comster404');
// 	following.push('brunofin');
// 	following.push('ESL_SC2');

// 	for(var i=0; i<following.length; i++){
// 		var url2= 'https://api.twitch.tv/kraken/streams/' + following[i] + '/?callback=?';

// 		$.getJSON(url2).done(function(data3){
// 			var logo;
// 			var status;
// 			var name;
// 			if (data3.error){
// 				logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
// 				name=data3.message;
// 				status=data3.error;

// 				$("#followerInfo").prepend("<div class = 'streamerBar'>" + "<div class= 'col-md-4'>" +
// 					"<img src='" +logo +"'>"
// 					+
// 					"</div>" + "<div class= 'col-md-4'>" + name + 
// 					"</div>" + "<div class= 'col-md-4'>" + status +"</div></div>");
// 			}

// 			if(data3.stream===null){
// 			$getJSON(data3._links.channel,function(data5){
// 				status = "offline";
// 				logo= data5.logo;
// 				name=data3.display_name;
// 				if(logo===null){
// 					logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logo/NoLogo.jpg';
// 				}

// 				$("#followerInfo").prepend("<div class = 'streamerBar'>" + "<div class= 'col-md-4'>" +
// 					"<img src='" +logo +"'>"
// 					+
// 					"</div>" + "<div class= 'col-md-4'>" + name + 
// 					"</div>" + "<div class= 'col-md-4'>" + status +"</div></div>");


// 			});
// 		}

// 		});
// 	}
// 	for(var i=0; following.length; i++){
// 		var onlineURL= "https://api.twitch.tv/kraken/streams/" + following[i];
// 		$getJSON(onlineURL, function(data4){
			
// 			var logo = data4.stream.channel.logo;
// 			if(logo===null){
// 					logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logo/NoLogo.jpg';
// 				}
// 			var status = data4.stream.channel.status;

// 			var name = data4.stream.channel.display_name;

// 			$("#followerInfo").prepend("<div class = 'streamerBar'>" + "<div class= 'col-md-4'>" +
// 					"<img src='" +logo +"'>"
// 					+
// 					"</div>" + "<div class= 'col-md-4'>" + name + 
// 					"</div>" + "<div class= 'col-md-4'>" + status + "</div></div>"	);
// 		}
		
// 		})
// 	}

// });

    });