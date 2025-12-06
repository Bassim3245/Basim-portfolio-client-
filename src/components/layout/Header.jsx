import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isRTL = i18n.language === 'ar';

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.expertise'), href: '/expertise' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <div className="w-10 h-10 bg-gradient-to-r from-primary-900 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <span className="text-xl font-bold text-primary-900">
                {isRTL ? 'موقع الشركة' : 'Company Portfolio'}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                    isActive(item.href)
                      ? 'text-primary-900 border-b-2 border-primary-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Language Switcher */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={toggleLanguage}
              className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'} px-3 py-2 rounded-lg bg-secondary-100 hover:bg-secondary-200 transition-colors duration-200`}
            >
              <LanguageIcon className="w-4 h-4" />
              <span className="text-sm font-medium">{t('nav.language')}</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 border-t border-secondary-200"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary-600 ${
                    isActive(item.href) ? 'text-primary-900' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200`}
              >
                <LanguageIcon className="w-4 h-4" />
                <span>{t('nav.language')}</span>
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;