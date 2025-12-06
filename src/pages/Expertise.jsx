import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  CpuChipIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const Expertise = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [activeCategory, setActiveCategory] = useState('programming');

  const categories = [
    {
      id: 'programming',
      title: t('expertise.skills.programming.title'),
      icon: CodeBracketIcon,
    },
    {
      id: 'ai',
      title: t('expertise.skills.ai.title'),
      icon: CpuChipIcon,
    },
    {
      id: 'web',
      title: t('expertise.skills.web.title'),
      icon: GlobeAltIcon,
    },
    {
      id: 'mobile',
      title: isRTL ? 'تطبيقات الهاتف' : 'Mobile Apps',
      icon: DevicePhoneMobileIcon,
    },
  ];

  const skills = {
    programming: [
      {
        name: 'PHP & Laravel',
        level: 95,
        description: isRTL
          ? 'تطوير تطبيقات ويب متقدمة باستخدام Laravel'
          : 'Advanced web application development using Laravel',
        icon: '🐘',
      },
      {
        name: 'Python & Django',
        level: 90,
        description: isRTL
          ? 'تطوير تطبيقات الذكاء الاصطناعي وتطبيقات الويب'
          : 'AI applications and web development',
        icon: '🐍',
      },
      {
        name: 'Node.js & Express',
        level: 88,
        description: isRTL
          ? 'تطوير خوادم سريعة وقابلة للتوسع'
          : 'Fast and scalable server development',
        icon: '🟢',
      },
      {
        name: 'JavaScript & TypeScript',
        level: 92,
        description: isRTL
          ? 'تطوير تطبيقات تفاعلية حديثة'
          : 'Modern interactive application development',
        icon: '⚡',
      },
    ],
    ai: [
      {
        name: 'TensorFlow',
        level: 85,
        description: isRTL
          ? 'بناء نماذج التعلم العميق والذكاء الاصطناعي'
          : 'Building deep learning and AI models',
        icon: '🧠',
      },
      {
        name: 'OpenCV',
        level: 80,
        description: isRTL
          ? 'معالجة الصور ورؤية الحاسوب'
          : 'Image processing and computer vision',
        icon: '👁️',
      },
      {
        name: 'Scikit-learn',
        level: 88,
        description: isRTL
          ? 'تطبيقات التعلم الآلي والتحليل التنبؤي'
          : 'Machine learning and predictive analytics',
        icon: '📊',
      },
      {
        name: 'Natural Language Processing',
        level: 75,
        description: isRTL
          ? 'معالجة اللغات الطبيعية وتحليل النصوص'
          : 'Natural language processing and text analysis',
        icon: '💬',
      },
    ],
    web: [
      {
        name: 'React & Next.js',
        level: 93,
        description: isRTL
          ? 'تطوير واجهات مستخدم حديثة ومتجاوبة'
          : 'Modern and responsive user interface development',
        icon: '⚛️',
      },
      {
        name: 'Vue.js & Nuxt.js',
        level: 85,
        description: isRTL
          ? 'تطبيقات ويب تفاعلية وسريعة'
          : 'Interactive and fast web applications',
        icon: '💚',
      },
      {
        name: 'Tailwind CSS',
        level: 90,
        description: isRTL
          ? 'تصميم واجهات مستخدم جميلة ومتجاوبة'
          : 'Beautiful and responsive UI design',
        icon: '🎨',
      },
      {
        name: 'REST & GraphQL APIs',
        level: 87,
        description: isRTL
          ? 'تطوير وتكامل واجهات برمجة التطبيقات'
          : 'API development and integration',
        icon: '🔗',
      },
    ],
    mobile: [
      {
        name: 'React Native',
        level: 82,
        description: isRTL
          ? 'تطبيقات هاتف متعددة المنصات'
          : 'Cross-platform mobile applications',
        icon: '📱',
      },
      {
        name: 'Flutter',
        level: 78,
        description: isRTL
          ? 'تطبيقات هاتف سريعة وجميلة'
          : 'Fast and beautiful mobile apps',
        icon: '🦋',
      },
      {
        name: 'Progressive Web Apps',
        level: 85,
        description: isRTL
          ? 'تطبيقات ويب تعمل مثل تطبيقات الهاتف'
          : 'Web apps that work like mobile apps',
        icon: '🌐',
      },
      {
        name: 'Mobile UI/UX',
        level: 80,
        description: isRTL
          ? 'تصميم تجربة مستخدم محسنة للهاتف'
          : 'Optimized mobile user experience design',
        icon: '✨',
      },
    ],
  };

  const tools = [
    {
      category: isRTL ? 'أدوات التطوير' : 'Development Tools',
      items: ['VS Code', 'Git & GitHub', 'Docker', 'Postman', 'Figma'],
      icon: CogIcon,
    },
    {
      category: isRTL ? 'قواعد البيانات' : 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
      icon: CloudIcon,
    },
    {
      category: isRTL ? 'الأمان والحماية' : 'Security & Protection',
      items: ['JWT', 'OAuth', 'SSL/TLS', 'Encryption', 'Penetration Testing'],
      icon: ShieldCheckIcon,
    },
    {
      category: isRTL ? 'التحليل والمراقبة' : 'Analytics & Monitoring',
      items: ['Google Analytics', 'Sentry', 'New Relic', 'Grafana', 'Prometheus'],
      icon: ChartBarIcon,
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
              {t('expertise.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('expertise.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-secondary-100 text-gray-700 hover:bg-secondary-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills[activeCategory]?.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary-900 mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {isRTL ? 'مستوى الإتقان' : 'Proficiency Level'}
                    </span>
                    <span className="text-sm font-bold text-primary-900">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-primary-900 to-primary-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools & Technologies */}
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
              {t('expertise.technologies.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isRTL
                ? 'الأدوات والتقنيات التي نستخدمها لتقديم حلول متطورة وفعالة'
                : 'Tools and technologies we use to deliver advanced and effective solutions'}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-900 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  {tool.category}
                </h3>
                <div className="space-y-2">
                  {tool.items.map((item, itemIndex) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-secondary-100 rounded-full text-sm text-gray-700 inline-block m-1"
                    >
                      {item}
                    </motion.div>
                  ))}
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
              {isRTL ? 'هل تحتاج خبرتنا في مشروعك؟' : 'Need Our Expertise for Your Project?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {isRTL
                ? 'تواصل معنا لمناقشة كيف يمكن لخبراتنا التقنية أن تساعد في تحقيق أهداف مشروعك'
                : 'Contact us to discuss how our technical expertise can help achieve your project goals'}
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-900 font-semibold rounded-lg hover:bg-secondary-100 transition-all duration-200 shadow-lg"
            >
              {isRTL ? 'ابدأ مشروعك' : 'Start Your Project'}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Expertise;