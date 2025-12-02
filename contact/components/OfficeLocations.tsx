'use client';

export default function OfficeLocations() {
  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Market Street, Suite 400',
      timezone: 'PST (UTC-8)',
      isHQ: true
    },
    {
      city: 'New York',
      country: 'United States',
      address: '456 Broadway, Floor 12',
      timezone: 'EST (UTC-5)',
      isHQ: false
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '789 Oxford Street',
      timezone: 'GMT (UTC+0)',
      isHQ: false
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      address: '321 Shibuya Crossing',
      timezone: 'JST (UTC+9)',
      isHQ: false
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Office Locations</h2>

      {/* Map Placeholder */}
      <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 shadow-2xl border border-white/20 mb-8">
        <div className="w-full h-96 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Map pins */}
          <div className="relative w-full h-full">
            {offices.map((office, index) => (
              <div
                key={index}
                className="absolute animate-pulse"
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${30 + (index % 2) * 30}%`
                }}
              >
                <div className="relative group cursor-pointer">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full border-2 border-white shadow-lg group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-white/95 text-gray-900 px-3 py-2 rounded-lg shadow-xl text-xs font-medium whitespace-nowrap">
                      {office.city}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-purple-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-300 text-lg">Interactive Map Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Office Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offices.map((office, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/10 rounded-xl p-6 shadow-xl border border-white/20
              hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            {office.isHQ && (
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold rounded-full mb-3">
                Headquarters
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{office.city}</h3>
            <p className="text-gray-300 text-sm mb-4">{office.country}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-sm">{office.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-400 text-sm">{office.timezone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
