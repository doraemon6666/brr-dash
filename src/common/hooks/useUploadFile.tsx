import { useState } from 'react';

import { useSnackbarContext } from '../contexts/snackbar/SnackbarContext';

import { UploadApi } from '../types/common';

export function useUploadFile(uploadApi: UploadApi) {
  const { showSnackbar } = useSnackbarContext();
  const [uploading, setUploading] = useState(false);

  const upload = async (file: File): Promise<string | null> => {
    setUploading(true);

    try {
      const res = await uploadApi(file);

      if (res.success && res.url) {
        return res.url;
      } else {
        showSnackbar(`Upload failed: ${res.error ?? 'No error message'}`, 'error');

        return null;
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message : 'Unknown error';

      showSnackbar(`Upload error: ${msg}`, 'error');

      return null;
    } finally {
      setUploading(false);
    }
  };

  return {
    upload,
    uploading,
  };
}
