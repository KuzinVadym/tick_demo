import React from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import Cell from './Cell';

function create2d1() {
    let a = [];
    for (let i = 0; i < 5; i++) {
        a.push([]);
        for (let j = 0; j < 5; j++) {
            a[i].push(0);
        }
    }
    a[2][1] = 1;
    a[2][2] = 1;
    a[2][3] = 1;
    return a;
}

function create2d2() {
    let a = [];
    for (let i = 0; i < 5; i++) {
        a.push([]);
        for (let j = 0; j < 5; j++) {
            a[i].push(0);
        }
    }
    a[1][1] = 1;
    a[1][2] = 1;
    a[2][1] = 1;
    a[2][2] = 1;
    return a;
}

function createEnv(array, depth, width ) {
    let cells = [];
    for (let i = 0; i < depth; i++) {
        cells.push([]);
        for (let j = 0; j < width; j++) {
            let cell = new Cell(array[i][j], i, j);
            cells[i].push(cell);
        }
    }
    return cells;
}

function setupEnv(array){
    array.forEach(item => {
        item.forEach(cell => {
            cell.setNeighbors(array);
            cell.checkLiveNeighbors();
        })
    });
}

function checkConditions(newCells, deadCells, cell) {
    if (!!cell.value) {
        if (cell.liveNeighborsNumber > 1 && cell.liveNeighborsNumber < 4) {
            //console.log('doing nothing');
        } else {
            deadCells.push(cell);
        }
    } else {
        if (cell.liveNeighborsNumber === 3) {
            newCells.push(cell);
        } else {
            //console.log('doing nothing');
        }
    }
}

class Provider extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    state = {
        cells1: [],
        initCells1: () => {
            let newCells = createEnv(create2d1(), 5,5);
            setupEnv(newCells);
            this.setState({cells1: newCells});
        },

        tick1: () => {
            let temp = this.state.cells1;
            let newCells = [];
            let deadCells = [];
            temp.forEach((item, i) => {
                item.forEach((cell, j)=> {
                    checkConditions(newCells, deadCells, cell);
                });
            });
            newCells.forEach(cell => cell.toLive());
            deadCells.forEach(cell => cell.toDead());
            this.setState({cells1: temp});
        },
        cells2: [],
        initCells2: () => {
            let newCells = createEnv(create2d2(), 5,5);
            setupEnv(newCells);
            this.setState({cells2: newCells});
        },
        tick2: () => {
            let temp = this.state.cells2;
            let newCells = [];
            let deadCells = [];
            temp.forEach((item, i) => {
                item.forEach((cell, j)=> {
                    checkConditions(newCells, deadCells, cell);
                });
            });
            newCells.forEach(cell => cell.toLive());
            deadCells.forEach(cell => cell.toDead());
            this.setState({cells2: temp});
        },
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider;