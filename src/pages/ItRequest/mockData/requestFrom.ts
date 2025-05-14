import { BASE_URL } from '@/common/constants';

import { ITRequest, SubmitPayload } from '../types/ITRequest';
// upload file
export async function mockUploadFile(
  file: File
): Promise<{ success: true; url: string } | { success: false; error: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!file) {
        resolve({ success: false, error: 'No file provided.' });

        return;
      }

      // Create a mock URL
      const fakeUrl = URL.createObjectURL(file);

      resolve({
        success: true,
        url: fakeUrl,
      });
    }, 500);
  });
}

// itRequest submit
export const mockSubmitRequest = async (
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
