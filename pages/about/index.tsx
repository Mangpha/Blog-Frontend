import { Stacks } from '../../components/About/Stacks';
import { Timeline } from '../../components/About/Timeline';

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="section px-[20vw]">
        <div className="ml-10 mb-5">
          <h1 className="text-3xl font-bold">About</h1>
        </div>
        <div className="w-full text-center">
          <h2 className="text-2xl mb-3">Jeon Byeong Hee</h2>
          <div className="text-gray-600 dark:text-gray-400">
            <span className="mr-5 cursor-pointer hover:underline" onClick={() => window.open('https://github.com/Mangpha/', '_blank')}>
              @Github
            </span>
            <span className="mr-5 cursor-pointer hover:underline" onClick={() => window.open('https://mangph4.tistory.com/', '_blank')}>
              @Tistory
            </span>
            <span className="mr-5">mangph4@gmail.com</span>
          </div>
          <hr className="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700" />
        </div>
        <div className="px-20 pt-5 break-words">
          <h3 className="text-2xl mb-5">안녕하세요!</h3>
          <p style={{ wordBreak: 'keep-all' }} className="text-xl leading-loose">
            현재 웹 풀스택 개발을 공부하고 있는 전병희라고 합니다.
            <br />
            JavaScript에 처음 관심이 생겨서 웹 개발을 시작했고, 그 뒤에 TypeScript, NestJS 등 백엔드 기술과, 프론트엔드 프레임워크들도 같이 공부하고 있습니다.
          </p>
        </div>
        <hr className="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700" />
        <Stacks />
        <hr className="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700" />
        <Timeline />
      </div>
    </div>
  );
};

export default About;
