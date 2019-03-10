function doubleLast(seq) {
    this.seq = seq;
    this.display = 'Double the last number';
    this.match = (seq) => seq.every((v, i) => (i > 0) ?  v === seq[i-1]*2 : true);
    this.nextValue = (seq) => {
        let array = []
        let counter = seq[seq.length-1]
        for(let i=1; i<=10; i++){
            counter = counter*2
            array.push(counter)
        }
        return array;
    }
  }
  
  function simpleAdd(seq) {
    const addNum = (seq) => seq[1] - seq[0];
    this.seq = seq;
    this.display = 'Add a single number';
    this.match = (seq) => {
      return seq.every((v,i) => (i > 0) ? v === seq[i-1]+addNum(seq) : true);
    };
    this.nextValue = (seq) => {
        let array = []
        let counter = seq[seq.length-1]
        for(let i=1; i<=10; i++){
            counter = counter + addNum(seq);
            array.push(counter)
        }
        return array;
    }
  }
  
  function divideAddMod(seq) {
    const modifier = (seq) => seq[1] - (seq[0]*2);
    this.seq = seq;
    this.display = 'Try to divide by 2, then add Mod';
    this.match = (seq) => {
      return seq.every((v,i) => (i > 0) ? v === (seq[i-1]*2)+modifier(seq) : true);
    };
    this.nextValue = (seq) => { 
        let array = []
        let counter = seq[seq.length-1]
        for(let i=1; i<=10; i++){
            counter = (counter *2) + modifier(seq)
            array.push(counter)
        }
        return array;
    }
  }
  
  const algos = [new doubleLast(), new simpleAdd(), new divideAddMod()];
  
  document.addEventListener('click', (e) => {
    if(e.target.matches('button')) {
      let seq = document.querySelector('input').value.split(' ').map(e => parseInt(e));
      algos.forEach(a => {
        let possibleMatch = a.match(seq);
        if(possibleMatch) {
          console.log(`Match found ${a.display} - Next value ${a.nextValue(seq)}`);
        } else {
          console.log(`${a.display} did not match`);
        }
      });
    }
  });