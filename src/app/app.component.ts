import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  closeResult: string="";
  selectedOrder:any;
  constructor(
    private modalService: NgbModal
  ) { }

  title = 'pizza-app';
  orders =[{
    order_no:1,
    pizza_type:"Cheese Burst",
    customer:{
      name:"Aditya",
      address:"Banshankri",
    },
    image:"../assets/images/pizza1.png",
    quantity:5,
    amount:100,
    status:"OrderRecieved",
 },
 {
   order_no:2,
   pizza_type:"Tandoori",
   customer:{
     name:"Arvind",
     address:"Bangalore",
   },
   image:"../assets/images/pizza2.png",
   quantity:1,
   amount:200,
   status:"OrderRecieved",
},
{
 order_no:3,
 pizza_type:"Thin crust",
 customer:{
   name:"Aditya",
   address:"Bangalore",
 },
 image:"../assets/images/pizza3.png",
 quantity:1,
 amount:100,
 status:"Preparing",
},
{
 order_no:4,
 pizza_type:"Double cheese",
 customer:{
   name:"Appiness",
   address:"Bangalore",
 },
 image:"../assets/images/pizza4.png",
 quantity:5,
 amount:600,
 status:"Completed",
}]

  ngOnInit() {
   
 
  }

  open(content:any,order:any) {
    this.selectedOrder=order;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }  
changeStatus(orderNo:Number,status:string){
  this.orders.forEach(elem=>{
    if(elem.order_no==orderNo){
    elem.status=status;
  }
  });
this.orders=[...this.orders];
}


}
