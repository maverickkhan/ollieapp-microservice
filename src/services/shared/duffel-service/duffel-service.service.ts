import { Duffel } from '@duffel/api';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class DuffelServiceService extends Duffel {
  constructor() {
    super({
      token: process.env.DUFFEL_TOKEN,
    });
  }
}
