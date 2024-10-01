import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  image?: ImageWidget;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
}

export default function ImageTextSection({
  title = "Your Title Here",
  description = "Your description goes here. This is a great place to provide more information about your product, service, or content.",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  backgroundColor = "#ffffff",
  textColor = "#000000"
}: Props) {
  return (
    <section style={{ backgroundColor, color: textColor }} class="py-12 px-4 md:px-8">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <h2 class="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: title }} />
          <p class="text-lg" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div class="md:w-1/2">
          <img src={image} alt="Section Image" class="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}