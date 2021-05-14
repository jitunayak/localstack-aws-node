const AWS = require("aws-sdk");

AWS.config.update({
  endpoint: "http://localhost:4566",
  accessKeyId: "test",
  secretAccessKey: "test",
  region: "test",
  s3ForcePathStyle: true,
});

var s3 = new AWS.S3();

const uploadFile = async (data, fileName, bucketname) =>
  new Promise((resolve) => {
    s3.upload(
      {
        Bucket: bucketname,
        Key: fileName,
        Body: data,
      },
      (err, response) => {
        if (err) throw err;
        resolve(response);
      }
    );
  });

module.exports = {
  uploadFile,
};
