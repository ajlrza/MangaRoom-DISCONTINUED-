import * as Kafka from "node-rdkafka"
import pkg from 'node-rdkafka';
const {Producer} = pkg;



const TOPIC_NAME = "user_reading_session";

const producer = new Producer({
    'metadata.broker.list': "kafka-331fe83-ajalaroza-a5e5.d.aivencloud.com:26399",
    "security.protocol": "ssl",
    "ssl.key.location": "service.key",
    "ssl.certificate.location": "service.cert",
    "ssl.ca.location": "ca.pem",
    dr_cb: true,
});

producer.connect();

const sleep = async (timeInMs) =>
    await new Promise((resolve) => setTimeout(resolve, timeInMs));

export function ReceiveData(data) {
    let dataFromUser = data;

    const produceMessagesOnSecondIntervals = async () => {

        let i = 0;
        while (i < 100) {
            try {
                if (!producer.isConnected()) {
                    await sleep(1000);
                    continue;
                }
                producer.produce(
                    TOPIC_NAME,
                    1,
                    Buffer.from(dataFromUser),
                    null,
                    Date.now()
                );
                console.log(`Message sent: ${dataFromUser}`);
            } catch (err) {
                console.error("A problem occurred when sending our message");
                console.error(err);
            }

            await sleep(1000);
        }

        producer.disconnect();
    };

    produceMessagesOnSecondIntervals();
}

