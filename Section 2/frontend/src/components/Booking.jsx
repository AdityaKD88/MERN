import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const BookingSchema = Yup.object().shape({
  fname: Yup.string().required('First Name is required').min(3, 'Too short'),
  lname: Yup.string().required('Last Name is required').min(3, 'Too short'),
  city: Yup.string().required('City is required'),
  region: Yup.string().required('Region is required'),
  zip: Yup.string().required('Zip Code is required'),
  pno: Yup.string().required('Phone number is required'),
  movie: Yup.string().required('Movie Name is required'),
  people: Yup.string().required('Number of people is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
});

const Booking = () => {

  const bookingForm = useFormik({
    initialValues:{
      fname: '',
      lname: '',
      address: '',
      city: '',
      region: '',
      zip: '',
      pno: '',
      email: '',
      movie: '',
      people: '',
      date: '',
      time: ''
    },

    onSubmit: (values) => { console.log(values); },

    validationSchema: BookingSchema
  })

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center my-5">Movie Ticket Reservation</h2>

            <form onSubmit={bookingForm.handleSubmit}>
              <div className="row">
                <div className="col">
                  <label>First Name</label>
                  <span className="error-label">{bookingForm.touched.fname && bookingForm.errors.fname}</span>
                  <input type="text" className='form-control mb-3' id='fname' onChange={bookingForm.handleChange} value={bookingForm.values.fname} />
                </div>
                <div className="col">
                  <label>Last Name</label>
                  <span className="error-label">{bookingForm.touched.lname && bookingForm.errors.lname}</span>
                  <input type="text" className='form-control mb-3' id='lname' onChange={bookingForm.handleChange} value={bookingForm.values.lname} />
                </div>
              </div>

              <label>Address</label>
              <input type="text" className='form-control mb-3' id='address' onChange={bookingForm.handleChange} value={bookingForm.values.address} />

              <div className="row">
                <div className="col">
                  <label>City</label>
                  <span className="error-label">{bookingForm.touched.city && bookingForm.errors.city}</span>
                  <input type="text" className='form-control mb-3' id='city' onChange={bookingForm.handleChange} value={bookingForm.values.city} />
                </div>
                <div className="col">
                  <label>Region</label>
                  <span className="error-label">{bookingForm.touched.region && bookingForm.errors.region}</span>
                  <input type="text" className='form-control mb-3' id='region' onChange={bookingForm.handleChange} value={bookingForm.values.region} />
                </div>
                <div className="col">
                  <label>Postal / Zip Code</label>
                  <span className="error-label">{bookingForm.touched.zip && bookingForm.errors.zip}</span>
                  <input type="text" className='form-control mb-3' id='zip' onChange={bookingForm.handleChange} value={bookingForm.values.zip} />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Phone Number</label>
                  <span className="error-label">{bookingForm.touched.pno && bookingForm.errors.pno}</span>
                  <input type="text" className='form-control mb-3' id='pno' onChange={bookingForm.handleChange} value={bookingForm.values.pno} />
                </div>
                <div className="col">
                  <label>Email</label>
                  <input type="text" className='form-control mb-3' id='email' onChange={bookingForm.handleChange} value={bookingForm.values.email} />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Movie Name</label>
                  <span className="error-label">{bookingForm.touched.movie && bookingForm.errors.movie}</span>
                  <input type="text" className='form-control mb-3' id='movie' onChange={bookingForm.handleChange} value={bookingForm.values.movie} />
                </div>
                <div className="col">
                  <label>Number of People</label>
                  <span className="error-label">{bookingForm.touched.people && bookingForm.errors.people}</span>
                  <input type="text" className='form-control mb-3' id='people' onChange={bookingForm.handleChange} value={bookingForm.values.people} />
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>Date</label>
                  <span className="error-label">{bookingForm.touched.date && bookingForm.errors.date}</span>
                  <input type="date" className='form-control mb-3' id='date' onChange={bookingForm.handleChange} value={bookingForm.values.date} />
                </div>
                <div className="col">
                  <label>Time</label>
                  <span className="error-label">{bookingForm.touched.time && bookingForm.errors.time}</span>
                  <input type="time" className='form-control mb-3' id='time' onChange={bookingForm.handleChange} value={bookingForm.values.time} />
                </div>
              </div>

              <button type='submit' className='btn btn-success mt-2'>Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking