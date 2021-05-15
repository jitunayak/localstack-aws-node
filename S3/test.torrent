const AWS = require("aws-sdk");

AWS.config.update({
  endpoint: "http://localhost:4566",
  accessKeyId: "test",
  secretAccessKey: "test",
  region: "test",
  s3ForcePathStyle: true,
});

var s3 = new AWS.S3();

const getListOfBuckets= async()= new Promise=(()=>{
s3.listBuckets(function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
})});

module.exports={
getListOfBuckets
}
