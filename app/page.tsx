
export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="h-[300px] w-[300px] bg-red-500 flex items-center justify-center">
        <p className="text-white font-bold">SM:min 640px</p>
      </div>
      <div className="h-[300px] w-[300px] hidden bg-green-500 md:flex items-center justify-center">
        <p className="text-white font-bold">MD:min 768px</p>
      </div>
      <div className="h-[300px] w-[300px] hidden bg-blue-500 lg:flex items-center justify-center">
        <p className="text-white font-bold">LG:min 1024px</p>
      </div>
      <div className="h-[300px] w-[300px] hidden bg-yellow-500 xl:flex items-center justify-center">
        <p className="text-white font-bold">XL:min 1280px</p>
      </div>
    </div>
  )
}
