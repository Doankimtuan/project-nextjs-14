import * as z from 'zod';


export const FIELD_DATA_AUTH_FORM = {
  USER_NAME: 'userName',
  DISPLAY_NAME: 'displayName',
};

export const userAuthSchema = z.object({
  [FIELD_DATA_AUTH_FORM.USER_NAME]: z.string().refine((value) => /^[a-zA-Z]+[.][a-zA-Z]+$/.test(value), 'Please use a username similar to tuan.doan.'),
  [FIELD_DATA_AUTH_FORM.DISPLAY_NAME]: z.string().max(200, 'You can fill in anything you want, up to 200 characters.').optional(),
});
