import Image from "next/image";
import Button from "../Button/Button";

type Props = {
  heading?: string;
  title: string;
  desc: string;
  imgUrl: string;
  left?: boolean;
  hasBtn?: boolean;
  btnText?: string;
};
const GamerPerks = ({
  heading,
  title,
  desc,
  imgUrl,
  left,
  hasBtn,
  btnText,
}: Props) => {
  return (
    <section
      className={`flex flex-col-reverse lg:flex-row lg:justify-between p-5 margin-bottom items-center gap-10 lg:gap-20 card-bg-gradient lg:p-20 ${
        left && "lg:flex-row-reverse"
      } `}
    >
      <div className="text-center lg:text-left flex-1 ">
        <h2 className="mb-10 lg:mb-20 article-title lg:w-fit  ">{heading}</h2>
        <div className="text flex flex-col  ">
          <h2 className="text-2xl font-bold mb-3 ">{title} </h2>
          <p className="w-11/12  leading-7 mb-5">{desc}</p>
          {hasBtn && (
            <Button
              btnText={btnText || "Coming Soon"}
              style={{
                fill: "fill-[#DD26FF]",
              }}
            />
          )}
        </div>
      </div>
      <div className="flex-1">
        <Image src={imgUrl} alt={title} width={1000} height={1000} />
      </div>
    </section>
  );
};

export default GamerPerks;
