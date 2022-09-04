import {
  CreateOfferRequest,
  DuffelResponse,
  Offer,
  OfferRequest,
  Order,
} from '@duffel/api';
import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { DuffelServiceService } from '../duffel-service/duffel-service.service';
import {
  CreateOrderDto,
  DuffelSearchDto,
  FetchSearchResultsDto,
} from './dto/common.duffel.dto';

@Injectable()
export class DuffelClientService {
  constructor(private readonly duffelServiceService: DuffelServiceService) {}

  async searchForFlight(
    duffelSearchDto: DuffelSearchDto,
  ): Promise<DuffelResponse<OfferRequest>> {
    try {
      const search: DuffelResponse<OfferRequest> =
        await this.duffelServiceService.offerRequests.create(duffelSearchDto);
      return search;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async fetchSearchResults(
    fetchSearchResultsDto: FetchSearchResultsDto,
  ): Promise<DuffelResponse<Offer[]>> {
    try {
      const results: DuffelResponse<Offer[]> =
        await this.duffelServiceService.offers.list(fetchSearchResultsDto);
      return results;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  /**
   * @param  {Offer['id']} id
   * @returns Promise
   */
  async getOffer(id: Offer['id']): Promise<DuffelResponse<Offer>> {
    try {
      const offer: DuffelResponse<Offer> =
        await this.duffelServiceService.offers.get(id);
      return offer;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async placeOrder(
    createOrderDto: CreateOrderDto,
  ): Promise<DuffelResponse<Order>> {
    try {
      const order: DuffelResponse<Order> =
        await this.duffelServiceService.orders.create(createOrderDto);
      return order;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
