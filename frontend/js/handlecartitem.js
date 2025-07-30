

const addCartBtn = document.querySelectorAll('#product-item')

addCartBtn.forEach((btn)=>{
     btn.addEventListener('click',handleCartItem)
})

async function handleCartItem(){
     console.log(this.dataset)
     const {product,price,productimg} = this.dataset
     const cartNumberSpan = document.getElementById('cart-number')
     const cartNumber = parseInt(cartNumberSpan.innerHTML.trim()) + 1
     cartNumberSpan.innerHTML = cartNumber
     try{
          const res = await fetch(`/addcart`,
          {
               'method' : 'PUT',
               'headers' : {
                    'content-type' : 'application/json;charset=utf-8'
               },
               'body' : JSON.stringify({
                    'productName' : product,
                    'price' : price,
                    'productImg' : productimg
               })
          })
          if(res.status === 201){
               const data = await res.json()
               console.log(data)
          }
     }
     catch(err){
          console.error(err)

     }
}