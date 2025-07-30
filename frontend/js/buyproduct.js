

async function checkoutProduct(productDetail){
     console.log(productDetail)
     let evaluateProductDetail = []
     let i = 0
     document.querySelectorAll('#product-quantity').forEach((field)=>{
          const {product} = field.dataset
          if(!isNaN(field.value) && parseInt(field.value) !== 0){
               evaluateProductDetail.push({
                    'productName' : product,
                    'productImg' : JSON.parse(productDetail)['cartItems'][i]['productImg'] || 'tesimg',
                    'quantity' : parseInt(field.value),
                    'price' : parseInt(JSON.parse(productDetail)['cartItems'][i]['price']) * parseInt(field.value)
               })
          }
          i++
     })
     console.log(evaluateProductDetail)
     try{
          if(evaluateProductDetail.length > 0){
               const res = await fetch('/checkoutcartitems',
               {
                    'method' : 'POST',
                    'headers' : {
                         'content-type' : 'application/json;charset=utf-8'
                    },
                    'body' : JSON.stringify(evaluateProductDetail)
               
               })
               if(res.status === 201) {
                    const {url} = await  res.json()
                    window.location.href = url
               }
          }
     }
     catch(err){
          console.error(err)
     }
}


