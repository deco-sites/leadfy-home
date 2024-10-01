import { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  subtitle?: string;
  /**
   * @description The text for the call-to-action button
   */
  buttonText?: string;
  /**
   * @description The URL to redirect when the button is clicked
   */
  buttonHref?: string;
  /**
   * @format color-input
   */
  buttonColor?: string;
  image?: ImageWidget;
  /**
   * @format textarea
   */
  trustText?: string;
  logo1?: ImageWidget;
  logo2?: ImageWidget;
  logo3?: ImageWidget;
  logo4?: ImageWidget;
  logo5?: ImageWidget;
  logo6?: ImageWidget;
}
export default function HeroLeadfy({
  title = "Nós trazemos os clientes, você fecha mais vendas",
  subtitle = "Turbinamos seu negócio atraindo e atendendo leads qualificados todo dia, toda hora",
  buttonText = "Faça um teste grátis",
  buttonHref = "#",
  buttonColor = "#e8ff54",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  trustText = "Grandes marcas que confiam em nossa tecnologia",
  logo1 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo2 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo3 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo4 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo5 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo6 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
}: Props) {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {title.split(" ").map((word, index) => (
                <span key={index} className={word.toLowerCase() === "fecha" ? "underline" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl mb-6 text-gray-600" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            <a
              href={buttonHref}
              className="inline-block px-8 py-3 text-black font-semibold rounded-full transition-colors duration-300"
              style={{ backgroundColor: buttonColor }}
            >
              {buttonText}
            </a>
          </div>
          <div className="lg:w-1/2">
            <img src={image} alt="Dashboard" className="w-full h-auto" />
          </div>
        </div>
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-6" dangerouslySetInnerHTML={{ __html: trustText }}></p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={logo1} alt="Logo 1" className="h-8 w-auto grayscale" />
            <img src={logo2} alt="Logo 2" className="h-8 w-auto grayscale" />
            <img src={logo3} alt="Logo 3" className="h-8 w-auto grayscale" />
            <img src={logo4} alt="Logo 4" className="h-8 w-auto grayscale" />
            <img src={logo5} alt="Logo 5" className="h-8 w-auto grayscale" />
            <img src={logo6} alt="Logo 6" className="h-8 w-auto grayscale" />
          </div>
        </div>
      </div>
    </div>
  );
}
