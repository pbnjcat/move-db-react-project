import React, { useState, useEffect, useRef } from 'react';

import filterIcon from '../../images/filter-icon.png';

const DropdownMenu = () => {

    //dropdown menu
    const [open, setOpen] = useState(false);

    const DropdownItem = (props) => {
        return (
            <li className='dropdown-item'>
                <div> {props.text} </div>
            </li>
        );
    }

    // return (
    //     <div className='menu-container'>
    //     <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
    //       <img className='filter-ico' src={filterIcon} alt='filter-icon' />
    //     </div>
    //   </div>
    //   <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
    //     <ul>
    //       <h3>Sort By</h3>
    //       <DropdownItem text={'Item 1'} />
    //       <DropdownItem text={'Item 1'} />
    //       <DropdownItem text={'Item 1'} />
    //       <DropdownItem text={'Item 1'} />
    //     </ul>
    //   </div>
    // )
};

export default DropdownMenu;