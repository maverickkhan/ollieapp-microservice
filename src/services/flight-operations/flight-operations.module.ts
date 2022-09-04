import { Module } from '@nestjs/common';
import { FlightOperationsService } from './flight-operations.service';
import { FlightOperationsController } from './flight-operations.controller';
import { DuffelClientService } from '../shared/duffel-client/duffel-client.service';
import { DuffelServiceService } from '../shared/duffel-service/duffel-service.service';

@Module({
  controllers: [FlightOperationsController],
  providers: [
    FlightOperationsService,
    DuffelClientService,
    DuffelServiceService,
  ],
})
export class FlightOperationsModule {}
