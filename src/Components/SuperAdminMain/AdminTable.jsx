import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const ProductTable = () => {
    const Admin = [
        {
            "id": 1,
            "name": "Albert",
            "email":"albert123@gmail.com",
            "phone": "7845963210",
            "address": "06 East OMR",
        },
        {
            "id": 2,
            "name": "Divya",
            "email":"divya123@gmail.com",
            "phone": "9876543210",
            "address": "12 Main Pallavaram ",
        },
        {
            "id": 3,
            "name": "Pavan",
            "email":"pavan123@gmail.com",
            "phone": "9865324107",
            "address": "21 South Egmore",
        },
        {
            "id": 4,
            "name": "Rahul",
            "email":"rahul123@gmail.com",
            "phone": "7845963210",
            "address": "08 West ECR",
        }
    ]
  return (
    <div className='overflow-x-auto rounded-lg bg-white'>
        <div className="flex justify-between p-5">
            <div>
                <p className="font-bold">Recent Admins</p>
            </div>
            <div className="flex gap-4">
                <div className="">
                    <select name="" id="timePeriod" className='bg-gray-200 rounded text-gray-400' style={{outline:'none'}}>
                        <option value="monthly">Last 30 Days</option>
                        <option value="quarterly">Last 6 Months</option>
                        <option value="yearly">Last Year</option>
                    </select>
                </div>
            </div>
        </div>
        <table className='min-w-full'>
            <thead>
                <tr className='border-b'>
                    <th className="px-2 py-3  border-gray-200 text-left text-gray-400">S.No</th>
                    <th className="px-2 py-3  border-gray-200 text-left text-gray-400">Name</th>
                    <th className="px-2 py-3  border-gray-200 text-left text-gray-400">Email</th>
                    <th className="px-2 py-3  border-gray-200 text-left text-gray-400">Phone</th>
                    <th className="px-2 py-3  border-gray-200 text-left text-gray-400">Address</th>
                </tr>
            </thead>
            <tbody>
                {Admin.map((data) =>(
                    <tr key={data.id} className='border-b-2 '>
                        <td className='px-3 py-4 whitespace-nowrap '>{data.id}</td>
                        <td className='px-2 py-4 whitespace-nowrap'>{data.name}</td>
                        <td className='px-2 py-4 whitespace-nowrap'>{data.email}</td>
                        <td className='px-2 py-4 whitespace-nowrap'>{data.phone}</td>
                        <td className='px-2 py-4 whitespace-nowrap'>{data.address}</td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable