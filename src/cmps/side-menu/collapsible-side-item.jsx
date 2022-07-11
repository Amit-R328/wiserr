import React, { useState } from 'react'
import useCollapse from 'react-collapsed';

export const CollapsibleSideItem = ({ onChangeCategory }) => {
    let [isExpanded, setIsExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse();
    let [categories, setCategories] = useState([{}])
    
    const getContent = () => {
        setCategories([{ name: 'All Categories', parameter: '' },
        { name: 'Graphics & Design', parameter: 'Graphics & Design' },
        { name: 'Digital Marketing', parameter: 'Digital Marketing' },
        { name: 'Writing & Translation', parameter: 'Writing & Translation' },
        { name: 'Video & Animation', parameter: 'Video & Animation' },
        { name: 'Business', parameter: 'Business' },
        { name: 'Lifestyle', parameter: 'Lifestyle' }
        ])
        return { ...getCollapseProps(categories) }
    }
    
    const handleOnClick = (ev) => {
        ev.preventDefault()
        setIsExpanded(!isExpanded)
        if(isExpanded) getContent()
    }
    
    let className = getToggleProps(handleOnClick) 
    let hiddenMenu = isExpanded ? 'visible' : 'hidden'

    return (
        <>
            <ul className={isExpanded ? `categories-side-bar clean-list Collapse ${className}` : `categories-side-bar clean-list Expand ${className}`} onClick={(ev) => handleOnClick(ev)}>Browse Categories
                {categories.map((category, index) => <li key={index}  className={`menu-btn ${hiddenMenu}`} onClick={() => onChangeCategory(category.parameter)}>{category.name}
                </li>)}
            </ul>
        </>
    )
}

