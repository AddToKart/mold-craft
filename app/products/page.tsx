'use client';

import { useEffect, useState } from 'react';
import { Settings, Zap, Shield, Cog, ArrowRight, CheckCircle, Star, Award, Cpu, Wrench, Target, Layers, Gauge, Microscope, Factory, Truck } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const animationType = element.dataset.animation || 'fade-in-up';
            element.classList.add(`animate-${animationType}`);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animation]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Products', icon: Layers },
    { id: 'molding', name: 'Precision Molding', icon: Settings },
    { id: 'automation', name: 'Automation Systems', icon: Cpu },
    { id: 'custom', name: 'Custom Solutions', icon: Wrench },
    { id: 'quality', name: 'Quality Control', icon: Shield },
  ];

  const products = [
    {
      id: 1,
      category: 'molding',
      title: 'Injection Molding Systems',
      description: 'High-precision injection molding solutions for complex geometries and demanding applications with advanced temperature control.',
      features: ['±0.001" tolerance', 'Multi-material capability', 'Automated quality control', 'High-volume production'],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $150,000',
      rating: 4.9,
      badge: 'Best Seller'
    },
    {
      id: 2,
      category: 'molding',
      title: 'Compression Molding',
      description: 'Advanced compression molding for thermoset materials and high-strength applications with precise pressure control.',
      features: ['Temperature control', 'Pressure monitoring', 'Cycle optimization', 'Material flexibility'],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $120,000',
      rating: 4.8,
      badge: 'Popular'
    },
    {
      id: 3,
      category: 'molding',
      title: 'Blow Molding Systems',
      description: 'State-of-the-art blow molding technology for hollow plastic products with exceptional wall thickness control.',
      features: ['Uniform wall thickness', 'Energy efficient', 'Quick changeover', 'Multiple cavity options'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $180,000',
      rating: 4.7,
      badge: 'New'
    },
    {
      id: 4,
      category: 'automation',
      title: 'Robotic Assembly Systems',
      description: 'Fully automated assembly lines with precision robotics and advanced AI-powered quality assurance systems.',
      features: ['Vision-guided robots', 'Real-time monitoring', 'Flexible programming', '24/7 operation'],
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $250,000',
      rating: 4.9,
      badge: 'Premium'
    },
    {
      id: 5,
      category: 'automation',
      title: 'Conveyor Systems',
      description: 'Intelligent conveyor systems with adaptive speed control and integrated sorting capabilities.',
      features: ['Variable speed control', 'Smart routing', 'Load balancing', 'Predictive maintenance'],
      image: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $75,000',
      rating: 4.6,
      badge: 'Reliable'
    },
    {
      id: 6,
      category: 'automation',
      title: 'Pick & Place Systems',
      description: 'High-speed pick and place automation with vision guidance and precision positioning technology.',
      features: ['High-speed operation', 'Vision guidance', 'Multi-axis control', 'Error detection'],
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $95,000',
      rating: 4.8,
      badge: 'Fast'
    },
    {
      id: 7,
      category: 'quality',
      title: 'Automated Inspection Systems',
      description: 'AI-powered quality control and inspection systems for comprehensive product validation and defect detection.',
      features: ['Automated inspection', 'Data analytics', 'Traceability', 'Real-time reporting'],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $85,000',
      rating: 4.9,
      badge: 'Smart'
    },
    {
      id: 8,
      category: 'quality',
      title: 'Dimensional Measurement',
      description: 'Precision coordinate measuring machines with advanced software for complex part verification.',
      features: ['Coordinate measuring', 'Statistical analysis', 'CAD comparison', 'Automated reporting'],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $65,000',
      rating: 4.7,
      badge: 'Precise'
    },
    {
      id: 9,
      category: 'quality',
      title: 'Material Testing Equipment',
      description: 'Comprehensive material testing solutions for strength, durability, and performance validation.',
      features: ['Tensile testing', 'Impact testing', 'Fatigue analysis', 'Environmental testing'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Starting at $45,000',
      rating: 4.6,
      badge: 'Essential'
    },
    {
      id: 10,
      category: 'custom',
      title: 'Custom Tooling Solutions',
      description: 'Specialized tooling and fixtures designed for your unique manufacturing requirements with rapid prototyping.',
      features: ['CAD/CAM design', 'Rapid prototyping', 'Material selection', 'Performance testing'],
      image: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Custom Quote',
      rating: 4.8,
      badge: 'Tailored'
    },
    {
      id: 11,
      category: 'custom',
      title: 'Process Optimization',
      description: 'Comprehensive process analysis and optimization services to maximize efficiency and reduce operational costs.',
      features: ['Workflow analysis', 'Cost reduction', 'Efficiency gains', 'Training programs'],
      image: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Consultation Required',
      rating: 4.9,
      badge: 'Optimized'
    },
    {
      id: 12,
      category: 'custom',
      title: 'Integration Services',
      description: 'Complete system integration services connecting all manufacturing components into unified workflows.',
      features: ['System integration', 'Data connectivity', 'Workflow automation', 'Performance monitoring'],
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Project Based',
      rating: 4.7,
      badge: 'Connected'
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const specifications = [
    {
      icon: Gauge,
      title: 'Precision Standards',
      value: '±0.0001"',
      description: 'Industry-leading tolerance capabilities'
    },
    {
      icon: Factory,
      title: 'Production Capacity',
      value: '10M+',
      description: 'Parts manufactured annually'
    },
    {
      icon: Award,
      title: 'Quality Rating',
      value: '99.8%',
      description: 'First-pass quality rate'
    },
    {
      icon: Truck,
      title: 'Delivery Time',
      value: '2-4 weeks',
      description: 'Average project completion'
    },
  ];

  return (
    <>
      {/* Hero Section with Enhanced Animations */}
      <section className="pt-24 pb-16 bg-gradient-mesh relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-animation="fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
              Manufacturing
              <span className="block bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of precision manufacturing solutions, 
              automation systems, and custom engineering services designed to elevate your production capabilities.
            </p>
            <div className="flex justify-center space-x-4" data-animation="scale-in">
              {specifications.map((spec, index) => (
                <div key={index} className={`glass-card rounded-lg p-4 text-center stagger-${index + 1}`}>
                  <spec.icon className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">{spec.value}</div>
                  <div className="text-xs text-slate-400">{spec.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Category Filter */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-animation="fade-in-up">
            <h2 className="text-4xl font-bold font-playfair text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive range of manufacturing solutions organized by specialty
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4" data-animation="bounce-in">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover-lift stagger-${index + 1} ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
                {activeCategory === category.id && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                data-animation="scale-in"
                className={`bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-slate-200 hover:border-slate-300 hover-lift stagger-${(index % 6) + 1}`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/80 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-semibold text-slate-800">{product.rating}</span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-slate-900/80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button className="px-6 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold font-playfair text-slate-900 group-hover:text-slate-800 transition-colors">
                      {product.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-lg font-bold text-slate-900">{product.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-3">
                    <button className="group flex-1 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-xl font-medium hover:from-slate-700 hover:to-slate-600 transition-all duration-200 flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-4 py-3 border-2 border-slate-300 text-slate-600 rounded-xl hover:border-slate-400 hover:text-slate-800 transition-colors">
                      <Star className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our manufacturing solutions power innovation across diverse industries, 
              from automotive to aerospace, medical devices to consumer electronics.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Automotive', icon: '🚗', growth: '+25%' },
              { name: 'Aerospace', icon: '✈️', growth: '+18%' },
              { name: 'Medical', icon: '🏥', growth: '+32%' },
              { name: 'Electronics', icon: '📱', growth: '+28%' },
              { name: 'Consumer', icon: '🏠', growth: '+15%' },
              { name: 'Industrial', icon: '🏭', growth: '+22%' },
            ].map((industry, index) => (
              <div 
                key={index}
                data-animation="bounce-in"
                className={`text-center p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 group hover-lift stagger-${index + 1}`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{industry.name}</h3>
                <div className="text-sm text-green-600 font-medium">{industry.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900/50 to-transparent"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-slate-700/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-slate-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-white mb-6">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Cutting-edge technology and expertise that sets us apart in the manufacturing industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Microscope,
                title: 'Micro-Precision',
                description: 'Tolerances down to ±0.0001" with state-of-the-art machining centers and measurement systems.',
                metric: '0.0001"',
                label: 'Tolerance'
              },
              {
                icon: Zap,
                title: 'Rapid Prototyping',
                description: 'Quick turnaround times from concept to production-ready prototypes using advanced 3D printing.',
                metric: '24-48hrs',
                label: 'Turnaround'
              },
              {
                icon: Shield,
                title: 'Quality Systems',
                description: 'ISO 9001:2015 certified processes ensuring consistent quality and traceability.',
                metric: '99.8%',
                label: 'Quality Rate'
              },
              {
                icon: Target,
                title: 'Custom Engineering',
                description: 'Tailored manufacturing solutions for unique project requirements and specifications.',
                metric: '500+',
                label: 'Custom Projects'
              },
            ].map((capability, index) => (
              <div 
                key={index}
                data-animation="fade-in-up"
                className={`glass-card rounded-2xl p-8 text-center group hover-lift hover-glow stagger-${index + 1}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-500 rounded-2xl mb-6 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{capability.metric}</div>
                <div className="text-sm text-slate-400 mb-4">{capability.label}</div>
                <h3 className="text-xl font-semibold font-playfair text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Technology Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Technology Showcase
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cutting-edge technologies that power our manufacturing excellence and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animation="fade-in-left">
              <h3 className="text-3xl font-bold font-playfair text-slate-900 mb-6">
                AI-Powered Manufacturing
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our advanced AI systems optimize production processes in real-time, predicting maintenance needs, 
                quality issues, and efficiency improvements before they impact your operations.
              </p>
              <div className="space-y-4">
                {[
                  'Predictive maintenance algorithms',
                  'Real-time quality monitoring',
                  'Automated process optimization',
                  'Machine learning defect detection'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-600" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div data-animation="fade-in-right" className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: 'Efficiency', value: '98.5%' },
                      { label: 'Uptime', value: '99.2%' },
                      { label: 'Accuracy', value: '99.8%' },
                      { label: 'Speed', value: '3.2x' },
                    ].map((metric, index) => (
                      <div key={index} className="text-center p-4 glass-card rounded-xl">
                        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                        <div className="text-sm text-slate-300">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <Cpu className="w-12 h-12 text-slate-300 mx-auto animate-pulse" />
                    <p className="text-slate-300 mt-4">AI-Powered Analytics Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-animation="fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-slate-900 mb-6">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial consultation to final delivery, our streamlined process ensures 
              exceptional results at every stage.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-slate-300 to-slate-500 hidden lg:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  step: '01',
                  title: 'Consultation & Analysis',
                  description: 'Detailed project analysis and requirement gathering with our engineering team.',
                  icon: Target,
                  duration: '1-2 days'
                },
                {
                  step: '02',
                  title: 'Design & Prototyping',
                  description: 'CAD design development and rapid prototyping for validation and testing.',
                  icon: Settings,
                  duration: '3-5 days'
                },
                {
                  step: '03',
                  title: 'Production Setup',
                  description: 'Tooling preparation, machine programming, and quality system configuration.',
                  icon: Cog,
                  duration: '1-2 weeks'
                },
                {
                  step: '04',
                  title: 'Manufacturing',
                  description: 'Full-scale production with continuous monitoring and quality assurance.',
                  icon: Factory,
                  duration: '2-4 weeks'
                },
                {
                  step: '05',
                  title: 'Quality Control',
                  description: 'Comprehensive testing, inspection, and certification before delivery.',
                  icon: Shield,
                  duration: '2-3 days'
                },
                {
                  step: '06',
                  title: 'Delivery & Support',
                  description: 'Secure packaging, delivery, and ongoing technical support services.',
                  icon: Truck,
                  duration: '1-2 days'
                },
              ].map((process, index) => (
                <div 
                  key={index}
                  data-animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } stagger-${index + 1}`}
                >
                  <div className="lg:w-5/12">
                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                      <div className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full font-bold mb-4 text-sm">
                        Step {process.step}
                      </div>
                      <h3 className="text-2xl font-bold font-playfair text-slate-900 mb-3">
                        {process.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {process.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                        Duration: {process.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group hover:scale-110 duration-300">
                        <process.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute inset-0 bg-slate-600 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>
                  
                  <div className="lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div data-animation="scale-in">
            <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-white mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Join hundreds of companies who trust Moldcraft for their most critical manufacturing needs. 
              Let's discuss how we can elevate your production capabilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full font-semibold text-lg hover:from-slate-600 hover:to-slate-500 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 animate-pulse-glow"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/team"
                className="px-8 py-4 border-2 border-slate-300 text-slate-300 rounded-full font-semibold text-lg hover:bg-slate-300 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Meet Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out forwards;
        }
      `}</style>
    </>
  );
}