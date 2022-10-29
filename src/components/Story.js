import { CameraIcon } from '@heroicons/react/20/solid'

export const Story = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold text-violet-700">Our Mission</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Meet Silvia</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/silvia.jpeg"
                    alt="Silvia Profile Picture"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span className="ml-2">Silvia H. Vowles</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-lg text-gray-500 italic">
              My purpose as a life coach is to accompany my clients in the discovery of their potentials, their strengths and human virtues. Following these discoveries comes an even deeper desire to know oneself by fulfilling one's dreams, mission, and personal purpose in order to be a source of unconditional help to ourselves and to our fellow human beings. Welcome to Shibuikigai Coaching.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
                Many years ago and I would say since my childhood, a desire was awakened in me to understand the human mind, interpersonal relationships, behaviors and feelings, especially my own.
                I was always a person with a great desire to help others to feel good and to progress on an individual level. On quite a few occasions I was a listener and observer in many people's lives and wondered: Why did they come to me?
              </p>
              <p>
                When I finally became a mother at 21, my great concern was to guide this new being, to give it a good education, to support its progress and growth. To do so, I used tools learned from great psychologists and doctors of that time (80's). I always went a step further through my readings and when ADHD was discovered, I became very interested because my son showed signs that made me think he was suffering from it.
              </p>
              <p>
                As the years went by, science discovered many things that I would have liked to be able to put into practice in my children's lives when they were young and in my own, as all three of us have ADHD. Unfortunately it was not until later, at the age of 45, that I had the opportunity to study psychology at a prestigious university (University of Utah). It was a dream come true for me.
              </p>
              <p>
                After my graduation in psychology and positive psychology four years later, I realized that it was only the beginning of a long road of constant discoveries and training. Science advances by leaps and bounds and with it new theories and tools that explain many of those unknowns that solve the why of certain behaviors and the functioning of our brain as an integral part of our body. After graduation, I have pursued other disciplines such as neurolinguistic programming, transgenerational psychotherapy, bioenergy associated with quantum physics, therapeutic art, anti-gymnastics and many others that complete my professional training as a coach.
              </p>
              <p>
              Although I have a degree in psychology, I am not interested in giving diagnoses or treating people therapeutically. Rather I like to use Martin Seligman's psychology that uses people's strengths to overcome their weaknesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story;