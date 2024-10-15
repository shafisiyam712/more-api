const addLocalStorage=()=>{
    const idInput=document.getElementById('storage-id')
    const id=idInput.value
    const valueInput=document.getElementById('storage-value')
    const value=valueInput.value

    if(id && value){
        localStorage.setItem(id,value)
    }
    
    idInput.value=''
    valueInput.value=''
}



// localStorage.setItem('friends',[12,45,67])
// undefined
// localStorage.setItem('friends',JSON.stringify[12,45,67])
// undefined
// localStorage.setItem('friends',JSON.stringify([12,45,67]))
// undefined

// const pen={price:10,color:'black'}
// undefined
// localStorage.setItem('pen',pen)
// undefined
// localStorage.setItem('pen',JSON.stringify(pen))
// undefined
// const storepen=localStorage.getItem('pen')
// undefined
// storepen
// '{"price":10,"color":"black"}'
// const penObj=JSON.parse(storepen)
// undefined
// penObj
// {price: 10, color: 'black'}
// pen.price=50
// 50
// pen
// {price: 50, color: 'black'}
// localStorage.setItem('pen',JSON.stringify(pen))
// undefined