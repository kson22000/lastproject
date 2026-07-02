import React from 'react'

function Contactus() {
  const Contact = [
    {
      to: "CALL US",
      for: "SPEAK TO ONE OF OUR AMBASSADORS",
      by: "+33 1 84 95 56 00",
      at: "MON-SAT 9AM-7PM",
    },
    {
      to: "CALL US",
      for: "SPEAK TO ONE OF OUR AMBASSADORS",
      by: "+33 1 84 95 56 00",
      at: "MON-SAT 9AM-7PM",
    },
    {
      to: "CALL US",
      for: "SPEAK TO ONE OF OUR AMBASSADORS",
      by: "+33 1 84 95 56 00",
      at: "MON-SAT 9AM-7PM",
    },
    {
      to: "CALL US",
      for: "SPEAK TO ONE OF OUR AMBASSADORS",
      by: "+33 1 84 95 56 00",
      at: "MON-SAT 9AM-7PM",
    },
  ];
  return (
    <div className='font-serif'>
      <h1 className='text-2xl mt-2 font-bold justify-center flex'>
        Client Service
      </h1>
      <div className='w-full h-auto border-xl grid grid-cols-2'>
        {Contact.map((value) => (
          <div className='col-span-1 w-full h-auto p-3'>
            <div className='h-auto w-full p-2 justify-center items-center flex-col flex'>
              <p className='text-sm text-black font-serif font-bold'>{value.to}</p>
              <div className='mt-5'>
              <p>FOR : {value.for}</p>
              <p>TEL : {value.by}</p>
              <p>AT : {value.at}</p>
              </div>
              <button
                type='button' className='w-full h-10 shadow-2xl shadow-black duration-500 bg-black hover:bg-gray-300 hover:text-black text-md mt-30 justify-center items-center flex text-white'>
                CALL
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contactus
