import React, { useState } from 'react';

const PaperManagement = () => {
  // Sample data for the table
  const initialData = [
    { author: 'John Doe', date: '24/05/1995', profession: 'Web Developer' },
    { author: 'Jane Doe', date: '04/11/1980', profession: 'Web Designer' },
    { author: 'Gary Barlow', date: '24/05/1995', profession: 'Singer' },
    { author: 'Alice Smith', date: '15/02/1990', profession: 'Graphic Designer' },
    { author: 'Bob Johnson', date: '20/03/1985', profession: 'Software Engineer' },
    { author: 'Carol White', date: '30/06/1987', profession: 'Project Manager' },
    { author: 'Dave Brown', date: '05/09/1992', profession: 'Data Scientist' },
    { author: 'Eve Davis', date: '12/12/1983', profession: 'UX Designer' },
    { author: 'Frank Miller', date: '22/07/1991', profession: 'Product Owner' }
  ];

  const data = [
    { reviewer: 'John Doe', date: '24/05/1995' },
    { reviewer: 'Jane Doe', date: '04/11/1980' },
    { reviewer: 'Gary Barlow', date: '24/05/1995' },
    { reviewer: 'John Doe', date: '24/05/1995' },
    { reviewer: 'Jane Doe', date: '04/11/1980' },
    { reviewer: 'Gary Barlow', date: '24/05/1995' },
    { reviewer: 'John Doe', date: '24/05/1995' },
    { reviewer: 'Jane Doe', date: '04/11/1980' },
    { reviewer: 'Gary Barlow', date: '24/05/1995' },
  ];

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter data based on the search term
  const filteredData = initialData.filter(item =>
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Compute the current items for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Compute the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4 space-y-4 md:space-y-0 md:grid md:grid-cols-1 md:gap-4 bg-slate-50">
    {/* Row 1 */}
    <div className="md:grid md:grid-cols-2 md:gap-4">
      {/* Column 1 */}
      <div className="bg-white p-4 border border-zinc-700 rounded shadow-md">
        <div className='text-xl mb-4 text-center'>Allotment Of Papers</div>
        <form>
          <div className='mb-4'>
            <label
              htmlFor="track"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-xs font-medium text-gray-700">Track</span>
              <select
                id="track"
                name="track"
                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required
              >
                <option>Select an option</option>
                <option value="<100">&lt;100</option>
                <option value="<500">&lt;500</option>
                <option value="<1000">&lt;1000</option>
                <option value="<2000">&lt;2000</option>
                <option value="<5000">&lt;5000</option>
                <option value="<10000">&lt;10000</option>
                <option value="<20000">&lt;20000</option>
              </select>
            </label>
          </div>
          <div className='mb-4'>
            <label
              htmlFor="reviewers"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-xs font-medium text-gray-700">Reviewers</span>
              <select
                id="reviewers"
                name="reviewers"
                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required
              >
                <option>Select an option</option>
                <option value="<100">&lt;100</option>
                <option value="<500">&lt;500</option>
                <option value="<1000">&lt;1000</option>
                <option value="<2000">&lt;2000</option>
                <option value="<5000">&lt;5000</option>
                <option value="<10000">&lt;10000</option>
                <option value="<20000">&lt;20000</option>
              </select>
            </label>
          </div>
          <div className='mb-4'>
            <label
              htmlFor="paper"
              className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <span className="text-xs font-medium text-gray-700">Paper</span>
              <input
                type="text"
                id="paper"
                name="paper"
                className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                required
              />
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      {/* Column 2 */}
      <div className="bg-white p-4 border border-zinc-700 rounded shadow-md">
        <div className='flex items-center justify-between text-xl mb-4'>
          <div>List Of Papers</div>
          <div className="relative">
            <label htmlFor="Search" className="sr-only">Search</label>
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm p-3"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" className="text-gray-600 hover:text-gray-700">
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div className='mt-4'>
          <div className="rounded-lg border border-gray-200">
            <div className="overflow-x-auto rounded-t-lg">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Author</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Profession</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.author}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.date}</td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.profession}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
              <ol className="flex justify-end gap-1 text-xs font-medium">
                <li>
                  <a
                    href="#"
                    onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                  >
                    <span className="sr-only">Prev Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                {[...Array(totalPages)].map((_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      onClick={() => handlePageChange(index + 1)}
                      className={`block size-8 rounded border ${currentPage === index + 1 ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-100 bg-white text-gray-900'} text-center leading-8`}
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href="#"
                    onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                  >
                    <span className="sr-only">Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* New Row 2 */}
    <div className="bg-white p-4 border border-zinc-700 rounded shadow-md">
    {/*
      Heads up! 👋
      This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
    */}

    <div className="overflow-x-auto overflow-y-auto max-h-[200px]"> {/* Added overflow classes and max height */}
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Reviewer</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Paper</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.reviewer}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.date}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.paper}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                  <button
                    className="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative"
                    title="Delete Product"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        
      </div>
    </div>
    {/* for button */}
    <div>
        {/* Base */}

<a
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-7 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="#"
>
  submit
</a>

{/* Border */}

<a
  className="inline-block rounded border ml-3 border-indigo-600 px-7 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
  href="#"
>
  Delete
</a>
    </div>
  </div>

  </div>
  );
};

export default PaperManagement;
