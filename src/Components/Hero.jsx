import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import subin from '../assets/subin.jpg'; // Default template background image
import grace from '../assets/grace.png';
import dsuDefault from '../assets/dsu.png'; // Default dsu image
import flaguk from '../assets/flaguk.jpg'; // Default flag image
import { MdOutlinePhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState('');
    const [flagFile, setFlagFile] = useState(null);
    const [templateFile, setTemplateFile] = useState(null);
    const [dsuFile, setDsuFile] = useState(null);
    const [course, setCourse] = useState(''); // State for course added
    const [dsuURL, setDsuURL] = useState('');
    const templateRef = useRef(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            setPhotoURL(URL.createObjectURL(file));
        }
    };

    const handleFlagChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFlagFile(file);
        }
    };

    const handleTemplateChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setTemplateFile(file);
        }
    };

    const handleDsuChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setDsuFile(file);
            setDsuURL(URL.createObjectURL(file));
        }
    };

    const handleDownload = () => {
        const templateNode = templateRef.current;
        html2canvas(templateNode).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'generated_template.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    return (
        <div className="text-center mt-2">
            <h1 className="text-3xl mb-3">Generate Your Template</h1>
            <form onSubmit={(e) => e.preventDefault()} className="bg-slate-50 shadow-md w-full h-60 rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex flex-row items-center justify-center">
                    {/* Row 1: Name and Country */}
                    <div className="flex flex-col -mx-4 mr-8 mb-4">
                        <div className="w-full px-4 mb-4 md:mb-0">
                            <label htmlFor="name" className="text-gray-700 flex justify-start text-sm font-bold mb-2">Name:</label>
                            <input
                                placeholder="Enter name here"
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="w-full mt-2 px-4">
                            <label htmlFor="country" className="text-gray-700 flex justify-start text-sm font-bold mb-2">Country:</label>
                            <input
                                placeholder="Enter country here"
                                type="text"
                                id="country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    {/* Row 2: Photo and Flag */}
                    <div className="flex flex-col -mx-4 ml-10 mb-4">
                        <div className="w-full px-4 mb-4 md:mb-0">
                            <label htmlFor="photo" className="flex justify-start text-gray-700 text-sm font-bold mb-2">Photo:</label>
                            <input
                                type="file"
                                id="photo"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                required
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="w-full mt-2 px-4 mb-4 md:mb-0">
                            <label htmlFor="flag" className="flex justify-start text-gray-700 text-sm font-bold mb-2">Flag:</label>
                            <input
                                type="file"
                                id="flag"
                                accept="image/*"
                                onChange={handleFlagChange}
                                required
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    {/* Row 3: Template and DSU */}
                    <div className="flex flex-col -mx-4 ml-14 mb-4">
                        <div className="w-full px-4 mb-4 md:mb-0">
                            <label htmlFor="template" className="flex justify-start text-gray-700 text-sm font-bold mb-2">Template:</label>
                            <input
                                type="file"
                                id="template"
                                accept="image/*"
                                onChange={handleTemplateChange}
                                required
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="w-full mt-2 px-4 mb-4 md:mb-0">
                            <label htmlFor="dsu" className="flex justify-start text-gray-700 text-sm font-bold mb-2">DSU:</label>
                            <input
                                type="file"
                                id="dsu"
                                accept="image/*"
                                onChange={handleDsuChange}
                                required
                                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 4: Download Button */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={handleDownload}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Download Template
                    </button>
                </div>
            </form>

            <div id="template" ref={templateRef} className="relative border-2 border-gray-100 mx-auto mt-8" style={{ width: '650px', height: '600px' }}>
                <img
                    src={templateFile ? URL.createObjectURL(templateFile) : subin} // Use uploaded template file if available, otherwise default template
                    alt="Template Background"
                    className="absolute w-full h-full top-0 left-0 object-cover"
                />
                <div className="absolute top-9 left-4">
                    <img src={grace} alt="grace" className="w-48 h-16" />
                </div>
                <div className="absolute top-9 right-4">
                    <img src={dsuFile ? URL.createObjectURL(dsuFile) : dsuDefault} alt="dsu" className="w-44 h-16" />
                </div>
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-blue-700 font-bold text-3xl">CONGRATULATIONS</h1>
                </div>
                <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 flex items-center">
                    {photoURL && (
                        <img
                            src={photoURL}
                            alt="Uploaded"
                            className="w-48 h-48 rounded-full border-spacing-20 border-8 border-blue-200"
                        />
                    )}
                    {flagFile && (
                        <img
                            src={URL.createObjectURL(flagFile)}
                            alt="Flag"
                            className="w-36 h-20 ml-4 absolute -right-44 top-1/3 transform -translate-y-1/2"
                        />
                    )}
                </div>
                <div className="absolute flex flex-col items-center w-full top-[73%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-2xl w-1/3 text-center rounded-md bg-blue-200 font-bold uppercase text-blue-800">{name}</h2>
                    <h2 className="mt-2 text-blue-700 font-bold text-2xl">on your {country} Visa Granted</h2>
                    <div className="flex">
                        <h2 className="text-2xl font-bold text-blue-700 uppercase">Course <span style={{ fontSize: '2rem' }}>:</span></h2>
                        <p className="text-2xl ml-3 text-blue-950">Msc global health care management</p>
                    </div>
                    <p className="text-blue-700">www.graceintlgroup.com</p>
                </div>
                <div className="absolute flex items-center justify-center w-full h-14 bottom-0 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500">
                    <h1 className="text-white text-center flex items-center space-x-2">
                        <IoLocationSharp /> <span>Amartpath, Shine Resunga Bank Building</span> <MdOutlinePhone /> <span>071-532276, 9857088115</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
