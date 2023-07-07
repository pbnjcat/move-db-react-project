import React from 'react';
import { Wrapper } from './DropdownMenu.styles';

const DropdownMenu = ({ handleOptionClick, selectedOption }) => {
    const DropdownItem = (props) => {
        return <div className="dropdown-item">{props.text}</div>;
    };

    const options = [
        { label: 'Home', value: 'all'},
        { label: 'Movies', value: 'movie', dropdownItems: ['Dropdown Item 10', 'Dropdown Item 11', 'Dropdown Item 12'] },
        { label: 'Series', value: 'tv', dropdownItems: ['Dropdown Item 10', 'Dropdown Item 11', 'Dropdown Item 12'] },
    ];

    return (
        <Wrapper>
            <div className="menu-container">
                {options.map((option) => (
                    <div
                        key={option.label}
                        className={`dropdown ${option.value === selectedOption ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option.value)}
                    >
                        <h3>{option.label}</h3>
                        {option.dropdownItems && option.dropdownItems.length > 0 && (
                            <div className="dropdown-content">
                                {option.dropdownItems.map((dropdownItem) => (
                                    <DropdownItem key={dropdownItem} text={dropdownItem} />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default DropdownMenu;
