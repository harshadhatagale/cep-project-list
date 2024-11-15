import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full lg:w-[70%] mx-auto py-5 rounded-lg bg-gray-200">
      <div className="w-full flex justify-center items-center flex-col">
        <Image src={"/gcoej-logo.png"} className="mx-auto" height={100} width={100} />
        <h2 className="lg:text-3xl text-2xl tracking-wide my-3 font-bold">Government College of Engineering, Jalgaon</h2>
        <div>
          <ul className="space-y-3">
            <li className="flex space-x-2"><span className="text-2xl tracking-wide font-bold">Vision Statement :</span><p className="text-xl font-semibold">Globally Accepted Engineers with Human Skills</p></li>
            <li className="flex space-x-2 flex-col"><span className="text-2xl tracking-wide font-bold">Mission Statement:</span>
              <ul className="px-6 list-disc">
                <li className="text-xl font-semibold">To promote overall development of students by creating an excellent learning environment.</li>
                <li className="text-xl font-semibold">To develop undergraduate and postgraduate programmes through effective linkages with industry, academia, and alumni.</li>
                <li className="text-xl font-semibold">To promote services to community and revenue generation for sustainable development.</li>
              </ul>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
