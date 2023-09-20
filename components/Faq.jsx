"use client"
import React from "react";
import Image from "next/image";

const Faq = () => {
	return (
    <div className="my-8">
		<div className="py-2 bg bg-shaded rounded-lg">
			<h2 className="text-4xl font-bold font-montserrat my-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">FAQ</h2>
			<FaqBox />
		</div>
    </div>
	);
};



const FaqBox = () => {
	

  const data = [
    {
      index: 1,
      question: "Question1",
      answer: "answer 1",
    },
    {
      index: 2,
      question: "Question 2",
      answer: "1",
    },
  ];

  const [toggles, setToggles] = React.useState(data.map(() => false));

  function handleToggle(index) {
    setToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
  }

  return (

    <div>
      <ul>
        {data.map((item, index) => (
          <li key={item.index} className="mb-4">
            <div className="border-[1px] border-white/20  p-2 rounded-lg  hover:border-blue-700 hover:bg-gray-900">
              <div className="flex justify-between text-md font-montserrat " onClick={() => handleToggle(index)}>
                {item.question}
                
                

              <button
						className="p-1.5   hover:bg-gray-900 rounded font-montserrat text-[10px] font-medium tracking-wider"
						onClick={() => toggles[index]}
					>
						<Image
							src="/images/icons/cross.svg"
							width={10}
							height={10}
							alt="open description"
							className={`transition-all ${
								toggles[index] ? "rotate-45" : ""
							} transform `}
						/>
					</button>

              </div>

              <div>
                {toggles[index] && (
                  <div className="mt-3 text-sm font-extralight text-text-secondary font-montserrat">
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;


