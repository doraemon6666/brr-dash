import {ItRequestPriorityEnum,ItRequestStatusEnum} from '@/common/constants'



export interface ITRequestFormValues {
  id?: string; 
  title: string;
  issueType: number;
  description?: string;
  priority: number; 
  attachment?: File | null; 
}

export interface SubmitPayload {
  id?: string;
  title: string;
  issueType: number;
  description?: string;
  priority: number;
  attachment: string; // file upload url
  status?: ItRequestStatusEnum;
  createdAt?:string
}

export interface ITRequest extends SubmitPayload {
  id: string;         
  createdAt: string;
  // status: number;
}

export interface AddItRequestProps {
    open:boolean,
    onClose: () => void;
    onSuccess: () => void; 
}

export interface ITRequestTableProps {
  onAddClick: () => void;
  refreshFlag:boolean
}