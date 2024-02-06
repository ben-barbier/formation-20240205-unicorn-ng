import { UnicornDTO } from '../dto/unicorn.dto';

export interface Unicorn extends UnicornDTO {
  capacitiesLabels: string[];
}
