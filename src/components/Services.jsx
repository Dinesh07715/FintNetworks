import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Artificial Intelligence',
      description: 'Enterprise-grade solutions tailored for growth.',
      link: '/services/artificial-intelligence',
      icon: '🤖'
    },
    {
      title: 'Digital Experience',
      description: 'Enterprise-grade solutions tailored for growth.',
      link: '/services/digital-experience',
      icon: '💻'
    },
    {
      title: 'Data Analytics',
      description: 'Enterprise-grade solutions tailored for growth.',
      link: '/services/data-analytics',
      icon: '📊'
    },
    {
      title: 'Enterprise Applications',
      description: 'Enterprise-grade solutions tailored for growth.',
      link: '/services/enterprise-application',
      icon: '🏢'
    },
    {
      title: 'Microsoft Dynamics 365',
      description: 'Enterprise-grade solutions tailored for growth.',
      link: '/solutions/dynamics-365',
      icon: '⚙️'
    },
    {
      title: 'Intelligent IT & Cloud',
      description: 'Enterprise-grade solutions tailored for growth.',
      link: '/services/cloud-operations',
      icon: '☁️'
    },
    {
      title: 'Quality Engineering',
      description: 'Enterprise-grade solutions tailored for growth.',
      link: '/services/quality-engineering',
      icon: '✅'
    },
    {
      title: 'ServiceNow Platform',
      description: 'Enterprise-grade solutions tailored for growth.',
      link: '/solutions/servicenow',
      icon: '🔧'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Explore Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg mb-6 flex items-center justify-center text-4xl">
                {service.icon}
              </div>
              
              {/* Service Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-slate-600 mb-6">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors group"
              >
                <span>Learn More</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;