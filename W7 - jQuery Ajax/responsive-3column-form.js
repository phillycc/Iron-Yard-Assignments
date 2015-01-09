$('#frmResponsive').submit(function(event){
  _.each($(this).serializeArray(), function(object){
       console.log(object);
  });
  return false;
});
