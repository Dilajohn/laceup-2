import { getTokenFromStorage, logout } from '../lib/auth';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.laceup.com';

/**
 * Unified function to make API requests with fetch.
 * Automatically injects Authorization header if token exists.
 * Handles JSON response and errors.
 */
export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getTokenFromStorage();

  // Build headers as a plain object record
  const headersObj: Record<string, string> = {
    'Content-Type': 'application/json',
    // Only merge if options.headers is a plain object (ignore Headers instance or array)
    ...(typeof options.headers === 'object' && !Array.isArray(options.headers) ? options.headers as Record<string, string> : {}),
  };

  if (token) {
    headersObj['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...options,
    headers: headersObj,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);

    // Auto logout on 401 Unauthorized (optional)
    if (response.status === 401) {
      logout();
      throw new Error('Unauthorized. Please login again.');
    }

    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    if (!response.ok) {
      const errorMessage = typeof data === 'string' ? data : data?.message || response.statusText;
      throw new Error(errorMessage);
    }

    return data as T;
  } catch (error) {
    // Re-throw or enhance here to handle globally/log, etc.
    throw error;
  }
}
