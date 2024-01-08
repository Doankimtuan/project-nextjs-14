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
import { Input } from './ui/input';

interface IFormField {
  children: React.ReactNode;
  control: any;
  name: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

const FormFieldCustom = ({
  children,
  name,
  label,
  description,
  disabled,
}: IFormField) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const renderChildren = useCallback(
    (field: any) => {
      return React.cloneElement(children as any, {
        ...field,
      });
    },
    [children],
  );

  return (
    <FormField
      control={control}
      name={name}
      disabled={disabled}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderChildren(field)}</FormControl>
          {!errors[name] && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldCustom;
