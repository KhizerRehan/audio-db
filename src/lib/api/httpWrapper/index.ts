import axiosInstance from '@/lib/api/interceptors'
import { AxiosResponse } from 'axios'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const ApiRequest = async <T>(method: any, url: any, data = null): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance({
      method,
      url,
      data
    })
    return response.data
  } catch (error: any) {
    throw new Error(`Error in HTTP request: ${error.message}`)
  }
}

export const httpGet = async <T>(url: string): Promise<T> => {
  return await ApiRequest<T>(HttpMethod.GET, url)
}

export const httpPost = async <T>(url: string, data: any): Promise<T> => {
  return await ApiRequest<T>(HttpMethod.POST, url, data)
}

export const httpPut = async <T>(url: string, data: any): Promise<T> => {
  return await ApiRequest<T>(HttpMethod.PUT, url, data)
}

export const httpDelete = async <T>(url: string, data: any): Promise<T> => {
  return await ApiRequest<T>(HttpMethod.DELETE, url, data)
}
