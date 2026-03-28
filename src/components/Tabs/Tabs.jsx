import React from 'react';

const Tabs = ({activePage,setActivePage}) => {
    return (
        <div  className="tabs tabs-box bg-transparent justify-center my-5">
          <input onClick={()=>setActivePage('model')} type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="Model" defaultChecked />
          <input onClick={()=>setActivePage('carts')} type="radio" name="my_tabs_1" className="tab w-40 rounded-full" aria-label="carts" />
        </div>
    );
};

export default Tabs;