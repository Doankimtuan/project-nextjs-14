'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { FIELD_DATA_AUTH_FORM, userAuthSchema } from '@/lib/auth';
import FormFieldCustom from './form-field-custom';
import { Button, buttonVariants } from './ui/button';
import { Icons } from './icons';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;

const MODE = {
  SIGN_IN: 'sign_in',
  ENTER_NAME: 'enter_name',
};

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const methods = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      [FIELD_DATA_AUTH_FORM.USER_NAME]: '',
      [FIELD_DATA_AUTH_FORM.DISPLAY_NAME]: '',
    },
  });
  const { control, handleSubmit, formState } = methods;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<string>(MODE.SIGN_IN);

  async function onSubmit(data: FormData) {
    console.log({ data });
    setFormMode(MODE.ENTER_NAME);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormFieldCustom
              control={control}
              name={FIELD_DATA_AUTH_FORM.USER_NAME}
              label="User name"
              description="Please use a username similar to tuan.doan."
              disabled={formMode === MODE.ENTER_NAME}
            >
              <Input />
            </FormFieldCustom>
          </div>
          {formMode === MODE.ENTER_NAME && (
            <div className="grid gap-2">
              <FormFieldCustom
                control={control}
                name={FIELD_DATA_AUTH_FORM.DISPLAY_NAME}
                label="Display name"
                description="You can fill in anything you want, up to 200 characters. If you leave it blank, the username will be used."
              >
                <Input />
              </FormFieldCustom>
            </div>
          )}
          <div className="flex justify-center pt-4">
            <Button disabled={isLoading} className="w-40" type="submit">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {formMode === MODE.SIGN_IN ? 'Sign In' : 'Finish'}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
