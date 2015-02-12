$(document).ready(function(){
    
    
$('h1').text("yyyyl");    
    
    $('<p>').appendTo('body');
    console.log("ville");
    
    $.getJSON( "data.json", function( data ) {
     
  
  $( "<p/>", {
    "class": "my-new-list",
    html: data.siffror[0]
  }).appendTo( "body" );
    $.each( data, function( key, val ) {
   console.log(val);
   
   items.push( "<p>" + val + "</p>")
   
  })
});//geyjson
   
});//doc ready



