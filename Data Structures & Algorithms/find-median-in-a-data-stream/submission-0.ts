/**
 * const { PriorityQueue, MaxPriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');
 */

class MedianFinder {
    // ⚡ Use 'any' type definition here to avoid NeetCode environment namespace clashes
    private small: any; 
    private large: any; 

    constructor() {
        // NeetCode custom comparator configuration
        this.small = new PriorityQueue((a: number, b: number) => b - a); // Max heap for smaller half
        this.large = new PriorityQueue((a: number, b: number) => a - b); // Min heap for larger half
    }

    /**
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        // 1. Determine which heap to place the incoming value into
        if (this.large.isEmpty() || num > this.large.front()) {
            this.large.enqueue(num);
        } else {
            this.small.enqueue(num);
        }

        // 2. Rebalance: Ensure sizes differ by at most 1 element
        if (this.small.size() > this.large.size() + 1) {
            this.large.enqueue(this.small.dequeue());
        } else if (this.large.size() > this.small.size() + 1) {
            this.small.enqueue(this.large.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        // 3. Return top of the larger heap, or the average if they are equal size
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        } else if (this.large.size() > this.small.size()) {
            return this.large.front();
        } else {
            return (this.small.front() + this.large.front()) / 2.0;
        }
    }
}
