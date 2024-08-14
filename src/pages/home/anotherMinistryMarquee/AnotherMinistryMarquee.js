import Image from "next/image";
import Marquee from "react-fast-marquee";

const AnotherMinistryMarquee = () => {
  return (
    <div className="container mx-auto px-1 my-5">
      <Marquee pauseOnHover>
        <div className="grid grid-cols-4 items-stretch">
          <Image
            src="/images/anotherMinistry/e-directory.jpg"
            alt="flag"
            width={400}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src="/images/anotherMinistry/internal_eservice_bn.jpg"
            alt="flag"
            width={400}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src="/images/anotherMinistry/mygov_logo_bn.jpg"
            alt="flag"
            width={400}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src="/images/anotherMinistry/e-directory.jpg"
            alt="flag"
            width={400}
            height={100}
            className="cursor-pointer"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default AnotherMinistryMarquee;
