import React, { useState, useRef, useEffect } from 'react';
import LogoutBTN from '../../auth/logoutBTN';
import jsQR from 'jsqr';
import Navbar from '../../Home/Navbar/Navbar';
import './user.css';
import code from './code.png'


function QRScanner() {
    const [result, setResult] = useState('');
    const [scanning, setScanning] = useState(false);
    const videoRef = useRef();

    useEffect(() => {
        if (scanning) {
            const interval = setInterval(() => {
                scanQRCode();
            }, 100); // Scan every 100 milliseconds
            return () => clearInterval(interval);
        }
    }, [scanning]);

    const startScanner = () => {
        setScanning(true);
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(stream => {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            })
            .catch(err => console.error('Error accessing camera:', err));
    };

    const stopScanner = () => {
        setScanning(false);
        if (videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    const scanQRCode = () => {
        const video = videoRef.current;
        if (video.videoWidth === 0 || video.videoHeight === 0) {
            return;
        }

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
        if (code) {
            setResult(code.data);
            stopScanner();
        }
    };

    return (
        <div>
            {!scanning ? (
                <button onClick={startScanner} className='ScanMe'><img src={code} alt="" /> SCAN TICKET QR</button>
            ) : (
                <div>
                    <video ref={videoRef}></video>
                </div>
            )}
            {result && (
                <div>
                    <p>Result: {result}</p>
                    <button onClick={() => setResult('')}>Scan Again</button>
                </div>
            )}
        </div>
    );
}

function User() {
    return (
        <div className='CNDT'>
             <Navbar flag={false} />
             <div className="user-content tpad30">

        </div>
        </div>
    );
}

export default User;
