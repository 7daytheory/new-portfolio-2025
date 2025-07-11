import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import apiLogo from '../../assets/api-logo.png'
import pdfLogo from '../../assets/pdf-logo.png'
import MyResume from '../../assets/resumeWeb.pdf'
import { Fade } from "react-awesome-reveal";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import RequestKey from '../RequestKey/RequestKey';
import { resume } from '../../content';

    const Resume = () => {
        const wrapRef = useRef(null);
        const [wrapWidth, setWrapWidth] = useState(0);
        const [showRequestForm, setShowRequestForm] = useState(false);
    
        const updateDimensions = () => {
            if (wrapRef.current) {
                setWrapWidth(wrapRef.current.offsetWidth);
            }
        };
    
    useEffect(() => {
        const wrapElement = wrapRef.current;

        const resizeObserver = new ResizeObserver(() => {
            updateDimensions();
        });

        if (wrapElement) resizeObserver.observe(wrapElement);

        updateDimensions();
    }, []);

    // const handleApiClick = (e) => {
    //     e.preventDefault();
    //     setShowRequestForm(!showRequestForm);
    // };

    const { resumeHeader, resumeQuestion, resumeText, resumePDF, resumeDownload } = resume;

    return (
    <div id="resume" className="relative lg:w-[80%] sm:w-[100%] mx-auto p-4 text-center p-8">
        <Fade duration={3500}>
            <div className="text-slate-800 text-[3em] absolute top-[-22px] font-bold">{resumeHeader} <FontAwesomeIcon icon={faArrowDown} /></div>
        </Fade>
        <Fade direction='top' duration={1000}>
            <h5 className="mb-2 mt-8 text-3xl font-bold text-red-800">{resumeQuestion}</h5>
        </Fade>
        <Fade direction='bottom' duration={2000}>
            {/* <p className="mb-5 text-base sm:text-lg text-slate-800">You can download a PDF version or you can request an API key and receive it with a POST request.</p> */}
            <p className="mb-5 text-base sm:text-lg text-slate-800">{resumeText}</p>  
            <p> </p>  
        </Fade>
        <div className="m-auto items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mb-2">
            <div id="btnWidth" ref={wrapRef} className="md:inline-flex md:space-x-4">
            <Fade direction='left' cascade triggerOnce>
            {/* <a onClick={handleApiClick} className="w-full inline mb-[25px] sm:w-auto cursor-pointer bg-slate-800 hover:bg-slate-700 space-x-4 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg shadow-[0px_0px_5px_0px_rgba(255,255,255,0.25)] inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <img 
                    src={apiLogo}
                    alt="Api Logo"
                    className="me-3"
                    style={{ width: '100px', height: 'auto'}} 
                />
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Request my Resume</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">Via an API</div>
                </div>
            </a> */}
            <a href={MyResume} id="pdfResume" download="Lowe, Matthew Resume" className="w-full inline sm:w-auto bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg shadow-[0px_0px_5px_0px_rgba(255,255,255,0.25)] inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <img
                    src={pdfLogo} 
                    alt="Pdf Logo" 
                    className="me-3" 
                    style={{ width: 'auto', height: '100px' }} 
                />
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">{resumeDownload}</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">{resumePDF}</div>
                </div>
            </a>
            </Fade>
            </div>
        </div>
        {showRequestForm && (
                <RequestKey
                    wrapWidth={wrapWidth}
                    closeForm={() => setShowRequestForm(false)}
                />
            )}
    </div>
      );
    }

export default Resume