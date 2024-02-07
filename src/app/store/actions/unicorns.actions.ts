import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Unicorn } from '../../shared/models/unicorn.model';
import { UnicornDTO } from '../../shared/dto/unicorn.dto';

export const unicornsActions = createActionGroup({
  source: 'Unicorns',
  events: {
    // 🎯 getUnicorns
    getUnicorns: emptyProps(),
    getUnicornsSuccess: props<{ unicorns: Unicorn[] }>(),
    getUnicornsError: emptyProps(),

    // 🎯 getUnicorn
    getUnicorn: props<{ id: number }>(),
    getUnicornSuccess: props<{ unicorn: UnicornDTO }>(),
    getUnicornError: emptyProps(),

    // 🎯 updateUnicorn
    updateUnicorn: props<{ unicorn: Unicorn }>(),
    updateUnicornSuccess: props<{ unicorn: Unicorn }>(),
    updateUnicornError: emptyProps(),

    // 🎯 deleteUnicorn
    deleteUnicorn: props<{ unicorn: Unicorn }>(),
    deleteUnicornSuccess: props<{ unicorn: Unicorn }>(),
    deleteUnicornError: emptyProps(),
  },
});
