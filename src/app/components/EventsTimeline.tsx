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

      <div className="relative ml-4">
        {items.map((item, index) => (
          <div key={index} className="mb-12 relative">
            {/* 縦線 */}
            {index < items.length - 1 && (
              <div className="absolute top-6 left-1 w-0.5 h-full -ml-0.5 bg-blue-200"></div>
            )}

            <div className="flex items-start">
              {/* 円マーカー */}
              <div className={`absolute top-1 left-0 -ml-2 w-4 h-4 rounded-full z-10 ${item.isAward ? 'bg-yellow-400' : 'bg-blue-500'}`}></div>

              <div className="ml-8">
                {/* 日付 */}
                <div className="text-sm text-gray-500 mb-1">{item.date}</div>

                {/* タイトル */}
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  {item.isAward && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">AWARD</span>
                  )}
                </div>

                {/* コンテンツ */}
                <div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 