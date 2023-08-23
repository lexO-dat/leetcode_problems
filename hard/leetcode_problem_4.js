
//descripcion del problema:
//given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//the overall run time complexity should be O(log (m+n)).

//num1 y num2 son arreglos ordenados de menor a mayor
var findMedianSortedArrays = function(nums1, nums2) {
    var total = [];

    //mientras 1 o el otro tenga valores
    while(nums1.length > 0 && nums2.length > 0){
        //va ordenando de menor a mayor
        //.shift --> elimina el index 0 de un arreglo
        if(nums1[0] < nums2[0]){
            total.push(nums1.shift());
        } else {
            total.push(nums2.shift());
        }
    }

    //si llega aca es por que un se vacio, el que no este vacio agrega todos sus valores a total
    if(nums1.length > 0){
        total = total.concat(nums1);
    }else{
        total = total.concat(nums2);
    }

//
function median(arr){
    if(total.length % 2 === 0){
        return (total[total.length/2] + total[total.length/2 - 1])/2;
    } else {
        return total[Math.floor(total.length/2)];
    }
}

return median(total);

}
