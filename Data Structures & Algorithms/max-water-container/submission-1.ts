class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left:number=0;
        let right:number=heights.length-1;
        let maxWater:number=0;
        while(left<right){
            const width:number=right-left;
            const minHeight:number=Math.min(heights[left],heights[right]);
            const currentWater:number=width*minHeight;
            maxWater=Math.max(maxWater,currentWater);
            if(heights[left]<heights[right]){
                left++;
            }else{right--;}
        }
        return maxWater;
    }
}
