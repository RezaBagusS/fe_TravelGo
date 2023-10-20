import TagHome from "./TagHome";

const KeindahanIndonesia = () => {
  return (
    <div className="cust-container flex flex-col gap-2 text-cust-teal-500 items-start py-14">
      <TagHome text="KEINDAHAN INDONESIA" />
      <h2 className="text-cust-gray-700 text-2xl sm:text-3xl font-bold">
        Keberagaman & Budaya Indonesia
      </h2>
      <p className="font-medium text-sm sm:text-base text-start w-full sm:w-8/12">
        Nikmati berbagai macam budaya, keberagaman, kuliner dan keindahan alam
        yang membuat-mu jatuh cinta dan menjadikan Indonesia sebagai
        destinasi-mu selanjutnya
      </p>
    </div>
  );
};

export default KeindahanIndonesia;
