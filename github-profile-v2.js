//Call ajax function on page load
$(function() {
      $.get("https://api.github.com/users/phillycc", function(data) {
        alert( "success" );
      })
      .done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        alert( "finished" );
      });


    $.ajax({
  			"url":"https://api.github.com/users/phillycc",
  			"dataType":"json",
  			"success":function(data){
          $('#avatar').attr('href',data.avatar_url).children('img').attr('src', data.avatar_url);
  			  $('.sidebar > h3').children('span').text(data.name).siblings('small').text(data.login);
          $('#location').children('small').text(data.location);
          $('#joined').children('small').text('Joined on '+new Date(data.created_at).toDateString().slice(3));
          $('#email').children('a').attr('href','mailto:'+data.email).text(data.email);
          $('#followers').children('strong').text(data.followers);
          $('#following').children('strong').text(data.following);
        },
  			"error":function(data){
  				console.log("error");
  			}
		});
    $.ajax({
      "url":"https://api.github.com/users/phillycc/starred",
      "dataType":"json",
      "success":function(data){
        $('#starred').children('strong').text(data.length);
      },
      "error":function(data){
        console.log("error");
      }
    });
    $.ajax({
      "url":"https://api.github.com/users/phillycc/repos",
      "dataType":"json",
      "success":function(data){
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
      },
      "error":function(data){
        console.log("error");
      }
    });
});

/*

<li class="list-group-item"><strong></strong></li>
<li class="list-group-item">Dapibus ac facilisis in</li>
<li class="list-group-item">Morbi leo risus</li>

$.each(response, function(i, item) {
    $('<tr>').html("<td>" + response[i].rank + "</td><td>" + response[i].content + "</td><td>" + response[i].UID + "</td>").appendTo('#records_table');
});

    "description": "The Handbook for the Front End Engineering class

  $.each(data, function(i, item){
              alert("Mine is " + i + "|" + item.title + "|" + item.key);
          });

    */



/*jQuery(function(){
  jQuery.ajax({
			"url":"https://api.github.com/users/phillycc",
      "dataType":"json",
			"success":function(data){

      }
});*/


/*var profile = [];
$(function(){
  jQuery.ajax('octocat.json',{
    success: function(data){
      //profile.push(data);
      var imgLink = data.avatar_url;

      //debugger;
      jQuery('#avatar')
        .attr('href',imgLink)
        .children('img')
          .attr('src', imgLink);

    }
  });
})();*/

/*
* jQuery('.sidebar > *').filter('h1') < gets all children of sidebar
* jQuery('.sidebar > h1')[0].firstChild < gets the {{name}}
* jQuery('.sidebar > h1 > small')[0].firstChild < gets the {{login}}
*
* children returns the HTML elements, but flowing text is not an element
* can assign to it via innerText ... jQuery('.sidebar > h1 > small')[0].innerText
* jQuery('.sidebar > h1').text() < returns all the text inside that h1
* jQuery('.sidebar > h1').html()
* jQuery('.sidebar > h1 > small')[0].innerHTML()
*
* method chaining (Command Query Separation Rule)
* var h1 = jQuery('.sidebar > h1');
* h1.html('David') = h1; < returns [<h1>David</h1>]
* h1.html('David').removeClass('small');
*
* jQuery('.sidebar > h1').children('span').text('David') < changes the name by
* staying within HTML elements and jQuery (not DOM)
*/
