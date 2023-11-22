const pName=document.querySelector(".pName");
const pPrice=document.querySelector(".pPrice");
const pQty=document.querySelector(".pQty");
const pDesc=document.querySelector(".pDesc");
const category=document.querySelector(".category");
const msg=document.querySelector(".msg");
const form=document.querySelector("form");


// events type

// onchange
// onsubmit
// onfocus
// onblur
// onreset



// pName.onchange=function(e){
    
//     console.log("on change has occurred");
// };





// ONFOCUS
pName.onfocus=function(){
    msg.innerHTML="You are typing...";
    msg.style.color="green";
};
pPrice.onfocus=function(){
    msg.innerHTML="You are typing...";
    msg.style.color="green";
};
pQty.onfocus=function(){
    msg.innerHTML="You are typing...";
    msg.style.color="green";
};
pDesc.onfocus=function(){
    msg.innerHTML="You are typing...";
    msg.style.color="green";
};
category.onfocus=function(){
    msg.innerHTML="You are typing...";
    msg.style.color="green";
};








// ONBLUR
pName.onblur=function(){
    msg.innerHTML="You have stopped typing...";
    msg.style.color="red";
}
pPrice.onblur=function(){
    msg.innerHTML="You have stopped typing...";
    msg.style.color="red";
}
pQty.onblur=function(){
    msg.innerHTML="You have stopped typing...";
    msg.style.color="red";
}
pDesc.onblur=function(){
    msg.innerHTML="You have stopped typing...";
    msg.style.color="red";
}
category.onblur=function(){
    msg.innerHTML="You have stopped typing...";
    msg.style.color="red";
}






// ONSUBMIT / ONRESET
form.onsubmit=function(e){
    e.preventDefault();
    console.log("Form submitted");

    // set the values in console from the input fields
    const name=pName.value;
    const price=pPrice.value;
    const quantity=pQty.value;
    const description=pDesc.value;
    const cat=category.value;
    msg.innerHTML="Form is submitted successfully";


// reset the value after submitting

// pName.value="";
// pPrice.value="";
// pQty.value="";
// pDesc.value="";
// category.value="";
// msg.innerHTML="Form has been reset";


    console.log({name,price,quantity,description,cat});
    

}




form.onreset=function(e){
    e.preventDefault();
    
pName.value="";
pPrice.value="";
pQty.value="";
pDesc.value="";
category.value="";
msg.innerHTML="Form has been reset";


}


