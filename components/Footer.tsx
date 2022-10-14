export const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-[#1A1C1C] divide-y transition-all duration-300 font-nanum dark:text-gray-300 mt-auto">
      <div className="container_small py-[2vw]">
        <div className="flex justify-between items-center">
          <span>Get connected with me on social networks:</span>
          <div>
            <i className="fa-brands fa-github footer_icon" onClick={() => window.open('https://github.com/Mangpha', '_blank')}></i>
            <i className="fa-brands fa-instagram footer_icon" onClick={() => window.open('https://www.instagram.com/mangph4/', '_blank')}></i>
            <i className="fa-brands fa-discord footer_icon" onClick={() => window.open('https://discordapp.com/users/340513887440994305', '_blank')}></i>
            <i className="fa-brands fa-youtube footer_icon" onClick={() => window.open('https://www.youtube.com/channel/UCbPAqwgV8pgJH60kam9PZKA', '_blank')}></i>
          </div>
        </div>
      </div>
      <div className="container_small py-[1vw] flex justify-center">
        <p className="text-sm">© 2022 Mangpha. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
