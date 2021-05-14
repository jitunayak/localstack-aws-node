provider "aws" {

skip_credentials_validation = true

skip_metadata_api_check     = true

skip_requesting_account_id = true

access_key                  = "test"

secret_key                  = "test"

region                      = "us-east-1"

endpoints {

sns     = "http://localhost:4566"

sqs     = "http://localhost:4566"

}

}

resource "aws_sqs_queue" "local_queue" {

name = "local-queue" # same as in code!

}

resource "aws_sns_topic" "local_topic" {

name = "local-topic" # same as in code!

}

resource "aws_sns_topic_subscription" "local_sub" {

topic_arn = "${aws_sns_topic.local_topic.arn}"

endpoint  = "${aws_sqs_queue.local_queue.arn}"

protocol  = "sqs"

}