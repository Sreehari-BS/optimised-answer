

//UNOPTIMIZED
function maxProductOfThree(arr) {
    let product = -Infinity;
    //code here
    for(let i=0;i<arr.length;i++){
      for(j=i+1;j<arr.length;j++){
        for(k=j+1;k<arr.length;k++){
          let pro = arr[i] * arr[j] *arr[k]
          if(pro > product){
            product = pro
          }
        }
      }
    }
    return product;
  }
  

  //OPTIMIZED
  const maxProductOfThree = (arr) => {
      arr.sort((a,b) => a - b)
      
      const product1 = arr[0] * arr[1] * arr[arr.length-1]
      
      const product2 = arr[arr.length-3] * arr[arr.length-2] * arr[arr.length-1]
      
      if(product1 > product2){
          return product1
      }else{
          return product2
      }
  }