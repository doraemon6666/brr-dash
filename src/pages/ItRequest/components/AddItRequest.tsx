import React,{useEffect} from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import CommonForm from '@/common/components/Form/CommonForm';
import {ITRequestFormValues,AddItRequestProps,SubmitPayload} from '../types/ITRequest'
import {itRequestFormFields} from '../config/itRequestFormFields'
import { FormProvider, useForm } from 'react-hook-form';
import { mockUploadFile,mockSubmitRequest } from '../mockData/requestFrom'
import { useSnackbarContext } from '@/common/contexts/snackbar';
export default function AddItRequest({ open,onClose,onSuccess }: AddItRequestProps) {
  const handleClose = () => {

  }
  const { showSnackbar } = useSnackbarContext();
  const methods = useForm<ITRequestFormValues>();
  const { reset } = useForm<ITRequestFormValues>();

  useEffect(() => {
  if (open) {
    reset(); 
  } 
}, [open]);
  async function handleFileUpload(file: unknown): Promise<string | null> {
    if (!(file instanceof File)) return null;

    const res = await mockUploadFile(file);
    if (res.success) {
      return res.url;
    } else {
      showSnackbar(res.error ?? 'File upload failed', 'error');
      return null;
    }
  }
  async function submitForm(payload: SubmitPayload): Promise<void> {
    const result = await mockSubmitRequest(payload);
    if (result.success) {
      showSnackbar('Submit successfully!', 'success');
      reset();
      onSuccess();
      onClose();
    } else {
      showSnackbar('Submission failed. Please try again.', 'error');
    }
  }
  // click submit button
  const handleSubmit = methods.handleSubmit(async (data) => {
    try {
      const fileUrl = await handleFileUpload(data.attachment);
      if (data.attachment && !fileUrl) return; // ❌ 上传失败就终止

      const payload: SubmitPayload = {
        ...data,
        attachment: fileUrl ?? '', // 如果无上传也补空字符串
      };

      await submitForm(payload);
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Unknown error';
      showSnackbar(`Submission failed: ${msg}`, 'error');
    }

  });

  const handelCancel = () => {
      onClose();
      reset({});
  }
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        slotProps={{
          paper: {
            component: 'form',
          },
        }}
      >
        <DialogTitle>IT Request</DialogTitle>
        <FormProvider {...methods}>
            <DialogContent>
                <CommonForm<ITRequestFormValues>
                    fields={itRequestFormFields}
                    onSubmit={()=>{}}
                />
            </DialogContent>
        </FormProvider>
        
        <DialogActions>
          <Button onClick={handelCancel}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
