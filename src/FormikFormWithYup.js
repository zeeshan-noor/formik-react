import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'

function FormikFormWithYup() {
   const formik = useFormik({
       initialValues:{
           email:'',
           password:''
       },
       onSubmit:values=>{
           console.log(values);
       },
       validationSchema:yup.object({
           email:yup.string().email().required('This field is required'),
           password:yup.string().min(6,'password is to short').max(10,'password is to long').required('this field is required')
       })
   })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Enter your Email
                    <input
                    type="email"
                    id='email'
                    onChange={formik.handleChange}
                    />
                    <br/>
                    {formik.errors.email?<div className='error'>{formik.errors.email}</div>:""}
                </label>
                <br/>
                <br/>
                <br/>
                <label>
                    Enter Your Password
                    <input
                    type="password"
                    id='password'
                    onChange={formik.handleChange}
                    />
                    <br/>
                    {formik.errors.password?<div className='error'>{formik.errors.password}</div>:""}
                </label>
                <br/>
                <br/>
                <br/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default FormikFormWithYup
