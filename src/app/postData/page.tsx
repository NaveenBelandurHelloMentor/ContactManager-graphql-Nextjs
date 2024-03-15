'use client'

import React from 'react'
import NavBar from '../Component/NavBar'
import {
    MDBContainer, MDBRow, MDBCard, MDBInput,
    MDBBtn, MDBCol, MDBTypography
} from 'mdb-react-ui-kit'
import { useState } from 'react'
import { gql, useMutation } from '@apollo/client'


const CREATE_CONTACT = gql`
mutation addContact($contactInput: InputContact){
  addContact(contactInput: $contactInput) {
    id
  }
}
`




const PostData = () => {
    const [name, setName] = useState<String>('')
    const [phonenumber, setPhoneNumber] = useState<String>('')
    const [email, setEmail] = useState<String>('')
    const [detail, setDetail] = useState<String>('')
    const [social, setSocial] = useState<String>('')
    const [addContact] = useMutation(CREATE_CONTACT)


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlephonenumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleemail = (e) => {
        setEmail(e.target.value)
    }

    const handledetail = (e) => {
        setDetail(e.target.value)
    }

    const handlesocail = (e) => {
        setSocial(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addContact({
            variables: { contactInput: { name: name, phonenumber: phonenumber, email: email, contactdetails: detail, socialmedia: social } }
        })
        if(addContact){
         alert('Added New Data')
        }
        setName('')
        setPhoneNumber('')
        setEmail('')
        setDetail('')
        setSocial('')


    }
    return (
        <>
            <NavBar />
            <section>
                <MDBContainer>
                    <MDBRow size={12}>
                        <MDBCard className='mt-5 py-5 px-5 .shadow-5' >
                            <MDBTypography tag='div' className='display-2 pb-3 mb-3 border-bottom'>
                                <h2 className='text-center lead mb-0'>Add Contact Details</h2>
                            </MDBTypography>
                            <form>
                                <MDBInput type='text' id='form4Example1' wrapperClass='mb-4 mt-2' label='Contact Name' value={name} onChange={handleName} />
                                <MDBInput type='text' id='form4Example1' wrapperClass='mb-4 mt-2' label='Phone Number' value={phonenumber} onChange={handlephonenumber} />
                                <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='Email' value={email} onChange={handleemail} />
                                <MDBInput type='text' id='form4Example1' wrapperClass='mb-4 mt-2' label='Details' value={detail} onChange={handledetail} />
                                <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='Social Media' value={social} onChange={handlesocail} />
                                <div className="d-grid gap-2 mt-5 col-6 mx-auto">
                                    <MDBBtn onClick={(e) => {
                                        handleSubmit(e)
                                    }} >Submit</MDBBtn>
                                </div>
                            </form>
                        </MDBCard>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    )
}





export default PostData