import React, { useState } from 'react'
// import { Collapsible } from '../../hooks/collapsible.jsx'
import useCollapse from 'react-collapsed';

export const CollapsibleSideItem = ({ onChangeCategory }) => {
    // export const CollapsibleSideItem = (props) => {
    let [isExpanded, setIsExpanded] = useState(false);
    // const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
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
        ev.stopPropagation()
        setIsExpanded(!isExpanded)
        if(isExpanded) getContent()
    }
    
    let className = getToggleProps(handleOnClick) 
    let hiddenMenu = isExpanded ? 'visible' : 'hidden'

    return (

        <>
            {/* // <Collapsible> */}
            {/* <h1 className="categories-side-bar clean-list">Browse Categories</h1> */}
            <ul className={isExpanded ? `categories-side-bar clean-list Collapse ${className}` : `categories-side-bar clean-list Expand ${className}`} onClick={(ev) => handleOnClick(ev)}>Browse Categories
            {/* <ul className={`categories-side-bar clean-list ${className}`} onClick={() => getContent()}>Browse Categories */}
                {console.log(getToggleProps)}
                {categories.map((category, index) => <li key={index}  className={`menu-btn ${hiddenMenu}`} onClick={() => onChangeCategory(category.parameter)}>{category.name}
                {/* {isExpanded ? categories.map((category, index) => <li key={index} onClick={() => onChangeCategory(category.parameter)} className="menu-btn">{category.name} */}
                    {/* <div className="menu-btn" onClick={() => onChangeCategory(category.parameter)}>{category.name}</div> */}
                </li>)}
            </ul>
            {/* // </Collapsible> */}
        </>
    )
}

