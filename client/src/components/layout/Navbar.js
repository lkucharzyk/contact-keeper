import React from 'react';

export const Navbar = ({title, icon}) => {
  return (
    <div className='navbar bg-primary'>
        <h1>
            <i className={icon}/>{title}
        </h1>
    </div>
  )
}

Navbar.defaultProps = {
    title: 'Contact keeper',
    icon: 'fa-regular fa-address-card p-1'
}