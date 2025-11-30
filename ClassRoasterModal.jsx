// src/components/Modals/ClassRosterModal.jsx

import React from 'react';
import { INITIAL_CLASSES } from '../../utils/mockData.js';

export const ClassRosterModal = ({ selectedClass, students, onClose }) => {
    const classInfo = INITIAL_CLASSES.find(cls => cls.id === selectedClass.id) || {};
    const studentsInClass = students.filter(student => student.classId === selectedClass.id);

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
            <div className="bg-white text-gray-900 rounded-xl shadow-2xl w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto border border-cyan-500">
                <div className="flex justify-between items-center mb-6 border-b border-cyan-500 pb-3">
                    <h2 className="text-2xl font-bold text-cyan-600">Class Roster: {classInfo.name} ({classInfo.section})</h2>
                    <span className="px-3 py-1 text-sm font-semibold rounded-full bg-cyan-100 text-cyan-800">Total Students: {studentsInClass.length}</span>
                </div>
                
                <div className="space-y-4">
                    {studentsInClass.length === 0 ? (
                        <div className="text-center p-6 text-gray-600 bg-gray-50 rounded-lg border border-gray-200">No students currently assigned to this class.</div>
                    ) : (
                        <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden border border-gray-300">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Student ID</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Enrollment Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {studentsInClass.map((student) => (
                                        <tr key={student.id} className="hover:bg-cyan-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{student.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                student.status === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                                                }`}>
                                                {student.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{student.enrollmentDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="pt-6 flex justify-end space-x-3 border-t border-gray-300 mt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition"
                    >
                        Close Roster
                    </button>
                </div>
            </div>
        </div>
    );
};
