"use strick"



const displayData = document.querySelector(".displayData");
const btn = document.querySelector(".btn");




io.socket.on('connect', function onConnect(){
    console.log('This socket is now connected to the Sails server.');
  });


const getUserSocket=()=>{
    io.socket.get('/api/users', function(resData,jsqt) {
        
        if(resData.success){

            displayData.innerText= resData.messages;
            console.log(resData);
           
           
        }
})
}

 const addUserSocket = ()=>{
   
     let data = {
        name:"nguyên hữu phong",
        age:86,
        address:"hà nội",
        salary:40000,
        email:"lam123@gmail.com",
        password:"hometour123rcA@",
        phone:"6598453495"
     }
    
     io.socket.post('/api/users',data,function(resData){
         if(resData.success){
            console.log(resData);
         console.log("running") ;
         displayData.innerText= resData.messages;
         


         }
        
     })
 }

 const updateUser=()=>{
    let data = {
        name:"nguyên hữu phong",
        age:86,
        address:"hà nội",
        salary:40000,
        email:"lam123@gmail.com",
        password:"hometour123rcA@",
        phone:"6598453495"
     }

     io.socket.put('/api/users',data,function(resData){
        if(resData.success){
            console.log(resData);
         console.log("running") ;

         displayData.innerText= resData.messages;
            
         }

     })
 }
 const deleteUser= ()=>{
     io.socket.delete('api/users/5',function(resData){
        if(resData.success){
            console.log(resData);
         console.log("running") ;

         displayData.innerText= resData.messages;
         
         }
     })
 }
 btn.addEventListener("click",testSocket);