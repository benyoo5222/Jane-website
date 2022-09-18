const aws = require("aws-sdk");
const sns = new aws.SNS();

const TopicArn = process.env.TOPIC_ARN;
const allowedOrigin = process.env.ALLOWED_ORIGIN;

const buildPublishParams = (message, businessName) => ({
  Message: message,
  Subject: `Hire Jane Request - ${businessName}`,
  TopicArn,
});

exports.handler = async (event) => {
  console.log("Invoked with Event", JSON.stringify(event));

  if (event.headers.origin !== allowedOrigin) {
    console.log("The origins do not match");
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
      },
      body: JSON.stringify({
        message: "This origin is not allowed to access this API",
      }),
    };
  }

  const parsedRequestFormInfo = JSON.parse(event.body);

  if (!parsedRequestFormInfo.email || !parsedRequestFormInfo.businessName) {
    console.log("Did not provide email or business name");
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
      },
      body: JSON.stringify({
        message: "Please provide an email and a business name",
      }),
    };
  }

  try {
    const message = `Business Name: ${parsedRequestFormInfo.businessName}\nEmail: ${parsedRequestFormInfo.email}\nRequest Details: ${parsedRequestFormInfo.requestDetails}\nDate: ${parsedRequestFormInfo.dateSelected}\nLive: ${parsedRequestFormInfo.live}\nOnline: ${parsedRequestFormInfo.online}`;
    const resultFromPublishingMessage = await sns
      .publish(buildPublishParams(message, parsedRequestFormInfo.businessName))
      .promise();
    console.log("Result from publishing message", resultFromPublishingMessage);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
      },
      body: JSON.stringify({ message: "Succesfully sent email" }),
    };
  } catch (err) {
    console.log("Error with publishing message to Topic", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin,
      },
      body: JSON.stringify({ message: err }),
    };
  }
};
