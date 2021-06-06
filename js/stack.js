class Node {
    constructor(data, next) {
      this._data = data;
      this._next = next;
    }
  }
  
  class Stack {
    constructor(maxSize = 30) {
      this._maxSize = maxSize;
      this._size = 0;
      this._top = null;
    }
    /**
     *
     * @param {*} value
     */
    push(value) {
      if (this._size === this._maxSize) {
        throw new RangeError('Stack overflow');
      }
      this._top = new Node(value, this._top);
      this._size++;
    }
    pop() {
      if (!this.isEmpty) {
        const value = this._top._data;
        this._top = this._top._next;
        this._size--;
        return value;
      }
    }
    get peek() {
      return this._top?._data;
    }
    get isEmpty() {
      return this._size === 0;
    }
  }
  
  const stack1 = new Stack(10);
  

// const str = 'tenet';
// str.split(str);

// Нашел такой вот интересный способ проверки, хоть и не через стек :)
function checkBracketSequence(str) {
  str = str.toLowerCase().replace(/\s/g,'');
  return str === str.split('').reverse().join('');
}
// console.log(' ', checkBracketSequence('А роза упала на лапу Азора')); 


// debugger;
function isPalindrom(str) {
    const brackerStack = new Stack();
    str = str.toLowerCase().replace(/\s/g,'');
    //Не уверен что это лучший способ проверять строку когда в ней 2 или 1 буквы, но это все что придумал) 
    if (str.length <= 2) {  
      if (str[0] === str[1]){
        return true;
      } else{
        return false
      }
    }
    const len = Math.floor((str.length - 1) / 2);
    for (let i = 0; i < len; i++)  {
        brackerStack.push(str[i]);
    }
    const len2 = Math.ceil((str.length - 1) / 2);
    for (let i = len2 + 1; i <= (str.length - 1); i++) {
        if (str[i] === brackerStack.peek) {
            brackerStack.pop();
        }else{
          return false;
        }
        
        
    }    
    return brackerStack.isEmpty;
  }
  
  console.log(' ', isPalindrom('А роза упала на лапу Азора')); 


    