
export default function Cell(value, i, j) {
    this.value = value;
    this.i = i;
    this.j = j;
    this.liveNeighborsNumber = 0;
    this.neighbors = [];

    this.setNeighbors = function(array){
        if (array[this.i-1] && array[this.i-1][this.j-1] !== undefined) this.neighbors.push(array[this.i-1][this.j-1]);
        if (array[this.i-1] && array[this.i-1][this.j] !== undefined) this.neighbors.push(array[this.i-1][this.j]);
        if (array[this.i-1] && array[this.i-1][this.j+1] !== undefined) this.neighbors.push(array[this.i-1][this.j+1]);
        if (array[this.i] && array[this.i][this.j-1] !== undefined) this.neighbors.push(array[this.i][this.j-1]);
        if (array[this.i] && array[this.i][this.j+1] !== undefined) this.neighbors.push(array[this.i][this.j+1]);
        if (array[this.i+1] && array[this.i+1][this.j-1] !== undefined) this.neighbors.push(array[this.i+1][this.j-1]);
        if (array[this.i+1] && array[this.i+1][this.j] !== undefined) this.neighbors.push(array[this.i+1][this.j]);
        if (array[this.i+1] && array[this.i+1][this.j+1] !== undefined) this.neighbors.push(array[this.i+1][this.j+1]);
    };

    this.checkLiveNeighbors = function() {
        this.neighbors.forEach(item => {
            if (item.value) this.liveNeighborsNumber ++;
        })
    };

    this.toLive = function () {
        this.value = +(!Boolean(this.value));
        this.neighbors.forEach(neighbor => {
            neighbor.increaseLiveNeighborsNumber();
        })
    };

    this.toDead = function () {
        this.value = +(!Boolean(this.value));
        this.neighbors.forEach(neighbor => {
            neighbor.decreaseLiveNeighborsNumber();
        })
    };

    this.decreaseLiveNeighborsNumber = function () {
        this.liveNeighborsNumber--;
    };

    this.increaseLiveNeighborsNumber = function () {
        this.liveNeighborsNumber++;
    };
}