import { TimelineDetail } from './TimelineDetail';

export const Timeline = () => {
  return (
    <div className="px-20 pt-5">
      <h2 className="text-2xl mb-10">Time Line</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <TimelineDetail
          date="2022.08.29 ~"
          title="Dev Blog Front-End"
          description="개인 dev 블로그 프론트엔드 개발 (NextJS)"
          detail
          detailButtonName="Github"
          detailButtonUrl="https://github.com/Mangpha/Blog-Frontend/"
        />
        <TimelineDetail
          date="2022.08.08 ~ "
          title="Dev Blog Back-End"
          description="개인 dev 블로그 백엔드 개발"
          detail
          detailButtonName="Github"
          detailButtonUrl="https://github.com/Mangpha/Blog-Backend"
        />
        <TimelineDetail
          date="2022.06.20 - 08.08"
          title="Nomad Coders Challenge"
          description="우버 이츠 클론 6주 완성반"
          detail
          detailButtonName="Certificate of Completion"
          detailButtonUrl="https://nomadcoders.co/certs/ed94e28c-41f0-4666-a596-5f284dc91ae0"
        />
        <TimelineDetail
          date="2021.09.06 - 10.07"
          title="NERDChat (Project)"
          description="Stack I used: Node.js, Express, MySQL, Redis, Socket.IO, Simple-Peer, AWS(EC2, RDS, S3, CodePipeline)"
          detail
          detailButtonName="Github"
          detailButtonUrl="https://github.com/codestates/NERDChat"
        />
        <TimelineDetail
          date="2021.08.23 - 09.02"
          title="Moment (Project)"
          description="Stack I used: Node.js, Express, MySQL, AWS(EC2, RDS, S3)"
          detail
          detailButtonName="Github"
          detailButtonUrl="https://github.com/codestates/Moment"
        />
        <TimelineDetail
          date="2021.05.10 - 10.15"
          title="코드 스테이츠 (Code States)"
          description="Advanced software engineering, Immersive program (30th generation)"
          detail
          detailButtonUrl="https://codestates.com/"
          detailButtonName="About"
        />
        <TimelineDetail
          date="2021.03.29 - 04.19"
          title="Nomad Coders Challenge"
          description="Python 2주 완성반"
          detail
          detailButtonUrl="https://nomadcoders.co/certs/42a307f1-597d-4582-85f3-6bf88d243c3b"
          detailButtonName="Certificate of Completion"
        />
      </ol>
    </div>
  );
};
