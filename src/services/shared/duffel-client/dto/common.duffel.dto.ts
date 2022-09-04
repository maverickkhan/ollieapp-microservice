import {
  CabinClass,
  CreateOfferRequest,
  CreateOrder,
  CreateOrderPassenger,
  ListOffersParams,
  OrderPayment,
  OrderService,
} from '@duffel/api';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SliceDto {
  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsNotEmpty()
  @IsString()
  destination: string;

  @IsNotEmpty()
  @IsString()
  departure_date: string;
}

export class PassensgerTypeDto {
  @IsOptional()
  @IsNumber()
  age?: number;
}

export class PassensgerAgeDto {
  @IsOptional()
  @IsNumber()
  age?: number;
}

export class DuffelSearchDto implements CreateOfferRequest {
  @IsArray()
  @Type(() => SliceDto)
  @IsNotEmpty()
  slices: SliceDto[];

  @IsArray()
  @IsNotEmpty()
  passengers: (PassensgerAgeDto | PassensgerTypeDto)[];

  @IsString()
  @IsNotEmpty()
  cabin_class: CabinClass;

  @IsBoolean()
  @IsNotEmpty()
  return_offers: boolean;
}

export class FetchSearchResultsDto implements ListOffersParams {
  @IsNotEmpty()
  @IsString()
  offer_request_id: string;

  @IsOptional()
  @IsString()
  sort?: 'total_amount' | 'total_duration';
}

export class FetchSearchResultsGeneratorDto implements ListOffersParams {
  @IsNotEmpty()
  @IsString()
  offer_request_id: string;

  @IsOptional()
  @IsString()
  sort?: 'total_amount' | 'total_duration';

  @IsOptional()
  @IsNumber()
  limit: number;
}

export class CreateOrderDto implements CreateOrder {
  selected_offers: string[];

  services?: Pick<OrderService, 'id' | 'quantity'>[];

  passengers: CreateOrderPassenger[];

  payments?: OrderPayment[];

  type: 'instant' | 'pay_later';
}
