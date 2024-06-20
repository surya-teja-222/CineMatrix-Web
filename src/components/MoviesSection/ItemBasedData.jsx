import { useState, useEffect } from 'react';
import { useSearch } from '../../SearchContext';
import getData from '../../methods/getData';
import DataItem from '../DataItem';

export default function ItemBasedData({
  setLoadingState,
}) {
  const { selectedTerm } = useSearch();
  const [itemData, setitemData] = useState({});

  useEffect(() => {
    const handleFetch = async () => {
      setLoadingState((prevState) => ({
        ...prevState,
        isItemBasedLoading: true,
      }));
      if (selectedTerm !== null && selectedTerm?.length > 2) {
        const data = await getData('item', selectedTerm);
        setitemData(data);
        setLoadingState((prevState) => ({
          ...prevState,
          isItemBasedLoading: false,
        }));
      }
    };

    handleFetch();
  }, [selectedTerm, setLoadingState]);

  if (itemData?.length !== null) {
    return (
      <>
        {
          itemData?.movie?.slice(0, 5)?.map((m, idx) => {
            return (
              <DataItem
                mName={m}
                i={idx}
                mIndex={itemData.title[idx]}
                key={idx}
              />
            )
          })
        }
      </>
    );
  } else {
    return null;
  }
}
