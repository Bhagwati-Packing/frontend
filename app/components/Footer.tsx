import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const products = [
    "Pallet Collars",
    "Pinewood Boxes", 
    "Wooden Pallets",
    "Wooden Crates",
    "Export Packaging Material"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              Bhagwati Packing
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted partner for quality packaging solutions since 2000. 
              We specialize in wooden packaging materials for export and storage needs.
            </p>
          </div>

          {/* Address */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Address
            </h4>
            <div className="text-gray-300 text-sm leading-relaxed">
              <p>Bhagwati Packing,</p>
              <p>Gat No. 147, Plot No. 10,</p>
              <p>Mahalunge, Chakan</p>
              <p>Pune, Maharashtra, 410501,</p>
              <p>India</p>
    
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Products
            </h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <Link 
                    href="/products" 
                    className="text-gray-300 text-sm hover:text-yellow-500 transition-colors duration-300"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-300 text-sm hover:text-yellow-500 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 text-sm hover:text-yellow-500 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-gray-300 text-sm hover:text-yellow-500 transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 text-sm hover:text-yellow-500 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Bhagwati Packing. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link 
                href="/contact" 
                className="text-gray-400 text-sm hover:text-yellow-500 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-400 text-sm hover:text-yellow-500 transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}