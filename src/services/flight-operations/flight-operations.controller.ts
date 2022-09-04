import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlightOperationsService } from './flight-operations.service';
import { CreateFlightOperationDto } from './dto/create-flight-operation.dto';
import { UpdateFlightOperationDto } from './dto/update-flight-operation.dto';
import {
  CreateOrderDto,
  DuffelSearchDto,
  FetchSearchResultsDto,
} from '../shared/duffel-client/dto/common.duffel.dto';

@Controller()
export class FlightOperationsController {
  constructor(
    private readonly flightOperationsService: FlightOperationsService,
  ) {}

  @MessagePattern('searchForFlight')
  create(@Payload() duffelSearchDto: DuffelSearchDto) {
    return this.flightOperationsService.searchForFlight(duffelSearchDto);
  }

  @MessagePattern('fetchSearchResults')
  fetchSearchResults(@Payload() fetchSearchResultsDto: FetchSearchResultsDto) {
    return this.flightOperationsService.fetchSearchResults(
      fetchSearchResultsDto,
    );
  }

  @MessagePattern('getOffer')
  getOffer(@Payload() id: string) {
    return this.flightOperationsService.getOffer(id);
  }

  @MessagePattern('placeOrder')
  placeOrder(@Payload() createOrderDto: CreateOrderDto) {
    return this.flightOperationsService.placeOrder(createOrderDto);
  }
}
