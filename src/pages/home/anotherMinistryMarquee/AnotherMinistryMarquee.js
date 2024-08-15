import Image from "next/image";
import Marquee from "react-fast-marquee";

const AnotherMinistryMarquee = () => {
  return (
    <div className=" my-5">
      <Marquee pauseOnHover>
        <div className="grid grid-cols-5 items-stretch overflow-hidden">
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
            src="/images/anotherMinistry/discount_bn.jpg"
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
        </div>
      </Marquee>
    </div>
  );
};

export default AnotherMinistryMarquee;
