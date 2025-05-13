export type UploadApi = (
  file: File
) => Promise<{
  success: boolean;
  url?: string;
  error?: string;
}>;
