/* eslint-disable @typescript-eslint/no-explicit-any */
const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:5000/api/v1";

type FetchOptions = Omit<RequestInit, "headers"> & {
  headers?: Record<string, string>;
};

export interface ApiResponse<T = any> {
  success?: boolean;
  message?: string;
  data: T;
}

const serverFetchHelper = async (
  endpoint: string,
  options: FetchOptions,
): Promise<ApiResponse> => {
  const { headers, ...restOptions } = options;
  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  if (restOptions.body instanceof FormData) {
    delete requestHeaders["Content-Type"];
  }

  const config: RequestInit = {
    headers: requestHeaders,
    ...restOptions,
    next: restOptions.next,
  };

  if (!config.cache) {
    if (!restOptions.next?.revalidate) {
      config.cache = "no-store";
    }
  }

  try {
    const response = await fetch(`${BACKEND_API_URL}${endpoint}`, config);

    if (response.status === 204) {
      return {
        success: true,
        message: "Success",
        data: {} as any,
      };
    }

    const data = await response.json().catch(() => ({}));
    const isDirectData = Array.isArray(data) || data?.data === undefined;
    return {
      success: data?.success ?? response.ok,
      message:
        data?.message ||
        (response.ok ? "Success" : `HTTP error! status: ${response.status}`),
      data: isDirectData ? data : data.data,
    };
  } catch (error: any) {
    console.error(`API Request Failed: ${endpoint}`, error);
    return {
      success: false,
      message: error.message || "Something went wrong",
      data: null as any,
    };
  }
};

export const api = {
  get: async <T = any>(
    endpoint: string,
    options: FetchOptions = {},
  ): Promise<ApiResponse<T>> =>
    serverFetchHelper(endpoint, { ...options, method: "GET" }),
};
