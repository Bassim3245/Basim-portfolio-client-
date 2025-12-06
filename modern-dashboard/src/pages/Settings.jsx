import React, { useState } from 'react';
import { 
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Database,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  AlertTriangle,
  Check,
  Moon,
  Sun,
  Monitor
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

// Settings data structure
const initialSettings = {
  profile: {
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966501234567',
    avatar: '',
    bio: 'مطور برمجيات متخصص في تطوير المواقع والتطبيقات',
    company: 'شركة التقنيات المتقدمة',
    position: 'مطور أول'
  },
  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    projectUpdates: true,
    messageAlerts: true,
    systemAlerts: true,
    weeklyReports: true,
    marketingEmails: false
  },
  appearance: {
    theme: 'system', // light, dark, system
    language: 'ar',
    fontSize: 'medium',
    sidebarCollapsed: false,
    compactMode: false
  },
  security: {
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiry: 90,
    loginAlerts: true,
    deviceTracking: true
  },
  system: {
    autoBackup: true,
    backupFrequency: 'daily',
    dataRetention: 365,
    debugMode: false,
    analyticsEnabled: true
  }
};

export function Settings() {
  const [settings, setSettings] = useState(initialSettings);
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const tabs = [
    { id: 'profile', label: 'الملف الشخصي', icon: User },
    { id: 'notifications', label: 'الإشعارات', icon: Bell },
    { id: 'appearance', label: 'المظهر', icon: Palette },
    { id: 'security', label: 'الأمان', icon: Shield },
    { id: 'system', label: 'النظام', icon: Database }
  ];

  const handleSettingChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const handleSaveSettings = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSaving(false);
    alert('تم حفظ الإعدادات بنجاح!');
  };

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    if (newPassword.length < 8) {
      alert('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
      return;
    }
    // Here you would typically send to backend
    alert('تم تغيير كلمة المرور بنجاح!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleExportData = () => {
    // Simulate data export
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dashboard-settings.json';
    link.click();
  };

  const handleResetSettings = () => {
    if (window.confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات؟')) {
      setSettings(initialSettings);
      alert('تم إعادة تعيين الإعدادات بنجاح!');
    }
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      {/* Avatar */}
      <div className="flex items-center gap-6">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
          <User className="h-12 w-12 text-muted-foreground" />
        </div>
        <div>
          <Button variant="outline" className="mb-2">
            <Upload className="h-4 w-4 mr-2" />
            تحميل صورة
          </Button>
          <p className="text-sm text-muted-foreground">
            JPG أو PNG. الحد الأقصى 2MB
          </p>
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            الاسم الكامل
          </label>
          <input
            type="text"
            value={settings.profile.name}
            onChange={(e) => handleSettingChange('profile', 'name', e.target.value)}
            className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            dir="rtl"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            value={settings.profile.email}
            onChange={(e) => handleSettingChange('profile', 'email', e.target.value)}
            className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            dir="rtl"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            رقم الهاتف
          </label>
          <input
            type="tel"
            value={settings.profile.phone}
            onChange={(e) => handleSettingChange('profile', 'phone', e.target.value)}
            className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            dir="rtl"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            الشركة
          </label>
          <input
            type="text"
            value={settings.profile.company}
            onChange={(e) => handleSettingChange('profile', 'company', e.target.value)}
            className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            dir="rtl"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            المنصب
          </label>
          <input
            type="text"
            value={settings.profile.position}
            onChange={(e) => handleSettingChange('profile', 'position', e.target.value)}
            className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            dir="rtl"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          نبذة شخصية
        </label>
        <textarea
          value={settings.profile.bio}
          onChange={(e) => handleSettingChange('profile', 'bio', e.target.value)}
          rows={4}
          className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground resize-none"
          dir="rtl"
        />
      </div>

      {/* Password Change */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          تغيير كلمة المرور
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              كلمة المرور الحالية
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-3 pr-10 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              كلمة المرور الجديدة
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              تأكيد كلمة المرور
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            />
          </div>
          
          <Button onClick={handlePasswordChange} className="w-full">
            تغيير كلمة المرور
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      {Object.entries({
        emailNotifications: 'إشعارات البريد الإلكتروني',
        pushNotifications: 'الإشعارات المنبثقة',
        smsNotifications: 'إشعارات الرسائل النصية',
        projectUpdates: 'تحديثات المشاريع',
        messageAlerts: 'تنبيهات الرسائل',
        systemAlerts: 'تنبيهات النظام',
        weeklyReports: 'التقارير الأسبوعية',
        marketingEmails: 'رسائل التسويق'
      }).map(([key, label]) => (
        <div key={key} className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div>
            <h4 className="font-medium text-foreground">{label}</h4>
            <p className="text-sm text-muted-foreground">
              {key === 'emailNotifications' && 'استقبال الإشعارات عبر البريد الإلكتروني'}
              {key === 'pushNotifications' && 'إشعارات فورية في المتصفح'}
              {key === 'smsNotifications' && 'إشعارات عبر الرسائل النصية'}
              {key === 'projectUpdates' && 'تحديثات حالة المشاريع'}
              {key === 'messageAlerts' && 'تنبيهات الرسائل الجديدة'}
              {key === 'systemAlerts' && 'تنبيهات النظام والأخطاء'}
              {key === 'weeklyReports' && 'تقارير أسبوعية عن الأداء'}
              {key === 'marketingEmails' && 'رسائل ترويجية وتسويقية'}
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.notifications[key]}
              onChange={(e) => handleSettingChange('notifications', key, e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      ))}
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      {/* Theme */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">
          المظهر
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { value: 'light', label: 'فاتح', icon: Sun },
            { value: 'dark', label: 'داكن', icon: Moon },
            { value: 'system', label: 'النظام', icon: Monitor }
          ].map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => handleSettingChange('appearance', 'theme', value)}
              className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-colors ${
                settings.appearance.theme === value
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-border/80'
              }`}
            >
              <Icon className="h-6 w-6" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Language */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          اللغة
        </label>
        <select
          value={settings.appearance.language}
          onChange={(e) => handleSettingChange('appearance', 'language', e.target.value)}
          className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
        >
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Font Size */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          حجم الخط
        </label>
        <select
          value={settings.appearance.fontSize}
          onChange={(e) => handleSettingChange('appearance', 'fontSize', e.target.value)}
          className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
        >
          <option value="small">صغير</option>
          <option value="medium">متوسط</option>
          <option value="large">كبير</option>
        </select>
      </div>

      {/* Other Appearance Options */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div>
            <h4 className="font-medium text-foreground">الشريط الجانبي المطوي</h4>
            <p className="text-sm text-muted-foreground">إخفاء الشريط الجانبي افتراضياً</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.appearance.sidebarCollapsed}
              onChange={(e) => handleSettingChange('appearance', 'sidebarCollapsed', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div>
            <h4 className="font-medium text-foreground">الوضع المضغوط</h4>
            <p className="text-sm text-muted-foreground">تقليل المسافات والحشو</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.appearance.compactMode}
              onChange={(e) => handleSettingChange('appearance', 'compactMode', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      {/* Two Factor Auth */}
      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div>
          <h4 className="font-medium text-gray-900 dark:text-white">المصادقة الثنائية</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">طبقة حماية إضافية لحسابك</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={settings.security.twoFactorAuth}
            onChange={(e) => handleSettingChange('security', 'twoFactorAuth', e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
      </div>

      {/* Session Timeout */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          انتهاء الجلسة (بالدقائق)
        </label>
        <select
          value={settings.security.sessionTimeout}
          onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
          className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
        >
          <option value={15}>15 دقيقة</option>
          <option value={30}>30 دقيقة</option>
          <option value={60}>ساعة واحدة</option>
          <option value={120}>ساعتان</option>
          <option value={480}>8 ساعات</option>
        </select>
      </div>

      {/* Password Expiry */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          انتهاء صلاحية كلمة المرور (بالأيام)
        </label>
        <select
          value={settings.security.passwordExpiry}
          onChange={(e) => handleSettingChange('security', 'passwordExpiry', parseInt(e.target.value))}
          className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
        >
          <option value={30}>30 يوم</option>
          <option value={60}>60 يوم</option>
          <option value={90}>90 يوم</option>
          <option value={180}>180 يوم</option>
          <option value={365}>سنة واحدة</option>
        </select>
      </div>

      {/* Security Alerts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div>
            <h4 className="font-medium text-foreground">تنبيهات تسجيل الدخول</h4>
            <p className="text-sm text-muted-foreground">إشعار عند تسجيل دخول جديد</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.security.loginAlerts}
              onChange={(e) => handleSettingChange('security', 'loginAlerts', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div>
            <h4 className="font-medium text-foreground">تتبع الأجهزة</h4>
            <p className="text-sm text-muted-foreground">تتبع الأجهزة المستخدمة للدخول</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.security.deviceTracking}
              onChange={(e) => handleSettingChange('security', 'deviceTracking', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      {/* Backup Settings */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          النسخ الاحتياطي
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div>
              <h4 className="font-medium text-foreground">النسخ الاحتياطي التلقائي</h4>
              <p className="text-sm text-muted-foreground">إنشاء نسخ احتياطية تلقائياً</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.system.autoBackup}
                onChange={(e) => handleSettingChange('system', 'autoBackup', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              تكرار النسخ الاحتياطي
            </label>
            <select
              value={settings.system.backupFrequency}
              onChange={(e) => handleSettingChange('system', 'backupFrequency', e.target.value)}
              className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            >
              <option value="hourly">كل ساعة</option>
              <option value="daily">يومياً</option>
              <option value="weekly">أسبوعياً</option>
              <option value="monthly">شهرياً</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Data Management */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          إدارة البيانات
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              فترة الاحتفاظ بالبيانات (بالأيام)
            </label>
            <select
              value={settings.system.dataRetention}
              onChange={(e) => handleSettingChange('system', 'dataRetention', parseInt(e.target.value))}
              className="w-full p-3 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-ring bg-background text-foreground"
            >
              <option value={30}>30 يوم</option>
              <option value={90}>90 يوم</option>
              <option value={180}>180 يوم</option>
              <option value={365}>سنة واحدة</option>
              <option value={730}>سنتان</option>
            </select>
          </div>
          
          <div className="flex gap-4">
            <Button onClick={handleExportData} variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              تصدير البيانات
            </Button>
            <Button variant="outline" className="flex-1">
              <Upload className="h-4 w-4 mr-2" />
              استيراد البيانات
            </Button>
          </div>
        </div>
      </Card>

      {/* System Options */}
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div>
            <h4 className="font-medium text-foreground">وضع التطوير</h4>
            <p className="text-sm text-muted-foreground">إظهار معلومات إضافية للمطورين</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.system.debugMode}
              onChange={(e) => handleSettingChange('system', 'debugMode', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
          <div>
            <h4 className="font-medium text-foreground">تحليلات الاستخدام</h4>
            <p className="text-sm text-muted-foreground">جمع بيانات لتحسين الأداء</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.system.analyticsEnabled}
              onChange={(e) => handleSettingChange('system', 'analyticsEnabled', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-ring/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <Card className="p-6 border-destructive/20">
        <h3 className="text-lg font-semibold text-destructive mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          منطقة الخطر
        </h3>
        <div className="space-y-4">
          <Button 
            onClick={handleResetSettings}
            variant="outline" 
            className="w-full border-red-300 text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            إعادة تعيين جميع الإعدادات
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-red-300 text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            حذف جميع البيانات
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileSettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'appearance':
        return renderAppearanceSettings();
      case 'security':
        return renderSecuritySettings();
      case 'system':
        return renderSystemSettings();
      default:
        return renderProfileSettings();
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            الإعدادات
          </h1>
          <p className="text-muted-foreground mt-1">
            إدارة إعدادات النظام والحساب الشخصي
          </p>
        </div>
        <Button 
          onClick={handleSaveSettings}
          disabled={isSaving}
          className="flex items-center gap-2"
        >
          {isSaving ? (
            <RefreshCw className="h-4 w-4 animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          {isSaving ? 'جاري الحفظ...' : 'حفظ الإعدادات'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-right rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </Card>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <Card className="p-6">
            {renderTabContent()}
          </Card>
        </div>
      </div>
    </div>
  );
}