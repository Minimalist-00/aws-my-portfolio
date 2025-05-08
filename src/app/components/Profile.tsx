import Image from 'next/image';

interface ProfileProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  affiliation: string;
  tags: string[];
}

export default function Profile({
  name,
  title,
  description,
  imageUrl,
  affiliation,
  tags
}: ProfileProps) {
  return (
    <section className="my-12">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="w-40 h-40 relative rounded-xl overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${name}のプロフィール画像`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          <h2 className="text-xl text-blue-600 mb-4">{title}</h2>

          <div className="mb-4">
            <p>{affiliation}</p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">{description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">しゅみ</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 