import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  EyeIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'hand-detection',
      title: t('projects.items.handDetection.title'),
      description: t('projects.items.handDetection.description'),
      category: t('projects.items.handDetection.category'),
      categoryId: 'ai',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=hand%20detection%20system%20computer%20vision%20AI%20technology%20hand%20tracking%20gesture%20recognition%20modern%20interface&image_size=landscape_4_3',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'MediaPipe', 'NumPy'],
      features: [
        isRTL ? 'كشف اليد في الوقت الفعلي' : 'Real-time hand detection',
        isRTL ? 'تتبع حركات الأصابع' : 'Finger movement tracking',
        isRTL ? 'التعرف على الإيماءات' : 'Gesture recognition',
        isRTL ? 'واجهة مستخدم تفاعلية' : 'Interactive user interface',
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'eye-disease',
      title: t('projects.items.eyeDisease.title'),
      description: t('projects.items.eyeDisease.description'),
      category: t('projects.items.eyeDisease.category'),
      categoryId: 'ai',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=eye%20disease%20detection%20medical%20AI%20deep%20learning%20retinal%20scan%20analysis%20healthcare%20technology&image_size=landscape_4_3',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn'],
      features: [
        isRTL ? 'تشخيص أمراض العين بدقة عالية' : 'High-accuracy eye disease diagnosis',
        isRTL ? 'تحليل صور الشبكية' : 'Retinal image analysis',
        isRTL ? 'نماذج التعلم العميق' : 'Deep learning models',
        isRTL ? 'تقارير طبية مفصلة' : 'Detailed medical reports',
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'image-encryption',
      title: t('projects.items.imageEncryption.title'),
      description: t('projects.items.imageEncryption.description'),
      category: t('projects.items.imageEncryption.category'),
      categoryId: 'security',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=image%20encryption%20cybersecurity%20data%20protection%20cryptography%20secure%20digital%20technology%20lock%20shield&image_size=landscape_4_3',
      technologies: ['Python', 'Cryptography', 'PIL', 'NumPy', 'AES'],
      features: [
        isRTL ? 'تشفير الصور بخوارزميات متقدمة' : 'Advanced image encryption algorithms',
        isRTL ? 'حماية البيانات الحساسة' : 'Sensitive data protection',
        isRTL ? 'واجهة سهلة الاستخدام' : 'User-friendly interface',
        isRTL ? 'دعم تنسيقات متعددة' : 'Multiple format support',
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'text-encryption',
      title: t('projects.items.textEncryption.title'),
      description: t('projects.items.textEncryption.description'),
      category: t('projects.items.textEncryption.category'),
      categoryId: 'security',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=text%20encryption%20cybersecurity%20secure%20messaging%20cryptography%20data%20protection%20digital%20security&image_size=landscape_4_3',
      technologies: ['Python', 'RSA', 'AES', 'Cryptography', 'Tkinter'],
      features: [
        isRTL ? 'تشفير النصوص بطرق متعددة' : 'Multiple text encryption methods',
        isRTL ? 'مفاتيح تشفير قوية' : 'Strong encryption keys',
        isRTL ? 'فك التشفير الآمن' : 'Secure decryption',
        isRTL ? 'حفظ الملفات المشفرة' : 'Encrypted file storage',
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'iot-smart-home',
      title: isRTL ? 'نظام المنزل الذكي' : 'Smart Home System',
      description: isRTL
        ? 'نظام إنترنت الأشياء لإدارة المنزل الذكي والتحكم في الأجهزة'
        : 'IoT system for smart home management and device control',
      category: isRTL ? 'إنترنت الأشياء' : 'Internet of Things',
      categoryId: 'iot',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=smart%20home%20IoT%20system%20connected%20devices%20automation%20modern%20house%20technology%20control%20panel&image_size=landscape_4_3',
      technologies: ['Arduino', 'Raspberry Pi', 'Node.js', 'React', 'MQTT'],
      features: [
        isRTL ? 'التحكم في الإضاءة والمكيفات' : 'Lighting and AC control',
        isRTL ? 'مراقبة الأمان والحماية' : 'Security and protection monitoring',
        isRTL ? 'تطبيق هاتف للتحكم' : 'Mobile app control',
        isRTL ? 'توفير الطاقة الذكي' : 'Smart energy saving',
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'ecommerce-platform',
      title: isRTL ? 'منصة التجارة الإلكترونية' : 'E-commerce Platform',
      description: isRTL
        ? 'منصة تجارة إلكترونية متكاملة مع نظام إدارة المحتوى'
        : 'Complete e-commerce platform with content management system',
      category: isRTL ? 'تطوير الويب' : 'Web Development',
      categoryId: 'web',
      image: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=ecommerce%20platform%20online%20shopping%20website%20modern%20interface%20product%20catalog%20shopping%20cart&image_size=landscape_4_3',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      features: [
        isRTL ? 'إدارة المنتجات والمخزون' : 'Product and inventory management',
        isRTL ? 'نظام دفع آمن' : 'Secure payment system',
        isRTL ? 'لوحة تحكم المدير' : 'Admin dashboard',
        isRTL ? 'تصميم متجاوب' : 'Responsive design',
      ],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = [
    { id: 'all', name: isRTL ? 'جميع المشاريع' : 'All Projects' },
    { id: 'ai', name: isRTL ? 'الذكاء الاصطناعي' : 'Artificial Intelligence' },
    { id: 'security', name: isRTL ? 'الأمن السيبراني' : 'Cybersecurity' },
    { id: 'iot', name: isRTL ? 'إنترنت الأشياء' : 'Internet of Things' },
    { id: 'web', name: isRTL ? 'تطوير الويب' : 'Web Development' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.categoryId === filter);

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
              {t('projects.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('projects.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-secondary-100 text-gray-700 hover:bg-secondary-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card group cursor-pointer hover:shadow-2xl transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                        <EyeIcon className="w-5 h-5 text-primary-900" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-900 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary-100 text-gray-700 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-700" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-primary-900 mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <TagIcon className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">{selectedProject.category}</span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.demoUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      <span>{isRTL ? 'عرض المشروع' : 'View Demo'}</span>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary-100 text-gray-700 rounded-lg hover:bg-secondary-200 transition-colors duration-200"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                      <span>{isRTL ? 'الكود المصدري' : 'Source Code'}</span>
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-4">
                      {t('projects.technologies')}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-900 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-4">
                      {isRTL ? 'الميزات الرئيسية' : 'Key Features'}
                    </h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              {isRTL ? 'هل لديك فكرة مشروع؟' : 'Have a Project Idea?'}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {isRTL
                ? 'تواصل معنا لمناقشة مشروعك القادم وتحويل فكرتك إلى واقع'
                : 'Contact us to discuss your next project and turn your idea into reality'}
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

export default Projects;