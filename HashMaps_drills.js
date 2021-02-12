const HashMap = require('./HashMap');

function main(){
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit','Frodo');
  lotr.set('Wizard','Gandalf');
  lotr.set('Human','Aragorn');
  lotr.set('Elf','Legolas');
  lotr.set('Maiar','The Necromancer');
  lotr.set('Maiar','Sauron');
  lotr.set('RingBearer','Gollum');
  lotr.set('LadyOfLight','Galadriel');
  lotr.set('HalfElven','Arwen');
  lotr.set('Ent', 'Treebeard');
  console.log(lotr);
  console.log(lotr.get('Hobbit'));
  console.log(lotr.get('Maiar'));
  console.log(lotr._capacity);
  
}



main();
console.log(removeDupeChars('google all that you think can think of'));
console.log(isAnagramPalindrome('racecar'));

function removeDupeChars(input){
  let newString = '';
  for(let i = 0; i < input.length; i++){
    let thisChar = input.charAt(i);
    if(!newString.includes(thisChar)){
      newString += thisChar;
    }
  }
  return newString;
}

function isAnagramPalindrome(input){
  let chars = {};
  for(let i = 0; i < input.length; i++){
    let thisChar = input.charAt(i);
    chars[thisChar] = !chars[thisChar];
  }
  let booleans = Object.entries(chars);
  let trueCount = 0;
  for(let i = 0; i < booleans.length; i++){
    if(booleans[i][1]){
      trueCount++;
    }
    if(trueCount > 1){
      return false;
    }
  }
  return true;
}

function groupAnagrams(){
  
}


/*
1. 1) No because there are duplicate keys
   2) Frodo and Sauron because Bilbo and the Necromancer were overwriten
   3) Capacity is 24 because it used the resize function due to the load ration getting passed

2. It would output 20 and 10 because all the strings are the same values so they overwrite each other in each map

3. 1) [22][88][  ][59][4][15][28][17][  ][31][10]
   
   2)    10
         19               33
      [][28][20][12][][5][15][][17]

*/