'use client'

import React from 'react'
import NavBar from '../Component/NavBar'
import { gql, useQuery ,useMutation} from '@apollo/client'
import { BarLoader } from 'react-spinners'
import {
     MDBInput,
  MDBCol, MDBContainer, MDBRow, MDBCardBody, MDBCard,
  MDBCardTitle,
  MDBCardText, MDBTypography,MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit'
import { useRouter } from 'next/navigation'
import {useState} from 'react'




const GET_CONTACT_LIST = gql`
query getcontact{
  getContact{
    id
    name
    phonenumber
    email
    contactdetails
    socialmedia
  }
}
`

const GET_EDIT = gql`
mutation editcontact($id: ID!, $editInput: EditContact){
  editContact(ID: $id,editInput: $editInput) {
    id
    name
  }
}
`



interface typeData {
  id: String,
  name: String,
  email: String,
  contactdetails: String,
  socialmedia: String,
  phonenumber:String


}

const DeleteContact = () => {
  const { data, loading, error } = useQuery(GET_CONTACT_LIST)
  const [editContact] = useMutation(GET_EDIT)
  const [basicModal, setBasicModal] = useState(false);
  const [editid,setEdit] = useState('')

  const [name, setName] = useState<String>('')
  const [phonenumber, setPhoneNumber] = useState<String>('')
  const [email, setEmail] = useState<String>('')
  const [detail, setDetail] = useState<String>('')
  const [social, setSocial] = useState<String>('')


  const Finaldata = data?.getContact
  console.log(Finaldata, 'Final Data')
  const Router = useRouter()
  console.log(error,'error')



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

  const handleClick = () => {
    Router.push('/postData')
  }

  const  handleEdit = (id) =>{
    setEdit(id)
    setBasicModal(!basicModal);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editContact({
        variables:{id:editid,editInput:{name:name,email:email,phonenumber:phonenumber,contactdetails:detail,socialmedia:social}}
    })
    alert('Edited Contact')
    Router.push('/getData')
    setEdit('')
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
            <MDBCardBody className='mt-5'>
              <div className='d-flex justify-content-center'>
                {loading && <BarLoader size={10} color='red' />
                }
              </div>
              <MDBTypography tag='div' className='display-2 pb-3 mb-3 border-bottom'>
                <h2 className='lead mb-0'>Number of Contact - {loading && <BarLoader />} {Finaldata?.length}</h2>
              </MDBTypography>
              {Finaldata?.map((data: typeData) => {
                return (
                  <MDBCard className='mt-3'>
                    <MDBCardBody>
                      <MDBCardTitle>Contact Name - {data.name}</MDBCardTitle>
                      <MDBCardText>
                        PhoneNumber - {data.phonenumber}
                      </MDBCardText>
                      <MDBCardText>
                        Email - {data.email}
                      </MDBCardText>
                      <MDBCardText>
                        Contactdetails - {data.contactdetails}
                      </MDBCardText>
                      <MDBCardText>
                        Socialmedia - {data.socialmedia}
                      </MDBCardText>
             
                      <div className='d-flex justify-content-end py-5'>
                      <MDBBtn onClick={()=>{
                         handleEdit(data.id)
                      }}>Edit Contact</MDBBtn>
                       </div>
                    </MDBCardBody>
                  </MDBCard>
                )
              })}
            </MDBCardBody>
          </MDBRow>
      
      
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Contact</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={handleEdit}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <form>
                                <MDBInput type='text' id='form4Example1' wrapperClass='mb-4 mt-2' label='Contact Name' value={name} onChange={handleName} />
                                <MDBInput type='text' id='form4Example1' wrapperClass='mb-4 mt-2' label='Phone Number' value={phonenumber} onChange={handlephonenumber} />
                                <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='Email' value={email} onChange={handleemail} />
                                <MDBInput type='text' id='form4Example1' wrapperClass='mb-4 mt-2' label='Details' value={detail} onChange={handledetail} />
                                <MDBInput type='text' id='form4Example2' wrapperClass='mb-4' label='Social Media' value={social} onChange={handlesocail} />
                            </form>

            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={handleEdit}>
                Close
              </MDBBtn>
              <MDBBtn onClick={(e) => {
                                        handleSubmit(e)
                                    }}>Save Contact</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
        </MDBContainer>
      </section>
    </>
  )
}





export default DeleteContact