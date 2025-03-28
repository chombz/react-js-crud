import React, { Component } from "react";
//import files
import Customers from "./Customers";



//CBC
class CustomersList extends Component
{

    //promt for edit customers
    onEdit = (customer) =>
    {
        //console.log("customer list", data);
        this.props.onEdit(customer);//
    };


    //prompt for delete customers
    onDelete = id =>
    {
        //console.log("customer list", id);
        this.props.onDelete(id);//
    };


    render()
    {
        const customers = this.props.customers;//this is a prop

        return (
            <div className="ui container">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th style={{ width: '50px', textAlign: 'center' }}>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th style={{ width: '148px' }}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            customers.map(customer => (
                                <Customers
                                    customer={customer}
                                    key={customer.id}
                                    onEdit={this.props.onEdit}
                                    onDelete={this.onDelete}
                                />
                            ))
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default CustomersList;

