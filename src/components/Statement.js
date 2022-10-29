import {
    PaintBrushIcon, BoltIcon, LifebuoyIcon
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: 'Therapeutic Art',
      description: 'Therapeutic art focuses on unlocking your creativity, facilitate emotional expressional, and encourage self-discovery.',
      icon: PaintBrushIcon,
    },
    {
      name: 'Anti-Gymnastic',
      description: 'Anti-gymnastic is an exercise method that seeks to improve awareness and control over all parts of your body.',
      icon: BoltIcon,
    },
    {
      name: 'Life Coaching',
      description: 'A life coach session is a conversation between you and your coach focused on helping you set and reach your life goals.',
      icon: LifebuoyIcon,
    },
  ]


  
  export const Statement = () => {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-violet-800">What we offer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Become more mindful in a way that suits you
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            There's many ways to improve mindfulness and concentration. That's why we offer several techniques so you can choose which one suits you best!
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-violet-700 p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }