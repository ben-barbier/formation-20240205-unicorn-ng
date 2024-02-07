import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CapacityDTO } from '../../shared/dto/capacity.dto';

export const capacitiesActions = createActionGroup({
  source: 'Capacities',
  events: {
    // 🎯 loadCapacities
    loadCapacities: emptyProps(),
    loadCapacitiesSuccess: props<{ capacities: CapacityDTO[] }>(),
    loadCapacitiesError: emptyProps(),
  },
});
