const DownloadButton = () => {
  return (
    <a
      className="block px-8 py-3 w-[200px] text-center bg-[#dc6b24] hover:bg-transparent border border-[#dc6b24]  font-mono text-white rounded-xl cursor-pointer"
      download={true}
      href="/public/Resume.pdf"
    >
      Download CV
    </a>
  );
};

export default DownloadButton;
