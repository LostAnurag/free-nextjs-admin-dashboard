// Custom CRM Theme Configuration
export const crmTheme = {
  colors: {
    primary: '#0a3b7c',      // Navy Blue
    secondary: '#000000',     // Black
    accent: '#1e5aa8',       // Lighter navy for hover states
    background: '#ffffff',    // White background
    surface: '#f8fafc',      // Light gray surface
    text: {
      primary: '#000000',     // Black text
      secondary: '#4a5568',   // Gray text
      muted: '#718096',       // Muted gray
      inverse: '#ffffff'      // White text on dark backgrounds
    },
    border: '#e2e8f0',       // Light border
    success: '#0a3b7c',      // Navy for success states
    warning: '#000000',      // Black for warnings
    error: '#000000',        // Black for errors
    info: '#0a3b7c'          // Navy for info
  },
  
  // Tailwind CSS classes for consistent theming
  classes: {
    primary: 'bg-[#0a3b7c] text-white',
    primaryHover: 'hover:bg-[#1e5aa8]',
    secondary: 'bg-black text-white',
    secondaryHover: 'hover:bg-gray-800',
    surface: 'bg-white border border-gray-200',
    surfaceDark: 'dark:bg-gray-800 dark:border-gray-700',
    text: 'text-black',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-500',
    button: {
      primary: 'bg-[#0a3b7c] text-white hover:bg-[#1e5aa8] focus:ring-2 focus:ring-[#0a3b7c] focus:ring-offset-2',
      secondary: 'bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
      outline: 'border border-[#0a3b7c] text-[#0a3b7c] hover:bg-[#0a3b7c] hover:text-white'
    },
    card: 'bg-white border border-gray-200 rounded-lg shadow-sm',
    cardDark: 'dark:bg-gray-800 dark:border-gray-700'
  }
};

// Status color mappings for CRM - Navy Blue and Black only
export const statusColors = {
  new: 'bg-gray-100 text-black dark:bg-gray-700 dark:text-white',
  contacted: 'bg-[#0a3b7c]/10 text-[#0a3b7c] dark:bg-[#0a3b7c]/20 dark:text-blue-400',
  qualified: 'bg-[#0a3b7c] text-white dark:bg-[#0a3b7c] dark:text-white',
  converted: 'bg-black text-white dark:bg-black dark:text-white'
};

// Lead score colors - Navy Blue and Black only
export const scoreColors = {
  hot: 'bg-black text-white dark:bg-black dark:text-white',
  warm: 'bg-[#0a3b7c] text-white dark:bg-[#0a3b7c] dark:text-white',
  cold: 'bg-gray-200 text-black dark:bg-gray-600 dark:text-white'
};