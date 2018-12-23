let products=[{
  'name':'多汁大西瓜',
  'link':'https://images.unsplash.com/photo-1525423235703-6c285d74010e?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'price':100,
  'count':0},
 {
  'name':'鮮嫩欲滴莓',
  'link':'https://images.unsplash.com/photo-1488551511020-571c741f122a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'price':160,
   'count':0},
 {
  'name':'維他命鳳梨',
  'link':'https://images.pexels.com/photos/137120/pexels-photo-137120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  'price':120,
   'count':0},
 {
  'name':'酸甜吉祥橙',
  'link':'https://images.unsplash.com/photo-1507598641400-ec3536ba81bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'price':150,
   'count':0},
 {
  'name':'是真愛櫻桃',
  'link':'https://images.unsplash.com/photo-1520236060906-9c5ed525b025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'price':180,
 'count':0},
 {
  'name':'異國風藍莓',
  'link':'https://images.unsplash.com/photo-1532691126232-f80f9878fa7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  'price':200,
   'count':0}];
var data={
    cart:[],
    total:0,
    isShow:false,
    active:false
  }
var app=new Vue({
  el:'#app',
  data:data,
  methods:{
   addItem(product){
     let inCart=false;
      this.total+=product.price;
     
     for(var i=0;i<this.cart.length;i++){
       if(this.cart[i].name===product.name){
         inCart=true;
        this.isShow=true;
       return  this.cart[i].count+=1;
        break;
       }
     }
     if(!inCart){
       this.cart.push({
         'name':product.name,
         'count':1,
         'price':product.price
       })
     }
   }, 
   minus(product){
  let inCart=false;
    
      this.total-=product.price;
     for(var i=0;i<this.cart.length;i++){
       if(this.cart[i].name===product.name){
         inCart=true;
         this.isShow=true;
         if(this.cart[i].count===1)
      { return  this.cart.splice(i,1);
        break;}else{
          return this.cart[i].count-=1;
        }
       }
       
     }   
},
  check(){
    this.active=true;
  },
    confirm(){
      this.active=false;
     this.cart=[];
      this.total=0;
    }
  },
  computed:{
 
  } 
})