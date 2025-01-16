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
                            <td className="px-4 py-3 h-full flex flex-col justify-center items-center text-sm align-top">
                                <div className="flex flex-col flex-wrap gap-2">
                                    {project.prn.map((prn, idx) => (
                                        <span key={idx} className="text-gray-700 inline-block">
                                            {prn}
                                        </span>
                                    ))}
                                </div>
                            </td>
                            <td className="px-4 py-3 text-sm align-top">
                                <div className="flex flex-col flex-wrap gap-2">
                                    {project.students.map((student, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            {student}
                                        </span>
                                    ))}
                                </div>
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
