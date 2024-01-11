"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

function page()
{

  let form = useRef(null)

  const toasterOptions = {
    duration: 4000,
    position: 'top-center'
  }

  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    const formData = new FormData(form.current)
    const res = await fetch("http://ec2-52-66-176-19.ap-south-1.compute.amazonaws.com:8000/get_selfie", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: formData
    })
    if (res.status === 200)
    {
      toast.success("Form submitted successfully", toasterOptions)
    }
    else
    {
      toast.error("Error in submitting form, Please try again later", toasterOptions)
    }
    e.target.reset()
    form.current = ''
  }

  return (
    <div className='max-w-xl w-full p-5 rounded-lg bg-slate-200  text-primary '>
      <div className='text-2xl text-center font-bold mb-2 uppercase tracking-wide'>Anthill Networks</div>
      <div className=' text-center text-lg text-slate-800 mb-6'>AI Photo Tool Registration</div>
      <form ref={form} className='text-primary' onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="form-label">name</label>
          <input type="text" name="name" className="form-input" required />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="form-label">email</label>
          <input type="email" name="email" className="form-input" required />
        </div>
        <div className="mb-5">
          <label htmlFor="phno" className="form-label">mobile</label>
          <input type="number" name="phno" className="form-input" required />
        </div>
        <div className="mb-5">
          <label htmlFor="selfie" className="form-label">upload selfie</label>
          <input type="file" name="selfie" className="form-input" required />
        </div>
        <button type="submit" className='form-input bg-primary text-slate-200 text-lg uppercase tracking-wide'>submit</button>
      </form>
      <Image src="./ROBN.png" alt="Robins Photography" width="0" height="0" className='mx-auto mt-7 w-[50%] h-auto' />
      <Toaster />
    </div>
  )
}

export default page