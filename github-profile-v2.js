/*$.get("https://api.github.com/users/phillycc", function(data) {
  alert( "success" );
}).done(function() {
  alert( "second success" );
}).fail(function() {
  alert( "error" );
}).always(function() {
  alert( "finished" );
});*/


//Call ajax function on page load
$(function() {
    $.get("https://api.github.com/users/phillycc", function(data) {
        $('#avatar').attr('href',data.avatar_url).children('img').attr('src', data.avatar_url);
        $('.sidebar > h3').children('span').text(data.name).siblings('small').text(data.login);
        $('#location').children('small').text(data.location);
        $('#joined').children('small').text('Joined on '+new Date(data.created_at).toDateString().slice(3));
        $('#email').children('a').attr('href','mailto:'+data.email).text(data.email);
        $('#followers').children('strong').text(data.followers);
        $('#following').children('strong').text(data.following);
    })
    .fail(function() {
        console.log("error");
    });

    $.get("https://api.github.com/users/phillycc/starred", function(data) {
        $('#starred').children('strong').text(data.length);
      })
      .fail(function() {
        console.log("error");
      });

    $.get("https://api.github.com/users/phillycc/repos", function(data) {

        var icon;
        var star = "<span class='octicon octicon-star'>"
        $.each (data, function (value) {
            if(data[value].fork){
               icon = "<span class='octicon octicon-repo-forked'></span>";
            } else {
               icon = "<span class='octicon octicon-repo'></span>";
            }
            $('#repoItems').append('<li class="repoItem list-group-item"><a href="'+data[value].html_url+'"><div class="repoIcon">'+icon+'</div><div class="repoInfo"><strong>'+data[value].name+'</strong><br/>'+data[value].description.slice(0,37)+'</div> <div class="repoStars">0 '+star+'</div><br style="clear: left;" /></a></li>');
            $('#panelRepoItems').append('<li class="list-group-item">'+data[value].name+'</li>');

        });
      })
      .fail(function() {
        console.log("error");
      });
});
