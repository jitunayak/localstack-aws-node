const fs = require("fs");
const path = require("path");

const { uploadFile } = require("./CreateS3Bucket");
const { getListOfObjects } = require("./ListObjects");

const getObjectsFromBucket = () => {
  getListOfObjects("mybucket")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

getObjectsFromBucket();

const testUpload = () => {
  const filePath = path.resolve(__dirname, "listBuckets.js");
  const fileStream = fs.createReadStream(filePath);
  const now = new Date();
  const fileName = `test-image-${now.toISOString()}.js`;
  uploadFile(fileStream, fileName)
    .then((response) => {
      console.log(":)");
      console.log(response);
    })
    .catch((err) => {
      console.log(":|");
      console.log(err);
    });
};
