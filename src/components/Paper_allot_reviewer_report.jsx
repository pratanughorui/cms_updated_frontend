import React,{useState,useEffect} from 'react'
import { fetchpaperallotedtoreviewer } from '../services/ConferenceServices'

function Paper_allot_reviewer_report() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    const conference_id=sessionStorage.getItem('con');
    if(conference_id){
      fetchpaperallotedtoreviewer(conference_id).then((res)=>{
          setData(res.data);
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
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Reviewer</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Title</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">First Author</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Co-Authors</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Last date of upload</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
    {data.map((item, index) => (
      <tr >
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.reviewer}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.paper_title}</td>

        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.name}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.co_authors}</td>


       
      </tr>
    ))}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Paper_allot_reviewer_report