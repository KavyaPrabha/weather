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
    res.render("intro");
    
});

  app.get('/search',function(req,res)
  {
    var country = req.query.loc ;
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+country+"&appid=0cc0163e251512a13d3a1e6a081d298b" 
    request(url, function(err,res1,result)
    {
      result=JSON.parse(result);
      console.log(result.main.temp)
      var temp=result.main.temp;
      var desc=result.weather[0].description;
      var mintemp=result.main.temp_min;
      var maxtemp=result.main.temp_max;
      res.render("frontpage",{result:temp,city:country,desc:desc,mintemp:mintemp,maxtemp:maxtemp})
    })
  });


