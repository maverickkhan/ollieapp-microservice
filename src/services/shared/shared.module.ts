import { Module } from '@nestjs/common';
import { DuffelServiceService } from './duffel-service/duffel-service.service';
import { DuffelClientService } from './duffel-client/duffel-client.service';

@Module({
  providers: [DuffelServiceService, DuffelClientService]
})
export class SharedModule {}
