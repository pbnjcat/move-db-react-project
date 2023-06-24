import React, { useState, useEffect} from 'react';
import { Wrapper } from './DropdownMenu.styles';

const DropdownMenu = () => {
    const [open, setOpen] = useState(false);

    useEffect (() => {
        
    })

    const DropdownItem = (props) => {
        return (
            <li className='dropdown-item'>
                <div> {props.text} </div>
            </li>
        );
    }
    return (
        <Wrapper>
            <div className='menu-container'>
                <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                    <h3>Home</h3>
                    <h3>Genre</h3>
                    <h3>Series</h3>
                    <h3>Popular</h3>
                </div>
            </div>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <ul>
                    <h3>Sort By</h3>
                    <DropdownItem text={'Movies'} />
                    <DropdownItem text={'Series'} />
                    <DropdownItem text={'Item 1'} />
                    <DropdownItem text={'Item 1'} />
                </ul>
            </div>
        </Wrapper>
    )
}

export default DropdownMenu;