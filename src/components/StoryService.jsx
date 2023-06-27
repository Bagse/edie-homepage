import CardEmail from "./CardEmail";

function StoryService() {
  return (
    <div className="font-medium py-10">
      <div className="flex flex-col pl-7">
        <h2 className="text-[#2D9CDB] text-xs ">Unhappy with your website?</h2>
        <h3 className="text-[#333333] text-2xl w-[272px]">
          We create beautiful and fast web services
        </h3>
      </div>

      <img
        src="./img/heroImage.jpg"
        alt="hero image"
        className="rounded-2xl h-[145px] my-5 object-fill"
      />

      <div className="flex flex-col pl-7">
        <h3 className="text-2xl text-[#333333] w-[227px]">Story, emotion and purpose</h3>
        <p className="text-[#4F4F4F] text-xs py-6 font-normal w-[275px]">We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
        <CardEmail />
      </div>
    </div>
  );
}

export default StoryService;
