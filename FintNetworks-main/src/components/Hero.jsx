
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const slides = [
  {title:"Enterprise Application Services",desc:"Modernize and scale enterprise platforms"},
  {title:"Artificial Intelligence",desc:"AI-driven transformation"},
  {title:"Data Analytics",desc:"Insights that drive decisions"},
  {title:"ServiceNow",desc:"Digital workflow excellence"}
]

export default function Hero(){
  return (
    <Swiper className="h-[85vh]">
      {slides.map(s=>(
        <SwiperSlide key={s.title}>
          <div className="h-full grid md:grid-cols-2 items-center max-w-7xl mx-auto px-6">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">{s.title}</h2>
              <p className="mb-6">{s.desc}</p>
              <button className="bg-accent text-white px-6 py-3 rounded">Read More</button>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-96 h-96 bg-slate-200 rounded-xl"/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
