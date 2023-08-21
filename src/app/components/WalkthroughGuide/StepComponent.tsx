import Image from "next/image";

type Prop = {
  imgUrl: string;
  altText: string;
};

const StepComponent = ({ imgUrl, altText }: Prop) => {
  return (
    <div className="my-10 h-[500px] w-full  mx-auto relative">
      <Image layout="fill" src={imgUrl} alt={altText} objectFit="contain " />
    </div>
  );
};

export default StepComponent;
