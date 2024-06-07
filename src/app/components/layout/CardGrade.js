import Image from "next/image";

export default function CardGrade({ data }) {
  const { title, subtitle, duration, img } = data;
  return (
    <div className="my-4">
      <div className="relative flex w-80 h-[260px] flex-col rounded-xl bg-ship-cove-200 bg-clip-borde shadow-md dark:bg-mercury-400">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-white to-mercury-100 dark:bg-gradient-to-r from-mercury-200 to-mercury-50 flex justify-center items-center">
          <div className="flex justify-center items-center">
            <Image src={img} width={200} height={80} alt={title} />
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased text-ship-cove-900 dark:text-astronaut-100">
            {title}
          </h3>
          <p className="block font-sans text-base text-ship-cove-800 dark:text-astronaut-50 font-light leading-relaxed text-inherit antialiased">
            <b>{subtitle}</b> - {duration}
          </p>
        </div>
      </div>
    </div>
  );
}
