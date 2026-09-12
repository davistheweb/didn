import axios from "axios";

export const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1"
).replace(/\/+$/, "");

export const API_ORIGIN = new URL(API_BASE_URL).origin;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: { Accept: "application/json" },
});

export const resolveAssetUrl = (
  url: string | null | undefined,
): string | null => {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/")) return `${API_ORIGIN}${url}`;
  return null;
};

export const normalizeApiError = (error: unknown, fallback: string): Error => {
  if (axios.isAxiosError(error)) {
    const message = (error.response?.data as { message?: string } | undefined)
      ?.message;
    if (message) return new Error(message);
  }
  return new Error(fallback);
};
