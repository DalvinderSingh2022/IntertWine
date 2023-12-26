import React from 'react';

import cssclasses from "../style/RepresentativeFiled.module.css";

const RepresentativeField = ({ name, image }) => {
    return (
        <td>
            <div>
                <img className={cssclasses.image} alt={name} src={image || "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png?20221210150350"} />
                <span>{name}</span>
            </div>
        </td>
    )
}

export default RepresentativeField;