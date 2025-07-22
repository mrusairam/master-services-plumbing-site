import React from "react";

export default function ModalForm({ isOpen, onClose }) {
  return (
    <>
      {/* Blurred Transparent Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-white/10 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Modal Content */}
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md bg-white rounded-lg shadow-lg transition-all duration-500 ${
          isOpen ? "translate-y-20 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-blue-700">Book Appointment</h2>
            <button onClick={onClose} className="text-gray-500 cursor-pointer hover:text-red-500 text-xl">
              &times;
            </button>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" placeholder="Your name" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <input type="text" placeholder="Plumbing, AC, etc." className="w-full px-4 py-2 border rounded-md" />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r cursor-pointer from-yellow-400 to-orange-500 text-white font-semibold rounded-md shadow hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
