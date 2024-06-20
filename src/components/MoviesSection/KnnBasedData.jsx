import { useState, useEffect } from 'react';
import { useSearch } from '../../SearchContext';
import based from "./../../assets/peopleWhoLiked.png";
import getData from '../../methods/getData';
import DataItem from '../DataItem';

export default function KnnBasedData({
  setLoadingState,
}) {
  const { selectedTerm } = useSearch();
  const [knnData, setKnnData] = useState({});

  useEffect(() => {
    const handleFetch = async () => {
      setLoadingState((prevState) => ({
        ...prevState,
        isKnnBasedLoading: true,
      }));
      if (selectedTerm !== null && selectedTerm?.length > 2) {
        const data = await getData('knn', selectedTerm);
        setKnnData(data);
        setLoadingState((prevState) => ({
          ...prevState,
          isKnnBasedLoading: false,
        }));
      }
    };

    handleFetch();
  }, [selectedTerm, setLoadingState]);

  if (knnData?.length !== null) {
    return (
      <>
        <img
          src={based}
          alt="People who watched this movie also liked these movies "
          className="unselectable mb-2 max-h-80 "
          draggable="false"
        />
        {
          knnData?.movie?.slice(0, 5)?.map((m, idx) => {
            return (
              <DataItem
                mName={m}
                i={idx}
                mIndex={knnData.title[idx]}
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
