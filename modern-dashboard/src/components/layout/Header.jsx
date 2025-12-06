import React from 'react';
import { Menu, Bell, Search, User, Moon, Sun, Settings } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

export function Header({ onMenuClick, onDesktopToggle, sidebarCollapsed }) {
  const [darkMode, setDarkMode] = React.useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [notifications, setNotifications] = React.useState(3);

  // Apply dark mode on component mount
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-accent transition-all duration-200 hover:scale-110"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Desktop Sidebar Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onDesktopToggle || onMenuClick}
            className="hidden lg:flex p-2 hover:bg-accent transition-all duration-200 hover:scale-110"
            title="طي/توسيع السايدبار"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Page Title */}
          <div className="transition-all duration-300">
            <h1 className="text-2xl font-bold text-foreground">
              لوحة التحكم
            </h1>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="البحث..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              dir="rtl"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search Button (Mobile) */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-accent"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="p-2 hover:bg-accent"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-muted-foreground" />
            )}
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="sm"
            className="relative p-2 hover:bg-accent"
          >
            <Bell className="h-5 w-5 text-muted-foreground" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notifications}
              </span>
            )}
          </Button>

          {/* Settings */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-accent"
          >
            <Settings className="h-5 w-5 text-muted-foreground" />
          </Button>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-foreground">
                أحمد محمد
              </p>
              <p className="text-xs text-muted-foreground">
                مدير النظام
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="p-1 hover:bg-accent rounded-full"
            >
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}