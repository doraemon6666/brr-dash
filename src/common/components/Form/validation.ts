import { FormField } from '../../types/common';

export const buildValidationRules = (field: FormField) => {
  const rules: Record<string, any> = {};

  if (field.required) {
    rules.required = `${field.label} is required`;
  }
  if (field.validation) {
    Object.assign(rules, field.validation); // support minLength, max, etc
  }

  return rules;
};
