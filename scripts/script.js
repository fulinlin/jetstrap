 $(function()
{
  $(window).on('resize',function()
  {
    var windowWidth = $(this).width();
    console.log(windowWidth);
    if(windowWidth <= 920)
    {
      $('#logo-container').hide();
    }
    else
    {
      $('#logo-container').show();
    }
    if(windowWidth <= 810)
    {
      $('#register-log-container').hide();
      $('#getting-started').hide();
    }

    else
     {
       $('#register-log-container').show();
       $('#getting-started').show();
    }
  });
});
