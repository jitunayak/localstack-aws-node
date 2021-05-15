const aws = require("aws-sdk");

aws.config.update({
  endpoint: "http://localhost:4566",
  region: "us-east-1",
  s3ForcePathStyle: true,
  signatureVersion: "v4",
  accessKeyId: "test",
});

const s3 = new aws.S3();
const params = {
  Bucket: "mybucket",
  Key: "test-2021-05-15T06:16:17.333Z.js",
  Expires: 10,
};

var url = s3.getSignedUrl("getObject", params);
console.log("The URL is", url);
