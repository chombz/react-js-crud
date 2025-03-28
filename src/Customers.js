import React, { Component } from "react";

//CBC
class Customers extends Component
{

    //prompt button to edit
    onEdit = () =>
    {
        // console.log("customer on edit");
        this.props.onEdit(this.props.customer);//
    };


    //propt button to delete
    onDelete = () =>
    {
        // console.log("customer on delete");
        this.props.onDelete(this.props.customer.id);//
    };




    render()
    {
        const { id, first_name, last_name, email } = this.props.customer;

        return (
            <tr>
                <td style={{ textAlign: 'center' }}>{id}</td>
                <td>{`${first_name} ${last_name}`}</td>
                <td>{email}</td>
                <td>
                    <div className="action-buttons">
                        <button className="ui blue button" onClick={() => this.onEdit()}>
                            Edit
                        </button>

                        <button className="ui red button" onClick={this.onDelete}>
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default Customers;
