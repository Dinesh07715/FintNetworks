
export default function Blog(){
  return(
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold text-primary mb-12">FINT - Techtalk - Blog</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {[1,2,3].map(i=>(
          <div key={i} className="bg-white shadow rounded-xl overflow-hidden">
            <div className="h-48 bg-slate-200"/>
            <div className="p-5">
              <p className="text-sm text-gray-500">Team Fint · 2025</p>
              <h3 className="font-semibold mt-2">AI Blog Article {i}</h3>
              <a className="text-accent mt-3 inline-block">Read More +</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
