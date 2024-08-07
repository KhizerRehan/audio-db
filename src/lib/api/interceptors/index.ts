import axios from 'axios'

// TODO: baseURL will be updated to Backend URL
const axiosInstance = axios.create({
  baseURL: 'https://www.theaudiodb.com/api/v1/json/2/',
  timeout: 5000
})

export const isProduction = (): boolean => process.env.NEXT_PUBLIC_NODE_ENV === 'production'


export const requestInterceptor = (config: any) => {
  if (!isProduction()) {
    console.info('Request Interceptor:', config)
  }
  return config
}

export const responseInterceptor = (response: any) => {
  if (!isProduction()) {
    console.info('Response Interceptor:', response)
  }
  return response
}

export const responseErrorInterceptor = (error: any) => {
  if (!isProduction()) {
    console.info('Error Response Interceptor:', error)
  }

  const errorResponse = error?.response
  const errorMessage = errorResponse?.data?.message || 'Unknown error occurred'
  const status = errorResponse?.status || 'Unknown status'
  console.info(`Error Status: ${status}, Error Message: ${errorMessage}`)
  return Promise.reject(error)
}

axiosInstance.interceptors.request.use(requestInterceptor)

axiosInstance.interceptors.response.use(responseInterceptor, responseErrorInterceptor)

export default axiosInstance