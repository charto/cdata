import { BinaryHeap } from '..';

function compare(a: number, b: number) { return(a - b); }

const unsorted = [];

for(let num = 0; num < 100; ++num) {
	unsorted[num] = ~~(Math.random() * 50);
}

const correct = unsorted.slice(0).sort(compare);

const heap = new BinaryHeap(compare);
const result = [];

for(let item of unsorted) heap.insert(item);

while(!heap.isEmpty()) {
	result.push(heap.extractTop());
}

if((result.join(' ') == correct.join(' '))) {
	console.log('BinaryHeap OK');
} else {
	console.error('Error in BinaryHeap');
	process.exit(1);
}
