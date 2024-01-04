function merge(arr, low, mid, high) {
  let k = 0;
  let i = low;
  let j = mid + 1;
  let res = [];

  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      res.push(arr[i++]);
    } else {
      res.push(arr[j++]);
    }
    k++;
  }

  while (i <= mid) {
    res.push(arr[i++]);
    k++;
  }

  while (j <= high) {
    res.push(arr[j++]);
    k++;
  }

  for (let i = 0; i < k; i++) {
    arr[low + i] = res[i];
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

let arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
let arr2 = [105, 79, 100, 110];

mergeSort(arr1, 0, arr1.length - 1);
mergeSort(arr2, 0, arr2.length - 1);


console.log("1st Sorted Array:", arr1);
console.log("2nd Sorted Array:", arr2);

