const Express=require('express');


 var app=new Express();


 app.set('view engine','ejs');


app.use(Express.static(__dirname+"/public"));


var books = [
    {
         title:"war and peace",
         genre:"Historical Fiction",
         author:"Lev Nicolayevich",
     },
     {
         title:"Les miserables",
         genre:"Historical Fiction",
         author:"victor Hugo",
 
     },
     {
         title:"Book3",
         genre:"Historical Fiction",
         author:"Lev Nicolayevich",
 
     },
     {
         title:"Les miserables",
         genre:"Historical Fiction",
         author:"Lev Nicolayevich",
 
     },
 
 ];
   
 
 nav=[
     {link:'/books',title:'Books'},
     {link:'auther',title:'Authers'}
 ];


app.get("/",(req,res)=>{
    res.render('index',nav);
    
});

app.get("/books",(req,res)=>{
res.render('books',{title:"books"});
});

app.listen(3000,()=>{
    console.log("work in Progress");
});