import { ItRequestPriorityMap, ItRequestIssueTypeMap } from '@/common/constants';

import { FormField } from '@/common/types/common';

export const itRequestFormFields: FormField[] = [
  { name: 'title', label: 'Title', type: 'text', required: true },
  {
    name: 'issueType',
    label: 'issueType',
    type: 'select',
    required: true,
    options: Object.entries(ItRequestIssueTypeMap).map(([value, label]) => ({
      label,
      value: Number(value),
    })),
  },
  { name: 'description', label: 'Description', type: 'text' },
  {
    name: 'priority',
    label: 'Priority',
    type: 'select',
    required: true,
    options: Object.entries(ItRequestPriorityMap).map(([value, label]) => ({
      label,
      value: Number(value),
    })),
  },
  {
    name: 'attachment',
    label: 'Upload File',
    type: 'file',
  },
];
