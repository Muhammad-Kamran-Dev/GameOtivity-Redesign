import Image from "next/image";

type Prop = {
  imgUrl: string;
  altText: string;
};

const StepComponent = ({ imgUrl, altText }: Prop) => {
  return (
    <div className="my-10  h-[500px] w-full  mx-auto relative">
      <Image
        fill
        src={imgUrl}
        alt={altText}
        className=" object-contain lg:object-cover "
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default StepComponent;
