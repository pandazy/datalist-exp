import { useQuery, UseQueryResult } from '@tanstack/react-query';

/**
 * Generic function to fetch data from an API
 * @returns
 */
export function useQueryApi<RESP>(apiURL: RequestInfo): UseQueryResult<RESP> {
  return useQuery({
    queryKey: ["main-list"],
    queryFn: async () => {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error('Query failed!' + response.statusText);
      }
      return response.json() as Promise<RESP>;
    },
  });
}
