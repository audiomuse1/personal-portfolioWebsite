'use client';

import { motion } from 'framer-motion';

const skillCategories = [
	{
		title: 'Frontend Development',
		skills: [
			'React JS',
			'JavaScript',
			'TypeScript',
			'HTML5',
			'CSS',
			'SCSS',
			'Bootstrap',
			'Redux',
			'jQuery',
			'BigCommerce',
			'Shopify',
			'SEO',
			'Responsive Design',
		],
	},
	{
		title: 'Backend Development',
		skills: ['Node.js', 'PHP', 'Symfony', 'Doctrine', 'Express'],
	},
	{
		title: 'Database & Version Control',
		skills: ['MongoDB', 'MySQL', 'GitHub', 'Git'],
	},
	{
		title: 'AI & Tools',
		skills: ['Microsoft Copilot', 'Prompting Techniques', 'AI Chat Tools'],
	},
];

const services = [
	{
		title: 'E-commerce Store Setup',
		description:
			'Complete setup of BigCommerce or Shopify stores, including theme customization and configuration.',
		pricing: 'Starting at $2,000',
	},
	{
		title: 'Domain & Hosting Setup',
		description:
			'Domain purchase, configuration, and hosting setup with SSL certification.',
		pricing: 'Starting at $300',
	},
	{
		title: 'Third-Party Integrations',
		description:
			'Integration of TaxJar, Avalara, Advanced Shipping Manager, and other e-commerce tools.',
		pricing: 'Starting at $500',
	},
	{
		title: 'Custom Development',
		description:
			'Custom feature development, API integrations, and theme modifications.',
		pricing: 'Contact for quote',
	},
];

export default function SkillsPage() {
	return (
		<div className="container mx-auto px-4 py-12 mt-8">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-4xl font-bold mb-12">Skills & Services</h1>

				{/* Skills Section */}
				<section className="mb-16">
					<h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{skillCategories.map((category, index) => (
							<motion.div
								key={index}
								initial={{ y: 20 }}
								animate={{ y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="bg-white rounded-lg shadow-lg p-6"
							>
								<h3 className="text-xl font-semibold mb-4 text-emerald-800">
									{category.title}
								</h3>
								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill, i) => (
										<span
											key={i}
											className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm"
										>
											{skill}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Services Section */}
				<section>
					<h2 className="text-2xl font-semibold mb-6">Services</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ y: 20 }}
								animate={{ y: 0 }}
								transition={{ delay: index * 0.1 }}
								className="bg-white rounded-lg shadow-lg p-6"
							>
								<h3 className="text-xl font-semibold mb-2 text-emerald-800">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-4">
									{service.description}
								</p>
								<p className="font-semibold text-emerald-700">
									{service.pricing}
								</p>
							</motion.div>
						))}
					</div>
				</section>
			</motion.div>
		</div>
	);
}