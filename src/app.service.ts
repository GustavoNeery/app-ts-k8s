import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.APP);
    console.log(process.env.API_KEY);
    console.log(process.env.REVISAO);
    return process.env.REVISAO
      ? `Hello World! ${process.env.REVISAO}`
      : 'Hello World!';
  }

  getExample(): string {
    const file = createWriteStream('rocketseat.txt');
    for (let i = 0; i < 10000; i++) {
      file.write('Estou escrevendo em um arquivo\n');
    }
    file.end();
    return 'Checking k8s deployment';
  }
}
