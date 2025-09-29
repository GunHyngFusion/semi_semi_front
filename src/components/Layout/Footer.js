const Footer = () => {
  return (
    <footer className="bg-[#8B4513] bg-opacity-80 shadow-md text-white font-serif">
      {/* bg-[#8B4513]은 나무 느낌의 갈색 배경색입니다. */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-center md:text-left mb-2 md:mb-0">
          <p className="font-semibold text-black">© 2025 시흥시 도서관. All rights reserved.</p>
          <p className="text-black">문의: library@siheung.go.kr | 전화: 031-123-4567</p>
        </div>
        <div className="text-center md:text-right">
          <p>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
              한국어
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
              English
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;