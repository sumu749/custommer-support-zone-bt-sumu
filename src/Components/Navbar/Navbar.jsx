export default function Navbar() {
    return (
        <header className="navbar shadow-sm p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">CS — Ticket System</h1>
                <div className="flex items-center space-x-8">
                    <nav className="max-w-400">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Changelog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Download
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-gray-300">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button className="btn bg-linear-to-r from-indigo-500 to-violet-600 text-white font-bold py-2 px-4 rounded">
                        <i className="fa-solid fa-plus mr-2"></i> New Ticket
                    </button>
                </div>
            </div>
        </header>
    );
}
