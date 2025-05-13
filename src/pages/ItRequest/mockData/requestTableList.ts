import {ITRequest} from '../types/ITRequest'
import {BASE_URL} from '@/common/constants'


function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchItRequestList = async (): Promise<ITRequest[]> => {
  const res = await fetch(`${BASE_URL}/requests`);
  await sleep(2000);
  if (!res.ok) {
    throw new Error('Failed to fetch requests');
  }
  return res.json();
};

export async function deleteItRequest(id: string) : Promise<
  | { success: true }
  | { success: false; status: number; error: string }
> {
  const response = await fetch(`${BASE_URL}/requests/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    return { 
      success: false, 
      status: response.status, 
      error: 'Deletion failed. Please try again.' 
    };
  }
  return { success: true };
}
