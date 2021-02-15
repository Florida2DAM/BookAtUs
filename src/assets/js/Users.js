import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';

const Users = () => {
    let emptyuser = {
        userId: '',
        Title: '',
        Description: '',
        Price: '',
        Category: '',
        Image: '',
        UploadDate: '',
        UserId: '',
        vendido: ''
    };

    const [users, setUsers] = useState(null);
    const [password, setpassword] = useState(null);
    const [deleteuserDialog, setDeleteuserDialog] = useState(false);
    const [edituserPassWord, setedituserPassword] = useState(false);
    const [user, setuser] = useState(emptyuser);
    const toast = useRef(null);

    useEffect(() => {
        axios.get('http://100.25.140.168:7010/api/Users')
            .then(res => {
                setUsers(res.data, console.log(res.data)
                )
            });
    }, []);

    const hideEditUserPasswordDialog = () => {
        setedituserPassword(false);
    }

    const hideDeleteuserDialog = () => {
        setDeleteuserDialog(false);
    }

    const confirmDeleteuser = (user) => {
        setuser(user);
        setDeleteuserDialog(true);
    }

    const confirmEditPassword = (user) => {
        setuser(user);
        setedituserPassword(true);
    }

    const deleteuser = () => {
        let _user = Users.filter(val => val.userId !== user.userId);
        setuser(_user);
        axios.delete('http://100.25.140.168:7010/api/user/' + user.userId);
        console.log(user.userId);
        setDeleteuserDialog(false);
        setuser(emptyuser);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
    }

    const editUser = () => {
        let _users = users.filter(val => val.UserId !== user.UserId);
        setuser(_users);
        axios.put('http://100.25.140.168:7010/api/ChangePassword?id=' + user.UserId + '&password=' + password).then(
            console.log(password + " para " + user.UserId, user.Name),
            setedituserPassword(false),
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Password changed', life: 3000 })
        ).catch(err => {
            toast.current.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
        })
        
    }

const edituserDialogFooter = (
    <React.Fragment>
        <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideEditUserPasswordDialog} />
        <Button label='Yes' icon='pi pi-check' className='p-button-text' onClick={editUser} />
    </React.Fragment>
);

const deleteuserDialogFooter = (
    <React.Fragment>
        <Button label='No' icon='pi pi-times' className='p-button-text' onClick={hideDeleteuserDialog} />
        <Button label='Yes' icon='pi pi-check' className='p-button-text' onClick={deleteuser} />
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
            <Button icon='pi pi-pencil' className='p-button-rounded p-button-success p-mr-2' onClick={() => confirmEditPassword(rowData)} />
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
                    <DataTable class="fl-table" paginator rows={25} value={users}>
                        <Column sortable={true} field="UserId" header="User"></Column>
                        <Column sortable={true} field="Name" header="Name"></Column>
                        <Column sortable={true} field="Surname" header="Surname"></Column>
                        <Column sortable={true} field="Password" header="Password" ></Column>
                        <Column sortable={true} field="Birth" header="Birth" ></Column>
                        <Column sortable={true} body={header} header="Image"></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>
                </div>

                <Dialog visible={deleteuserDialog} style={{ width: '450px' }} header='Confirm' modal footer={deleteuserDialogFooter} onHide={hideDeleteuserDialog}>
                    <div className='confirmation-content'>
                        <i className='pi pi-exclamation-triangle p-mr-3' style={{ fontSize: '2rem' }} />
                        {user && <span>Are you sure you want to delete <b>{user.Id}</b>?</span>}
                    </div>
                </Dialog>

                <Dialog visible={edituserPassWord} style={{ width: '450px' }} header='Confirm' modal footer={edituserDialogFooter} onHide={hideEditUserPasswordDialog}>
                    <div className='confirmation-content'>
                        <i className='pi pi-exclamation-triangle p-mr-3' style={{ fontSize: '2rem' }} />
                        {user && <span>Enter the new password for <b>{user.UserId}</b></span>}
                        <div>
                            <h4>New Password</h4>
                            <InputText type='text' onChange={(e) => setpassword(e.target.value)}></InputText>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    </div>
)
}
export default Users;