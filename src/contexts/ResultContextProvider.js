import { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Jeff Bezos');

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseURL}${type}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
        'x-rapidapi-key': '655b2eee08mshc0d3ddf1b186156p198a22jsn76407c2e3981'
      }
    });

    const data = await response.json();
    console.log(data);

    if (type.includes('/news')) {
      setResults(data.entries);
    } else if(type.includes('/images')){
      setResults(data.image_results);
    } else {
      setResults(data.results);
    }

    setIsLoading(false);
  }

  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, isLoading, setSearchTerm}}>
      { children }
    </ResultContext.Provider>
  )
}

export const useResultContext = () => useContext(ResultContext);