const Footer = () => {
    return (
        <div className="bg-gray-900 text-gray-100">
            <footer className="footer p-10">
                <div>
                    <h2 className="text-xl font-bold text-primary">Company</h2>
                    <p>Building solutions for a better tomorrow.</p>
                    <p className="mt-1">© 2024 All rights reserved.</p>
                </div>
                <div>
                    <span className="footer-title text-secondary">Quick Links</span>
                    <a className="link link-hover text-gray-300" href="#">
                        About Us
                    </a>
                    <a className="link link-hover text-gray-300" href="#">
                        Services
                    </a>
                    <a className="link link-hover text-gray-300" href="#">
                        Contact
                    </a>
                    <a className="link link-hover text-gray-300" href="#">
                        Blog
                    </a>
                </div>
                <div>
                    <span className="footer-title text-secondary">Contact</span>
                    <p className="text-gray-300">Email: support@example.com</p>
                    <p className="text-gray-300">Phone: +1 123-456-7890</p>
                    <p className="text-gray-300">Address: 123 Street, City</p>
                </div>
                <div>
                    <span className="footer-title text-secondary">Follow Us</span>
                    <div className="grid grid-flow-col gap-4 mt-2">
                        <a href="#" className="text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.46 6.003a8.94 8.94 0 0 1-2.6.713 4.523 4.523 0 0 0 1.988-2.496 8.952 8.952 0 0 1-2.844 1.088A4.507 4.507 0 0 0 16.13 4c-2.497 0-4.524 2.026-4.524 4.525 0 .354.04.698.116 1.028A12.8 12.8 0 0 1 3.1 4.9a4.49 4.49 0 0 0-.61 2.274c0 1.57.799 2.955 2.015 3.764a4.472 4.472 0 0 1-2.048-.565v.057c0 2.193 1.56 4.022 3.63 4.437a4.509 4.509 0 0 1-2.04.077c.574 1.79 2.242 3.093 4.215 3.13a9.026 9.026 0 0 1-5.592 1.927A9.15 9.15 0 0 1 2 18.698a12.77 12.77 0 0 0 6.92 2.03c8.304 0 12.847-6.872 12.847-12.847 0-.197-.004-.394-.013-.589a9.182 9.182 0 0 0 2.26-2.341z" />
                            </svg>
                        </a>
                        <a href="#" className="text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9.04 12.05l.003 3.933-4.126.002.005-6.983h2.315l.007 3.063 2.19.001-.007-3.064h4.146v1.84H11.2l-.003 3.117 3.263-.002-.004-6.955h-5.02v2.025zm-6.837 5.435h18.652v2.348H2.203z" />
                            </svg>
                        </a>
                        <a href="#" className="text-blue-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163C6.64 2.163 2.148 6.655 2.148 12.016 2.148 16.63 5.538 20.7 10.06 21.844c.734.136 1.004-.31 1.004-.692v-2.465c-4.03.889-4.877-1.94-4.877-1.94-.673-1.71-1.644-2.164-1.644-2.164-1.344-.916.104-.897.104-.897 1.489.104 2.277 1.527 2.277 1.527 1.32 2.264 3.464 1.61 4.31 1.23.132-.947.517-1.61.941-1.981-3.224-.369-6.602-1.605-6.602-7.142 0-1.577.561-2.873 1.482-3.885-.15-.37-.643-1.851.142-3.854 0 0 1.209-.387 3.96 1.477a13.715 13.715 0 0 1 7.203 0c2.752-1.864 3.96-1.477 3.96-1.477.785 2.003.292 3.484.143 3.854.922 1.012 1.482 2.308 1.482 3.885 0 5.554-3.384 6.766-6.612 7.131.53.457 1.007 1.356 1.007 2.732v4.048c0 .385.268.835 1.004.692 4.53-1.144 7.906-5.214 7.906-9.828 0-5.36-4.49-9.852-10.003-9.852z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
