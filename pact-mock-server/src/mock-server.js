import path from 'path';
import { Pact } from '@pact-foundation/pact';

let url = 'http://localhost';
const port = 8989;

const provider = new Pact({
  port: port,
  log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  consumer: 'MyConsumer',
  provider: 'MyProvider',
  pactfileWriteMode: 'merge',
});

const EXPECTED_BODY = {
  dogs: [
    {
      id: 1,
      name: 'Mango',
      bread: 'King Charles',
    },
    {
      id: 2,
      name: 'Tango',
      bread: 'Terrier',
    },
  ],
};


provider.setup().then(() => {
  console.log('setup done');
  provider.addInteraction(interaction).then(() => {
    console.log('interaction done');
  });

}).catch(() => console.log('error')).finally(() => console.log('finally'));

const interaction = {
  state: 'i have a list of dogs',
  uponReceiving: 'a request for all dogs',
  withRequest: {
    method: 'GET',
    path: '/api/dogs',
    headers: {
      'Accept': 'application/json, text/javascript, */*; q=0.01'
      ,
    },
  },
  willRespondWith: {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: EXPECTED_BODY,
  },
};



