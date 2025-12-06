import React, { useState } from 'react';
import { 
  Building2,
  Users,
  Target,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Save,
  X,
  Camera,
  Star,
  TrendingUp,
  Heart,
  Shield
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Company information data
const initialCompanyInfo = {
  name: 'شركة التقنيات المتقدمة',
  nameEn: 'Advanced Technologies Company',
  description: 'شركة رائدة في مجال تطوير البرمجيات والحلول التقنية المبتكرة. نقدم خدمات متميزة في تطوير المواقع والتطبيقات والاستشارات التقنية.',
  descriptionEn: 'A leading company in software development and innovative technical solutions. We provide excellent services in web development, applications, and technical consulting.',
  vision: 'أن نكون الشركة الرائدة في المنطقة في تقديم الحلول التقنية المبتكرة والمتطورة.',
  visionEn: 'To be the leading company in the region in providing innovative and advanced technical solutions.',
  mission: 'نسعى لتقديم أفضل الخدمات التقنية لعملائنا من خلال فريق متخصص وتقنيات حديثة.',
  missionEn: 'We strive to provide the best technical services to our clients through a specialized team and modern technologies.',
  foundedYear: 2018,
  employeesCount: 25,
  projectsCompleted: 150,
  clientsSatisfaction: 98,
  address: 'الرياض، المملكة العربية السعودية',
  addressEn: 'Riyadh, Saudi Arabia',
  phone: '+966 11 123 4567',
  email: 'info@advancedtech.sa',
  website: 'www.advancedtech.sa',
  socialMedia: {
    twitter: '@advancedtech_sa',
    linkedin: 'advanced-technologies-sa',
    instagram: 'advancedtech.sa'
  },
  logo: '/logo.png',
  coverImage: '/company-cover.jpg'
};

const teamMembers = [
  {
    id: 1,
    name: 'أحمد محمد الأحمد',
    nameEn: 'Ahmed Mohammed Al-Ahmed',
    position: 'المدير التنفيذي',
    positionEn: 'CEO',
    image: '/team/ceo.jpg',
    experience: '10+ سنوات',
    specialization: 'إدارة الأعمال والتطوير الاستراتيجي',
    email: 'ahmed@advancedtech.sa',
    linkedin: 'ahmed-mohammed'
  },
  {
    id: 2,
    name: 'فاطمة علي السعد',
    nameEn: 'Fatima Ali Al-Saad',
    position: 'مديرة التطوير',
    positionEn: 'Development Manager',
    image: '/team/dev-manager.jpg',
    experience: '8+ سنوات',
    specialization: 'تطوير البرمجيات وإدارة الفرق',
    email: 'fatima@advancedtech.sa',
    linkedin: 'fatima-ali'
  },
  {
    id: 3,
    name: 'محمد خالد الرشيد',
    nameEn: 'Mohammed Khalid Al-Rashid',
    position: 'مطور أول',
    positionEn: 'Senior Developer',
    image: '/team/senior-dev.jpg',
    experience: '6+ سنوات',
    specialization: 'React.js, Node.js, MongoDB',
    email: 'mohammed@advancedtech.sa',
    linkedin: 'mohammed-khalid'
  },
  {
    id: 4,
    name: 'سارة أحمد العتيبي',
    nameEn: 'Sara Ahmed Al-Otaibi',
    position: 'مصممة UI/UX',
    positionEn: 'UI/UX Designer',
    image: '/team/designer.jpg',
    experience: '5+ سنوات',
    specialization: 'تصميم واجهات المستخدم وتجربة المستخدم',
    email: 'sara@advancedtech.sa',
    linkedin: 'sara-ahmed'
  }
];

const achievements = [
  {
    id: 1,
    title: 'أفضل شركة تقنية ناشئة',
    titleEn: 'Best Tech Startup',
    year: 2023,
    organization: 'جائزة التقنية السعودية',
    organizationEn: 'Saudi Tech Award',
    icon: 'Award'
  },
  {
    id: 2,
    title: 'شهادة الجودة ISO 9001',
    titleEn: 'ISO 9001 Quality Certificate',
    year: 2022,
    organization: 'المنظمة الدولية للمعايير',
    organizationEn: 'International Organization for Standardization',
    icon: 'Shield'
  },
  {
    id: 3,
    title: 'أسرع نمو في القطاع',
    titleEn: 'Fastest Growing in Sector',
    year: 2023,
    organization: 'مجلة الأعمال التقنية',
    organizationEn: 'Tech Business Magazine',
    icon: 'TrendingUp'
  }
];

const values = [
  {
    id: 1,
    title: 'الابتكار',
    titleEn: 'Innovation',
    description: 'نسعى دائماً لتقديم حلول مبتكرة ومتطورة',
    descriptionEn: 'We always strive to provide innovative and advanced solutions',
    icon: 'Star'
  },
  {
    id: 2,
    title: 'الجودة',
    titleEn: 'Quality',
    description: 'نلتزم بأعلى معايير الجودة في جميع أعمالنا',
    descriptionEn: 'We commit to the highest quality standards in all our work',
    icon: 'Award'
  },
  {
    id: 3,
    title: 'العمل الجماعي',
    titleEn: 'Teamwork',
    description: 'نؤمن بقوة العمل الجماعي والتعاون',
    descriptionEn: 'We believe in the power of teamwork and collaboration',
    icon: 'Users'
  },
  {
    id: 4,
    title: 'رضا العملاء',
    titleEn: 'Customer Satisfaction',
    description: 'رضا عملائنا هو أولويتنا الأولى',
    descriptionEn: 'Customer satisfaction is our top priority',
    icon: 'Heart'
  }
];

export function About() {
  const [companyInfo, setCompanyInfo] = useState(initialCompanyInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [editedInfo, setEditedInfo] = useState(companyInfo);

  const handleEdit = () => {
    setEditedInfo(companyInfo);
    setIsEditing(true);
  };

  const handleSave = () => {
    setCompanyInfo(editedInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedInfo(companyInfo);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getIcon = (iconName) => {
    const icons = {
      Award,
      Shield,
      TrendingUp,
      Star,
      Users,
      Heart
    };
    return icons[iconName] || Award;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            معلومات الشركة
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            إدارة وتحديث معلومات الشركة والفريق
          </p>
        </div>
        {!isEditing ? (
          <Button onClick={handleEdit} className="flex items-center gap-2">
            <Edit className="h-4 w-4" />
            تعديل المعلومات
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              حفظ
            </Button>
            <Button onClick={handleCancel} variant="outline" className="flex items-center gap-2">
              <X className="h-4 w-4" />
              إلغاء
            </Button>
          </div>
        )}
      </div>

      {/* Company Overview */}
      <Card className="overflow-hidden">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-end gap-4">
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-lg">
                <Building2 className="h-10 w-10 text-blue-600" />
              </div>
              <div className="flex-1">
                {isEditing ? (
                  <input
                    type="text"
                    value={editedInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="text-2xl font-bold text-white bg-transparent border-b border-white/50 focus:border-white outline-none"
                    dir="rtl"
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-white">
                    {companyInfo.name}
                  </h2>
                )}
                <p className="text-white/90 text-sm">
                  تأسست عام {companyInfo.foundedYear}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                نبذة عن الشركة
              </h3>
              {isEditing ? (
                <textarea
                  value={editedInfo.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
                  dir="rtl"
                />
              ) : (
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {companyInfo.description}
                </p>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                معلومات التواصل
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      dir="rtl"
                    />
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400">
                      {companyInfo.address}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400">
                      {companyInfo.phone}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400">
                      {companyInfo.email}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedInfo.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400">
                      {companyInfo.website}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {new Date().getFullYear() - companyInfo.foundedYear}+
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            سنوات من الخبرة
          </p>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {companyInfo.employeesCount}+
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            موظف متخصص
          </p>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {companyInfo.projectsCompleted}+
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            مشروع مكتمل
          </p>
        </Card>
        
        <Card className="p-6 text-center">
          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Star className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {companyInfo.clientsSatisfaction}%
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            رضا العملاء
          </p>
        </Card>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              رؤيتنا
            </h3>
          </div>
          {isEditing ? (
            <textarea
              value={editedInfo.vision}
              onChange={(e) => handleInputChange('vision', e.target.value)}
              className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
              dir="rtl"
            />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {companyInfo.vision}
            </p>
          )}
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              رسالتنا
            </h3>
          </div>
          {isEditing ? (
            <textarea
              value={editedInfo.mission}
              onChange={(e) => handleInputChange('mission', e.target.value)}
              className="w-full h-20 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
              dir="rtl"
            />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {companyInfo.mission}
            </p>
          )}
        </Card>
      </div>

      {/* Values */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          قيمنا
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const IconComponent = getIcon(value.icon);
            return (
              <div key={value.id} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Team */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          فريق العمل
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="h-12 w-12 text-gray-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h4>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                {member.position}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                {member.experience}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {member.specialization}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          الإنجازات والجوائز
        </h3>
        <div className="space-y-4">
          {achievements.map((achievement) => {
            const IconComponent = getIcon(achievement.icon);
            return (
              <div key={achievement.id} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.organization} - {achievement.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}