function CardEmail() {
  return (
    <div>
      <label className="text-[#828282] text-[10px]">
        Want us to contact you?
      </label>
      <div className="flex flex-row items-center py-2 text-sm font-medium">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#F2F2F2] rounded-lg px-2 py-3 w-[291px] outline-none"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          />
          <button className="absolute right-2 top-1 bg-[#2D9CDB] text-[#F2F2F2] rounded-lg px-5 py-2">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardEmail;
