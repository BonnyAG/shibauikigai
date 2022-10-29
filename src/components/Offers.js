import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Life Coaching',
    href: '#',
    price: 60,
  },
  {
    name: 'Anti Gymnastic',
    href: '#',
    price: 20,
  },
  {
    name: 'Therapeutic Art',
    href: '#',
    price: 20,
  },
  {
    name: 'Meditation',
    href: '#',
    price: 20,
  },
]

export const Offers = () => {
  function comingSoon(e) {
    e.preventDefault();
    alert("Coming Soon");
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:align-center sm:flex sm:flex-col">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 text-center sm:text-left">Single Sessions</h1>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-medium leading-6 text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                </p>
                <a
                  href={tier.href}
                  onClick={comingSoon}
                  className="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                >
                  Book a {tier.name} Session
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Offers;