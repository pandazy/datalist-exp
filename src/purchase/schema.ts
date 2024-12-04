/**
 * Purchase schema matching the response from the server
 */
export interface Purchase {
  id: string;
  name: string;
  location: string;
  purchaseDate: string;
  category: string;
  description: string;
  price: number;
}
