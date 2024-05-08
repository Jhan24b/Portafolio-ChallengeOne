import Image from "next/image";

export default function CardGrade({ data }) {
  const { title, subtitle, duration, img } = data;
  return (
    <div className="my-4">
      <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600 flex justify-center items-center">
          <div className="flex justify-center items-center">
            <Image src={img} width={200} height={80} alt={title} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-astronaut-950">
            {title}
          </h3>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            <b>{subtitle}</b> - {duration}
          </p>
        </div>
      </div>
    </div>
  );
}
