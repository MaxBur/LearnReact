import React from 'react';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

function HeadLink({ aLink }) {
    const [activeLink, setActiveLink] = React.useState(0);

    return (
        <div className="header__links">
            {aLink &&
                aLink.map((link, index) => (
                    <div
                        key={index}
                        className={classNames('header__link', classNames, {
                            'header__link--active': activeLink === index,
                        })}>
                        <Link to={link.link} onClick={() => setActiveLink(index)}>
                            {link.name}
                        </Link>
                    </div>
                ))}
        </div>
    );
}

export default HeadLink;
