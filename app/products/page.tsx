"use client";

import ProductCard from "../components/ProductCard";
import { useRouter } from "next/navigation";

const products = [
	{
		title: "Pallet Collars",
		description:
			"Strong, reusable, and space-efficient, our pallet collars provide flexible packaging solutions for export and storage.",
		imageUrl: "/image/pallet-collars.jpg",
	},
	{
		title: "Pinewood Boxes",
		description:
			"Crafted from premium pinewood, our boxes are ideal for exporting delicate or high-value goods.",
		imageUrl: "/image/pinewood-boxes.jpg",
	},
	{
		title: "Wooden Pallets",
		description:
			"Sturdy and heat-treated wooden pallets that comply with ISPM-15 standards for safe handling and transport.",
		imageUrl: "/image/wooden-pallets.jpg",
	},
	{
		title: "Wooden Crates",
		description:
			"Designed for heavy-duty packaging needs, our wooden crates provide excellent ventilation and load-bearing capacity.",
		imageUrl: "/image/wooden-crates.jpg",
	},
	{
		title: "Export Packaging Material",
		description:
			"From wrapping and cushioning to complete packaging systems, we provide a full range of export packaging materials.",
		imageUrl: "/image/packaging-material.jpg",
	},
];

export default function ProductsPage() {
	const router = useRouter();

	const handleQuoteClick = () => {
		// Store a general quote request in sessionStorage
		sessionStorage.setItem("selectedProduct", "General Quote Request");
		// Navigate to contact page
		router.push("/contact");
	};

	return (
		<div className="min-h-screen bg-gray-50 py-16">
			<div className="container mx-auto px-6">
				{/* Header Section */}
				<div className="text-center mb-16">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Our Products
					</h1>
					<div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
						Discover our comprehensive range of high-quality packaging solutions
						designed to meet your export and storage needs.
					</p>
				</div>

				{/* Products Grid - Simple Layout */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<ProductCard
							key={product.title}
							title={product.title}
							description={product.description}
							imageUrl={product.imageUrl}
						/>
					))}
				</div>

				{/* Call to Action */}
				<div className="text-center mt-16">
					<p className="text-lg text-gray-600 mb-6 font-light">
						Need a custom packaging solution?
					</p>
					<button
						onClick={handleQuoteClick}
						className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200"
					>
						Request a Quote
					</button>
				</div>
			</div>
		</div>
	);
}