import React from 'react'

function ReviewInvitetion() {
  return (
    <div className='w-full h-full border border-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded bg-slate-50'>
<div className='flex items-center justify-center text-3xl m-2'>Review Details</div>
  <div className='mt-6 p-4'>
    <form>
    <div className='m-2'>
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
          <div className='m-2'>
              <label
                htmlFor="toDate"
                className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700">Due Date for Review</span>
                <input
                  type="date"
                  id="toDate"
                  name="toDate"
                 
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  required
                />
              </label>
            </div>
            <div className='m-4'>
            Thank you for your willingness to serve as a reviewer. Peer review is one of the most important activities of our Society, and your help is appreciated. Written comments are usually the most helpful part of a review. Please provide comments on the second page or on separate sheets. The grading section below is intended to help identify key points for written comments, and also to allow comparisons among different reviewers. A good paper should have a high overall score, but does not have to score well in all aspects to be acceptable. For example, a concise, critical review paper is a valuable publication, although it might have little intrinsic originality. A paper that introduces important new concepts might be valuable even with limited experimental work. <br /> regards
            </div>
            <div className="flex gap-4 m-2">
  <div className="flex-1 m-2">
    <label
      htmlFor="name"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">Name</span>
      <input
        type="text"
        id="name"
        name="name"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
  <div className="flex-1 m-2">
    <label
      htmlFor="designation"
      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
    >
      <span className="text-xs font-medium text-gray-700">Designation</span>
      <input
        type="text"
        id="designation"
        name="designation"
        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        required
      />
    </label>
  </div>
</div>

<div className='flex items-center justify-center '>
<a
  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-7 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="#"
>
  Send
</a>
</div>


    </form>
  </div>
    </div>
  )
}

export default ReviewInvitetion