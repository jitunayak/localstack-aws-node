# create the bucket

aws --endpoint-url=http://localhost:4566 s3 mb s3://local-aws-bucket

# list all buckets

aws --endpoint-url=http://localhost:4566 s3 ls

npm init

aws sqs create-queue --queue-name local-queue --endpoint-url=http://localhost:4566 --region us-east-1

#### Response

```
{
    "QueueUrl": "http://localhost:4566/000000000000/local-queue"
}
```

aws sns create-topic \
--name local-topic \
--endpoint-url=http://localhost:4566/ \
--region us-east-1

### Response

```
{
    "TopicArn": "arn:aws:sns:us-east-1:000000000000:local-topic"
}

```

aws \
sns subscribe \
--notification-endpoint=http://localhost:4566/000000000000/local-queue \
--topic-arn arn:aws:sns:us-east-1:000000000000:local-topic \
--protocol sqs \
--endpoint-url=http://localhost:4566 \
--region us-east-1

### Response

```
{
    "SubscriptionArn": "arn:aws:sns:us-east-1:000000000000:local-topic:a3cb7bbd-18f4-4ca0-8b26-58124d871c09"
}

```

```
terraform init
```

```
terraform apply --auto-approve
```

Again run your publisher.js

```
➜ node publisher.js
TOPIC Response:  {
  ResponseMetadata: { RequestId: '5deb2d01' },
  MessageId: 'ac9507ec-5712-46df-a871-f05c387536a2'
}
TOPIC Response:  {
  ResponseMetadata: { RequestId: '80cb9330' },
  MessageId: '1035d2fe-5bc5-4936-8314-3940abbc2b61'
}
TOPIC Response:  {
  ResponseMetadata: { RequestId: '48377390' },
  MessageId: 'fdea87b5-ec90-4aa1-91ce-06ac694979b3'
}
TOPIC Response:  {
  ResponseMetadata: { RequestId: '6f03a422' },
  MessageId: '6fff2b73-e35b-4a41-b42d-7a45cdc7fba9'
}
TOPIC Response:  {
  ResponseMetadata: { RequestId: 'a2975a63' },
  MessageId: '8f3f1744-3a73-467c-b0b5-1a6a468533e0'
}

```

Run your consumer.js

```
RECEIVED:  {
  MessageId: 'c2496c04-675a-5937-5db2-7d24afd99097',
  ReceiptHandle: 'ecybqlggxzsxordjidadutlkskeyffeiczlpimgdxckjtynyqbonesvjxstwjppbdvbqdcvqzhfixhpmoevqbwzoysdyfzzwugykdpmthiigsdlcxpfccvzrbgxpnxmopkgybwdjuttcltayxrunzdhhlnwczuchyzkjwjlprbwfhowesnhkwdfon',
  MD5OfBody: 'e5e56fe5172952a85386f94984e52c5f',
  Body: '{"Type": "Notification", "MessageId": "ac9507ec-5712-46df-a871-f05c387536a2", "TopicArn": "arn:aws:sns:us-east-1:000000000000:local-topic", "Message": "message #0", "Timestamp": "2021-05-14T20:25:18.828Z", "SignatureVersion": "1", "Signature": "EXAMPLEpH+..", "SigningCertURL": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-0000000000000000000000.pem"}'
}

x n

```
