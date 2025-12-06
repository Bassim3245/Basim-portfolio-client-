import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  LightBulbIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  HeartIcon,
  EyeIcon,
  RocketLaunchIcon,
  UsersIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const values = [
    {
      icon: LightBulbIcon,
      title: t('about.values.innovation'),
      description: isRTL
        ? 'نسعى دائماً لتقديم حلول مبتكرة ومتطورة تواكب أحدث التقنيات'
        : 'We always strive to provide innovative and advanced solutions that keep up with the latest technologies',
    },
    {
      icon: ShieldCheckIcon,
      title: t('about.values.quality'),
      description: isRTL
        ? 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا وخدماتنا'
        : 'We are committed to the highest quality standards in all our projects and services',
    },
    {
      icon: AcademicCapIcon,
      title: t('about.values.education'),
      description: isRTL
        ? 'نؤمن بأهمية التعليم ونقل المعرفة لبناء جيل تقني متميز'
        : 'We believe in the importance of education and knowledge transfer to build an outstanding technical generation',
    },
    {
      icon: HeartIcon,
      title: t('about.values.support'),
      description: isRTL
        ? 'نقدم دعماً فنياً متميزاً ونبني علاقات طويلة الأمد مع عملائنا'
        : 'We provide excellent technical support and build long-term relationships with our clients',
    },
  ];

  const team = [
    {
      name: isRTL ? 'أحمد محمد' : 'Ahmed Mohammed',
      role: isRTL ? 'مطور الذكاء الاصطناعي' : 'AI Developer',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20software%20developer%20portrait%20middle%20eastern%20man%20wearing%20modern%20business%20casual%20shirt%20confident%20smile%20technology%20background&image_size=portrait_4_3',
      expertise: isRTL ? 'Python, TensorFlow, OpenCV' : 'Python, TensorFlow, OpenCV',
    },
    {
      name: isRTL ? 'سارة أحمد' : 'Sarah Ahmed',
      role: isRTL ? 'مطورة الويب' : 'Web Developer',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20software%20developer%20portrait%20middle%20eastern%20woman%20wearing%20modern%20business%20attire%20confident%20smile%20technology%20background&image_size=portrait_4_3',
      expertise: isRTL ? 'React, Node.js, Laravel' : 'React, Node.js, Laravel',
    },
    {
      name: isRTL ? 'محمد علي' : 'Mohammed Ali',
      role: isRTL ? 'مهندس إنترنت الأشياء' : 'IoT Engineer',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20IoT%20engineer%20portrait%20middle%20eastern%20man%20wearing%20modern%20tech%20shirt%20confident%20expression%20electronics%20background&image_size=portrait_4_3',
      expertise: isRTL ? 'Arduino, Raspberry Pi, Sensors' : 'Arduino, Raspberry Pi, Sensors',
    },
  ];

  const achievements = [
    {
      icon: RocketLaunchIcon,
      number: '50+',
      label: isRTL ? 'مشروع مكتمل' : 'Completed Projects',
    },
    {
      icon: UsersIcon,
      number: '100+',
      label: isRTL ? 'عميل راضي' : 'Happy Clients',
    },
    {
      icon: StarIcon,
      number: '5+',
      label: isRTL ? 'سنوات خبرة' : 'Years Experience',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-600 text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('about.subtitle')}
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                {t('about.description')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20tech%20team%20working%20together%20diverse%20group%20of%20developers%20collaborative%20workspace%20multiple%20monitors%20coding%20AI%20projects%20professional%20atmosphere&image_size=landscape_4_3"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-900 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <EyeIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary-900">
                  {t('about.vision.title')}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.vision.description')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-success-500 to-success-600 rounded-lg flex items-center justify-center mr-4">
                  <RocketLaunchIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary-900">
                  {t('about.mission.title')}
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.mission.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? 'القيم التي نؤمن بها وتوجه عملنا في كل مشروع نقوم به'
                : 'The values we believe in and that guide our work in every project we undertake'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-900 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              {isRTL ? 'فريقنا المتميز' : 'Our Outstanding Team'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? 'مجموعة من المطورين والمهندسين المتخصصين في أحدث التقنيات'
                : 'A group of developers and engineers specialized in the latest technologies'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-t from-primary-900/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.expertise}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              {isRTL ? 'إنجازاتنا' : 'Our Achievements'}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {isRTL
                ? 'أرقام تعكس التزامنا بالتميز والجودة في كل ما نقدمه'
                : 'Numbers that reflect our commitment to excellence and quality in everything we offer'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/80 font-medium text-lg">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;