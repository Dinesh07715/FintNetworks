
export default function Footer(){
  return(
    <footer className="bg-slate-100 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6 text-sm">
        <div><h4 className="font-semibold">About Us</h4><p>Company Overview</p></div>
        <div><h4 className="font-semibold">Services</h4><p>AI · Analytics</p></div>
        <div><h4 className="font-semibold">Solutions</h4><p>Microsoft · ServiceNow</p></div>
        <div><h4 className="font-semibold">Certifications</h4><p>ISO · CMMI</p></div>
      </div>
      <p className="text-center mt-6 text-xs">© 2025 Fint Solutions</p>
    </footer>
  )
}
