import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';//gives access to react router

const MenuItem = (props) => {
    const { size, history, match, linkUrl, title, imageUrl } = props
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)