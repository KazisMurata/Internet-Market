import React from 'react';
import BasketCart from './Basket.Cart';
import Search from './Search';

const Sidebar: React.FC = () => {
    return (
        <div>
            <BasketCart />
            <Search />
        </div>
    );
};

export default Sidebar;