import  { createContext, useState, useEffect, useContext } from 'react';

// Contextが持つデータの型を定義
interface ThemeContextType  {
  theme: string;
  toggleTheme: () => void;
};

// 1. Contextオブジェクトを作成
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Contextを提供するプロバイダーコンポーネントを作成
export const ThemeProvider = ({ children }: { children:React.ReactNode}) => {
  const [theme, setTheme] = useState('light');

  // テーマが変更されたら、<body>タグのクラスを付け替える副作用
  useEffect(() => {
    const body = window.document.body;
    body.classList.remove('light', 'dark');
    body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Contextを簡単に使うためのカスタムフック
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};