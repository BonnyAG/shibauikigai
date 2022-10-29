import { CheckIcon } from '@heroicons/react/24/outline'

const pricing = {
  tiers: [
    {
      title: 'Anti Gymnastics - 11 Pack',
      price: 180,
      description: '11 Anti-Gymnastics sessions that you can use at your pace.',
      features: [
        'Flexible schedule',
        'No expiration date',
        'One-on-One or Group Session',
        '20% Discount over regular rate'
      ],
      cta: 'Save with a Pack',
      mostPopular: false,
    },
    {
      title: 'Therapeutic Art - 10 Pack',
      price: 180,
      description: '10 Therapeutic Art sessions that you can use at your pace.',
      features: [
        'Flexible schedule',
        'No expiration date',
        'One-on-One or Group Session',
        '15% Discount over regular rate'
      ],
      cta: 'Save with a Pack',
      mostPopular: false,
    },
    {
      title: 'Meditation - 10 Pack',
      price: 180,
      description: '10 Meditation sessions that you can use at your pace.',
      features: [
        'Flexible schedule',
        'No expiration date',
        'One-on-One or Group Session',
        '15% Discount over regular rate'
      ],
      cta: 'Save with a Pack',
      mostPopular: false,
    },
    {
      title: 'Anti-Stress Program',
      price: 430,
      description: '10 Meditation sessions that you can use at your pace.',
      features: [
        '8 week program',
        'No expiration date',
        'Personalized Program',
        '30% Discount over regular rate'
      ],
      cta: 'Get the Plan',
      mostPopular: true,
    },
    {
      title: 'Ultimate 10-Session Pack',
      price: 540,
      description: '10 Meditation sessions, 10 Therapeutic Art sessions, and 11 Anti-Gymnastic sessions that you can use at your pace.',
      features: [
        'Flexible schedule',
        'No expiration date',
        'One-on-One or Group Session',
        '20% Discount over regular rate'
      ],
      cta: 'Save with a Pack',
      mostPopular: false,
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function comingSoon(e) {
  e.preventDefault();
  alert("Coming Soon");
}

export const Plans = () => {
  return (
    <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-6xl">
        Our Services
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">
        Whether you want a single session to try it out or a pack to save on your sessions, we have an option for you!
      </p>

      {/* Tiers */}
      <div className="mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:gap-y-12">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
              {tier.mostPopular ? (
                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-violet py-1.5 px-4 text-sm font-semibold text-white">
                  Most popular
                </p>
              ) : null}
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-violet-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#"
              onClick={comingSoon}
              className={classNames(
                tier.mostPopular
                  ? 'bg-violet text-white hover:bg-violet-800 transition'
                  : 'bg-violet-100 text-violet hover:bg-violet-200',
                'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
              )}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans;