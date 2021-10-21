import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const { Results, isLoading, getResults, searchTerm, setSearchTerm } = useResultContext();

  if (isLoading) return <Loading />

  return (
    <div>
      Results
    </div>
  )
}

export default Results;
