$(document).ready(function(){
	var previousImages=[];
	getImages();
	setInterval(function() {
		getImages();
	}, 1000); // Number of milliseconds to recheck

	function getImages(){
		$.get("/upload", function(data){
			//console.log($.parseJSON( data ));
			previouseData=data;
			var images = $.parseJSON( data ).files;
			console.log(images);
			if ( !Object.equals(!(images == previousImages) ){
				console.log(images === previousImages);
				for (var i = images.length - 1; i >= 0; i--) {
					 var image = $("<img>");
					 image.attr('src',images[i].url);
					 if(images[i].big){
					 	image.attr('id','big');
					 }
					 $(".image").append(image);
				}
			}
			
		});
	}
	
});


//FINISH MAKING THIS FUNCTION BEFORE YOU DO ANYTHING ELSE
function compareArraysOfObjects(x,y){
	equality= true;
	if(x.length!==y.length){
		return false;
	}
	for(i=0; i<x.length; i+=1){
		for()
	}
}

Object.equals = function( x, y ) {
  if ( x === y ) return true;
    // if both x and y are null or undefined and exactly the same

  if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
    // if they are not strictly equal, they both need to be Objects

  if ( x.constructor !== y.constructor ) return false;
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.

  for ( var p in x ) {
    if ( ! x.hasOwnProperty( p ) ) continue;
      // other properties were tested using x.constructor === y.constructor

    if ( ! y.hasOwnProperty( p ) ) return false;
      // allows to compare x[ p ] and y[ p ] when set to undefined

    if ( x[ p ] === y[ p ] ) continue;
      // if they have the same strict value or identity then they are equal

    if ( typeof( x[ p ] ) !== "object" ) return false;
      // Numbers, Strings, Functions, Booleans must be strictly equal

    if ( ! Object.equals( x[ p ],  y[ p ] ) ) return false;
      // Objects and Arrays must be tested recursively
  }

  for ( p in y ) {
    if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) ) return false;
      // allows x[ p ] to be set to undefined
  }
  return true;
}
