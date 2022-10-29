export const Stats = () => {
    return (
      <div className="bg-violet">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Shikuibigai Coaching offers you the attention you deserve
            </h2>
            <p className="mt-3 text-xl text-violet-200 sm:mt-4">
             We're determined to providing you with the best care so you can get the results you want.
            </p>
          </div>
          <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-violet-200">Healthy Clients</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">400</dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-violet-200">Dedicated Team</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">15+</dd>
            </div>
            <div className="mt-10 flex flex-col sm:mt-0">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-violet-200">Services</dt>
              <dd className="order-1 text-5xl font-bold tracking-tight text-white">4+</dd>
            </div>
          </dl>
        </div>
      </div>
    )
}