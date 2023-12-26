import React, { useEffect, useState } from 'react';
import axios from 'axios';

import csslasses from "../style/Countryfield.module.css"

const CountryField = ({ country }) => {
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${country.replaceAll(" ", "").toLowerCase()}`)
      .then(response => {
        if (response.data.length !== 1) {
          setFlag(response.data.filter(a =>
            a.name.common.replaceAll(" ", "").toLowerCase() === country.replaceAll(" ", "").toLowerCase())[0].flags.png)
        } else {
          setFlag(response.data[0].flags.png)
        }
      })
      .catch(err => console.error(err));
  }, []);

  if (flag)
    return (
      <td>
        <div className={csslasses.container}>
          <img src={flag} alt="flag" className={csslasses.image} />
          <span>{country}</span>
        </div>
      </td>
    )
}

export default CountryField;