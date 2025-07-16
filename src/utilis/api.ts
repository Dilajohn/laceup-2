// src/utils/api.ts

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

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...options,
    headers,
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
      // Assumes API returns errors as { message: string } or string, adjust as needed
      let errorMessage = typeof data === 'string' ? data : data?.message || response.statusText;
      throw new Error(errorMessage);
    }

    return data as T;
  } catch (error) {
    // Re-throw or enhance here to handle globally/log, etc.
    throw error;
  }
}
