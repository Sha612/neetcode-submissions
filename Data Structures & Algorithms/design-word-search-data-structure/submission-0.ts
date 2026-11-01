class WordDictionaryNode {
    // Maps a character (e.g., 'a') to its corresponding child WordDictionaryNode
    public children: Map<string, WordDictionaryNode>;
    // Flags whether a complete word terminates at this specific node
    public isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    private root: WordDictionaryNode;

    constructor() {
        this.root = new WordDictionaryNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new WordDictionaryNode());
            }
            currentNode = currentNode.children.get(char)!;
        }

        currentNode.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        // Trigger the internal DFS backtracking runner starting from the root node
        return this.dfs(this.root, word, 0);
    }

    private dfs(node: WordDictionaryNode, word: string, index: number): boolean {
        // Base Case: All characters in the query string have been successfully verified
        if (index === word.length) {
            return node.isEndOfWord;
        }

        const char = word[index];

        if (char === ".") {
            // Wildcard Match: Recurse into all available child branches
            for (const childNode of node.children.values()) {
                if (this.dfs(childNode, word, index + 1)) {
                    return true;
                }
            }
            return false;
        } else {
            // Standard Match: Explicitly follow the character edge path mapping
            if (!node.children.has(char)) {
                return false;
            }
            return this.dfs(node.children.get(char)!, word, index + 1);
        }
    }
}
