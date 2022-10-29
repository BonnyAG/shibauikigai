import { Header } from "../components/Header";

export const DailyPractices = () => {
    return (
      <>
      <Header />
      <div className="relative overflow-hidden bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Daily Practices for Mindfulness
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-500">
                Mindfulness can seem like a really elusive concept and difficult to achieve but it's in everyone's rich.
                I'd like to share with you 3 daily practices I use to improve my mindfulness.
            </p>
          </div>
            <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <h2>I. Meditation</h2>
            <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1493&q=80"
                alt=""
                width={1310}
                height={873}
                />
                <figcaption>Photo by <a className="text-violet-700" href="https://unsplash.com/@zoltantasi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zoltan Tasi</a> on <a className="text-violet-700" href="https://unsplash.com/s/photos/meditation?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></figcaption>            
            </figure>
            
            <p>
                I know that meditation can feel really overwhelming but just start with 5 minutes a day. Find a
                comfortable spot, preferably quiet and free from distractions (your phone, let's be honest...).            
            </p>
            <p>
              For most people, it's easier to get into a state of flow if you have some audio to accompany you during
              your meditation. This can be calming sounds or music or a guided meditation using apps like Headspace or Calm.          
            </p>
            <p>
              Most people prefer to meditate sitting so try to find a place where you can sit straight but that is also comfortable.
              That could be a chair, a sofa or directly on the floor. During the colder months, don't hesitate to use a blanket. The
              goal is to be as comfortable as possible so that you can focus on your meditation.  
            </p>
            <h2>II. Be more aware of daily activities</h2>
            <figure>
              <img
                className="w-full rounded-lg h-[450px] object-cover"
                src="https://images.unsplash.com/photo-1569230919100-d3fd5e1132f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
                alt=""
                width={1310}
                height={873}
                />
                <figcaption>Photo by <a className="text-violet-700" href="https://unsplash.com/@prophsee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Prophsee Journals</a> on <a className="text-violet-700" href="https://unsplash.com/s/photos/routine?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </figcaption>            
            </figure>
            <p>
              This one is really simple. Find an activity that you do every day and take two minutes to write down your feelings once you're done doing it.
              Do that for one week. The hardest part about this activity is to be aware you're doing that activity. You might miss some days and that's okay, don't give up!  
            </p>
            <h2>III. Eat more mindfully</h2>
            <figure>
              <img
                className="w-full rounded-lg h-[450px] object-cover"
                src="https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
                width={1310}
                height={873}
                />
                <figcaption>Photo by <a className="text-violet-700" href="https://unsplash.com/@ferhadd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Farhad Ibrahimzade</a> on <a className="text-violet-700" href="https://unsplash.com/s/photos/eating?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></figcaption>            
              </figure>
              
              <p>
                This is another simple one. For one week, write down what you're eating and how you feel after your meal.
              </p>
              
              <h2>Conclusion</h2>
              <p>
                These might seem like simple techniques but they can make a huge difference in your life. Try it out and don't hesitate to reach out to us to let us know how it went!
              </p>
          </div>
        </div>
    </div>
    </>
    )
}
  
export default DailyPractices;