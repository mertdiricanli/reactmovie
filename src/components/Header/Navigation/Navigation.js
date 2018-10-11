import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = () => (
    <ul className="menu">
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/upcoming">Upcoming</NavigationItem>
    </ul>
);

export default navigation;
