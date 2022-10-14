import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

const Switcher = dynamic(() => import('./Switcher'), { ssr: false });

export const Header = () => {
  return (
    <header className="header_container base header_anim">
      <div className="px-[5vw]">
        <div className="flex flex-wrap mx-2 justify-between">
          <Link href="/">
            <svg width="200" height="50" viewBox="0 0 242.64 55.2" xmlns="http://www.w3.org/2000/svg">
              <g id="svgGroup" strokeLinecap="round" fillRule="evenodd" fontSize="9pt" stroke="#a2defa" strokeWidth="0.25mm" fill="#a2defa">
                <path
                  d="M 2.28 6.12 L 2.28 43.2 L 0 43.2 L 0 1.2 L 2.46 1.2 L 19.44 40.08 L 36.42 1.2 L 38.82 1.2 L 38.82 43.2 L 36.54 43.2 L 36.54 6.12 L 20.34 43.2 L 18.48 43.2 L 2.28 6.12 Z M 186.84 43.2 L 186.84 0 L 189.06 0 L 189.06 19.98 A 11.173 11.173 0 0 1 190.572 16.994 A 9.359 9.359 0 0 1 193.08 14.61 A 11.302 11.302 0 0 1 197.772 12.909 A 14.576 14.576 0 0 1 199.74 12.78 A 13.191 13.191 0 0 1 203.134 13.202 A 11.097 11.097 0 0 1 205.62 14.19 Q 208.2 15.6 209.7 18.6 A 12.947 12.947 0 0 1 210.725 21.547 Q 211.044 22.958 211.149 24.61 A 26.432 26.432 0 0 1 211.2 26.28 L 211.2 43.2 L 208.92 43.2 L 208.92 26.34 A 20.092 20.092 0 0 0 208.677 23.107 Q 208.393 21.37 207.779 19.98 A 9.135 9.135 0 0 0 206.43 17.79 Q 203.94 14.82 199.38 14.82 A 10.867 10.867 0 0 0 195.912 15.349 A 8.916 8.916 0 0 0 191.85 18.15 Q 189.06 21.48 189.06 27.9 L 189.06 43.2 L 186.84 43.2 Z M 138.6 20.94 L 138.66 13.2 L 140.76 13.2 L 140.76 36.6 Q 140.76 42.513 138.352 46.643 A 15.369 15.369 0 0 1 138.33 46.68 A 15.587 15.587 0 0 1 131.858 52.711 A 19.065 19.065 0 0 1 131.25 53.01 Q 127.087 54.971 121.265 55.176 A 39.295 39.295 0 0 1 119.88 55.2 L 119.58 53.16 Q 128.88 53.1 133.71 48.87 A 13.628 13.628 0 0 0 137.969 41.677 Q 138.54 39.364 138.54 36.6 L 138.54 35.1 L 138.72 35.16 Q 137.52 38.64 134.52 41.07 Q 131.52 43.5 126.48 43.62 Q 122.28 43.62 119.16 41.73 A 12.536 12.536 0 0 1 114.493 36.683 A 15.071 15.071 0 0 1 114.33 36.36 A 16.318 16.318 0 0 1 112.902 31.804 A 22.044 22.044 0 0 1 112.62 28.2 A 21.586 21.586 0 0 1 112.971 24.211 A 15.882 15.882 0 0 1 114.33 20.07 Q 116.04 16.62 119.16 14.7 Q 122.28 12.78 126.48 12.78 A 16.617 16.617 0 0 1 129.219 12.994 Q 130.776 13.255 132.075 13.831 A 10.18 10.18 0 0 1 132.27 13.92 A 12.532 12.532 0 0 1 134.849 15.517 A 10.686 10.686 0 0 1 136.26 16.89 Q 137.82 18.72 138.6 20.94 Z M 80.88 43.2 L 80.88 13.2 L 83.04 13.2 L 83.1 19.98 A 10.898 10.898 0 0 1 84.984 16.459 A 10.113 10.113 0 0 1 86.79 14.73 Q 89.161 12.959 92.894 12.796 A 17.653 17.653 0 0 1 93.66 12.78 Q 96.96 12.78 99.57 14.22 A 9.793 9.793 0 0 1 103.03 17.466 A 12.448 12.448 0 0 1 103.71 18.63 Q 105.24 21.6 105.24 26.16 L 105.24 43.2 L 103.02 43.2 L 103.02 26.28 A 19.629 19.629 0 0 0 102.771 23.047 Q 102.48 21.307 101.849 19.915 A 9.1 9.1 0 0 0 100.47 17.73 A 8.337 8.337 0 0 0 95.267 14.903 A 12.18 12.18 0 0 0 93.36 14.76 Q 88.68 14.76 85.89 18 Q 83.762 20.471 83.257 24.792 A 24.747 24.747 0 0 0 83.1 27.66 L 83.1 43.2 L 80.88 43.2 Z M 152.76 35.16 L 152.94 35.04 L 152.94 55.2 L 150.72 55.2 L 150.72 13.2 L 152.88 13.2 L 152.94 20.94 A 12.085 12.085 0 0 1 156.371 15.805 A 14.874 14.874 0 0 1 157.11 15.18 A 10.706 10.706 0 0 1 161.353 13.176 Q 163.026 12.78 165 12.78 A 15.397 15.397 0 0 1 169.006 13.282 A 12.8 12.8 0 0 1 172.29 14.67 A 12.776 12.776 0 0 1 177.166 19.983 A 15.214 15.214 0 0 1 177.18 20.01 A 15.74 15.74 0 0 1 178.587 24.299 A 21.744 21.744 0 0 1 178.92 28.2 Q 178.92 32.88 177.18 36.33 A 13.528 13.528 0 0 1 174.149 40.351 A 12.759 12.759 0 0 1 172.35 41.7 A 12.655 12.655 0 0 1 167.456 43.451 A 16.435 16.435 0 0 1 165.06 43.62 Q 160.2 43.62 157.05 41.19 Q 153.9 38.76 152.76 35.16 Z M 71.4 43.2 L 69.3 43.2 L 69.24 35.7 A 12.41 12.41 0 0 1 67.77 38.858 A 10.067 10.067 0 0 1 65.13 41.58 Q 62.379 43.508 58.207 43.614 A 19.288 19.288 0 0 1 57.72 43.62 A 18.271 18.271 0 0 1 55.246 43.462 Q 53.554 43.23 52.2 42.66 Q 49.92 41.7 48.69 39.87 A 7.15 7.15 0 0 1 47.58 36.999 A 9.512 9.512 0 0 1 47.46 35.46 A 8.082 8.082 0 0 1 48.003 32.446 A 7.358 7.358 0 0 1 50.31 29.4 A 10.559 10.559 0 0 1 52.865 27.926 Q 54.143 27.395 55.728 27.037 A 27.809 27.809 0 0 1 58.98 26.52 L 69.24 25.38 L 69.24 22.68 A 9.886 9.886 0 0 0 68.97 20.299 A 6.574 6.574 0 0 0 66.93 16.86 Q 64.62 14.82 60.48 14.82 Q 57.01 14.82 54.635 16.184 A 8.515 8.515 0 0 0 53.91 16.65 A 8.435 8.435 0 0 0 50.895 20.673 A 11.148 11.148 0 0 0 50.52 21.9 L 48.54 21.18 A 12.415 12.415 0 0 1 49.858 17.978 A 9.942 9.942 0 0 1 52.65 14.94 Q 55.68 12.78 60.42 12.78 A 17.201 17.201 0 0 1 63.594 13.055 Q 65.405 13.395 66.829 14.157 A 8.82 8.82 0 0 1 68.52 15.33 Q 71.4 17.88 71.4 22.44 L 71.4 43.2 Z M 242.64 43.2 L 240.54 43.2 L 240.48 35.7 A 12.41 12.41 0 0 1 239.01 38.858 A 10.067 10.067 0 0 1 236.37 41.58 Q 233.619 43.508 229.447 43.614 A 19.288 19.288 0 0 1 228.96 43.62 A 18.271 18.271 0 0 1 226.486 43.462 Q 224.794 43.23 223.44 42.66 Q 221.16 41.7 219.93 39.87 A 7.15 7.15 0 0 1 218.82 36.999 A 9.512 9.512 0 0 1 218.7 35.46 A 8.082 8.082 0 0 1 219.243 32.446 A 7.358 7.358 0 0 1 221.55 29.4 A 10.559 10.559 0 0 1 224.105 27.926 Q 225.383 27.395 226.968 27.037 A 27.809 27.809 0 0 1 230.22 26.52 L 240.48 25.38 L 240.48 22.68 A 9.886 9.886 0 0 0 240.21 20.299 A 6.574 6.574 0 0 0 238.17 16.86 Q 235.86 14.82 231.72 14.82 Q 228.25 14.82 225.875 16.184 A 8.515 8.515 0 0 0 225.15 16.65 A 8.435 8.435 0 0 0 222.135 20.673 A 11.148 11.148 0 0 0 221.76 21.9 L 219.78 21.18 A 12.415 12.415 0 0 1 221.098 17.978 A 9.942 9.942 0 0 1 223.89 14.94 Q 226.92 12.78 231.66 12.78 A 17.201 17.201 0 0 1 234.834 13.055 Q 236.645 13.395 238.069 14.157 A 8.82 8.82 0 0 1 239.76 15.33 Q 242.64 17.88 242.64 22.44 L 242.64 43.2 Z M 176.64 28.2 A 19.067 19.067 0 0 0 176.24 24.174 Q 175.668 21.529 174.282 19.533 A 11.298 11.298 0 0 0 173.4 18.42 A 10.704 10.704 0 0 0 166.236 14.891 A 14.93 14.93 0 0 0 164.76 14.82 A 12.965 12.965 0 0 0 161.522 15.208 A 10.357 10.357 0 0 0 158.52 16.5 A 11.206 11.206 0 0 0 154.598 20.81 A 13.431 13.431 0 0 0 154.41 21.18 A 14.096 14.096 0 0 0 153.183 25.102 A 18.953 18.953 0 0 0 152.94 28.2 A 18.191 18.191 0 0 0 153.27 31.745 A 13.694 13.694 0 0 0 154.44 35.22 A 11.984 11.984 0 0 0 156.882 38.572 A 11.058 11.058 0 0 0 158.58 39.9 A 10.713 10.713 0 0 0 163.046 41.475 A 13.628 13.628 0 0 0 164.76 41.58 A 13.367 13.367 0 0 0 168.611 41.052 A 10.303 10.303 0 0 0 173.43 37.98 A 12.113 12.113 0 0 0 176.09 32.875 Q 176.64 30.759 176.64 28.2 Z M 117.181 36.786 A 11.285 11.285 0 0 0 118.11 37.98 A 10.569 10.569 0 0 0 124.812 41.448 A 15.081 15.081 0 0 0 126.84 41.58 Q 130.32 41.58 132.96 39.9 A 11.113 11.113 0 0 0 136.784 35.746 A 13.425 13.425 0 0 0 137.07 35.19 A 14.492 14.492 0 0 0 138.35 30.926 A 18.901 18.901 0 0 0 138.54 28.2 Q 138.54 24.18 137.07 21.18 A 11.723 11.723 0 0 0 134.602 17.778 A 10.917 10.917 0 0 0 132.96 16.5 A 10.772 10.772 0 0 0 128.141 14.882 A 13.492 13.492 0 0 0 126.84 14.82 Q 121.32 14.82 118.11 18.45 A 12.317 12.317 0 0 0 115.4 23.759 Q 114.939 25.627 114.903 27.825 A 22.903 22.903 0 0 0 114.9 28.2 Q 114.9 33.409 117.181 36.786 Z M 69.24 29.46 L 69.24 27.36 L 58.92 28.5 A 25 25 0 0 0 56.429 28.867 Q 53.513 29.461 51.96 30.69 A 5.505 5.505 0 0 0 49.826 34.712 A 7.488 7.488 0 0 0 49.8 35.34 A 6.963 6.963 0 0 0 50.085 37.385 A 5.34 5.34 0 0 0 51.87 40.02 A 6.863 6.863 0 0 0 54.186 41.226 Q 55.712 41.7 57.72 41.7 A 14.611 14.611 0 0 0 60.666 41.418 A 10.587 10.587 0 0 0 63.96 40.17 Q 66.54 38.64 67.89 35.91 A 12.635 12.635 0 0 0 68.982 32.526 A 17.33 17.33 0 0 0 69.24 29.46 Z M 240.48 29.46 L 240.48 27.36 L 230.16 28.5 A 25 25 0 0 0 227.669 28.867 Q 224.753 29.461 223.2 30.69 A 5.505 5.505 0 0 0 221.066 34.712 A 7.488 7.488 0 0 0 221.04 35.34 A 6.963 6.963 0 0 0 221.325 37.385 A 5.34 5.34 0 0 0 223.11 40.02 A 6.863 6.863 0 0 0 225.426 41.226 Q 226.952 41.7 228.96 41.7 A 14.611 14.611 0 0 0 231.906 41.418 A 10.587 10.587 0 0 0 235.2 40.17 Q 237.78 38.64 239.13 35.91 A 12.635 12.635 0 0 0 240.222 32.526 A 17.33 17.33 0 0 0 240.48 29.46 Z"
                  vectorEffect="non-scaling-stroke"
                />
              </g>
            </svg>
          </Link>
          <div className="flex justify-between items-center">
            <Link href="/">
              <a className="header_text link link-underline link-underline-black pb-2">Home</a>
            </Link>
            <Link href="/blog">
              <a className="header_text link link-underline link-underline-black pb-2">Blog</a>
            </Link>
            <Link href="/about">
              <a className="header_text link link-underline link-underline-black pb-2">About</a>
            </Link>
            <Link href="/projects">
              <a className="header_text link link-underline link-underline-black pb-2">Projects</a>
            </Link>
            <Switcher />
          </div>
        </div>
      </div>
    </header>
  );
};
