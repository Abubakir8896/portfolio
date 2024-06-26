const Services = () => {
  return (
    <div className="services-page min-h-screen bg-[#0F0F0F] p-8 lg:p-12">
      <h1 className="text-white text-[38px] border-b font-semibold inline-block border-[#dc6b24] mb-20">
        My{" "}
        <span>
          services <i className="fa-solid fa-right-long text-[24px]"></i>
        </span>
      </h1>

      <ul className="cards grid md:grid-cols-2 xl:grid-cols-3  gap-4">
        <li className="service-card h-[350px] py-8 px-4 flex flex-col justify-center items-center bg-[#27374D] hover:bg-[#19376D] transition-all shadow-lg rounded-2xl">
          <div className="card-image mb-6 text-[28px] w-[60px] h-[60px] text-yellow-500 bg-[#DDE6ED] rounded-md flex items-center justify-center">
            <i className="fa-solid fa-display"></i>
          </div>
          <div className="card-body flex flex-col items-center">
            <h3 className=" font-bold text-[22px] mb-3">FrontEnd</h3>
            <p className=" text-center px-2">
              I can create beautiful and fully interactive websites for your
              company
            </p>
          </div>
        </li>
        <li className="service-card h-[350px] py-8 px-4 flex flex-col justify-center items-center bg-[#27374D] hover:bg-[#19376D] transition-all shadow-lg rounded-2xl">
          <div className="card-image mb-6 text-[28px] w-[60px] h-[60px] text-yellow-500 bg-[#DDE6ED] rounded-md flex items-center justify-center">
            <i className="fa-solid fa-server"></i>
          </div>
          <div className="card-body flex flex-col items-center">
            <h3 className=" font-bold text-[22px] mb-3">BackEnd</h3>
            <p className=" text-center px-2">
              Let&apos;s build real time application services with multilanguage
              and microservices.
            </p>
          </div>
        </li>
        <li className="service-card h-[350px] py-8 px-4 flex flex-col justify-center items-center bg-[#27374D] hover:bg-[#19376D] transition-all shadow-lg rounded-2xl">
          <div className="card-image mb-6 text-[28px] w-[60px] h-[60px] text-yellow-500 bg-[#DDE6ED] rounded-md flex items-center justify-center">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="card-body flex flex-col items-center">
            <h3 className=" font-bold text-[22px] mb-3">FullStack</h3>
            <p className=" text-center px-2">
              If you want both, let&apos;s do it together!
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Services;
