$(function() {
    var quote = $('#quote');
    var author = $('#author');

    getQuote(quote, author);

    $('#buttony').click(function(event) {
      getQuote(quote, author);
    })
  });

  function getQuote(quote, author) {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
      var tweet = "https://twitter.com/intent/tweet?text=" + data.quoteText + " - " + data.quoteAuthor + "#quotes";
      $(".twitter-share-button").attr("href", tweet);
      quote.html(data.quoteText);
      author.html(data.quoteAuthor);
    });
  }
