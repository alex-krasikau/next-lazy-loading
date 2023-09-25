import { PageSection } from "@/components/PageSection";
import { pages } from "@/content/pages";
import slugify from "slugify";

export default function LandingPage({ params }: { params: { slug: string } }) {
  const { title, sections } =
    pages.find(
      (page) => params.slug === slugify(page.title, { lower: true })
    ) || {};

  return (
    <div className="py-16 space-y-8">
      <h2 className="text-3xl px-8">{title}</h2>

      <div className="">
        {sections?.map((section, index) => (
          <PageSection key={index} section={section} />
        ))}
      </div>
    </div>
  );
}
