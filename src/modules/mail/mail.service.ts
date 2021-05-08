import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor() {}

  async sendNewsLetter(id: string) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        const number = Math.random();

        if (number < 0.5) {
          resolve({ status: '200', id });
        }
        reject(new HttpException('service busy!', 418));
      }, 50);
    });
  }
}
