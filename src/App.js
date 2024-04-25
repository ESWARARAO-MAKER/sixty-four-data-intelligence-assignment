import { useEffect, useState } from 'react';
import './App.css';
import { DataComponent } from './components/DataComponent';
import { SideNavbar } from './components/SideNavbar';

function App() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true)

  useEffect(() => {
      const handleResize = () => {
          const screenWidth = window.innerWidth
          setIsOpenSidebar(screenWidth > 770)
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => {window.removeEventListener("resize", handleResize)}
  }, [])
  return (
    <div className="App">
      {isOpenSidebar && <SideNavbar/>}
      <DataComponent/>
    </div>
  );
}

export default App;
