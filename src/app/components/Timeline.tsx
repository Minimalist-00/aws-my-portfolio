interface TimelineItem {
  date: string;
  title: string;
  description: string;
  isAward?: boolean;
  isHighlighted?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

export default function Timeline({ items, title }: TimelineProps) {
  return (
    <section className="my-12">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-2 h-10 bg-blue-500"></div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="relative ml-4">
        {items.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex items-start">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${item.isHighlighted ? 'bg-blue-500' : 'bg-gray-600'} z-10`} />
                {index < items.length && (
                  <div className="my-2 w-1 bg-gray-300" style={{ height: item.description ? '8rem' : '4rem' }} />
                )}
              </div>

              <div className="ml-8 flex flex-col">
                <div className="text-sm text-gray-500 -mt-6">{item.date}</div>
                <div className="flex items-center gap-2">
                  <p className={`text-lg font-bold ${item.isHighlighted ? 'text-gray-900' : 'text-gray-500'}`}>{item.title}</p>
                  {item.isAward && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">AWARD</span>
                  )}
                </div>
                {item.description && (
                  <p className="text-gray-600 mt-2">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 