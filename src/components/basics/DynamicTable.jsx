'use client';

import React, { useState, useEffect } from 'react';

export default function DynamicTable() {
  const [data, setData] = useState([]); // Table data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [newEntry, setNewEntry] = useState({
    name: '',
    code: '',
    link: '',
  }); // Form input state

  // Fetch initial data from data.json
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prev) => ({ ...prev, [name]: value }));
  };

  // Add new entry and update the file via API
  const addNewEntry = async (e) => {
    e.preventDefault();

    if (!newEntry.name || !newEntry.code || !newEntry.link) {
      alert('All fields are required!');
      return;
    }

    const newRow = { ...newEntry};

    // Optimistic update to UI
    setData((prev) => [...prev, newRow]);

    try {
      const response = await fetch('/api/updateData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRow),
      });

      if (!response.ok) {
        throw new Error('Failed to update the server file');
      }

      alert('Data updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Error updating data on the server');
    }

    // Reset the form and close the modal
    setNewEntry({ name: '', code: '', link: '' });
    setIsModalOpen(false);
  };

  // Close modal without saving
  const closeModal = () => {
    setNewEntry({ name: '', code: '', link: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dynamic Table with Modal</h1>

      {/* Create Icon */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mb-4"
      >
        <span className="mr-2">➕</span> Create New Entry
      </button>

      {/* Table */}
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Group No.</th> {/* Column Number */}
            <th className="border border-gray-300 px-4 py-2">Name of Project</th>
            <th className="border border-gray-300 px-4 py-2">Code</th>
            <th className="border border-gray-300 px-4 py-2">Link of Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td> {/* Column Number */}
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.code}</td>
              <td className="border border-gray-300 px-4 py-2">{item.link}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-1/3 p-4 rounded-md shadow-lg">
            <h2 className="text-lg font-bold mb-4">Add New Entry</h2>
            <form onSubmit={addNewEntry} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newEntry.name}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
              <input
                type="text"
                name="code"
                placeholder="Code"
                value={newEntry.code}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
              <input
                type="link"
                name="link"
                placeholder="Link"
                value={newEntry.link}
                onChange={handleInputChange}
                className="border border-gray-300 px-4 py-2 rounded-md"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
