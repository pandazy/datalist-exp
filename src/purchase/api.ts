import { UseQueryResult } from '@tanstack/react-query';
import { useQueryApi } from '../common/api';
import { Purchase } from './schema';

const URL = "https://storage.googleapis.com/marketplace-prod-7728-shop-cdn-e5e2/interview/data.json";

/**
 * Fetches the list of purchases
 * @returns
 */
export default function useGetPurchaseList(): UseQueryResult<Purchase[]> {
  return useQueryApi<Purchase[]>(URL);
}
