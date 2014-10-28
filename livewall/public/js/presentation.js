$(document).ready(function(){
	$.get("/upload", function(data){
		//console.log($.parseJSON( data ));
		var images = $.parseJSON( data );
		console.log(images.files)
		for (var i = images.files.length - 1; i >= 0; i--) {
			 var image = $("<img>");
			 image.attr('src',images.files[i].url);
			 $(".image").append(image);
			 console.log("foo");
		}
	});
});