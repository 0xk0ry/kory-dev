export function Author() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-row items-end gap-4">
      <img src="/avatar.jpg" alt="kory-dev.jpg" className="h-20 rounded-full" />
      <p className="text-4xl">Phạm Thạch Thanh Trúc</p>
      <p className="text-2xl text-slate-400">{currentYear - 2004}M</p>
    </div>
  );
}
