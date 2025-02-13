

const DoctorDetails = () => {
    return (
        <div className="mb-5">

            <div className="p-7 my-2">
                <div className="join grid grid-cols-4">
                    <button className="hover:bg-red-500 btn btn-outline">OverView</button>
                    <button className="hover:bg-red-500 btn btn-outline">Location</button>
                    <button className="hover:bg-red-500 btn btn-outline">Reviews</button>
                    <button className="hover:bg-red-500 btn btn-outline">Business Hours</button>
                </div>

                <div className="my-5 bg-slate-100 p-3">
                    <h1 className="text-2xl font-bold ">About</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat dignissimos aperiam illo mollitia, repellendus ipsam dicta recusandae est quis assumenda at possimus ipsa animi iusto error aut. Hic molestias temporibus possimus alias suscipit rem, exercitationem recusandae modi nihil cum accusantium non asperiores tempore officia porro libero culpa neque enim.
                    </p>
                </div>
                <div className="flex">
                    <div className="w-5/12 p-3 bg-slate-100">
                        <div>
                            <h2 className="text-2xl font-bold">Education</h2>
                            <div className="p-7">
                                <div>
                                    <h1 className="text-xl"> American Dental Medical University</h1>
                                    <p> BDS</p>
                                    <p>1998 - 2003</p>
                                </div>
                                <div>
                                    <h1 className="text-xl">  American Dental Medical University</h1>
                                    <p>MDS</p>
                                    <p> 2003 - 2005</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Work & Experience</h2>
                            <div className="p-7">
                                <div>
                                    <h1 className="text-xl">Glowing Smiles Family Dental Clinic</h1>
                                    <p> 2010 - Present (5 years)</p>
                                </div>
                                <div>
                                    <h1 className="text-xl"> Comfort Care Dental Clinic</h1>
                                    <p>2007 - 2010 (3 years)</p>
                                </div>
                                <div>
                                    <h1 className="text-xl">  Dream Smile Dental Practice</h1>
                                    <p>2005 - 2007 (2 years)</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">Services</h2>
                            <div className="p-7">
                                <p>- Tooth cleaning</p>
                                <p>- Root Canal Therapy</p>
                                <p>- Implants</p>
                                <p>- Composite Bonding</p>
                                <p>- Fissure Sealants</p>
                                <p>- Surgical Extractions</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-7/12 p-3 ms-9 bg-red-100">
                        <div className="">
                            <h2 className="text-2xl font-bold bg-red-100">Awards</h2>
                            <div className="p-7">
                                <p>July 2019</p>
                                <div>
                                    <h1 className="text-xl"> Humanitarian Award</h1>
                                    <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. <br />
                                        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                                </div>
                                <p>March 2011</p>
                                <div>
                                    <h1 className="text-xl">Certificate for International Volunteer Service</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.
                                    </p>
                                    <p> Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                                <p>May 2008</p>
                                <div>
                                    <h1 className="text-xl">The Dental Professional of The Year Award</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus.</p>
                                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-8">
                            <h2 className="text-2xl font-bold"> Specializations</h2>
                            <div className="p-7">
                                <p>- Children Care</p>
                                <p>- Dental Care</p>
                                <p>- Oral and Maxillofacial Surgery</p>
                                <p>- Orthodontist</p>
                                <p>- Periodontist</p>
                                <p>- Prosthodontics</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DoctorDetails;