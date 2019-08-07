
const SimpleCell = (value, i, j) => ({
    value: value,
    i: i,
    j: j,
    liveNeighborsNumber: 0,
    neighbors: [],
    setNeighbors: function (array) {
        if (array[this.i-1] && array[this.i-1][this.j-1] !== undefined) this.neighbors.push(array[this.i-1][this.j-1]);
        if (array[this.i-1] && array[this.i-1][this.j] !== undefined) this.neighbors.push(array[this.i-1][this.j]);
        if (array[this.i-1] && array[this.i-1][this.j+1] !== undefined) this.neighbors.push(array[this.i-1][this.j+1]);
        if (array[this.i] && array[this.i][this.j-1] !== undefined) this.neighbors.push(array[this.i][this.j-1]);
        if (array[this.i] && array[this.i][this.j+1] !== undefined) this.neighbors.push(array[this.i][this.j+1]);
        if (array[this.i+1] && array[this.i+1][this.j-1] !== undefined) this.neighbors.push(array[this.i+1][this.j-1]);
        if (array[this.i+1] && array[this.i+1][this.j] !== undefined) this.neighbors.push(array[this.i+1][this.j]);
        if (array[this.i+1] && array[this.i+1][this.j+1] !== undefined) this.neighbors.push(array[this.i+1][this.j+1]);
    },
    checkLiveNeighbors: function () {
        this.neighbors.forEach(item => {
            if (item.value) this.liveNeighborsNumber ++;
        })
    },
    toLive: function () {
        this.value = +(!Boolean(this.value));
        this.neighbors.forEach(neighbor => {
            neighbor.increaseLiveNeighborsNumber();
        })
    },
    toDead: function () {
        this.value = +(!Boolean(this.value));
        this.neighbors.forEach(neighbor => {
            neighbor.decreaseLiveNeighborsNumber();
        })
    },
    decreaseLiveNeighborsNumber: function () {
        this.liveNeighborsNumber--;
    },
    increaseLiveNeighborsNumber: function () {
        this.liveNeighborsNumber++;
    },
});

export default SimpleCell;