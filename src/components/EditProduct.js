import React, { Component } from 'react';

class EditProduct extends Component {

    render() {
        return (
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
                     </div>
        );
    }
}

export default EditProduct;