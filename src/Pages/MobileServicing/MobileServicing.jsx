import React, { useEffect, useState } from 'react';

const MobileServicing = () => {
    const [locations, setLocations] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedTown, setSelectedTown] = useState('');

    const handleDivisionChange = (e) => {
        setSelectedDivision(e.target.value);
        setSelectedDistrict('');
    }

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    }
    const handleTownChange = (e) => {
        setSelectedTown(e.target.value);
    }
    console.log(selectedDivision, selectedDistrict, selectedTown)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('locationData.json');
                const data = await response.json();
                setLocations(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className='flex justify-center'>
                <div className="w-2/3 bg-black stats stats-vertical sm:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-title uppercase text-white font-extrabold text-center my-4">Division</div>
                        <select value={selectedDivision} onChange={handleDivisionChange} className="p-2 border rounded">
                            <option value="">Select Division</option>
                            {locations?.divisions?.map(division => (
                                <option key={division.name} value={division.name}>{division.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="stat">
                        <div className="stat-title uppercase text-white font-extrabold text-center my-4">District</div>
                        <select value={selectedDistrict} onChange={handleDistrictChange} className="p-2 border rounded">
                            <option value="">Select District</option>
                            {selectedDivision && locations?.divisions?.find(div => div.name === selectedDivision)?.districts?.map(district => (
                                <option key={district.name} value={district.name}>{district.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="stat">
                        <div className="stat-title uppercase text-white font-extrabold text-center my-4">Town</div>
                        <select onChange={handleTownChange} className="p-2 border rounded">
                            <option value="">Select Town</option>
                            {selectedDistrict && locations?.divisions?.find(div => div.name === selectedDivision).districts.find(dis => dis.name === selectedDistrict).towns.map((town, index) => (
                                <option key={index} value={town}>{town}</option>
                            ))}
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MobileServicing;