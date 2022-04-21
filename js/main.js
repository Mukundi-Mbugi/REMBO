fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=revlon")
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json)
    json.pop()
    
    json.forEach((product)=>{
    const parentDiv=document.getElementById('item')
    const productDiv= document.createElement('div')
    const titleElement= document.createElement('h6')
    const imageElement= document.createElement('img')
    const descriptionElement= document.createElement('p')
    const priceElement= document.createElement('h5')
    const priceButton = document.createElement('button')



    titleElement.innerText = product.name;
    productDiv.appendChild(titleElement)
    parentDiv.appendChild(productDiv)
    productDiv.appendChild(imageElement)
    productDiv.appendChild(descriptionElement)
    productDiv.appendChild(priceElement)
    


    imageElement.setAttribute('src',product.image_link)
    const price=Math.round((product.price)*100)
    priceElement.innerText=`Ksh. ${price}`
    imageElement.className='productImage'
    priceElement.className='price'
    productDiv.className='productDiv'

    descriptionElement.innerText=product.category;
    
    
    

    
    
        
  })

});
