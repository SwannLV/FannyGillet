var fu = require("./fu");
var HOST = process.env.IP;
var PORT = process.env.PORT;

fu.listen(Number(process.env.PORT || PORT), HOST);

fu.get("/", fu.staticHandler("Index.html"));
//fu.get("/THREEx.KeyboardState.js", fu.staticHandler("THREEx.KeyboardState.js"));
