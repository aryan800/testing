
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var options = {
	useUnifiedTopology: true
}
MongoClient.connect(url, options, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Arun Kumar", address: "Noida" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});