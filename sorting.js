const arr = [3, 6, 4, 51, 32, 23, 14, 1, 14, 44, 60, -10];

function selection_sort(arr) {
     for(let i = 0; i < arr.length; i++) {
         let min = arr[i];
         let min_index = null;
         for(let j = i + 1; j < arr.length; j++) {
               if(arr[j] < min) {
                    min = arr[j];
                    min_index = j;
               }
         }
         if(min !== arr[i]) {
              arr[min_index] = arr[i];
              arr[i] = min;
         }
     }

     return arr;
}

console.log(selection_sort(arr));
