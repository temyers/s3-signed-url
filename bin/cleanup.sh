aws s3 rm s3://${BUCKET_NAME}/test-file.txt
aws cloudformation delete-stack --stack-name s3-signed-url