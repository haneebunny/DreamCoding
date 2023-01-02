import { createContext, useState } from "react";

export const DarkModeContext = createContext();

// 데이터를 컨텍스트에 담고
// provider는 그걸 보여주는 우산
// 컨텍스트를 만들 땐 프로바이더를 같이 만들어줘야한다.
// 부모 우산 컴포넌트 이걸 쓰면 그 하위의 자식들이 그 정보에 다 접근 가능하다.
// 공유하고 싶은 데이터를 밸류에 지정해주면 된다.

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={{ darkMode: darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
