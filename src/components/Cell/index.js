import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Cell = ({ cell }) =>
    useMemo(() => {
        console.log('render');
        return (
            <div className={`App-cell ${cell.value ? 'black' : 'white'}`} />
        )
    }, [cell.value]);

export default Cell;

Cell.propTypes = {
    Cell: PropTypes.object,
};

Cell.defaultProps = {
    cell: {},
};
