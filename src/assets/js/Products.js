import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import '../css/Products.css';
import '../css/UsuariosView.css';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import axios from 'axios';

const Products = () => {
    let emptyproduct = {
        ProductId: '',
        Title: '',
        Description: '',
        Price: '',
        Category: '',
        Image: '',
        UploadDate: '',
        UserId: '',
        vendido: ''
    };

    const [products, setproducts] = useState([]);
    const [deleteproductDialog, setDeleteproductDialog] = useState(false);
    const [product, setproduct] = useState(emptyproduct);
    const toast = useRef(null);

    useEffect(() => {
        axios.get('http://100.25.140.168:7010/api/Product')
            .then(res => {
                setproducts(res.data, console.log(res.data)
                )
            });
    }, []);

    const hideDeleteProductDialog = () => {
        setDeleteproductDialog(false);
    }

    const confirmDeleteuser = (product) => {
        setproduct(product);
        setDeleteproductDialog(true);
    }

    const deleteProduct = () => {
        let _product = products.filter(val => val.ProductId !== product.ProductId);
        setproduct(_product);
        axios.delete('http://100.25.140.168:7010/api/Product/' + product.ProductId);
        console.log(product.ProductId);
        setDeleteproductDialog(false);
        setproduct(emptyproduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const deleteproductDialogFooter = (
        <React.Fragment>
            <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideDeleteProductDialog} />
            <Button label='Yes' icon='pi pi-check' className='p-button-text' onClick={deleteProduct} />
        </React.Fragment>
    );


    const header = (rowData) => {
        return (
            <img style={{ width: 120, height: 120 }} src={`data:image/jpeg;base64,` + rowData} ></img>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon='pi pi-trash' className='p-button-rounded p-button-warning' onClick={() => confirmDeleteuser(rowData)} />
            </React.Fragment>
        );
    }

    return (
        <div>
            <Toast ref={toast} />
            <div className="table-wrapper">
                <div>
                    <div className='row'>
                        <DataTable class="fl-table" paginator rows={25} value={products}>
                            <Column sortable={true} field="Title" header="Title"></Column>
                            <Column sortable={true} field="Description" header="Description"></Column>
                            <Column sortable={true} field="Price" header="Price"></Column>
                            <Column sortable={true} field="Category" header="Category" ></Column>
                            <Column sortable={true} field="UploadDate" header="UploadDate" ></Column>
                            <Column sortable={true} field="UserId" header="User" ></Column>
                            <Column sortable={true} field="Image" body={header} header="Image"></Column>
                            <Column body={actionBodyTemplate}></Column>
                        </DataTable>
                    </div>

                    <Dialog visible={deleteproductDialog} style={{ width: '450px' }} header='Confirm' modal footer={deleteproductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className='confirmation-content'>
                            <i className='pi pi-exclamation-triangle p-mr-3' style={{ fontSize: '2rem' }} />
                            {product && <span>Are you sure you want to delete the <b>{product.UserId}'s</b> book?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}
export default Products;