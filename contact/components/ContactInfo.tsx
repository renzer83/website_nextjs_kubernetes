'use client';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'hello@nexusai.com',
      link: 'mailto:hello@nexusai.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  return (
    <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 shadow-2xl border border-white/20">
      <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4 group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
              {detail.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-400 mb-1">{detail.title}</p>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-white font-medium hover:text-purple-400 transition-colors duration-300"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-white font-medium">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
