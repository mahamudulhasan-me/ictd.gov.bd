import Image from "next/image";
import Link from "next/link";

const TabServiceCard = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center">
      <Link href={""} className="flex flex-col group items-center gap-2 ">
        <Image src={img} width={60} height={60} alt="image" />
        <h6 className="group-hover:text-red  transition-colors">{title}</h6>
      </Link>
    </div>
  );
};

export default TabServiceCard;
