// components/GoogleMap.js
"use client";

export default function GoogleMap() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.029453085378!2d85.3239603147132!3d27.717245982792853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzU3LjkiTiA4NcKwMTknMjguMyJF!5e0!3m2!1sen!2snp!4v1631250834732!5m2!1sen!2snp"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
