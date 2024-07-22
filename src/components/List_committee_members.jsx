import React,{useState,useEffect} from 'react'
import { report_fetchcommitteemembers } from '../services/ConferenceServices'

function List_committee_members() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    const conference_id=sessionStorage.getItem('con');
    if(conference_id){
      report_fetchcommitteemembers(conference_id).then((res)=>{
        const allMembers = Object.values(res.data).flat();
        setData(allMembers);
        }).catch((err)=>{

        })
    }
  },[]);
  return (
    <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-slate-50'>
    {/*
      Heads up! 👋
    
      This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
    */}
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Designation</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Mobile</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Country</th>
          </tr>
        </thead>
    
        <tbody className="divide-y divide-gray-200">
        {data.map((item, index) => (
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.designation}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.name}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.mobile}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.email}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.country}</td>

       
      </tr>
    ))}
      
      
        </tbody>
      </table>
    </div>
    
        </div>
  )
}

export default List_committee_members