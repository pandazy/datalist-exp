import { ReactElement } from 'react';
import useGetPurchaseList from './api';
import { displayDate, displayUnescape } from '../common/format';
import Badge from '../common/Badge';

const ColorMap: Record<string, string> = {
  Food: "black",
  Technology: "blue",
  Footwear: "green",
  Travel: "purple",
  Entertainment: "red",
  Automotive: "orange",
  Apparel: "navy",
};

/**
 * The component displaying the list of purchases
 */
export default function List(): ReactElement {
  const { data, isLoading, isFetching } = useGetPurchaseList();
  const isLoadingOrFetching = isLoading || isFetching;

  if (isLoadingOrFetching) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className='bg-white table-grid'>
      <div className='table-header'>
        {["Name", "Location", "Purchase Date", "Category", "Description", "Price"].map((header) => (
          <div key={header} className='p-4 px-8 bd-b-1'>{header}</div>
        ))}
      </div>
      {data.map(({ id, name, location, purchaseDate, description, category, price}) => {
        const descriptionText = displayUnescape(description);
        const purchaseDateText = displayDate(purchaseDate);
        const purchaseDateLabelId = `purchase-date-label-${id}`;
        const nameLabelId = `name-label-${id}`;
        const nameLabelIdMobile = `name-label-mobile-${id}`;
        return (<div key={id} className='table-row mb-4'>
          <div className='table-cell'>
            <b id={nameLabelId} aria-label="Purchase name">{name}</b>
          </div>
          <div className='table-cell mobile-hide'>
            <img className='img-sm' src={location} alt={name} aria-labelledby={nameLabelId}/>
          </div>
          <div className='table-cell' aria-label="Purchase date">{purchaseDateText}</div>
          <div className='table-cell mt-2' aria-label="Category"><Badge className='p-2' color={ColorMap[category]}>{category}</Badge></div>
          <div className='table-cell' aria-label="Description">{descriptionText}</div>
          <div className='table-cell' aria-label="Price"><strong>${price}</strong></div>
          <div className='mobile-cell flex justify-between'>
            <ul className='p-0'>
              <li className='p-2 px-8 flex align-center'>
                <img className='img-sm mr-4' src={location} alt={name} aria-labelledby={nameLabelIdMobile}/>
                <b id={nameLabelIdMobile} aria-label="Purchase name" className='text-md'>{name}</b>
              </li>
              <li className='p-2 px-8 text-light' aria-label="Description">{descriptionText}</li>
              <li className='p-2 px-8 flex flex-col align-start'>
                <label id={purchaseDateLabelId}><strong>Purchase Date</strong></label>
                <div aria-labelledby={purchaseDateLabelId} className='text-light'>{purchaseDateText}</div>
              </li>
            </ul>
            <span className='p-4 mt-2' aria-label='Price'><strong>${price}</strong></span>
          </div>
        </div>);
      })}
    </div>
  );
}
