import React, { Component } from 'react';
import axios from 'axios';
class Products extends Component {
    constructor(){
        super();
        this.state={
            products : []
        }
        
        
    }
    componentDidMount(){    
       axios.get("http://127.0.0.1:8000/api/products").then(response=>{
           this.setState({products:response.data})
           console.log('good');
       })
        
    }
    
    addProduct(event){
        event.preventDefault();
        var  products = {
            name: event.target['name'].value,
            price: event.target['price'].value,
            image : event.target['image'].value
          }
        var url = 'http://localhost:8000/api/products';
          axios.post(url,products).then((response) => {
            alert(response.data)
          });
    }

    deleteProduct(id) {
        return (event)=>{
        let url = `http://localhost:8000/api/products/${id}`;
         axios.delete(url).then((response)=>{
            alert(response.data)
         })
     }
      }
    render() {
        return (
            <div>
                <div className="container"  style={{marginTop: "50px"}}>
                    <h1>Thêm sản phẩm</h1>
                     <div className="col-sm-6" >
                     <form onSubmit={this.addProduct} >
                        
                        <div class="form-group">
                            <label for="exampleInputEmail1">Tên sản phẩm</label>
                            <input type="text" name="name" class="form-control" id="exampleInputEmail1"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Giá sản phẩm </label>
                            <input type="text" name="price" class="form-control" id="exampleInputEmail1"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Hình ảnh</label>
                            <input type="text" name="image" class="form-control" id="exampleInputEmail1"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                     </div>
                  
                    <table class="table table-striped" style={{marginTop: "50px"}}>
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Giá sản phẩm</th>
                                <th scope="col">Hình ảnh</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.products.map((item,key)=>(
                                     <tr>
                                     <th scope="row">{key}</th>
                                     <td>{item.name}</td>
                                     <td>{item.price}</td>
                                     <td><img src={item.image} height="50px" width="50px"/></td>
                                     <td>
                                         <button className="btn btn-warning">Edit</button>
                                         <button style={{marginLeft:"20px"}} onClick={this.deleteProduct(item.id)} className="btn btn-danger">Delete</button></td>
                                     </tr>   
                                ))}
                                
                            </tbody>
                            </table>
                     
                </div>
            </div>
        );
    }
}

export default Products;