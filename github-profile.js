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
