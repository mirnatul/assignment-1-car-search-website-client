import React from 'react';
import { SlSpeedometer, SlEnergy } from 'react-icons/sl'
import { BsFuelPump } from 'react-icons/bs'
import { FaLock, FaUnlock, FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa'


const CarCard = ({ eachCar }) => {
    return (
        <div className={`card w-full shadow-xl bg-gradient-to-br ${eachCar?.bg}`}>
            <div className='flex text-white justify-between px-6 pt-6'>
                <FaLongArrowAltLeft size={30}></FaLongArrowAltLeft>
                <h2 className='text-white font-semibold text-xl'>Car Details</h2>
                {/* <p className=''>sign</p> */}
            </div>
            <figure className="px-10 pt-6">
                <img src={`${eachCar?.image}`} />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{eachCar?.name}</h2>
                <p className='text-sm'>{eachCar?.description}<span className='font-bold underline'>More</span></p>
                <h3 className='text-lg font-semibold'>Overview</h3>
                <div className='grid grid-cols-3 gap-3 text-black'>
                    <div className='bg-white py-2 px-3 rounded-md'>
                        <SlSpeedometer size={24}></SlSpeedometer>
                        <p className='font-semibold'>Speed</p>
                        <p><span className='text-xl font-bold'>{eachCar?.speed}</span>km/h</p>
                    </div>
                    <div className='bg-white py-2 px-3 rounded-md'>
                        <SlEnergy size={24}></SlEnergy>
                        <p className='font-semibold'>Energy</p>
                        <p><span className='text-xl font-bold'>{eachCar?.energy}</span>cc</p>
                    </div>
                    <div className='bg-white py-2 px-3 rounded-md'>
                        <BsFuelPump size={24}></BsFuelPump>
                        <p className='font-semibold'>Fuel</p>
                        <p className='font-lg'>{eachCar.fuel}</p>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-slate-900 py-2 px-2 mt-2 rounded-full'>
                    <div className='bg-green-500 p-3 rounded-full'><FaLock color='black'></FaLock></div>
                    <div className='flex items-center gap-4'>
                        <p>Book Now</p><FaLongArrowAltRight size={24}></FaLongArrowAltRight>
                    </div>
                    <div className='bg-green-300 p-3 rounded-full'><FaUnlock color='black'></FaUnlock></div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;