class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        if (prices.length<2){
            return 0;
        }
        let minPrice:number=prices[0];
        let maxProfit:number=0;
        for (let i:number=1;i<prices.length;i++){
            const currentPrice:number=prices[i];
            if (currentPrice < minPrice){
                minPrice=currentPrice;
            }else{
                const potentialProfit:number = currentPrice- minPrice;
                if(potentialProfit >maxProfit){
maxProfit = potentialProfit;
                }
            }
        }
        return maxProfit;
    }
}
