import React, { useEffect, useState } from 'react'
import './EmployeeDetails.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { SlOptionsVertical } from 'react-icons/sl'
import { IoIosArrowBack, IoIosArrowForward, IoIosOptions } from 'react-icons/io'
import { BiChevronDown } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export default function EmployeeDetails() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(5)

  const navigate = useNavigate()

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/employees')
        const details = response.data
        setData(details)
      } catch (error) {
        console.log(error)
      }
    }

    getDetails()
  }, [])

  const handleeEmployeeSelect = (Id) => {
    navigate(`/employee/${Id}`)
  }

  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)



  return (
    <div>
      <Header />
      <div className="home-page">
        <Sidebar />
        <div className="home-section">
          <div className="page-details">
            <h3>Employees</h3>
            <h4>Dashboard/Employee</h4>
          </div>

          <div className="table-container">
            <div className="employee-btns">
              <button>Add Employee</button>
              <div>
                <span>
                  <IoIosOptions fontSize={'20px'} />
                </span>
                <span>
                  <SlOptionsVertical fontSize={'16px'} />
                </span>
              </div>
            </div>

            <table className="custom-table">
              <thead className="table-head">
                <tr className="table-head-options">
                  <th>Sl.No</th>
                  <th>EMP ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Floor</th>
                  <th>Joined Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((elem, index) => {
                  const serialNumber = indexOfFirstRecord + index + 1;
                  return(
                  <tr
                    key={elem.Employee_id}
                    className="employee-row"
                    onClick={() => handleeEmployeeSelect(elem.Employee_id)}
                  >
                    <td>{serialNumber}</td>
                    <td>{elem.Employee_id}</td>
                    <td>
                      <img
                        src={elem.image_url}
                        alt="employee"
                        className="employee-img"
                      />
                    </td>
                    <td>{elem.name}</td>
                    <td>{elem.floor}</td>
                    <td>{elem.Join_date}</td>
                    <td>
                      <div
                        className={
                          elem.status === 'working'
                            ? 'working-button'
                            : 'left-button'
                        }
                      >
                        {elem.status}
                      </div>{' '}
                    </td>
                    <SlOptionsVertical style={{ marginTop: '12px' }} />
                  </tr>
                )})}
              </tbody>
            </table>
            <div className="pagination-sec">
              <p>Showing 1 to 5 of 5 Results</p>

              <div className="pagination-right-sec">
                <div className="pagination-page">
                  <p>10 per Page</p>
                  <BiChevronDown />
                </div>

                <div className="pagination-control">
                  <span onClick={() => paginate(currentPage - 1)}>
                    <IoIosArrowBack />
                  </span>
                  <span style={{marginTop:"3px"}}>{currentPage}</span>
                  <span onClick={() => paginate(currentPage + 1)}>
                    <IoIosArrowForward />
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
