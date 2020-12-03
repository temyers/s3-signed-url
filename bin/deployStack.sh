aws cloudformation deploy --template cloudformation/template.yaml --stack-name s3-signed-url --capabilities CAPABILITY_IAM

aws cloudformation describe-stacks --stack-name s3-signed-url --output table --query 'Stacks[*].Outputs'