import { Offer } from '@duffel/api';
import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import {
  CreateOrderDto,
  DuffelSearchDto,
  FetchSearchResultsDto,
} from '../shared/duffel-client/dto/common.duffel.dto';
import { DuffelClientService } from '../shared/duffel-client/duffel-client.service';
import { CreateFlightOperationDto } from './dto/create-flight-operation.dto';
import { UpdateFlightOperationDto } from './dto/update-flight-operation.dto';

@Injectable()
//Why another service layer? This is for performing operations such as another DB or caching the responses
export class FlightOperationsService {
  constructor(private readonly duffelClientService: DuffelClientService) {}
  async searchForFlight(duffelSearchDto: DuffelSearchDto) {
    try {
      const data = await this.duffelClientService.searchForFlight(
        duffelSearchDto,
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async fetchSearchResults(fetchSearchResultsDto: FetchSearchResultsDto) {
    try {
      const data = await this.duffelClientService.fetchSearchResults(
        fetchSearchResultsDto,
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getOffer(id: Offer['id']) {
    try {
      const data = await this.duffelClientService.getOffer(id);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async placeOrder(createOrderDto: CreateOrderDto) {
    try {
      const data = await this.duffelClientService.placeOrder(createOrderDto);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
