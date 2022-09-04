import { PartialType } from '@nestjs/mapped-types';
import { CreateFlightOperationDto } from './create-flight-operation.dto';

export class UpdateFlightOperationDto extends PartialType(CreateFlightOperationDto) {
  id: number;
}
