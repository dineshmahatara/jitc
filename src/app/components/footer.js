// components/Footer.js
"use client";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm md:text-base">
            <p className="font-semibold">Jhimruk Innovative Technology Center</p>
            <p>Address: Jhimruk Rural Municipality, Pyuthan, Nepal</p>
          </div>
          <div className="text-sm md:text-base space-y-1">
            <p>Email: <a href="mailto:jhimrukitc.com.np" className="hover:underline">jhimrukitc.com.np</a></p>
            <p>Website: <a href="https://jitc.com.np" className="hover:underline">jitc.com.np</a></p>
            <p>Phone: <a href="tel:+9845830011" className="hover:underline">9845830011</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
