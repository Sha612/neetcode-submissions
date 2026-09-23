class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        if (root === null) return false;
        if (this.isSametree(root,subRoot)) return true;
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
    isSametree(p:TreeNode| null,q:TreeNode|null):boolean{
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;
        if (p.val !== q.val) return false;

        return this.isSametree(p.left,q.left) && this.isSametree(p.right,q.right);
    }
}