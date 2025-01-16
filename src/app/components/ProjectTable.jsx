export default function ProjectTable({ projects }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-blue-100 text-blue-700">
                        <th className="px-4 py-3 text-left text-sm font-semibold">Group No.</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">PRN:</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Students</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Project Name</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Code Link</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">PPT Link</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project, index) => (
                        <tr
                            key={project.id}
                            className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                            <td className="px-4 py-3 text-sm">{project.group}</td>
                            <td className="px-4 py-3 text-sm">
                                {project.prn.map((prn, idx) => (
                                    <div key={idx} className="text-gray-700">
                                        {prn}
                                    </div>
                                ))}
                            </td>
                            <td className="px-4 py-3 text-sm">
                                {project.students.map((student, idx) => (
                                    <div key={idx} className="text-gray-700">
                                        {student}
                                    </div>
                                ))}
                            </td>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">{project.name}</td>
                            <td className="px-4 py-3 text-sm">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View Code
                                </a>
                            </td>
                            <td className="px-4 py-3 text-sm">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    View PPT
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
