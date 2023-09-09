import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const stats = [
  { id: 1, name: 'Cycles de formations', value: 3,  },
  { id: 2, name: 'Promotions de formation', value: 25 },
  { id: 3, name: 'Evénements annuels', value: 20 },
  { id: 2, name: 'Membres du réseau TOTAC', value: 300 },
  { id: 3, name: 'Missions solidaires par an', value: 600 }
]

const orange='#ff7607';
export default function Stats() {
  return (
    <div className="bg-white lg:py-32 py-24 sm:py-7  flex flex-col  items-center gap-14">
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
                      {isVisible ? <CountUp className={` text-[${orange}]`} end={stat.value} /> :''}
                    </div>
                  )}
                </VisibilitySensor>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
