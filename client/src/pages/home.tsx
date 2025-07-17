import { useState } from "react";
import { ArrowRight, Check, Heart, Award, Clock, Star, Phone, MapPin, Mail, Globe, MessageCircle, Menu, X } from "lucide-react";
import { SiFacebook } from "react-icons/si";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleViewMenu = () => {
    // TODO: Implement navigation to menu page or scroll to menu section
    console.log("Navigate to menu");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-playfair font-bold text-bakery-amber">
                Ambata Bakery
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-bakery-amber dark:hover:text-bakery-cream px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&h=1380')"
          }}
          aria-hidden="true"
        />
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" aria-hidden="true" />
        
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight">
              <span className="block mb-2">Freshly Baked</span>
              <span className="text-bakery-cream">Happiness</span>
            </h1>
            
            {/* Subheading */}
            <div className="max-w-2xl mx-auto space-y-4 animate-fade-in animate-delay-300">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                Discover artisan breads, pastries, and sweets crafted with love using traditional methods and the finest ingredients.
              </p>
              <p className="text-base sm:text-lg text-gray-300 font-light">
                Every bite tells a story of passion, quality, and generations of baking expertise.
              </p>
            </div>
            
            {/* Call-to-Action Button */}
            <div className="pt-4 animate-fade-in animate-delay-600">
              <button 
                onClick={handleViewMenu}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-semibold text-bakery-brown bg-bakery-cream rounded-full shadow-2xl transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl hover:bg-white focus:outline-none focus:ring-4 focus:ring-bakery-amber/50 focus:ring-offset-2 focus:ring-offset-transparent"
                style={{
                  transform: isHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)'
                }}
              >
                <span>View Our Menu</span>
                <ArrowRight className={`w-6 h-6 ml-3 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </button>
            </div>
            
            {/* Additional Info Badge */}
            <div className="pt-8 animate-fade-in animate-delay-900">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white">
                <Check className="w-5 h-5 mr-2 text-bakery-cream" />
                <span className="text-sm font-medium">Fresh daily • Local ingredients • Family recipes since 1952</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-bakery-cream/10 rounded-full blur-xl animate-pulse hidden lg:block" aria-hidden="true" />
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-bakery-amber/10 rounded-full blur-2xl animate-pulse hidden lg:block animate-delay-1000" aria-hidden="true" />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
                  alt="Ambata Bakery interior showing warm wooden shelves filled with freshly baked breads and pastries"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-bakery-amber" />
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">Award Winner</div>
                    <div className="text-gray-500 dark:text-gray-400">2023 Best Local Bakery</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-bakery-amber" />
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">70+ Years</div>
                    <div className="text-gray-500 dark:text-gray-400">Serving the Community</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-bakery-cream/20 dark:bg-bakery-amber/20 rounded-full">
                  <Heart className="w-4 h-4 mr-2 text-bakery-amber" />
                  <span className="text-sm font-medium text-bakery-brown dark:text-bakery-cream">Our Story</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white leading-tight">
                  About <span className="text-bakery-amber">Ambata Bakery</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Nestled in the heart of our beloved community, Ambata Bakery has been a cornerstone of warmth and tradition since 1952. What started as a small family dream has blossomed into a cherished local institution, where the aroma of freshly baked bread greets you each morning.
                </p>
                
                <p>
                  Our master bakers begin their craft before dawn, kneading dough with the same time-honored techniques passed down through three generations. From our signature sourdough that takes 18 hours to perfect, to delicate French pastries that would make Paris proud, every item is created with meticulous attention to detail and an unwavering commitment to quality.
                </p>
                
                <p>
                  We source our ingredients from local farms whenever possible, supporting our community while ensuring the freshest flavors in every bite. Our wood-fired ovens, original to the bakery, impart a distinctive character that simply cannot be replicated by modern equipment.
                </p>
                
                <p className="text-bakery-amber font-medium">
                  At Ambata Bakery, we don't just bake bread – we create memories, foster community, and continue a legacy of love that you can taste in every single bite.
                </p>
              </div>
              
              {/* Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-bakery-amber/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-bakery-amber" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Artisan Techniques</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-bakery-amber/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-bakery-amber" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Local Ingredients</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-bakery-amber/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-bakery-amber" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Family Recipes</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-bakery-amber/20 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-bakery-amber" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Wood-fired Ovens</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-bakery-amber/20 dark:bg-bakery-amber/30 rounded-full">
              <Star className="w-4 h-4 mr-2 text-bakery-amber" />
              <span className="text-sm font-medium text-bakery-brown dark:text-bakery-cream">Featured Items</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white">
              Our <span className="text-bakery-amber">Signature Menu</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each item is lovingly crafted using traditional techniques and the finest ingredients, 
              creating flavors that have delighted our community for generations.
            </p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Menu Item 1 - Champagne Bread */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Golden champagne bread with soft texture and rich flavor"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-bakery-amber text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Signature
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white">Champagne Bread</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  A premium enriched bread with a golden color and delicate sweetness. 
                  Perfect for special occasions or as a luxurious everyday treat.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-bakery-amber">350 SSP</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 2 - Donuts Chocolate */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                  alt="Fresh chocolate donuts with rich chocolate glaze"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white">Donuts Chocolate</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Fluffy, cake-style donuts covered in rich chocolate glaze. 
                  Made fresh daily and perfect with your morning coffee.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-bakery-amber">150 SSP</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 3 - Plain Croissant */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab794f687c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
                  alt="Classic plain croissant with golden flaky layers"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Classic
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white">Plain Croissant</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Traditional French croissant with buttery, flaky layers. 
                  Simple perfection that pairs beautifully with jam or enjoyed on its own.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-bakery-amber">200 SSP</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 4 - Large Baguette */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Fresh large baguette with crispy crust and soft interior"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Fresh Daily
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white">Large Baguette</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Authentic French baguette with a crusty exterior and airy interior. 
                  Perfect for sandwiches or sharing with family.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-bakery-amber">400 SSP</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 5 - Round Bread */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Traditional round bread loaf with golden crust"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Traditional
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white">Round Bread</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Classic round bread loaf with a hearty texture and golden crust. 
                  Perfect for meals and made with traditional baking methods.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-bakery-amber">300 SSP</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Item 6 - Customized Cakes */}
            <div className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1139&q=80"
                  alt="Beautiful customized celebration cake with decorative elements"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Custom Order
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white">Customized Cakes</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Personalized cakes for birthdays, weddings, and special occasions. 
                  Custom designs, flavors, and decorations to make your celebration perfect.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-bold text-bakery-amber">From 1500 SSP</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* View Full Menu Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-bakery-amber text-white font-semibold rounded-full hover:bg-bakery-brown transition-colors duration-300 shadow-lg hover:shadow-xl">
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-bakery-amber/20 dark:bg-bakery-amber/30 rounded-full">
              <MapPin className="w-4 h-4 mr-2 text-bakery-amber" />
              <span className="text-sm font-medium text-bakery-brown dark:text-bakery-cream">Visit Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 dark:text-white">
              Find <span className="text-bakery-amber">Ambata Bakery</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Come visit us at our warm and welcoming bakery. We're always excited to serve you 
              fresh baked goods and share stories about our craft.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <div className="w-12 h-12 bg-bakery-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-bakery-amber" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Rock City<br />
                      Juba, South Sudan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <div className="w-12 h-12 bg-bakery-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-bakery-amber" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+211920022649" className="hover:text-bakery-amber transition-colors">
                        +211 920 022 649
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Call ahead for large orders or special requests
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <div className="w-12 h-12 bg-bakery-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-bakery-amber" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:ambatabakery.yambeco@gmail.com" className="hover:text-bakery-amber transition-colors">
                        ambatabakery.yambeco@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <div className="w-12 h-12 bg-bakery-amber/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-bakery-amber" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="https://ambatabakery.com" className="hover:text-bakery-amber transition-colors">
                        www.ambatabakery.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Daily updates on fresh items and specials
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-bakery-cream/10 dark:bg-bakery-amber/10 rounded-2xl p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-bakery-amber" />
                  <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white">Opening Hours</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Monday - Friday</span>
                    <span className="text-bakery-amber font-semibold">6:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Saturday</span>
                    <span className="text-bakery-amber font-semibold">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Sunday</span>
                    <span className="text-bakery-amber font-semibold">7:00 AM - 6:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong className="text-bakery-amber">Fresh breads</strong> available from opening time. 
                    <strong className="text-bakery-amber">Pastries</strong> ready by 7:00 AM daily.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="relative">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1234567890123!2d31.58203931540231!3d4.859679296623456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMzQuOCJOIDMxwrAzNCc1NS4zIkU!5e0!3m2!1sen!2sss!4v1640995200000!5m2!1sen!2sss"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ambata Bakery Location - Rock City, Juba, South Sudan"
                  className="w-full h-full"
                />
              </div>
              
              {/* Map Overlay Info */}
              <div className="absolute top-6 left-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 max-w-xs">
                <h4 className="font-playfair font-bold text-gray-900 dark:text-white mb-2">Ambata Bakery</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Rock City, Juba</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Open Now</span>
                </div>
              </div>
              
              {/* Directions Button */}
              <div className="absolute bottom-6 right-6">
                <a
                  href="https://www.google.com/maps/search/Rock+City+Juba+South+Sudan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-bakery-amber text-white font-semibold rounded-full hover:bg-bakery-brown transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
                Planning a Visit?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                We recommend visiting in the morning for the freshest selection. Weekends can be busy, 
                so consider calling ahead for special orders or if you need items for a specific time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+211920022649"
                  className="inline-flex items-center px-6 py-3 bg-bakery-amber text-white font-semibold rounded-full hover:bg-bakery-brown transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Order
                </a>
                <a
                  href="mailto:ambatabakery.yambeco@gmail.com"
                  className="inline-flex items-center px-6 py-3 border-2 border-bakery-amber text-bakery-amber font-semibold rounded-full hover:bg-bakery-amber hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/211920022649?text=Hello%20Ambata%20Bakery!%20I%20would%20like%20to%20make%20an%20inquiry%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          {/* WhatsApp Icon */}
          <div className="flex items-center justify-center w-14 h-14 rounded-full">
            <MessageCircle className="w-7 h-7" />
          </div>
          
          {/* Text Label (appears on hover) */}
          <div className="hidden group-hover:flex items-center pr-4 pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm font-semibold whitespace-nowrap">Chat on WhatsApp</span>
          </div>
        </a>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 pointer-events-none"></div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            
            {/* Brand Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-playfair font-bold text-bakery-cream mb-2">Ambata Bakery</h3>
              <p className="text-gray-400">Freshly baked happiness since 1952</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <a
                href="https://web.facebook.com/profile.php?id=61551453487820"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="Follow Ambata Bakery on Facebook"
              >
                <SiFacebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Ambata Bakery. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Rock City, Juba, South Sudan</span>
                <span>•</span>
                <a href="tel:+211920022649" className="hover:text-bakery-cream transition-colors">
                  +211 920 022 649
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
