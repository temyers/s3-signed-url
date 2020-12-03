var AWS = require("aws-sdk");
const got = require("got");

describe("Presigned Urls", () => {
  var s3;

  beforeAll(() => {
    s3 = new AWS.S3({
      region: "ap-southeast-2",
    });
  });

  it("should generate a presigned url for download", async () => {
    var params = { Bucket: process.env.BUCKET_NAME, Key: "test-file.txt" };
    var url = await s3.getSignedUrlPromise("getObject", params);
    console.log("The URL is", url);

    const response = await got(url);
    expect(response.body).toEqual("hello world!")
  });
});
