import {BASE_URL} from '@/common/constants'
import {ITRequest,SubmitPayload} from '../types/ITRequest'
// upload file
export async function mockUploadFile(file: File): Promise<
  | { success: true; url: string }
  | { success: false; error: string }
> {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      return {
        success: false,
        error: `Upload failed. Status: ${response.status}`,
      };
    }

    const data = await response.json();

    if (!data.url) {
      return {
        success: false,
        error: 'Upload response missing URL.',
      };
    }

    return { success: true, url: data.url };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    };
  }
}

// itRequest submit
export const mockSubmitRequest =  async (
  data: SubmitPayload
): Promise<{ success: boolean; data: ITRequest }> => {
  const res = await fetch(`${BASE_URL}/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...data,
      id: `REQ-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 1,
    }),
  });

  if (!res.ok) {
    throw new Error(`Failed to submit request: ${res.status}`);
  }

  const result = await res.json();
  return { success: true, data: result };
};