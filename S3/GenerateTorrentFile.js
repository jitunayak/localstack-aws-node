const aws = require("aws-sdk");
const fs = require("fs");

aws.config.update({
  endpoint: "http://localhost:4566",
  region: "us-east-1",
  s3ForcePathStyle: true,
});

const s3 = new aws.S3();

const params = {
  Bucket: "mybucket",
  Key: "test-2021-05-15T06:16:17.333Z.js",
};

s3.getObjectTorrent(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else {
    fs.writeFileSync("./test.torrent", data.Body);
    console.log(data.Body);
  }
});
