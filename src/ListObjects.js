const AWS = require("aws-sdk");

AWS.config.update({
  endpoint: "http://localhost:4566",
  accessKeyId: "test",
  secretAccessKey: "test",
  region: "test",
  s3ForcePathStyle: true,
});

var s3 = new AWS.S3();

// var params = {
//   Bucket: "mybucket",
// };

const getListOfObjects = async (bucketname) =>
  new Promise((resolve) => {
    s3.listObjects(
      {
        Bucket: bucketname,
      },
      function (err, data) {
        if (err) resolve(err, err.stack);
        else resolve(data); // successful response
      }
    );
  });

module.exports = {
  getListOfObjects,
};
