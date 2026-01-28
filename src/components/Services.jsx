
const services=[
"Artificial Intelligence","Digital Experience","Data Analytics","Enterprise Applications",
"Microsoft Dynamics 365","Intelligent IT & Cloud","Quality Engineering","ServiceNow Platform"
]
export default function Services(){
  return(
    <section className="py-20 bg-slate-50">
      <h2 className="text-center text-3xl font-bold text-primary mb-12">Explore Our Services</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {services.map(s=>(
          <div key={s} className="bg-white p-6 shadow hover:shadow-xl transition rounded-xl">
            <div className="h-24 w-24 bg-slate-200 rounded mb-4"/>
            <h3 className="font-semibold text-primary">{s}</h3>
            <p className="text-sm mt-2">Enterprise-grade solutions tailored for growth.</p>
            <a className="text-accent mt-4 inline-block">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
