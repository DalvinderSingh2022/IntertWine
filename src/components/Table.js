import React, { useEffect, useState } from 'react';

import axios from "axios";

import { FaSortAmountDownAlt } from "react-icons/fa";
import { FaSortAmountDown } from "react-icons/fa";
import { BiSortAlt2 } from "react-icons/bi";
import TableRow from './TableRow';

function Table() {
    const [data, setData] = useState(null);


    useEffect(() => {
        axios.get("http://localhost:8000/customer")
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <div>
                            <span>name</span>
                            <BiSortAlt2 />
                        </div>
                    </th>
                    <th>
                        <div>
                            <span>country</span>
                            <BiSortAlt2 />
                        </div>
                    </th>
                    <th>
                        <div>
                            <span>representative</span>
                            <BiSortAlt2 />
                        </div>
                    </th>
                    <th>
                        <div>
                            <span>date</span>
                            <BiSortAlt2 />
                        </div>
                    </th>
                    <th>
                        <div>
                            <span>status</span>
                            <BiSortAlt2 />
                        </div>
                    </th>
                    <th>
                        <div>
                            <span>activity</span>
                            <BiSortAlt2 />
                        </div>
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(customer => <TableRow {...customer} key={customer.id} />)}
            </tbody>
        </table>
    )
}

export default Table;