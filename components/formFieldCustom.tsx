'use client';
import React, { Component, useCallback } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { ControllerRenderProps, useFormContext } from 'react-hook-form';

interface IFormField {
  children: React.ReactNode;
  control: any;
  name: string;
  label: string;
  description?: string;
}

const FormFieldCustom = ({
  children,
  name,
  label,
  description,
}: IFormField) => {
  const { control } = useFormContext();
  const renderChildren = useCallback(
    (field: any) => {
      return React.cloneElement(children as any, {
        ...field,
      });

      // return React.Children.map(children, (child: any) => {
      // });
    },
    [children],
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderChildren(field)}</FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldCustom;
