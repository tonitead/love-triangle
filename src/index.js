/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length; 
  let count = 0;  
  for (let i = 0; i<length; i++) { 
      let next = preferences[i] - 1;
      if (next == i) continue;
      let nextnext = preferences[next] - 1;
      if (next == nextnext) continue;
      let nextnextnext = preferences[nextnext] - 1;
      if (nextnextnext == nextnext) continue;
      if (nextnextnext == i) {
          count++;
      }
   }
   return count / 3;
}
