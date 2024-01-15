import * as z from 'zod';


export const FIELD_DATA_ORDER = {
  NOTE: 'Note',
  QUALITY: 'quality',
};

export const orderSchema = z.object({
  [FIELD_DATA_ORDER.NOTE]: z.string().optional(),
  [FIELD_DATA_ORDER.QUALITY]: z.coerce.number().min(1),
});
