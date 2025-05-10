interface TimelineItem {
  date: string;
  title: string;
  description: string;
  isAward?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

export default function Timeline({ items, title }: TimelineProps) {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-10 bg-blue-500"></div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="relative ml-4">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 z-10" />
                {index < items.length && (
                  <div className="my-2 w-[3px] h-16 bg-blue-500" />
                )}
              </div>

              <div className="ml-8">
                <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-bold">{item.title}</p>
                  {item.isAward && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">AWARD</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 