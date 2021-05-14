# S3-Ultimate-guide-nodejs

### Git origin

```
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jitunayak/localstack-aws-node.git
git push -u origin main
```

### Configure localstack

### docker compose file modifications

```
 version: '2.1'

services:
  localstack:
    container_name: "${LOCALSTACK_DOCKER_NAME-localstack_main}"
    image: localstack/localstack
    network_mode: bridge
    ports:
      - "4566:4566"
      - "4571:4571"
      - "${PORT_WEB_UI-8080}:${PORT_WEB_UI-8080}"
    environment:
      - SERVICES=s3,ec2,apigateway
      - DEBUG=1
      - DATA_DIR=/tmp/localstack/data
      - PORT_WEB_UI=${PORT_WEB_UI- }
      - LAMBDA_EXECUTOR=${LAMBDA_EXECUTOR- }
      - KINESIS_ERROR_PROBABILITY=${KINESIS_ERROR_PROBABILITY- }
      - DOCKER_HOST=unix:///var/run/docker.sock
      - HOST_TMP_FOLDER=${TMPDIR}
    volumes:
      - "${TMPDIR:-/tmp/localstack}:/tmp/localstack"
      - "/var/run/docker.sock:/var/run/docker.sock"
```

#### jump to terminal

```

 aws configure
 http://localhost:4566/health

 aws --endpoint-url=http://localhost:4566 s3 ls
 aws --endpoint-url=http://localhost:4566 s3 mb s3://mybucket

aws s3 cp <anyfile> s3://mybucket/<anyfilename> --endpoint https://localhost:4566
```

#### We will install necessary npm packages

```
npm i
npm i aws-sdk
npm i -g serverless
sls create -t aws-nodejs
```

createBucket.js

#### Add below to line to config AWS, otherwise it will keep looking for aws cloud not local path

```
AWS.config.update({
  endpoint: "http://localhost:4566",
  accessKeyId: "test",
  secretAccessKey: "test",
  region: "test",
  s3ForcePathStyle: true,
});
```
