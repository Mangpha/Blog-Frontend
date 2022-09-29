import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Intro = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <section className="main_section">
        <div className="flex-col flex container_small">
          <span className="text-4xl mb-5">Hi, I&apos;m Jeon Byeong Hee.</span>
          <span className="text-2xl text-gray-500">Welcome to my blog.</span>
          <span className="text-2xl text-gray-500">
            I&apos;m a junior backend developer. <br />I can develop servers based on Typescript and NestJS.
          </span>
        </div>
      </section>
    </AnimationOnScroll>
  );
};
