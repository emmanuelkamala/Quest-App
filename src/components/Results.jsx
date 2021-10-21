import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
  const { results, isLoading, getResults, searchTerm, setSearchTerm } = useResultContext();
  const location = useLocation();

  useEffect(()=> {
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
         { results?.results?.map(({ link, title, description }, index) => (
           <div key={index} className="md:w-2/5 w-full">
             <a href={link} target="_blank" rel="noreferrer">
               <p className="text-sm">
                 { link.length > 30 ? link.substring(0, 30) : link }
               </p>
               <p className="text-sm text-gray-500">
                 { description.length > 90 ? description.substring(0, 90) : description }
               </p>
               <p className="text-lg text-blue-700 hover:underline dark:text-blue-300">
                  { title }
               </p>
             </a>
           </div>
         ))}
        </div>
      )
    case '/images': 
      return (
        <div className="flex flex-wrap justify-center items-center">
          {
            results?.image_results?.map(({ image, link: {href, title }}, index) => (
              <a href={href} className="sm:p-3 p-5" target="_blank" rel="noreferrer" key={index}>
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="w-36 break-words text-sm mt-2">
                  { title }
                </p>  
              </a>
            ))
          }
        </div>
      )
    case '/news': 
      return 'NEWS';
    case '/videos': 
      return 'VIDEOS';
    default:
      return 'ERROR';
  }
}

export default Results;
