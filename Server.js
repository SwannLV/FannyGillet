var fu = require("./fu");
var HOST = process.env.IP;
var PORT = process.env.PORT;

fu.listen(Number(process.env.PORT || PORT), HOST);
fu.get("/", fu.staticHandler("Index.html"));
fu.get("/css/jquery.mobile-1.2.0.min.css", fu.staticHandler("css/jquery.mobile-1.2.0.min.css"));
fu.get("/js/jquery.mobile-1.2.0.min.js", fu.staticHandler("js/jquery.mobile-1.2.0.min.js"));
fu.get("/js/jquery.min.js", fu.staticHandler("js/jquery.min.js"));
fu.get("/js/app.js", fu.staticHandler("js/app.js"));
fu.get("/css/app.css", fu.staticHandler("css/app.css"));
fu.get("/images/fg.jpg", fu.staticHandler("images/fg.jpg"));

fu.get("/three.min.js", fu.staticHandler("three.min.js"));
fu.get("/Site.html", fu.staticHandler("Site.html"));
