$(document).ready(function(data){
   $("#submit").click(function(){
    
  
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.thecatapi.com/v1/images/search?limit=1&category_ids=2",
  "method": "GET",
  "headers": {
    "x-api-key": "cf6fc2e1-c9cf-4aa5-a4f8-86325f71b888"
  }
}

$.ajax(settings).done(function (catData) {
  
  $(".image").html("<img src='" + catData[0].url + "'/>");
});
      $.get("https://philosophy-quotes-api.glitch.me/quotes", function(data){
   
        var quoteNum = Math.floor((Math.random() * 127));
        var quoteText = data[quoteNum].quote;
        var catQuote = quoteText.replace(/ now/gi, "Meow").replace(/per/gi, "purr").replace(/feeling/gi, "feline").replace(/pos/gi, "paws").replace(/for/gi, "fur")
        
        
    $(".fortune").html(catQuote)
  });
 });
});