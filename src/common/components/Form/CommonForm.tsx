import React from 'react';

import { FieldValues, DefaultValues, useForm, useFormContext } from 'react-hook-form';

import { BaseFormProps } from '../../types/common';

import { fieldRendererMap } from './fieldRendererMap';

import { buildValidationRules } from './validation';

export default function CommonForm<T extends FieldValues>({
  fields,
  initialValues,
  onSubmit,
}: BaseFormProps<T>) {
  const { handleSubmit } = useForm<T>({ defaultValues: initialValues as DefaultValues<T> });

  const { control } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => {
        const renderFn = fieldRendererMap[field.type];

        if (!renderFn) return null;
        const rules = buildValidationRules(field);

        return renderFn(field, control, rules);
      })}
    </form>
  );
}
