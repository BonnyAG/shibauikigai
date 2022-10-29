const posts = [
    {
      title: 'Thinking Fast and Slow by Daniel Kahneman',
      href: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
      category: { name: 'Book Recommendation', href: '#', color: 'bg-indigo-100 text-indigo-800' },
      description:
        'Thinking Fast and Slow helps you understand the difference between your fast, intuitive, and emotional System 1 and your slower, more logical System 2.',
      date: 'Oct 16, 2022',
      datetime: '2022-10-16',
      readingTime: '2 min',
    },
    {
      title: 'What is positive psychology?',
      href: 'https://www.youtube.com/watch?v=1qJvS8v0TTI',
      category: { name: 'Video', href: '#', color: 'bg-pink-100 text-pink-800' },
      description:
        'What is positive psychology? How it can it help me? Learn more with this 5 minute animated video.',
      date: 'Oct 10, 2022',
      datetime: '2022-10-10',
      readingTime: '5 min',
    },
    {
      title: 'Daily Practices for Mindfulness',
      href: '/blog/daily-practices',
      category: { name: 'Methodology', href: '#', color: 'bg-green-100 text-green-800' },
      description: 'In this post I share a few daily practices that take you less than 10 min/day that greatly improve mindfulness.',
      date: 'Sep 25, 2022',
      datetime: '2022-09-25',
      author: {
        name: 'Easer Collins',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      readingTime: '10 min',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export const RecentPosts = () => {
    return (
      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent publications</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Self-improvement cannot happen without knowledge. We look for resources that can help you understand more about what
              your brain does in the background and how to get better at taking control. 
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={post.category.href} className="inline-block">
                    <span
                      className={classNames(
                        post.category.color,
                        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                      )}
                    >
                      {post.category.name}
                    </span>
                  </a>
                </div>
                <a href={post.href} className="mt-4 block">
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </a>
              <div className="mt-6 flex items-center">
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime} read</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }