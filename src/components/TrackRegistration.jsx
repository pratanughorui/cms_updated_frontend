import React,{useState} from 'react'

function TrackRegistration() {
    const [committees, setCommittees] = useState([
        { id: 1, name: 'Track 1' },
        { id: 2, name: 'Track 2' },
        { id: 3, name: 'Track 3' },
        // Add more committee items as needed
      ]);
      const [inputValue, setInputValue] = useState('');
      const [items, setItems] = useState([]);
    
      const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleAddClick = () => {
        if (inputValue.trim()) {
          setItems([...items, inputValue]);
          setInputValue('');
        }
      };
    
      const handleDeleteClick = (index) => {
        const newItems = items.filter((item, i) => i !== index);
        setItems(newItems);
      };
    
      const removeCommittee = (id) => {
        setCommittees(committees.filter(committee => committee.id !== id));
      };
  return (
    
    <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-slate-50'>
         <div className='w-full m-6'>
            <h2 className='text-2xl text font-semibold text-indigo-800'>Conference Name : </h2>
        </div>
     <div className='w-full md:flex'>
        {/* for form */}
        <div className='w-full m-3 h-96 border border-2 border-cyan-700'>
      <div className='text-center text-xl'>
        <h2>Track</h2>
      </div>
      <div className='p-4'>
        <div className="relative">
          <input 
            type="search" 
            id="search" 
            className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="" 
            value={inputValue} 
            onChange={handleInputChange}
            required 
          />
          <button 
            type="button" 
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
            onClick={handleAddClick}
          >
            ADD
          </button>
        </div>
      </div>
      <div className='w-96 h-48 ml-5 overflow-auto'>
        <ul className="p-4 space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item}</span>
              <button 
                className="text-red-600 hover:text-red-800 text-2xl"
                onClick={() => handleDeleteClick(index)}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center justify-center mt-6'>
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-7 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Save
        </a>
      </div>
    </div>
        {/* for table */}
        <div className='w-full m-3 h-96 border border-2 border-cyan-700'>
          <div>
          <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Track
            </th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {committees.map((committee) => (
            <tr key={committee.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {committee.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  onClick={() => removeCommittee(committee.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
          
        </div>
     </div>
    </div>
  )
}

export default TrackRegistration