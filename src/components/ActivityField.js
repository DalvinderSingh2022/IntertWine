import React from 'react';

import csslasses from "../style/ActivityField.module.css"

const ActivityField = ({ activity }) => {
    return (
        <td>
            <div className={csslasses.container}>
                <progress value={activity} max={10}></progress>
            </div>
        </td>
    )
}

export default ActivityField;