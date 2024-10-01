--- a/hero-leadfy.tsx
+++ b/hero-leadfy.tsx
@@ -55,7 +55,7 @@ export default function HeroLeadfy({
                 </span>
               ))}
             </h1>
-            <p className="text-xl mb-6 text-gray-600" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
+            <div className="text-xl mb-6 text-gray-600" dangerouslySetInnerHTML={{ __html: subtitle }}></div>
             <a
               href={buttonHref}
               className="inline-block px-8 py-3 text-black font-semibold rounded-full transition-colors duration-300"
@@ -69,7 +69,7 @@ export default function HeroLeadfy({
           </div>
         </div>
         <div className="mt-16">
-          <p className="text-center text-gray-500 mb-6" dangerouslySetInnerHTML={{ __html: trustText }}></p>
+          <div className="text-center text-gray-500 mb-6" dangerouslySetInnerHTML={{ __html: trustText }}></div>
           <div className="flex flex-wrap justify-center items-center gap-8">
             <img src={logo1} alt="Logo 1" className="h-8 w-auto grayscale" />
             <img src={logo2} alt="Logo 2" className="h-8 w-auto grayscale" />