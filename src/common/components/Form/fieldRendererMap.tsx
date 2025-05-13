import React from 'react';
import {
  TextField,
  MenuItem,
  Box,
  Typography,
  TextareaAutosize,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormField } from '../../types/common';

export const fieldRendererMap: Record<
  FormField['type'],
  (
    field: FormField,
    control: any,
    rules?: Record<string, any>
  ) => React.ReactNode
> = {
  text: (field, control, rules) => (
    <Controller
      key={field.name}
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField, fieldState }) => (
        <TextField
          {...controllerField}
          label={field.label}
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  ),

  select: (field, control, rules) => (
    <Controller
      key={field.name}
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField, fieldState }) => (
        <TextField
          {...controllerField}
          select
          label={field.label}
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        >
          {field.options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  ),

  textarea: (field, control, rules) => (
    <Controller
      key={field.name}
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField, fieldState }) => (
        <Box marginY={2}>
          <Typography>{field.label}</Typography>
          <TextareaAutosize
            {...controllerField}
            minRows={4}
            style={{ width: '100%', padding: '8px' }}
          />
          {fieldState.error && (
            <Typography color="error" variant="caption">
              {fieldState.error.message}
            </Typography>
          )}
        </Box>
      )}
    />
  ),

  file: (field, control, rules) => (
    <Controller
      key={field.name}
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField, fieldState }) => (
        <>
          <TextField
            type="file"
            fullWidth
            margin="normal"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              controllerField.onChange(target.files?.[0]);
            }}
          />
        </>
      )}
    />
  ),

  checkbox: (field, control, rules) => (
    <Controller
      key={field.name}
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField, fieldState }) => (
        <FormControlLabel
          control={
            <Checkbox
              {...controllerField}
              checked={!!controllerField.value}
            />
          }
          label={field.label}
        />
      )}
    />
  ),

  radio: (field, control, rules) => (
    <Controller
      key={field.name}
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField, fieldState }) => (
        <FormControl margin="normal" error={!!fieldState.error}>
          <FormLabel>{field.label}</FormLabel>
          <RadioGroup {...controllerField}>
            {field.options?.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {fieldState.error && (
            <Typography color="error" variant="caption">
              {fieldState.error.message}
            </Typography>
          )}
        </FormControl>
      )}
    />
  ),

  date: (field, control, rules) => (
    <Controller
      key={field.name}
      name={field.name}
      control={control}
      rules={rules}
      render={({ field: controllerField, fieldState }) => (
        <TextField
          {...controllerField}
          type="date"
          label={field.label}
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="normal"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  ),
};
