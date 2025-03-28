import React, { Component } from "react";

// class based component
class MyForm extends Component
{
    //propting for edit customers
    state =
        {
            form: { first_name: "", last_name: "", email: "", isEdit: false },
            btnName: "Save",
            btnClass: "ui primary button submit-button"
        };

    //Check if object is empty
    isEmpty(obj)
    {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }


    //Promts for update page(got from stackflow)
    componentDidUpdate(prevProps)
    {
        if (prevProps.customer !== this.props.customer && this.props.customer)
        {
            this.setState({
                form: { ...this.props.customer, isEdit: true },
                btnName: "Update",
                btnClass: "ui purple button submit-button"
            });
        }
    }


    //HandleChange
    handleChange = event =>
    {
        const { name, value } = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({ form });
    };

    /**
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     * PROMTING FOR INSERTING
     */
    onFormSubmit = event =>
    {
        //prevent form submit
        event.preventDefault();

        //valitade form
        if (this.formValidation())
        {
            //Send form data to app
            this.props.onFormSubmit(this.state.form);
        }

        //clear form fields
        this.clearFormFields();
    };

    /* Validate Inputs */
    formValidation = () =>
    {
        //first name
        if (document.getElementsByName("first_name")[0].value === "")
        {
            alert("Enter first name");
            return false;
        }
        //last name
        if (document.getElementsByName("last_name")[0].value === "")
        {
            alert("Enter last name");
            return false;
        }
        //email
        if (document.getElementsByName("email")[0].value === "")
        {
            alert("Enter email");
            return false;
        }

        return true;
    };
    /**
     * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     */


    //Clear form
    clearFormFields = () =>
    {
        //Change form state
        this.setState(
            {
                form: { first_name: "", last_name: "", email: "", isEdit: false }

            });



        //change button of save
        this.setState
            ({
                btnName: "Save",
                btnClass: "ui primary button submit-button"
            });

        //Clear form state
        document.querySelector(".form").reset();
    };



    render()
    {
        return (
            <form className="ui form" >
                <div className="fields">
                    <div className="four wide field">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            onChange={this.handleChange}
                            value={this.state.form.first_name}

                        />
                    </div>

                    <div className="four wide field">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            onChange={this.handleChange}
                            value={this.state.form.last_name}
                        />
                    </div>

                    <div className="four wide field">
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="joe@gmail.com"
                            onChange={this.handleChange}
                            value={this.state.form.email}
                        />
                    </div>
                </div>

                {/*Button */}
                <div className="four wide field">
                    <button className=
                        {this.state.btnClass}
                        onClick={this.onFormSubmit}>
                        {this.state.btnName}
                    </button>
                </div>
            </form>
        );
    }
}

export default MyForm;