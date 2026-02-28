import FooterCopyWright from "@/components/footer/FooterCopyWright";
import FooterTop from "@/components/footer/FooterTop";
import { Globe, Headset, Mail, Map, MapPin, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 pt-10 pb-2 text-darkgray footer-bg dark:bg-[#181A1A]">
            <div className="container mx-auto">
                <FooterTop />
                {/* FOOTER GRID */}
                <div className="grid grid-cols-1   md:grid-cols-12  lg:grid-cols-12  gap-12    py-10 dark:text-off-white">
                    {/* Column 1 – Registered Office */}
                    <div className="md:col-span-4 lg:col-span-4">
                        <h3 className="hed-md font-bold mb-4 text-dark">Presso Media UK Limited</h3>
                        <div className="space-y-4 max-w-70">
                            <div className="flex gap-2 items-center justify-between">
                                <span className="bg-gray-200 dark:bg-[#383838] dark:text-white w-8 h-8 flex items-center justify-center rounded-full">
                                    <MapPin size={14} />
                                </span>
                                <p className="fs-xl flex-1  mt-1 dark:text-[#D1D1D1]">1 Knightsbridge Green, London, SW1X 7QA, United Kingdom</p>
                            </div>

                            <div className="flex gap-2 items-baseline justify-between">
                                <span className="bg-gray-200 dark:bg-[#383838] dark:text-white w-8 h-8 flex items-center justify-center rounded-full">
                                    <Mail size={14} />
                                </span>
                                <div className="fs-xl flex-1 mt-1 ">
                                    <a href="mailto:support@presshop.news" className="hover:text-pink dark:text-[#D1D1D1]" target="_blank">support@presshop.news</a>
                                </div>
                            </div>

                            <div className="flex gap-2 items-baseline justify-between">
                                <span className="bg-gray-200 dark:bg-[#383838] dark:text-white w-8 h-8 flex items-center justify-center rounded-full">
                                    <Globe size={14} />
                                </span>
                                <div className="fs-xl flex-1 mt-1 "><a href="http://www.presshop.news" target="_blank" className="hover:text-pink dark:text-[#D1D1D1]">www.presshop.news</a></div>
                            </div>
                        </div>
                    </div>
                    {/* Column 2 – Handy Tips */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="hed-md font-bold mb-4 text-dark">Quick Links</h3>
                        <ul className="space-y-3 fs-md dark:text-[#D1D1D1]">
                            <li><Link href="#" className=" fs-lg hover:text-pink">Home</Link></li>
                            <li><Link href="#" className=" fs-lg hover:text-pink">App</Link></li>
                            <li><Link href="#" className=" fs-lg hover:text-pink">FAQs</Link></li>
                            <li><Link href="#" className=" fs-lg hover:text-pink">Hub</Link></li>
                            <li><Link href="#" className=" fs-lg hover:text-pink">Blog</Link></li>
                            <li><Link href="#" className=" fs-lg hover:text-pink">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Column 3 – Quick Links */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <h3 className="hed-md font-bold mb-4 text-dark">Quick Access</h3>
                        <ul className="space-y-3 fs-md dark:text-[#D1D1D1]">
                            <li><a href="#" className=" fs-lg hover:text-pink">Terms and Conditions</a></li>
                            <li><a href="#" className=" fs-lg hover:text-pink">Editorial & Continent
                                Policy Guide</a></li>
                            <li><a href="#" className=" fs-lg hover:text-pink">Account Deletion Policy &
                                Data Retention Notice</a></li>
                            <li><a href="#" className=" fs-lg hover:text-pink">Privacy Policy</a></li>
                            <li><a href="#" className=" fs-lg hover:text-pink">Cookie Policy</a></li>
                        </ul>
                    </div>
                    {/* Column 4 – Quick Access */}
                    <div className="md:col-span-12 lg:col-span-4">
                        <h3 className="hed-md font-bold mb-4 text-dark">Disclaimer</h3>
                        <p className="fs-lg mb-2 dark:text-[#D1D1D1]">
                            If you have received this email in error please notify Presso Media UK Limited immediately. This message contains confidential information and is intended only for the individual named. If you are not the named addressee, you should not disseminate, distribute or copy this e-mail.
                        </p>
                        <h3 className="hed-md font-bold mb-2 text-center md:text-left text-dark">Download the PressHop App!</h3>
                        <Image src="/images/downladapp.png" alt="download" width={400} height={400}
                            className='h-20 w-auto m-auto lg:m-0 dark:invert' />
                    </div>
                </div>
                {/* Bottom Copy Right */}
                <FooterCopyWright />
            </div>
        </footer>
    );
}
