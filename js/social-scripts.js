//These functions trigger share windows for Twitter and Facebook when a user clicks on an element assigned the noted class

    $(".icon-twitter").on("click", function(){

      var tweet = "xxx"; //Tweet text
      var url = "xxx"; //Interactive URL

      var twitter_url = "https://twitter.com/intent/tweet?text="+tweet+"&url="+url+"&tw_p=tweetbutton";
      window.open(twitter_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

    });


    $(".icon-facebook").on("click", function(){

      var picture = "xxx"; //Picture URL
      var title = "xxx"; //Post title
      var description = "xxx"; //Post description
      var url = "http://www.umd.edu"; //Interactive URL

        var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&link="+url+"&picture="+picture+"&name="+title+"&description="+description+"&redirect_uri=http://www.facebook.com";
      window.open(facebook_url, 'mywin','left=200,top=200,width=500,height=300,toolbar=1,resizable=0'); return false;

    });
