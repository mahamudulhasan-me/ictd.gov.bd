import Image from "next/image";

const Hotline = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="w-full bg-green text-white  rounded-sm px-3 pt-1 pb-0.5 text-xl mb-9 text-center">
        জরুরি হটলাইন
      </h1>
      <Image
        src={"/images/hotline_v.2_bn.png"}
        width={300}
        height={600}
        alt="hotline"
      />
    </div>
  );
};

export default Hotline;
