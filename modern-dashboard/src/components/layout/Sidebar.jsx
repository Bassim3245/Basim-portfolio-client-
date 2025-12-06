import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Briefcase, 
  Star, 
  MessageSquare, 
  Info, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';

const navigation = [
  { name: 'لوحة التحكم', nameEn: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'المشاريع', nameEn: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'الخدمات', nameEn: 'Services', href: '/services', icon: Briefcase },
  { name: 'الخبرات', nameEn: 'Expertise', href: '/expertise', icon: Star },
  { name: 'الرسائل', nameEn: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'معلومات الشركة', nameEn: 'About', href: '/about', icon: Info },
  { name: 'الإعدادات', nameEn: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar({ open, collapsed, onToggleCollapse, onClose }) {
  const location = useLocation();
  const [language, setLanguage] = React.useState('ar'); // Default to Arabic

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={cn(
        "lg:flex lg:flex-col lg:h-full lg:w-full transition-all duration-300 ease-in-out",
        "hidden lg:block"
      )}>
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card px-6 pb-4 shadow-lg h-full">
          {/* Logo */}
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className={cn(
              "flex items-center gap-2 transition-all duration-300 ease-in-out transform-gpu",
              collapsed ? "opacity-0 scale-95 translate-x-2" : "opacity-100 scale-100 translate-x-0"
            )}>
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-foreground transition-all duration-300 ease-in-out">
                لوحة التحكم
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleCollapse}
              className="p-1.5 hover:bg-accent transition-all duration-200 ease-in-out hover:scale-110"
            >
              <div className="transition-transform duration-300 ease-in-out">
                {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </div>
            </Button>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-200 ease-in-out transform-gpu hover:scale-105",
                            isActive
                              ? "bg-primary/10 text-primary shadow-sm"
                              : "text-muted-foreground hover:text-primary hover:bg-accent"
                          )}
                          title={collapsed ? (language === 'ar' ? item.name : item.nameEn) : undefined}
                        >
                          <item.icon
                            className={cn(
                              "h-6 w-6 shrink-0 transition-all duration-200 ease-in-out",
                              isActive ? "text-primary scale-110" : "text-muted-foreground group-hover:text-primary group-hover:scale-110"
                            )}
                            aria-hidden="true"
                          />
                          {!collapsed && (
                            <span className={cn(
                              "truncate transition-all duration-300 ease-in-out transform-gpu",
                              collapsed ? "opacity-0 translate-x-2" : "opacity-100 translate-x-0"
                            )}>
                              {language === 'ar' ? item.name : item.nameEn}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
          
          {/* Language Toggle */}
          <div className={cn(
            "mt-auto transition-all duration-300 ease-in-out transform-gpu",
            collapsed ? "opacity-0 scale-95 translate-y-2" : "opacity-100 scale-100 translate-y-0"
          )}>
            {!collapsed && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="w-full transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md"
              >
                {language === 'ar' ? 'English' : 'العربية'}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar */}
      <div className={cn(
        "lg:hidden fixed inset-y-0 right-0 z-50 flex w-72 flex-col transition-transform duration-300 ease-in-out",
        open ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card px-6 pb-4 shadow-lg">
          {/* Mobile Logo */}
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                لوحة التحكم
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-1.5 hover:bg-accent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-muted-foreground hover:text-primary hover:bg-accent"
                          )}
                        >
                          <item.icon
                            className={cn(
                              "h-6 w-6 shrink-0",
                              isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                            )}
                            aria-hidden="true"
                          />
                          <span className="truncate">
                            {language === 'ar' ? item.name : item.nameEn}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Language Toggle */}
          <div className="mt-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="w-full"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}