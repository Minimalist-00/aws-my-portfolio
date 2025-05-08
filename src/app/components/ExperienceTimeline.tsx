interface TimelineItem {
  date: string;
  title: string;
  organization: string;
  description: string;
}

interface ExperienceTimelineProps {
  items: TimelineItem[];
  title: string;
}

export default function ExperienceTimeline({ items, title }: ExperienceTimelineProps) {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-10 bg-blue-500"></div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="relative ml-4">
        {items.map((item, index) => (
          <div key={index} className="mb-12 relative">

            <div className="flex items-start">
              {/* 円マーカー */}
              <div className="absolute left-0 -ml-2 w-4 h-4 rounded-full bg-blue-500 z-10"></div>
              {/* 縦線 */}
              {index < items.length - 1 && (
                <div className="absolute top-6 left-0 w-0.5 h-full bg-blue-500"></div>
              )}

              <div className="ml-8">
                {/* 日付 */}
                <div className="text-sm text-gray-500 mb-1">{item.date}</div>

                {/* タイトルと組織 */}
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  {item.organization && (
                    <span className="text-blue-600 md:border-l md:border-gray-300 md:pl-2">
                      {item.organization}
                    </span>
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