import { ItRequestPriorityMap,ItRequestStatusMap,ItRequestIssueTypeEnum,ItRequestIssueTypeMap } from '@/common/constants'
import {Column} from '@/common/types/common'
import { ITRequest } from '../types/ITRequest'

export const itRequestColumns: Column<ITRequest>[] = [
  { id: 'id', lable: 'ID' },
  { id: 'title', lable: 'Title' },
  { 
    id: 'issueType', 
    lable: 'Issue Type' ,
    render: (value: number) => ItRequestIssueTypeMap[value as ItRequestIssueTypeEnum] || 'Unknown',
  },
  { id: 'description', lable: 'Description' },
  {
    id: 'priority',
    lable: 'Priority',
    render: (value: number) => ItRequestPriorityMap[value] || 'Unknown',
  },
  {
    id: 'status',
    lable: 'Status',
    render: (value: number) => ItRequestStatusMap[value] || 'Unknown',
  },
  
  { id: 'createdAt', lable: 'Created At' },
];