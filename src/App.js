import React, { Component } from "react";
import axios from "axios";
import CustomersList from ".//CustomersLists";
import Loader from "./loader";
import MyForm from "./MyForm";

class App extends Component
{
    state = {
        customers: [],
        customer: {},
        loader: false,
        URL: "http://127.0.0.1:8000/customers"
    };

    getCustomers = async () =>
    {
        this.setState({ loader: true });
        try
        {
            const response = await axios.get('http://127.0.0.1:8000/customers');
            console.log("API Response:", response.data);
            const customers = Array.isArray(response.data) ? response.data : [];
            this.setState({ customers, loader: false });
        } catch (error)
        {
            console.error("Error fetching customers:", error);
            this.setState({ customers: [], loader: false });
        }
    };

    deleteCustomer = async (id) =>
    {
        this.setState({ loader: true });
        await axios.delete(`${'http://127.0.0.1:8000/customers'}/${id}`);
        this.getCustomers();
    };

    createCustomer = async data =>
    {
        this.setState({ loader: true });
        await axios.post('http://127.0.0.1:8000/customers', {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        });
        this.getCustomers();
    }

    editCustomer = async data =>
    {
        this.setState({ loader: true });

        await axios.put(`http://127.0.0.1:8000/customers/${data.id}`, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email
        });

        // Update the customers array in the state after editing
        this.getCustomers();
        this.setState({ customer: {}, loader: false });
    };

    componentDidMount()
    {
        this.getCustomers();
    }

    onEdit = (customer) =>
    {
        this.setState({ customer: customer }); // Correctly set the customer to edit
    };

    onDelete = id =>
    {
        this.deleteCustomer(id);
    };

    onFormSubmit = (data) =>
    {
        if (data.isEdit)
        {
            this.editCustomer(data);
        } else
        {
            this.createCustomer(data);
        }
    };

    render()
    {
        return (
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                            React JS with Laravel API
                        </a>
                    </div>
                </div>

                <div className="ui main container">
                    <br />
                    <br />
                    <br />
                    <MyForm
                        customer={this.state.customer}
                        onFormSubmit={this.onFormSubmit}
                    />

                    {this.state.loader ? <Loader /> : ""}

                    <CustomersList
                        customers={this.state.customers}
                        onEdit={this.onEdit}
                        onDelete={this.onDelete}
                    />
                </div>
            </div>
        );
    }
}

export default App;
