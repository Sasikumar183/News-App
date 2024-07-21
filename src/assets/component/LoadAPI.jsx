import React, { useEffect, useState } from 'react';

export const LoadAPI = ({ cat }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${cat}&api-key=uwuA5CvQhvk9OlFn0JwrA7uCMTf4RruY`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.response.docs);
        console.log(res.response.docs);
      })
      .catch((e) => console.log('error', e));
  }, [cat]);

  return (
    <div className='flex justify-around items-center flex-wrap bg-blue-300'>
      {data.map((item, index) => (
        <div key={index} className='w-[40%] m-3 border border-x-gray-950 p-5 rounded-xl bg-slate-800 text-white shadow-none hover:shadow-2xl shadow-white'>
          {item.multimedia && item.multimedia.length > 0 && (
            <img src={`https://www.nytimes.com/${item.multimedia[0].url}`} alt="Not Available" className='w-96 h-60 mx-auto' />
          )}
          <h2 className='text-xl font-semibold m-2'>{item.headline.main}</h2>
          <p>{item.abstract}</p>
          <a href={item.web_url} target="_blank" rel="noopener noreferrer" className='underline text-white'>Read more</a>
        </div>
      ))}
    </div>
  );
};
