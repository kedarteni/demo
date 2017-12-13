import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product_name: String;
  quantity:String;
  color: String;
  all: Number;
  red: Number;
  green: Number;
  blue: Number;

  public product_list = [];

  constructor() { }



  Quantity = [

    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
    {value: '5'},
    {value: '6'},
    {value: '7'},
    {value: '8'},
    {value: '9'},
    {value: '10'}
    

  ];

  Color = [
    {value: 'value-1',viewValue:'red'},
    {value: 'value-2',viewValue:'blue'},
    {value: 'value-3',viewValue:'green'},
  ];

  Save(){ 

    this.product_list.push({
      name: this.product_name,
      quantity: this.quantity,
      color: this.color
    });
    
    this.product_name= '';
    this.quantity='';
    this.color='';
    this.all = this.product_list.length;
   
     var count =0;
    for(var i=0;i<this.product_list.length;i++)
    {
      if(this.product_list[i].color == "red")
      {
        count++;
        this.red= count;
      }
      if(this.product_list[i].color == "green")
      {
        count++;
        this.green= count;
      }
      if(this.product_list[i].color == "blue")
      {
        count++;
        this.blue= count;
      }

    }

 
  }

  Reset(){
    this.product_name= '';
    this.quantity='';
    this.color='';
  }

  Delete(i){
    this.product_list.splice(i,1);
  }

  Edit(i){

    this.product_name= this.product_list[i].name;
    this.quantity=this.product_list[i].priority;
    this.color= this.product_list[i].dueDate;
   

    
  }

  ngOnInit() {
  }

}
