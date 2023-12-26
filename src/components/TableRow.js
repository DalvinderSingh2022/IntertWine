import React from 'react';

import { MdDelete } from "react-icons/md";
import CountryField from './CountryField';
import RepresentativeField from './RepresentativeField';
import ActivityField from './ActivityField';

const TableRow = ({ name, country, representative, date, status, activity }) => {
    return (
        <tr>
            <td>{name}</td>
            <CountryField country={country} />
            <RepresentativeField {...representative} />
            <td>{date}</td>
            <td>{status}</td>
            <ActivityField activity={activity} />
            <td><button><MdDelete /></button></td>
        </tr>
    )
}

export default TableRow;