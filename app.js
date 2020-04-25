var http =  require('http');
var request = require('request');
var exp = require('express');
var app=exp();

app.use(exp.static(__dirname + '/public'));

app.set('view engine','ejs');
app.listen(process.env.PORT || 4000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });


  app.get('/',function (req,res){
    res.render("frontpage",{result:""});
    
});

  app.get('/search',function(req,res)
  {
    var country = req.query.loc ;
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+country+"&appid=0cc0163e251512a13d3a1e6a081d298b" 
    request(url, function(err,res1,result)
    {
      res.render("frontpage",{result:result})
    })
  });


