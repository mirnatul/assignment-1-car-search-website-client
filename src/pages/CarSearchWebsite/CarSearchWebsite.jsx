import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const CarSearchWebsite = () => {
    const [value, setValue] = useState('')
    const [carData, setCarData] = useState([])
    const [searchedCar, setSearchedCar] = useState({})
    const [searchedCarId, setSearchedCarId] = useState(0)
    const [searchBtn, setSearchBtn] = useState(false)

    // handle pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(6)

    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    useEffect(() => {
        fetch('car-details.json')
            .then(res => res.json())
            .then(data => setCarData(data))
    }, [])

    const onSearch = (searchTerm) => {
        // our api to fetch the search result
        // console.log(searchTerm);
        setValue(searchTerm)
    }

    const handleShowSearch = (searchedId) => {
        setSearchedCar(carData.find(singleCar => singleCar.id === searchedId))
        setSearchBtn(!searchBtn)
        setValue('')
    }

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const currentPost = carData.slice(firstPostIndex, lastPostIndex)
    // console.log(searchedCarId);
    return (
        <div>
            <div className='max-w-7xl mx-auto relative'>
                {/* headline */}
                <div className='bg-slate-700 flex justify-between px-10 items-center'>
                    <h2 className='py-8 text-4xl font-semibold text-center text-white font-openSans'>Car Search Website</h2>
                    <div>
                        <div className='flex gap-1'>
                            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search by Car Name" className="input input-bordered w-full max-w-xm bg-slate-200" />
                            <button onClick={() => handleShowSearch(searchedCarId)} className='btn'>{searchBtn ? 'Show All Car' : 'Search'}</button>
                        </div>
                    </div>
                </div>
                <div className='text-slate-900 absolute right-0 z-10 mr-10 bg-white w-[300px] p-3'>
                    {
                        carData.filter(item => {
                            const searchTerm = value.toLowerCase();
                            const carName = item.name.toLowerCase();
                            return searchTerm && carName.startsWith(searchTerm) && carName !== searchTerm
                        }).slice(0, 10)
                            .map((eachCar, index) => <div onClick={() => {
                                onSearch(eachCar.name)
                                setSearchedCarId(eachCar.id)
                            }} className='py-1 hover:bg-slate-300 cursor-pointer' key={index}>
                                <p>{eachCar.name}</p>
                            </div>)
                    }
                </div>
                {/* car card demo */}
                <div className='grid lg:grid-cols-3 mt-6 gap-4 p-2'>
                    {!searchBtn ?
                        currentPost.map((eachCar, index) => <CarCard key={index} eachCar={eachCar}></CarCard>) :
                        <CarCard eachCar={searchedCar}></CarCard>
                    }
                </div>
                <div className='flex justify-center gap-3 mt-6 mb-10'>
                    <button onClick={() => setCurrentPage(currentPage - 1)} className='btn bg-slate-300'>Previous</button>
                    {
                        pages.map((page, index) => <button onClick={() => setCurrentPage(page)} className={`btn btn-warning hover:bg-orange-600 text-lg ${page === currentPage && 'bg-orange-600'}`}>{index + 1}</button>)
                    }
                    <button onClick={() => setCurrentPage(currentPage + 1)} className='btn bg-slate-300'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default CarSearchWebsite;