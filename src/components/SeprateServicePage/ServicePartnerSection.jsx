"use client";

import Image from "next/image";

export default function ServicePartnerSection() {
  const partnerLogos = [
    "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1",
  ].map((name) => `/images/clients/${name}.jpg`);

  // Duplicate the logos to create seamless loop
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="relative !max-w-7xl mx-auto py-16 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6">Why Trust Us</h2>

      <div className="slider-container">
        <div className="slider-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="slide">
              <div className="logo-container">
                <Image
                  src={logo}
                  alt={`Partner ${(index % partnerLogos.length) + 1}`}
                  width={180}
                  height={150}
                  className="logo-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .slider-track {
          display: flex;
          animation: scroll 10s linear infinite;
          width: calc(200px * ${duplicatedLogos.length});
        }

        .slide {
          flex: 0 0 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 10px;
        }

        .logo-container {
          padding: 20px;
          border-radius: 8px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .logo-image {
          object-fit: contain;
          filter: grayscale(100%) brightness(0.8);
          transition: filter 0.3s ease;
        }

        .logo-container:hover .logo-image {
          filter: grayscale(0%) brightness(1);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slider-track {
            animation-duration: 10s;
            width: calc(160px * ${duplicatedLogos.length});
          }
          
          .slide {
            flex: 0 0 160px;
          }
        }

        @media (max-width: 480px) {
          .slider-track {
            animation-duration: 10s;
            width: calc(140px * ${duplicatedLogos.length});
          }
          
          .slide {
            flex: 0 0 140px;
          }
        }
      `}</style>
    </div>
  );
}