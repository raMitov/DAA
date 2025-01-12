class HashTable{
    constructor(size){
        this.data = new Array(size);
    }
   
    _hash(key) {
        let hash = 0;
        for(let i = 0;i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) %
            this.data.length
        }
        return hash;
    }
    get = (smt) => {
        let address = this._hash(smt);
        const currentBucket = this.data[address];
        if (currentBucket){
            for(let i = 0; i < currentBucket.length;i++){
                if(currentBucket[i][0] === smt){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }//O(1)/ O(n)
    set = (smt, els) => {
        let address = this._hash(smt);
        if(!this.data[address]){
            this.data[address] = [];
            this.data[address].push([smt, els]);
        }
        else{
            this.data[address].push([smt, els]);
        }
    }//0(1)
    keys() {
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'))
console.log(myHashTable.keys());
