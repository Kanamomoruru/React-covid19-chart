import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import countries from '../../api';

const CountryPickcer = () => {
    return(
        <FormControl className="styles.container">
            <NativeSelect>
                <option value="global">Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPickcer;