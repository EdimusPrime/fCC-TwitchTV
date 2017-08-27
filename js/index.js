$(document).ready(function() {

var url="https://api.twitch.tv/kraken/streams/freecodecamp";

$.getJSON(url,function(data1){

	if(data1.stream===null){
		$(".fccname").css("background-color", "#BD7868");
	}
	else{
		$(".fccname").css("background-color", "#83BD68");
	}

});




// $(function(){

// 	var url="https://wind-bow.gomix.me/twitch-api"
// 	$.getJSON(url, function(data1){
// 		if(date1.stream===null){

// 		}
// 		else{

// 		}

// 	})

// 	$.ajax({
// 		type:"GET",
// 		url:"https:://api.twitch.tv/kraken/streams/freecodecamp",
// 		headers:{
// 			'Client-ID':'6sqwlcjum7l47zxcyuvbzyfsfwyap8'
// 		},
// 		success:function(data1){
// 			console.log(data1);
// 			if (data1.stream === null){
// 				$('.game').html(" is currently offline");
// 			} else{
// 				$('.game').html(" is currently Live");
// 			}
// 		}
// 	});

// })





    });