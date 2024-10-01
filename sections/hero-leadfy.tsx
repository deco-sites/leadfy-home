import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @title Title
   * @format rich-text
   */
  title: HTMLWidget;
  /**
   * @title Subtitle
   * @format textarea
   */
  subtitle: string;
  /**
   * @title Button Text
   */
  buttonText: string;
  /**
   * @title Button URL
   */
  buttonHref: string;
  /**
   * @title Trust Message
   * @format textarea
   */
  trustText: string;
  /**
   * @title Dashboard Image
   */
  dashboardImage: ImageWidget;
  /**
   * @title Logo 1
   */
  logo1: ImageWidget;
  /**
   * @title Logo 2
   */
  logo2: ImageWidget;
  /**
   * @title Logo 3
   */
  logo3: ImageWidget;
  /**
   * @title Logo 4
   */
  logo4: ImageWidget;
  /**
   * @title Logo 5
   */
  logo5: ImageWidget;
  /**
   * @title Logo 6
   */
  logo6: ImageWidget;
}

export default function HeroLeadfy({
  title = "<h1>Nós trazemos os clientes,<br>você <u>fecha mais vendas</u></h1>",
  subtitle = "Turbinamos seu negócio atraindo e atendendo leads qualificados todo dia, toda hora",
  buttonText = "Faça um teste grátis",
  buttonHref = "#",
  trustText = "Grandes marcas que confiam em nossa tecnologia",
  dashboardImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  logo1 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo2 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo3 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo4 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo5 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  logo6 = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
}: Props) {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6" dangerouslySetInnerHTML={{ __html: title }}></div>
          <div className="text-xl mb-8 text-gray-600">{subtitle}</div>
          <a
            href={buttonHref}
            className="inline-block px-8 py-3 text-black font-semibold rounded-full transition-colors duration-300 bg-yellow-300 hover:bg-yellow-400 shadow-md"
          >
            {buttonText}
          </a>
        </div>
        <div className="mt-12 flex justify-center">
          <img src={dashboardImage} alt="Dashboard" className="w-full max-w-4xl rounded-lg shadow-2xl" />
        </div>
        <div className="mt-16">
          <div className="text-center text-gray-500 mb-6">{trustText}</div>
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