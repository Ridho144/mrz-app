import React from "react";

export default function BannerSection() {
  return (
    <div className="bg-[#d9d9d9] p-4">
      <div className="max-w-5xl mx-auto border border-white border-dashed bg-[#d9d9d9] flex flex-col sm:flex-row items-center gap-4 p-4">
        <div className="flex-1 min-w-0">
          <p className="text-[#7db1c7] font-extrabold uppercase text-sm leading-5">
            Do you love us?{" "}
            <span className="text-black font-extrabold uppercase">
              purchase this theme!
            </span>
          </p>
          <p className="italic text-[13px] text-[#666666] mt-1 max-w-md">
            Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.
          </p>
        </div>
        <img
          src="https://storage.googleapis.com/a1aa/image/41763120-3334-4e43-95bf-13da39202ac7.jpg"
          alt="White modern desk lamp with curved arm and conical shade on light gray background"
          className="w-[120px] h-[80px] object-contain"
          draggable="false"
          width={120}
          height={80}
        />
        <button
          type="button"
          className="text-[10px] font-semibold text-black border border-black px-4 py-2 uppercase tracking-wide transition-colors duration-300 hover:bg-[#4a7a87] hover:text-white"
        >
          Purchase
        </button>
      </div>
    </div>
  );
}
