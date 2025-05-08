interface EventItem {
  date: string;
  title: string;
  description: string;
  isAward?: boolean;
}

interface EventsTimelineProps {
  items: EventItem[];
  title: string;
}

export default function EventsTimeline({ items, title }: EventsTimelineProps) {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-10 bg-blue-500"></div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div>
        {items.map((item, index) => (
          <div key={index} className="flex ml-5 mb-8">
            <div className="mt-1 w-9 relative">
              <div className="w-[15px] h-[15px] bg-blue-500 rounded-full" />
              {index < items.length - 1 && (
                <div className="w-[3px] h-full absolute top-[15px] left-[6px] bg-blue-500" />
              )}
            </div>
            <div className="w-48">
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold">{item.title}</h3>
                {item.isAward && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">AWARD</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 