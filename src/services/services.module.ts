import { Module } from '@nestjs/common';
import { SharedModule } from './shared/shared.module';
import { FlightOperationsModule } from './flight-operations/flight-operations.module';

@Module({
  imports: [SharedModule, FlightOperationsModule]
})
export class ServicesModule {}
