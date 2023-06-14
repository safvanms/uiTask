import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './EmployeeList.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { SlOptionsVertical } from 'react-icons/sl'

export default function EmployeeList() {
  const [data, setData] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employees')
        const details = response.data

        const employee = details.find((employee) => employee.Employee_id === id)

        setData(employee)
      } catch (error) {
        console.log(error)
      }
    }

    getDetails()
  }, [id])

  return (
    <div>
      <Header />
      <div className="home-page">
        <Sidebar />
        <div className="home-section">
          <div className="page-details">
            <h3>Employee Info</h3>
            <h4>Dashboard/Employee/Employee Info</h4>
          </div>

          {data && (
            <div className="employee-all-details">
              <div className="employee-details-header">
                <h2>{data.name}</h2>
                <div>
                  <button>Edit Info</button>
                  <span>
                    <SlOptionsVertical fontSize={'16px'} />
                  </span>
                </div>
              </div>

              <div className="employee-details-main">
                <h4>Basic Info</h4>
                <div className="info">
                  <div className="basic-infos">
                    <div className="personal-info">
                      <div className="info-left">
                        <div>
                          <p>Contact : </p> <h5>{data.Contact}</h5>
                        </div>
                        <div>
                          <p>Mail Id : </p> <h5>{data.email}</h5>
                        </div>
                        <div>
                          <p>Gender : </p> <h5>{data.gender}</h5>
                        </div>
                        <div>
                          <p>Aadhar Id : </p> <h5>{data.aadhar_id}</h5>
                        </div>
                        <div>
                          <p>Address: </p> <h5>{data.address}</h5>
                        </div>
                      </div>

                      <div className="info-right">
                        <div>
                          <p>Father's Name: </p> <h5>{data.father_name}</h5>
                        </div>
                        <div>
                          <p>Birth date: </p> <h5>{data.birthDate}</h5>
                        </div>
                        <div>
                          <p>Marital Status: </p> <h5>{data.marital_status}</h5>
                        </div>
                        <div>
                          <p>Caste/Religion :</p> <h5>{data.religion}</h5>
                        </div>
                      </div>
                    </div>

                    <div className="bank-info">
                      <div className="bank-info-header">
                        <p>Bank Account</p>
                        <span className="line"></span>
                      </div>
                      <div className="bank-details">
                        <div>
                          <p>Name</p>
                          <span>{data.name}</span>
                        </div>
                        <div>
                          <p>Bank Name</p>
                          <span>{data.bank_name}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* avatar info */}

                  <div className="avatar-info">
                    <img src={data.image_url} alt="employee" />
                    <div className="avatar-details">
                      <div>
                        <p>Emp ID: </p> <h5>{data.Employee_id}</h5>
                      </div>
                      <div>
                        <p>Join Date: </p> <h5>{data.Join_date}</h5>
                      </div>
                      <div>
                        <p>PF number: </p> <h5>{data.PF_number}</h5>
                      </div>
                      <div>
                        <p>Blood Group :</p> <h5>{data.blood_group}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
