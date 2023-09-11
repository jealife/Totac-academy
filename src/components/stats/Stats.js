import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const stats = [
  { id: 1, name: 'Cycles de formations', value: 3, },
  { id: 2, name: 'Promotions de formation', value: 25 },
  { id: 3, name: 'Evénements annuels', value: 20 },
  { id: 2, name: 'Membres du réseau TOTAC', value: 300 },
  { id: 3, name: 'Missions solidaires par an', value: 600 }
]

export default function Stats() {
  return (
    <div className="bg-white lg:py-32 py-24 sm:py-7  flex flex-col  items-center gap-14 relative isolate">

      <h2 className='text-3xl font-semibold text-gray-900'>La saga TOTAC</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-5" >
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 justify-center text-center">
              <dt className="text-base leading-7 text-gray-600">
                {stat.name}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <div className='h-9 flex justify-center text-center'>
                      {isVisible ? <CountUp className='text-orange-600' end={stat.value} /> : ''}
                    </div>
                  )}
                </VisibilitySensor>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#466bff] to-[#0400ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
