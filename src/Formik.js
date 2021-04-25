
import { useFormik } from 'formik'
import React from 'react'

function FormikForm() {
    
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:values=>{
            console.log(values);
        },
        validate:values=>{
            let error={};
            if(!values.email)
            error.email='This field is required'
            if(!values.password)
            error.password='This field is required'
            return error;
        }
    })

    return (
        <div>
          <form onSubmit={formik.handleSubmit}>
              <label>
                  Enter Your Email
                  <input type="email" 
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  />
                  <br/>
                  {formik.errors.email?<div className="error">{formik.errors.email}</div>:''}
              </label>
              <br/>
              <br/>
              <br/>
              <label>
                  Enter Your Password
                  <input type='password'
                  id="password"                  
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  /><br/>
                  {formik.errors.password?<div className="error">{formik.errors.password}</div>:''}
              </label>
              <br/>
              <br/>
              <br/>
              <input type="submit"/>
          </form>
        </div>
    )
}

export default FormikForm
