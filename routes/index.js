exports.index = function(req, res){
  res.render('index');
};

//exports.partials = function (req, res) {
//  var name = req.params.name;
//  if(name === 'menu' || name === 'about' || name === 'resume' || name === 'projects' || name === 'contact')
//    res.render('partials/' + name);
//  else
//    res.redirect("/");
//};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};