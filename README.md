Sample for creating S3 pre-signed URLs

## Pre-requisites

* You have AWS credentials already configured in a profile - i.e. `AWS_PROFILE=foo`
* You have permissions to create IAM users, and S3 buckets.

## Setup

```
./bin/deployStack.sh
./bin/createUserCredentials <user-name>
export AWS_ACCESS_KEY_ID=<AccessKeyId>
export AWS_SECRET_ACCESS_KEY=<SecretAccessKey>
./bin/upload-test-file.sh <bucket-name>
export BUCKET_NAME=<bucket-name>
npm run:test
```

## Teardown

```
./bin/cleanup.sh
```
