import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  CpuChipIcon,
  GlobeAltIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      icon: CpuChipIcon,
      title: t('expertise.skills.ai.title'),
      description: t('expertise.skills.ai.description'),
    },
    {
      icon: GlobeAltIcon,
      title: t('expertise.skills.iot.title'),
      description: t('expertise.skills.iot.description'),
    },
    {
      icon: AcademicCapIcon,
      title: t('services.education.title'),
      description: t('services.education.description'),
    },
  ];

  const stats = [
    { number: '50+', label: isRTL ? 'مشروع مكتمل' : 'Completed Projects' },
    { number: '100+', label: isRTL ? 'عميل راضي' : 'Happy Clients' },
    { number: '5+', label: isRTL ? 'سنوات خبرة' : 'Years Experience' },
    { number: '24/7', label: isRTL ? 'دعم فني' : 'Technical Support' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white section-padding min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6"
              >
                <SparklesIcon className="w-4 h-4 mr-2" />
                {isRTL ? 'حلول تقنية متطورة' : 'Advanced Technical Solutions'}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              >
                {t('hero.title')}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-white/90 mb-8 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-lg hover:bg-secondary-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {t('hero.cta')}
                  <ArrowRightIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                </Link>
                
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-900 transition-all duration-200"
                >
                  <PlayIcon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('hero.learnMore')}
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20technology%20workspace%20with%20multiple%20monitors%20showing%20code%20AI%20algorithms%20and%20IoT%20devices%20professional%20lighting%20blue%20and%20white%20color%20scheme%20high%20tech%20atmosphere&image_size=landscape_4_3"
                  alt="Technology Workspace"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-success-500/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full hidden lg:block"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-12 h-12 bg-success-500/20 rounded-full hidden lg:block"
        ></motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {isRTL ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? 'نقدم حلولاً تقنية متطورة ومبتكرة تلبي احتياجاتك وتحقق أهدافك'
                : 'We provide advanced and innovative technical solutions that meet your needs and achieve your goals'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-900 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isRTL ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {isRTL
                ? 'تواصل معنا اليوم ودعنا نساعدك في تحويل أفكارك إلى واقع تقني مبهر'
                : 'Contact us today and let us help you turn your ideas into impressive technical reality'}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-lg hover:bg-secondary-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {t('nav.contact')}
              <ArrowRightIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;