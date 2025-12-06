import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  AcademicCapIcon,
  CogIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  UserGroupIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const mainServices = [
    {
      id: 'education',
      icon: AcademicCapIcon,
      title: t('services.education.title'),
      description: t('services.education.description'),
      features: t('services.education.features', { returnObjects: true }),
      color: 'from-blue-500 to-blue-600',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=online%20education%20technology%20students%20learning%20programming%20on%20laptops%20modern%20classroom%20interactive%20learning%20environment&image_size=landscape_4_3',
    },
    {
      id: 'custom',
      icon: CogIcon,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      features: t('services.custom.features', { returnObjects: true }),
      color: 'from-purple-500 to-purple-600',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=custom%20software%20development%20team%20working%20on%20AI%20projects%20modern%20office%20multiple%20monitors%20coding%20collaboration&image_size=landscape_4_3',
    },
  ];

  const additionalServices = [
    {
      icon: LightBulbIcon,
      title: isRTL ? 'الاستشارات التقنية' : 'Technical Consulting',
      description: isRTL
        ? 'نقدم استشارات تقنية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة'
        : 'We provide specialized technical consulting to help you make the right decisions',
    },
    {
      icon: RocketLaunchIcon,
      title: isRTL ? 'تطوير المنتجات' : 'Product Development',
      description: isRTL
        ? 'من الفكرة إلى المنتج النهائي، نساعدك في تطوير منتجك التقني'
        : 'From idea to final product, we help you develop your technical product',
    },
    {
      icon: UserGroupIcon,
      title: isRTL ? 'التدريب المؤسسي' : 'Corporate Training',
      description: isRTL
        ? 'برامج تدريبية مخصصة للشركات لتطوير مهارات فرقها التقنية'
        : 'Customized training programs for companies to develop their technical teams skills',
    },
    {
      icon: ClockIcon,
      title: isRTL ? 'الدعم الفني' : 'Technical Support',
      description: isRTL
        ? 'دعم فني متواصل لضمان استمرارية عمل أنظمتك التقنية'
        : 'Continuous technical support to ensure the continuity of your technical systems',
    },
  ];

  const process = [
    {
      step: '01',
      title: isRTL ? 'التشاور والتحليل' : 'Consultation & Analysis',
      description: isRTL
        ? 'نبدأ بفهم احتياجاتك وتحليل متطلبات مشروعك بدقة'
        : 'We start by understanding your needs and accurately analyzing your project requirements',
    },
    {
      step: '02',
      title: isRTL ? 'التخطيط والتصميم' : 'Planning & Design',
      description: isRTL
        ? 'نضع خطة مفصلة ونصمم الحل الأمثل لتحقيق أهدافك'
        : 'We create a detailed plan and design the optimal solution to achieve your goals',
    },
    {
      step: '03',
      title: isRTL ? 'التطوير والتنفيذ' : 'Development & Implementation',
      description: isRTL
        ? 'نطور الحل باستخدام أحدث التقنيات ونضمن جودة عالية'
        : 'We develop the solution using the latest technologies and ensure high quality',
    },
    {
      step: '04',
      title: isRTL ? 'الاختبار والتسليم' : 'Testing & Delivery',
      description: isRTL
        ? 'نختبر الحل بدقة ونسلمه مع التدريب والدعم المطلوب'
        : 'We thoroughly test the solution and deliver it with the required training and support',
    },
  ];

  const testimonials = [
    {
      name: isRTL ? 'أحمد السعيد' : 'Ahmed Al-Saeed',
      role: isRTL ? 'مدير تقنية المعلومات' : 'IT Manager',
      company: isRTL ? 'شركة التقنيات المتقدمة' : 'Advanced Technologies Co.',
      content: isRTL
        ? 'فريق محترف ومتميز، ساعدونا في تطوير نظام إدارة متطور وفعال'
        : 'Professional and outstanding team, they helped us develop an advanced and efficient management system',
      rating: 5,
    },
    {
      name: isRTL ? 'فاطمة محمد' : 'Fatima Mohammed',
      role: isRTL ? 'مؤسسة شركة ناشئة' : 'Startup Founder',
      company: isRTL ? 'تطبيق التعليم الذكي' : 'Smart Learning App',
      content: isRTL
        ? 'تجربة رائعة في تطوير تطبيق الهاتف، النتيجة فاقت توقعاتنا'
        : 'Amazing experience in mobile app development, the result exceeded our expectations',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-600 text-white section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircleIcon className="w-6 h-6 text-success-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all duration-200 transform hover:scale-105"
                  >
                    {t('services.cta')}
                    <ArrowRightIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                  </Link>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer">
                        <PlayCircleIcon className="w-8 h-8 text-primary-900" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
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
              {isRTL ? 'خدمات إضافية' : 'Additional Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? 'مجموعة شاملة من الخدمات التقنية لتلبية جميع احتياجاتك'
                : 'A comprehensive range of technical services to meet all your needs'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-900 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {isRTL ? 'كيف نعمل' : 'How We Work'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? 'عملية منهجية ومدروسة لضمان نجاح مشروعك'
                : 'A systematic and thoughtful process to ensure the success of your project'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-900 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRTL ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {isRTL
                ? 'تجارب حقيقية من عملائنا الذين حققوا النجاح معنا'
                : 'Real experiences from our clients who achieved success with us'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/70 text-sm">
                    {testimonial.role} - {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-success-500 to-success-600 text-white">
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
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-success-600 font-semibold rounded-lg hover:bg-secondary-100 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {isRTL ? 'ابدأ الآن' : 'Get Started Now'}
              <ArrowRightIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;