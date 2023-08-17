import FaqCard from "./FAQCard";
import { FAQData } from "@/app/utils/utils";
const FAQSection = () => {
  return (
    <>
      <div className="flex justify-center mb-6">
        <h2 className="mb-10 lg:mb-20 article-subtitle article-title lg:w-1/2 text-center">
          Frequently asked Question
        </h2>
      </div>

      <section className="margin-bottom border-b-[2px] border-[#FF7736] ">
        {FAQData.map((question, index) => (
          <FaqCard
            key={index}
            count={question.count}
            question={question.question}
            desc={question.desc}
          />
        ))}
      </section>
    </>
  );
};

export default FAQSection;
