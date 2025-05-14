import { renderHook, act } from '@testing-library/react';

import { useUploadFile } from '../common/hooks/useUploadFile';

import type { UploadApi } from '../common/types/common';

// mock SnackbarContext
const mockShowSnackbar = jest.fn();

jest.mock('../common/contexts/snackbar/SnackbarContext.tsx', () => ({
  useSnackbarContext: () => ({
    showSnackbar: mockShowSnackbar,
  }),
}));

describe('useUploadFile', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('successful upload returns URL', async () => {
    const mockApi: UploadApi = jest.fn().mockResolvedValue({
      success: true,
      url: 'https://mock.com/file.jpg',
    });

    const { result } = renderHook(() => useUploadFile(mockApi));
    let output: string | null = null;

    await act(async () => {
      output = await result.current.upload(new File(['test'], 'test.jpg'));
    });

    expect(output).toBe('https://mock.com/file.jpg');
    expect(result.current.uploading).toBe(false);
    expect(mockShowSnackbar).not.toHaveBeenCalled();
  });

  test('failed upload returns null and shows error snackbar', async () => {
    const mockApi: UploadApi = jest.fn().mockResolvedValue({
      success: false,
      error: 'Upload failed',
    });

    const { result } = renderHook(() => useUploadFile(mockApi));
    let output: string | null = null;

    await act(async () => {
      output = await result.current.upload(new File(['test'], 'fail.jpg'));
    });

    expect(output).toBeNull();
    expect(mockShowSnackbar).toHaveBeenCalledWith('Upload failed: Upload failed', 'error');
  });

  test('throws error and shows fallback message', async () => {
    const mockApi: UploadApi = jest.fn().mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useUploadFile(mockApi));
    let output: string | null = null;

    await act(async () => {
      output = await result.current.upload(new File(['test'], 'crash.jpg'));
    });

    expect(output).toBeNull();
    expect(mockShowSnackbar).toHaveBeenCalledWith('Upload error: Network error', 'error');
  });
});
