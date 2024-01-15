'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import FormFieldCustom from './form-field-custom';
import { Button, buttonVariants } from './ui/button';
import { Icons } from './icons';
import { FIELD_DATA_ORDER, orderSchema } from '@/lib/order';
import { TDish } from '@/types';
import { Textarea } from './ui/textarea';

interface OrderFormProps extends React.HTMLAttributes<HTMLDivElement> {
  itemSelected: TDish;
  onCloseForm: () => void;
}

type FormData = z.infer<typeof orderSchema>;

const OrderForm = ({
  className,
  itemSelected,
  onCloseForm,
  ...props
}: OrderFormProps) => {
  const methods = useForm<FormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      [FIELD_DATA_ORDER.NOTE]: '',
      [FIELD_DATA_ORDER.QUALITY]: 1,
    },
  });
  const { control, handleSubmit, formState } = methods;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: FormData) {
    console.log({ data });
    onCloseForm();
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h3 className="text-lg font-bold mb-3">{itemSelected.name}</h3>
          <div className="grid gap-2">
            <FormFieldCustom
              control={control}
              name={FIELD_DATA_ORDER.NOTE}
              label="Note"
            >
              <Textarea />
            </FormFieldCustom>
          </div>
          <div className="grid gap-2">
            <FormFieldCustom
              control={control}
              name={FIELD_DATA_ORDER.QUALITY}
              label="Quantity"
            >
              <Input type="number" />
            </FormFieldCustom>
          </div>

          <div className="flex justify-center pt-4">
            <Button disabled={isLoading} className="w-40" type="submit">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Finish
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default OrderForm;
