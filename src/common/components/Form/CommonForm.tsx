import { FieldValues,DefaultValues,useForm, Controller,useFormContext } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import { FormField,BaseFormProps } from '../../types/common';
import { fieldRendererMap } from './fieldRendererMap';
import { buildValidationRules } from './validation';
import { useEffect } from 'react';
import React from 'react';


export default function CommonForm<T extends FieldValues>({
  fields,
  initialValues,
  onSubmit,
  setFormSubmit
}: BaseFormProps<T>) {
    const { handleSubmit } = useForm<T>({
    defaultValues: initialValues as DefaultValues<T>,
  });

    const { control } = useFormContext();
//   useEffect(() => {
//     if (setFormSubmit) {
//         setFormSubmit(handleSubmit(onSubmit));
//     }
//   }, [setFormSubmit, handleSubmit, onSubmit]);


  return (
    <form 
        onSubmit = {handleSubmit(onSubmit)}>
        {fields.map((field) => {
            const renderFn = fieldRendererMap[field.type];
            if (!renderFn) return null;
            const rules = buildValidationRules(field);  
            return renderFn(field, control, rules); 
        })}

        {/* <Box mt={2}>
            <Button type="submit" variant="contained">
            Submit
            </Button>
        </Box> */}
    </form>
  );
}
