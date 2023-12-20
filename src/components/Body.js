import React from 'react'
import { restrauntList } from '../Constant';
import RestrauntCard from './RestrauntCard';

const Body = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" className='search-input' placeholder='search' value=""/>
        <button>Search</button>
      </div>
    <div className="restraunt-list">
      {restrauntList.map((item) => {
        return <RestrauntCard {...item.info} key={item.info?.id} />;
      })}
    </div>
      </>
  );
}

export default Body;