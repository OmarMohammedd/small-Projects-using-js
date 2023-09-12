const showItems = document.createElement("div")

  //calculate Total Price 12.6
  function updateTotal() {
    const allpro = document.querySelectorAll(".item-container")
    let total = 0
  
    allpro.forEach(item => {
      const price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$",""))
      const quantity = Number (
        item.getElementsByClassName("input-quantity")[0].value)
        total = total  + (price*quantity)
    })
    document.getElementById("total").innerText =` $ ${ total } `
  }
  // update price on change quantity 12.6
  blackscreen.addEventListener("change" , () => {
    updateTotal()
  })


              //  button buy

const allbut = document.querySelectorAll(".btn-primary")

allbut.forEach(item => {
   item.addEventListener("click" , (eo) => {

       //change button from "buy" to "Done"
  {  
    eo.preventDefault()
    item.setAttribute("disabled" , "")
    item.classList.remove("btn-primary")
    item.classList.add("btn-success")
    item.innerHTML = "&#10004; Done"}


       // show mabrook popUp
{    const popUp = document.createElement("div")
    body.append(popUp)
    popUp.classList.add("done-pop-up")
    popUp.innerHTML = "&#128525; مبروك"
    
    setTimeout(() => {
      popUp.style.transform = "translateX(-50vw)"
    }, 1300)
    
    setTimeout(() => {
      popUp.remove()
    }, 4000)}
    
      //   create عرض المشتريات
  {   
    body.append(showItems)
    showItems.classList.add("show-items")
    showItems.innerText = "عرض المشتريات"}    

    // المحنوي اللي بداخل الصفحه التانيه
{   
    const aaa = item.parentElement.parentElement.parentElement
    const imgSrc = aaa.getElementsByClassName("card-img-top")[0].getAttribute("src")
    const itemName = aaa.getElementsByClassName("card-title")[0].innerText
    const itemPrice = aaa.getElementsByClassName("price")[0].innerText

    
    const addproduct  = `
    <div class="item-container" dir="rtl"> 
    <div class="img-title-parent">
      <img src="${imgSrc}" alt="">
      <p class="product-name">${itemName}</p>
    </div>
    <div style="display:flex ; align-items: center;">
      <input class="input-quantity" dir="ltr" id="input-quantity" value="1" min="1" type="number">
      <p>الكمية</p>
    </div>
   <div class="price">
       ${itemPrice}
   </div>
   <div class="btn btn-secondary">
     حذف
   </div>
  </div>
    `
    allproducts.innerHTML += addproduct
}
updateTotal()
   })
})
  
  
     //on click عرض المشتريات
     showItems.addEventListener("click" , () => {
      blackscreen.style.transform = "translateX(0)"
     })

    // close 12.4
    closee.addEventListener("click" , () => {
      blackscreen.style.transform = "translateX(-110vw)"  
  })



  // عنصر الحذف 12.7
  {  blackscreen.addEventListener("click" , (eo) => {
    if (eo.target.classList == "btn btn-secondary") {
      eo.target.parentElement.remove()
      updateTotal()

     const nameofdeleted = eo.target.parentElement.getElementsByClassName("product-name")[0].innerText
     const cards = document.querySelectorAll(".card")
     cards.forEach(item => {
      if (item.getElementsByClassName("card-title")[0].innerText == nameofdeleted) {
      const donebutton = item.getElementsByClassName("btn-success")[0]
      donebutton.removeAttribute("disabled")
      donebutton.classList.add("btn-primary")
      donebutton.classList.remove("btn-success")
      donebutton.innerText = "buy"
      }
     })
     
    }
  })}

   